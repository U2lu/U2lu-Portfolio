# How /public/og.png and the PNG icons are made
#
# These two .astro files are scratch pages, NOT routes. They live here so the
# design can be re-rendered when the headline or the wordmark changes.
#
# To regenerate:
#   1. copy one into src/pages/ (e.g. src/pages/og-card.astro)
#   2. run `npm run dev`
#   3. open it in the browser, wait for fonts (document.fonts.status === 'loaded')
#   4. screenshot as PNG at the current window width
#   5. crop the card from the top-left corner and resize to 1200x630, then save
#      to public/og.png
#   6. delete the scratch page again
#
# Why the crop: the card renders at a fixed 1200x630 CSS px and is scaled down
# by `transform: scale(0.9358)` only to fit a ~1123px preview window. The
# screenshot is 1.1x device pixels, so the card occupies the top ~1234x648 px.
# Resizing that box back to 1200x630 returns the design to its true size with
# one resample. If the window is wider than 1200 CSS px, drop the transform.
#
# The icon page is the same idea: a 512x512 green tile, cropped and resized to
# 512, 192 and 180 (apple-touch-icon).
