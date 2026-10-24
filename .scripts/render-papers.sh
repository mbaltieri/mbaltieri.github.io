#!/bin/sh
# Renders the pages of a paper for Selected work on the home page: from its PDF into
# src/assets/papers/<name>/01.webp, 02.webp, ... at 130 dpi, in 32 colours, losslessly
# compressed (sharp text, about 70 KB a page). Needs Ghostscript and ImageMagick.
#
# Usage: .scripts/render-papers.sh public/assets/pdf/HybridLifeWIREs.pdf hybrid-life
# Then give the item `paper: paperPages('hybrid-life')` in src/pages/index.astro.

set -eu
pdf=${1:?the PDF of the paper}
name=${2:?the name of its folder in src/assets/papers}
out="src/assets/papers/$name"
work=$(mktemp -d)
trap 'rm -r -- "$work"' EXIT

mkdir -p -- "$out"
# Pages of an earlier version go first: a new version may have fewer of them.
find "$out" -maxdepth 1 -name '*.webp' -delete
gs -q -sDEVICE=png16m -r130 -dTextAlphaBits=4 -dGraphicsAlphaBits=4 -o "$work/%02d.png" "$pdf"
for page in "$work"/*.png; do
    magick "$page" -dither None -colors 32 -define webp:lossless=true "$out/$(basename "$page" .png).webp"
done
echo "$(ls -- "$out" | wc -l | tr -d ' ') pages in $out"
