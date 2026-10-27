#!/bin/sh
# Renders the share previews of the main pages (Open Graph images, 1200 by 630) from the card
# pages that the dev server shows at /cards/<name>/ (src/pages/cards/[name].astro), into
# src/assets/images/social/<name>.jpg. Start the dev server first (npm run dev). Needs Google
# Chrome and ImageMagick. Set CHROME or BASE to use another browser or address.
set -eu

chrome="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
base="${BASE:-http://localhost:4321}"
out=src/assets/images/social
shots=$(mktemp -d)
mkdir -p "$out"

for name in home research publications talks resume; do
  # A first visit lets the dev server prepare the page, and fetching its images lets it resize
  # them, so that they are ready when the browser photographs the page.
  curl -s "$base/cards/$name/" | grep -o '<img [^>]*src="[^"]*"' | sed 's/.*src="//; s/"$//; s/&amp;/\&/g' |
    while read -r src; do curl -s -o /dev/null "$base$src"; done
  "$chrome" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
    --window-size=1200,630 --virtual-time-budget=6000 --screenshot="$shots/$name.png" \
    "$base/cards/$name/" 2>/dev/null
  magick "$shots/$name.png" -crop 1200x630+0+0 +repage -quality 88 "$out/$name.jpg"
  echo "$out/$name.jpg"
done

rm -r "$shots"
