// data.js: everything you will edit most often lives in this file.

// 1) WORK CATEGORIES: [slug, title, type, aspect, gradient-angle, hue]
const C=[["photography","Photography","Stills","4/5","160deg",20],["documentary","Documentary","Film","16/9","200deg",200],["ovc","OVC","Film","16/9","160deg",260],["restaurant-reels","Restaurant Reels","Reels","9/16","180deg",350],["food-photography","Food Photography","Stills","4/5","150deg",30],["product-photography","Product Photography","Stills","4/5","210deg",170],["creative-reels","Creative Reels","Reels","9/16","170deg",300],["promotional-videos","Promotional Videos","Film","16/9","190deg",220],["short-films","Short Films","Film","16/9","140deg",120],["motion-design","Motion Design","Motion","16/9","175deg",190]];

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
    {title:"Photography project 1", client:"Client name", imgs:[]},
    {title:"Photography project 2", client:"Client name", imgs:[]},
    {title:"Photography project 3", client:"Client name", imgs:[]},
    {title:"Photography project 4", client:"Client name", imgs:[]},
    {title:"Photography project 5", client:"Client name", imgs:[]},
    {title:"Photography project 6", client:"Client name", imgs:[]},
  ],
  // Documentary (paste YouTube links)
  "documentary":[
    {title:"Documentary project 1", client:"Client name", url:""},
    {title:"Documentary project 2", client:"Client name", url:""},
    {title:"Documentary project 3", client:"Client name", url:""},
    {title:"Documentary project 4", client:"Client name", url:""},
    {title:"Documentary project 5", client:"Client name", url:""},
    {title:"Documentary project 6", client:"Client name", url:""},
  ],
  // OVC (paste YouTube links)
  "ovc":[
    {title:"OVC project 1", client:"Client name", url:""},
    {title:"OVC project 2", client:"Client name", url:""},
    {title:"OVC project 3", client:"Client name", url:""},
    {title:"OVC project 4", client:"Client name", url:""},
    {title:"OVC project 5", client:"Client name", url:""},
    {title:"OVC project 6", client:"Client name", url:""},
  ],
  // Restaurant Reels (paste YouTube links)
  "restaurant-reels":[
    {title:"Restaurant Reels project 1", client:"Client name", url:""},
    {title:"Restaurant Reels project 2", client:"Client name", url:""},
    {title:"Restaurant Reels project 3", client:"Client name", url:""},
    {title:"Restaurant Reels project 4", client:"Client name", url:""},
    {title:"Restaurant Reels project 5", client:"Client name", url:""},
    {title:"Restaurant Reels project 6", client:"Client name", url:""},
  ],
  // Food Photography (list up to 5 photo paths in imgs:[...])
  "food-photography":[
    {title:"Food Photography project 1", client:"Client name", imgs:[]},
    {title:"Food Photography project 2", client:"Client name", imgs:[]},
    {title:"Food Photography project 3", client:"Client name", imgs:[]},
    {title:"Food Photography project 4", client:"Client name", imgs:[]},
    {title:"Food Photography project 5", client:"Client name", imgs:[]},
    {title:"Food Photography project 6", client:"Client name", imgs:[]},
  ],
  // Product Photography (list up to 5 photo paths in imgs:[...])
  "product-photography":[
    {title:"Product Photography project 1", client:"Client name", imgs:[]},
    {title:"Product Photography project 2", client:"Client name", imgs:[]},
    {title:"Product Photography project 3", client:"Client name", imgs:[]},
    {title:"Product Photography project 4", client:"Client name", imgs:[]},
    {title:"Product Photography project 5", client:"Client name", imgs:[]},
    {title:"Product Photography project 6", client:"Client name", imgs:[]},
  ],
  // Creative Reels (paste YouTube links)
  "creative-reels":[
    {title:"Creative Reels project 1", client:"Client name", url:""},
    {title:"Creative Reels project 2", client:"Client name", url:""},
    {title:"Creative Reels project 3", client:"Client name", url:""},
    {title:"Creative Reels project 4", client:"Client name", url:""},
    {title:"Creative Reels project 5", client:"Client name", url:""},
    {title:"Creative Reels project 6", client:"Client name", url:""},
  ],
  // Promotional Videos (paste YouTube links)
  "promotional-videos":[
    {title:"Promotional Videos project 1", client:"Client name", url:""},
    {title:"Promotional Videos project 2", client:"Client name", url:""},
    {title:"Promotional Videos project 3", client:"Client name", url:""},
    {title:"Promotional Videos project 4", client:"Client name", url:""},
    {title:"Promotional Videos project 5", client:"Client name", url:""},
    {title:"Promotional Videos project 6", client:"Client name", url:""},
  ],
  // Short Films (paste YouTube links)
  "short-films":[
    {title:"Short Films project 1", client:"Client name", url:""},
    {title:"Short Films project 2", client:"Client name", url:""},
    {title:"Short Films project 3", client:"Client name", url:""},
    {title:"Short Films project 4", client:"Client name", url:""},
    {title:"Short Films project 5", client:"Client name", url:""},
    {title:"Short Films project 6", client:"Client name", url:""},
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
