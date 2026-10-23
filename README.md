# Chaman Shreyas & Lekhana — Animated Static Wedding Website

## Run
1. Extract the ZIP.
2. Open the folder in VS Code.
3. Open `index.html` in a browser, or use the Live Server extension.

## Replace the six gallery images
Copy your photos into `assets/` using these exact names:
- `photo-1.jpg`
- `photo-2.jpg`
- `photo-3.jpg`
- `photo-4.jpg`
- `photo-5.jpg`
- `photo-6.jpg`

PNG/WebP files are fine if you update the corresponding `data-photo` values in `index.html` to match the extension.

## Replace the video
Copy an MP4 file to `assets/reception-video.mp4`.

## Included features
- Animated envelope and wax seal; clicking it opens the custom invitation card in a modal
- Original, editable SVG wedding invitation card (`assets/wedding-card.svg`)
- Responsive desktop/mobile layout
- Floating WhatsApp icon fixed at bottom-right while scrolling
- WhatsApp opens a prefilled message to `+91 97479 70556`; the number is only in the link, not shown in the UI
- Floating petals and subtle reveal animations
- Six editable photo slots with lightbox
- Video player
- Google Maps directions using supplied coordinates
- No backend, framework, or upload service

## Edit contact message
In `index.html`, search for `wa.me/919747970556`. Change the phone number or prefilled message there if needed.

## Hosting
This folder can be deployed as a static site on Netlify or GitHub Pages. Fonts are loaded from Google Fonts when internet is available; serif fallbacks are included.
