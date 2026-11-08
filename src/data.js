// data.js: everything you will edit most often lives in this file.

// 1) WORK CATEGORIES: [slug, title, type, aspect, gradient-angle, hue]
const C=[["photography","Photography","Stills","4/5","160deg",20],["ovc","OVC","Film","16/9","160deg",260],["restaurant-reels","Restaurant Reels","Reels","9/16","180deg",350],["food-photography","Food Photography","Stills","4/5","150deg",30],["creative-reels","Creative Reels","Reels","9/16","170deg",300],["promotional-videos","Promotional Videos","Film","16/9","190deg",220],["motion-design","Motion Design","Motion","16/9","175deg",190]];

// 1b) YOUR PICTURE on the Home page: put your photo in the public folder as rizwan.jpg
// (or change the path here). Until the file exists, the initials RBY are shown.
const PHOTO="/rizwan.jpg";

// 2) BRANDS: add, remove or rename. The slideshow adapts automatically.
// To show a logo, put the file in the public/logos folder and write its path in logo:"".
// Example: {name:"BSRM", logo:"/logos/bsrm.png"}
// Leave logo:"" to show the brand name as text. PNG, SVG or WebP with a transparent background works best.
const B=[
  {name:"Brand One", logo:"/logos/bsrm.png"},
  {name:"Brand Two", logo:"/logos/confidence-cement.png"},
  {name:"Brand Three", logo:"/logos/php-family.png"},
  {name:"Brand Four", logo:"/logos/wires.png"},
  {name:"Brand Five", logo:"/logos/php-aluminium.png"},
  {name:"Brand Six", logo:"/logos/chittagong-dry-dock.png"},
  {name:"Brand Seven", logo:"/logos/airbell.png"},
  {name:"Brand Eight", logo:"/logos/apollo-imperial-hospitals.png"},
  {name:"Brand Nine", logo:"/logos/barcode-restaurant-group.png"},
  {name:"Brand Ten", logo:"/logos/bgmea.png"},
  {name:"Brand Eleven", logo:"/logos/epic-dental-care.png"},
  {name:"Brand Twelve", logo:"/logos/epic-health-care.png"},
  {name:"Brand Thirteen", logo:"/logos/friolento.png"},
  {name:"Brand Fourteen", logo:"/logos/frobel-academy.png"},
  {name:"Brand Fifteen", logo:"/logos/khadi-ghar.png"},
  {name:"Brand Sixteen", logo:"/logos/meridian-hotel.png"},
  {name:"Brand Seventeen", logo:"/logos/oxygen-sports-zone.png"},
  {name:"Brand Eighteen", logo:"/logos/orange-flame.png"},
  {name:"Brand Nineteen", logo:"/logos/snackza.png"},
  {name:"Brand Twenty", logo:"/logos/tokyo-terrace.png"},
];

// 3) SOCIAL LINKS: replace each url with your profile link (https://...).
const SOCIALS=[
  {name:"Instagram", icon:"instagram", url:"https://www.instagram.com/rizwanbin_yousuf/"},
  {name:"Facebook",  icon:"facebook",  url:"https://www.facebook.com/rizdis/"},
  {name:"YouTube",   icon:"youtube",   url:"https://www.youtube.com/@RizwanBinYousuf"},
  {name:"LinkedIn",  icon:"linkedin",  url:"#contact"},
  {name:"Behance",   mark:"Bē",        url:"#contact"},
];
const ICONS={
  instagram:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/></svg>',
  facebook:'<svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
  youtube:'<svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>',
  linkedin:'<svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>'
};

// 4) PROJECTS: the work inside each category page.
// Videos: paste any YouTube link (watch, youtu.be, shorts) into url:"".
// Photos: put image files in public/photos and list up to 5 paths in imgs:[...], e.g. imgs:["/photos/a1.jpg","/photos/a2.jpg"].
// On hover the project cycles through its photos. Leave imgs:[] to see a color preview.
// To add a project, copy one line. To remove one, delete its line.
const PROJECTS={
  // Photography (list up to 5 photo paths in imgs:[...])
  "photography":[
    {title:"Landscapes", client:"Nature and Stills", imgs:["/photos/Landscape 1.jpg","/photos/Landscape 2.jpg","/photos/Landscape 3.jpg","/photos/Landscape 4.jpg","/photos/Landscape 5.jpg"]},
    {title:"Landscapes", client:"Nature and Stills", imgs:["/photos/Landscape 6.jpg","/photos/Landscape 7.jpg","/photos/Landscape 8.jpg","/photos/Landscape 9.jpg"]},
    {title:"Menvir", client:"Product Photography", imgs:["/photos/Menvir 1.png","/photos/Menvir 2.jpg","/photos/Menvir 3.png","/photos/Menvir 4.png","/photos/Menvir 5.jpg"]},
    {title:"Khadi Ghar", client:"Panjabi", imgs:["/photos/Khadi Ghar 1.jpg","/photos/Khadi Ghar 2.jpg","/photos/Khadi Ghar 3.png","/photos/Khadi Ghar.png"]},
    {title:"Matt BD", client:"Clothing", imgs:["/photos/MATT BD 1.jpg","/photos/MATT BD 2.png","/photos/MATT BD 3.jpg","/photos/MATT BD 4.jpg","/photos/MATT BD 5.png"]},
    {title:"Omraan", client:"Panjabi", imgs:[]},
  ],
  // OVC (paste YouTube links)
  "ovc":[
    {title:"BSRM Wires - SR Shipping", client:"BSRM Wires", url:"https://www.youtube.com/watch?v=e2wrb4tcBUY"},
    {title:"BSRM Wires - Western Marine Shipyward", client:"BSRM Wires", url:"https://www.youtube.com/watch?v=ycKhRc7uEhk"},
    {title:"PHP Float Glass Industries", client:"PHP", url:"https://www.youtube.com/watch?v=wSqRUpkiAds"},
    {title:"Confidence Cement Testimonial", client:"Confidence Cement", url:"https://youtu.be/hsuAgzdEnxE"},
    {title:"Chittagong Dry Dock Limited OVC", client:"Chittagong Dry Dock Limited", url:"https://www.youtube.com/watch?v=tKIQeeiLIkc"},
    {title:"Airbell Helianthus", client:"Airbell", url:"https://youtu.be/lScqxDmv1AE"},
  ],
  // Restaurant Reels (paste YouTube links)
  "restaurant-reels":[
    {title:"Flavours on Fleek", client:"Friolento", url:"https://youtube.com/shorts/LNaf9lCYfCo?feature=share"},
    {title:"Whole Roasted Chicken", client:"Client name", url:"https://youtube.com/shorts/JRVlFQH_j68"},
    {title:"Sizzler and Fried Rice", client:"Client name", url:"https://www.youtube.com/shorts/PWoJx-pmmg4"},
    {title:"Macher Matamati", client:"Client name", url:"https://youtube.com/shorts/pONKSHYPTUg"},
    {title:"Eat Chill & Repeat", client:"Mr. Purple", url:"https://youtube.com/shorts/eqCLe7Nl93c"},
    {title:"The Centro", client:"The Centro", url:"https://www.youtube.com/shorts/0zFjzj2kY5Q"},
    {title:"Snackza Ramadan Menu", client:"Snackza", url:"https://youtube.com/shorts/-zg3ACg1IbA?feature=share"},
    {title:"Snackza Speedramp", client:"Snackza", url:"https://youtube.com/shorts/k6UvbtN-0oA?feature=share"},
    {title:"Authencity Feels Like Home", client:"Lezettli", url:"https://youtube.com/shorts/9QICqN-BKVo?feature=share"},
    {title:"Ogle Yemigi Teklifi", client:"Lezettli", url:"https://youtube.com/shorts/NFdN2uAWYGQ"},
    {title:"Tokyo Terrace Reel 1", client:"Tokyo Terrace", url:"https://youtube.com/shorts/IqfgYaU5kdo"},
    {title:"Tokyo Terrace Reel 2", client:"Tokyo Terrace", url:"https://youtube.com/shorts/fLJnzcOhN74"},
    {title:"Tokyo Terrace Reel 3", client:"Tokyo Terrace", url:"https://youtube.com/shorts/bkrKFQGHx48"},
    {title:"Ramadan Reel", client:"The Arrosto", url:"https://www.youtube.com/shorts/kfDJ7hhhVjk"},
    {title:"Valentine Reel", client:"The Arrosto", url:"https://youtube.com/shorts/esBNcUkWNCU"},
  ],
  // Food Photography (list up to 5 photo paths in imgs:[...])
  "food-photography":[
    {title:"Food Photography - Cafe Milano", client:"Cafe Milano", imgs:["/photos/Cafe Milano 1.jpg","/photos/Cafe Milano 2.jpg","/photos/Cafe Milano 3.jpg","/photos/Cafe Milano 4.jpg","/photos/Cafe Milano 5.jpg"]},
    {title:"Food Photography - Snackza", client:"Snackza", imgs:["/photos/Snackza1.jpg","/photos/Snackza2.jpg","/photos/Snackza3.jpg","/photos/Snackza4.jpg"]},
    {title:"Food Photography - Busaba", client:"Busaba", imgs:["/photos/Busaba 1.jpg","/photos/Busaba 2.jpg","/photos/Busaba 3.jpg","/photos/Busaba 4.jpg","/photos/Busaba 5.jpg"]},
    {title:"Food Photography - Zentable", client:"Zentable", imgs:["/photos/Zentable 10.jpg","/photos/Zentable 1.jpg","/photos/Zentable 2.jpg","/photos/Zentable 3.jpg","/photos/Zentable 4.jpg"]},
     {title:"Food Photography - Zentable 2", client:"Zentable", imgs:["/photos/Zentable 7.jpg","/photos/Zentable 6.jpg","/photos/Zentable 5.jpg","/photos/Zentable 8.jpg","/photos/Zentable 9.jpg"]},
    {title:"Food Photography - Amber Loaf", client:"Amber Loaf", imgs:["/photos/Amber Loaf 1.jpg","/photos/Amber Loaf 2.jpg","/photos/Amber Loaf 3.jpg","/photos/Amber Loaf 4.jpg","/photos/Amber Loaf 5.jpg"]},
    {title:"Food Photography - Loreto ", client:"Loreto", imgs:["/photos/Loreto 1.jpg","/photos/Loreto 2.jpg","/photos/Loreto 3.jpg"]},
    {title:"Food Photography - Ministop", client:"Ministop", imgs:["/photos/Ministop 2.jpg","/photos/Ministop 3.jpg","/photos/Ministop 1.jpg","/photos/Ministop 4.jpg","/photos/Ministop 5.jpg"]},
  ],
  // Creative Reels (paste YouTube links)
  "creative-reels":[
    {title:"Disperse Beauty Soap", client:"Disperse Beauty", url:"https://youtube.com/shorts/w53V9nvAKeI?feature=share"},
    {title:"Super Serum", client:"Disperse Beauty", url:"https://youtube.com/shorts/fAVsZ1pPyEM?feature=share"},
    {title:"Secret Rosemary Oil", client:"Disperse Beauty", url:"https://youtube.com/shorts/9tMk5q3tC-Y?feature=share"},
    {title:"Glow Essential Cream", client:"Disperse Beauty", url:"https://youtube.com/shorts/QSkWOTNHcEA?feature=share"},
    {title:"Beard Oil", client:"Disperse Beauty", url:"https://youtube.com/shorts/9gmKTmhI5ho?feature=share"},
    {title:"Hair Volume Powder - Product Intro", client:"Menvir", url:"https://youtube.com/shorts/wvugn4WDHvI?feature=share"},
    {title:"Menvir Reel", client:"Menvir", url:"https://youtube.com/shorts/8YhjkTqu_KA?feature=share"},
    {title:"Rosemary Oil - Product Intro", client:"Menvir", url:"https://youtube.com/shorts/pnghPQmqx4Y?feature=share"},
    {title:"PHP ALuminium Ladder", client:"PHP", url:"https://youtube.com/shorts/qNcfm5jrI3U?feature=share"},
    {title:"Epic Dental Care Reel 1", client:"Epic Dental Care", url:"https://youtube.com/shorts/j0kWn54Nq84?feature=share"},
    {title:"Epic Dental Care Reel 2", client:"Epic Dental Care", url:"https://youtube.com/shorts/p-f_Mutp0LU?feature=share"},
    {title:"Mathtia Talking Head", client:"Mathia", url:"https://youtube.com/shorts/vl0-ajnirPY?feature=share"},
    {title:"Mathia Talking Head", client:"Mathia", url:"https://youtube.com/shorts/Wym-bGxhp-8?feature=share"},
    {title:"Jubba Reel ", client:"Omran", url:"https://youtube.com/shorts/ZXWBFt9eQGg?feature=share"},
    {title:"Jubba Reel ", client:"Omran", url:"https://youtube.com/shorts/5uCRw85TIt0?feature=share"},
    {title:"Menvir Reel", client:"Menvir", url:"https://youtube.com/shorts/8YhjkTqu_KA?feature=share"},
    {title:"Matt BD Reel", client:"Matt BD", url:"https://youtube.com/shorts/5AP0tlBbFlA?feature=share"},
    {title:"Matt BD Reel", client:"Client name", url:"https://youtube.com/shorts/S0zH_u7cNds?feature=share"},
    {title:"Matt BD Reel", client:"Client name", url:"https://youtube.com/shorts/gEb6nrUByTI"},
  ],
  // Promotional Videos (paste YouTube links)
  "promotional-videos":[
    {title:"Zentex Tour", client:"Zentex", url:"https://youtu.be/vNvr4G_gmzM"},
    {title:"Fitness Saga Promo", client:"Fitness Saga", url:"https://youtu.be/H5uCMPiue-o"},
    {title:"LB Town Hall Meeting", client:"Lead Bangladesh", url:"https://youtu.be/rGqcMtlYBdk"},
    {title:"Tokyo Terrace Promo", client:"Tokyo Terrace", url:"https://youtu.be/6MdTksLESu8"},
    {title:"The Grill House Promo", client:"The Grill House", url:"https://youtu.be/RylABcKaoc8"},
    {title:"Idealist House Promo", client:"Idealist", url:"https://youtu.be/pZVkfTfzEAA"},
    {title:"Idealist House Promo", client:"Idealist", url:"https://youtu.be/QZqokCxnAb4"},
    {title:"LB Cox Promo", client:"Lead Bangladesh", url:"https://youtu.be/tCLmqPRbeJM"},
    {title:"Epic Health Care Halishahar Promo", client:"Epic Health Care", url:"https://youtu.be/g3L8XtQYqnM"},
  ],
  // Motion Design (paste YouTube links)
  "motion-design":[
    {title:"Motion Design project 1", client:"Client name", url:""},
    {title:"Motion Design project 2", client:"Client name", url:""},
    {title:"Motion Design project 3", client:"Client name", url:""},
    {title:"Motion Design project 4", client:"Client name", url:""},
    {title:"Motion Design project 5", client:"Client name", url:""},
    {title:"Motion Design project 6", client:"Client name", url:""},
  ],
};

export { C, B, PHOTO, SOCIALS, ICONS, PROJECTS };
