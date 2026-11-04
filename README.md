# Portfolio (React + Vite)

## Run it
1. Install Node.js (version 18 or newer) from nodejs.org.
2. In this folder run:
   npm install
   npm run dev        (opens a live preview, changes show instantly)
   npm run build      (creates the dist folder to upload to your host)

## Where to edit
- src/data.js: your picture path (PHOTO), work categories, brands (name + optional logo), social links, and the PROJECTS list where you paste your YouTube links (url:"") and photo paths (imgs:[...]).
- src/pages.jsx: the text and layout of Home, About, Work, Brands, Contact and each category page.
- src/App.jsx: header, menu, "Start a project" panel, footer, page transitions. Change your name, email and phone here and in pages.jsx.
- src/components.jsx: small shared pieces (tiles, social icons, brand slider, rolling text).
- src/Effects.jsx: cursor dot, color glow and magnetic buttons. Delete <Effects /> in App.jsx to turn them off.
- src/styles/style.css: all colors (the six palette values at the top of :root), fonts and layout.
- src/styles/effects.css: animation styles.

## YouTube videos
In src/data.js, inside PROJECTS, paste a link into url:"" (watch, youtu.be or shorts links all work) and set title and client. The thumbnail loads from YouTube and clicking it plays the video in a pop-up. Photo categories (Photography, Food, Product) use imgs:[...] with up to 5 paths per project, such as imgs:["/photos/food1-a.jpg","/photos/food1-b.jpg"]. Put the files in public/photos. Hovering a project cycles through its photos; clicking opens them full size with arrows.

## Your picture and brand logos
- Home page picture: save your photo as public/rizwan.jpg (a portrait about 800 x 1000 px works best). Until then the initials RBY show.
- Brand logos: save files in public/logos and write the path in data.js, for example {name:"BSRM", logo:"/logos/bsrm.png"}. With no logo the name shows as text.

## Hosting
Upload the dist folder to Netlify, Vercel, GitHub Pages or any static host. The site uses hash links (#work), so no server setup is needed.
