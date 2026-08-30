# Manuel Baltieri Website

Personal academic website for Manuel Baltieri, built with Jekyll and the Hydejack theme.

## Requirements

- Ruby `3.2.11`, tracked in `.ruby-version`
- Bundler `4.0.9`, tracked in `Gemfile.lock`
- Node.js, required by the KaTeX/JavaScript runtime dependencies used during the Jekyll build

## Local Development

Install Ruby dependencies:

```sh
bundle install
```

Build the site:

```sh
bundle exec jekyll build
```

Run the local development server:

```sh
bundle exec jekyll serve
```

The site will be available at `http://127.0.0.1:4000/`.

## Updating Dependencies

Do not run an unrestricted `bundle update`. Update one dependency at a time,
keep shared dependencies conservative, and verify the production build:

```sh
bundle update GEM_NAME --conservative
bundle check
JEKYLL_ENV=production bundle exec jekyll build
ruby .scripts/check-built-site.rb _site
git diff -- Gemfile.lock
```

Ruby, Jekyll, and `jekyll-sass-converter` are intentionally pinned. Change
those versions only as a coordinated build-stack upgrade, then test locally
before committing the resulting lockfile.

## Deployment

GitHub Actions builds the site with Bundler and deploys the generated `_site` directory to GitHub Pages on pushes to `master`. Pull requests run the same build without deploying.

## Notes

Theme source and documentation are kept in the repository for maintenance, but `_config.yml` excludes theme docs, sample pages, package metadata, and other non-site files from published output.
