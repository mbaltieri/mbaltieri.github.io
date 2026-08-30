#!/usr/bin/env ruby
# frozen_string_literal: true

require "cgi"
require "pathname"
require "uri"

root = Pathname.new(ARGV.fetch(0, "_site")).expand_path
abort "Built site not found: #{root}" unless root.directory?

html_attribute = /\b(?:href|src|poster)\s*=\s*(["'])(.*?)\1/im
srcset_attribute = /\bsrcset\s*=\s*(["'])(.*?)\1/im
css_url = /url\(\s*(?:(["'])(.*?)\1|([^)]*?))\s*\)/im
skipped_schemes = %w[mailto tel javascript data blob].freeze

errors = []
checked = 0
files = Dir[root.join("**", "*.{html,css}")].sort.map { |path| Pathname.new(path) }

resolve_target = lambda do |source, reference|
  value = CGI.unescapeHTML(reference.to_s.strip)
  return if value.empty? || value.start_with?("#", "//")

  uri = URI.parse(value)
  return if uri.scheme && skipped_schemes.include?(uri.scheme.downcase)
  return if uri.scheme || uri.host

  path = URI::DEFAULT_PARSER.unescape(uri.path.to_s)
  return if path.empty?

  target = if path.start_with?("/")
             root.join(path.delete_prefix("/"))
           else
             source.dirname.join(path)
           end.cleanpath

  inside_root = target == root || target.to_s.start_with?("#{root}#{File::SEPARATOR}")
  unless inside_root
    return "escapes the built site: #{reference}"
  end

  candidates = [target]
  candidates << target.join("index.html") if path.end_with?("/") || target.directory?
  if File.extname(path).empty?
    candidates << Pathname.new("#{target}.html")
    candidates << target.join("index.html")
  end

  return if candidates.any?(&:file?)

  "missing target: #{reference}"
rescue URI::InvalidURIError, ArgumentError => error
  "invalid target #{reference.inspect}: #{error.message}"
end

files.each do |source|
  content = source.read
  references = []

  if source.extname == ".html"
    content.scan(html_attribute) { references << Regexp.last_match(2) }
    content.scan(srcset_attribute) do
      value = Regexp.last_match(2)
      next if value.strip.start_with?("data:")

      value.split(",").each { |entry| references << entry.strip.split(/\s+/, 2).first }
    end
  else
    content.scan(css_url) { references << (Regexp.last_match(2) || Regexp.last_match(3)) }
  end

  references.compact.each do |reference|
    checked += 1
    error = resolve_target.call(source, reference)
    errors << "#{source.relative_path_from(root)}: #{error}" if error
  end
end

if errors.empty?
  puts "Validated #{checked} generated links and assets across #{files.length} files."
else
  warn errors.uniq.sort.join("\n")
  abort "Generated site validation failed with #{errors.uniq.length} error(s)."
end
