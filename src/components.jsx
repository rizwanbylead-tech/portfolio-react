import { useEffect, useState } from "react";
import { SOCIALS, ICONS } from "./data.js";

// Text that rolls up on hover
export const Roll = ({ children }) => (
  <span className="rl"><span>{children}</span><span>{children}</span></span>
);

export const Head = ({ title, text }) => (
  <div className="head"><h2>{title}</h2><p>{text}</p></div>
);

export const Socials = () => (
  <div className="soc">
    {SOCIALS.map((s) => (
      <a key={s.name} href={s.url} aria-label={s.name} title={s.name}
         {...(/^https?:/.test(s.url) ? { target: "_blank", rel: "noopener" } : {})}>
        {ICONS[s.icon]
          ? <span style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: ICONS[s.icon] }} />
          : <b>{s.mark || s.name[0]}</b>}
      </a>
    ))}
  </div>
);

// Brand logo if one is set (and loads), otherwise the brand name as text
export const Logo = ({ b }) => {
  const [bad, setBad] = useState(false);
  useEffect(() => setBad(false), [b.logo]);
  return b.logo && !bad
    ? <img className="logo-img" src={b.logo} alt={b.name} loading="lazy" onError={() => setBad(true)} />
    : b.name;
};

// Sliding strip of brands
export const Marquee = ({ items, rev }) => (
  <div className={"slide " + (rev ? "rev" : "")}>
    <div className="track">
      {[...items, ...items].map((b, i) => <span className={"chip" + (b.logo ? " has-logo" : "")} key={i}><Logo b={b} /></span>)}
    </div>
  </div>
);

// Project card thumbnail. Photo projects cycle through up to 5 photos while hovered.
// With no photos yet it cycles 5 color frames so you can preview the animation.
export const PhotoCycle = ({ imgs, hue }) => {
  const frames = imgs.length ? imgs.slice(0, 5) : [0, 1, 2, 3, 4];
  const [i, setI] = useState(0), [on, setOn] = useState(false);
  useEffect(() => {
    if (!on || frames.length < 2) { setI(0); return; }
    const t = setInterval(() => setI((x) => (x + 1) % frames.length), 850);
    return () => clearInterval(t);
  }, [on, frames.length]);
  return (
    <div className="cyc" onMouseEnter={() => setOn(true)} onMouseLeave={() => setOn(false)}>
      {frames.map((f, n) => typeof f === "string"
        ? <img key={n} className={n === i ? "on" : ""} src={f} alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = "none")} />
        : <div key={n} className={"ph" + (n === i ? " on" : "")} style={{ "--h": (hue + n * 38) % 360 }} />)}
      {frames.length > 1 && (
        <div className="dots">{frames.map((_, n) => <i key={n} className={n === i ? "on" : ""} />)}</div>
      )}
    </div>
  );
};

// Small line illustrations for the category tiles (white lines + the orange accent).
// Key = category slug from data.js. Add one here if you add a new category.
const ART = {
  // camera lens with a turning aperture
  "photography": <>
    <circle cx="60" cy="40" r="30" /><circle cx="60" cy="40" r="22" opacity=".45" />
    <g className="spin">
      <polygon points="72,40 66,50.4 54,50.4 48,40 54,29.6 66,29.6" />
      <path d="M72 40L82 40M66 50.4L71 59.05M54 50.4L49 59.05M48 40L38 40M54 29.6L49 20.95M66 29.6L71 20.95" opacity=".55" />
    </g>
    <circle cx="60" cy="40" r="5" className="fl" /><circle cx="76" cy="24" r="2" className="wh" />
  </>,
  // video frame with play button and a REC dot
  "ovc": <>
    <rect x="16" y="12" width="88" height="56" rx="9" />
    <path d="M52 28v24l22-12z" className="ac fl2" />
    <circle cx="27" cy="23" r="3" className="fl" /><path d="M27 58h34" opacity=".45" /><path d="M86 58h8" opacity=".45" />
  </>,
  // phone showing a plate, with fork and knife
  "restaurant-reels": <>
    <rect x="43" y="6" width="34" height="68" rx="8" /><path d="M55 11h10" opacity=".5" />
    <circle cx="60" cy="43" r="12" /><circle cx="60" cy="43" r="6" className="ac" />
    <path d="M55 29q3-4 0-8M62 29q3-4 0-8" className="ac" />
    <path d="M52 66h16" opacity=".5" /><circle cx="52" cy="66" r="1.6" className="wh" />
    <path d="M22 22v12M26 22v12M30 22v12M22 34q4 7 8 0M26 41v20" />
    <path d="M94 22c8 4 8 20 0 24v15" />
  </>,
  // plate seen from above inside camera focus corners
  "food-photography": <>
    <path d="M22 24V14h10M98 24V14H88M22 56v10h10M98 56v10H88" opacity=".7" />
    <circle cx="60" cy="40" r="19" /><circle cx="60" cy="40" r="12" opacity=".45" />
    <circle cx="57" cy="38" r="4.5" className="fl" /><circle cx="66" cy="43" r="3" className="fl" /><circle cx="62" cy="33" r="2" className="wh" />
    <path d="M30 40h-4M94 40h-4M60 18v-4M60 66v-4" opacity=".5" />
  </>,
  // tilted phone with sparkles
  "creative-reels": <>
    <g transform="rotate(-9 60 40)">
      <rect x="44" y="8" width="32" height="64" rx="8" /><path d="M54 13h12" opacity=".5" />
      <circle cx="60" cy="29" r="5" /><path d="M49 52q5.5-13 11 0t11 0" className="ac" />
    </g>
    <path d="M92 12l2.5 6.5L101 21l-6.5 2.5L92 30l-2.5-6.5L83 21l6.5-2.5z" className="fl" />
    <path d="M27 50l1.7 4.3L33 56l-4.3 1.7L27 62l-1.7-4.3L21 56l4.3-1.7z" className="wh" />
    <circle cx="98" cy="54" r="2" className="wh" />
  </>,
  // megaphone with sound waves
  "promotional-videos": <>
    <path d="M26 33h14l32-17v48L40 47H26z" />
    <path d="M34 47l4 14h8l-3-14" opacity=".6" />
    <path d="M82 30q8 10 0 20" className="ac" /><path d="M91 23q13 17 0 34" className="ac" />
    <circle cx="26" cy="40" r="2" className="wh" />
  </>,
  // bezier curve with handles
  "motion-design": <>
    <path d="M16 60H42M64 20H40M64 20H88M104 60H86" opacity=".5" />
    <path d="M16 60C42 60 40 20 64 20C88 20 86 60 104 60" className="ac thick" />
    <rect x="12.5" y="56.5" width="7" height="7" className="wh" /><rect x="100.5" y="56.5" width="7" height="7" className="wh" />
    <circle cx="64" cy="20" r="4" className="fl" />
    <circle cx="42" cy="60" r="2.2" /><circle cx="40" cy="20" r="2.2" /><circle cx="88" cy="20" r="2.2" /><circle cx="86" cy="60" r="2.2" />
    <path d="M60 70l4-4 4 4-4 4z" opacity=".5" /><path d="M30 70l4-4 4 4-4 4z" opacity=".5" /><path d="M86 70l4-4 4 4-4 4z" opacity=".5" />
  </>,
};

export const Art = ({ slug }) => ART[slug] ? (
  <div className="art" aria-hidden="true">
    <svg viewBox="0 0 120 80" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{ART[slug]}</svg>
  </div>
) : null;

export const Tile = ({ c, i }) => (
  <a className="tile" href={"#work-" + c[0]} style={{ "--h": c[5] }}>
    <Art slug={c[0]} />
    <div className="top"><small>{c[2]}</small><small>{String(i + 1).padStart(2, "0")}</small></div>
    <div className="btm"><h3>{c[1]}</h3><span className="go">→</span></div>
  </a>
);

// Pulls the video id out of any YouTube link
export const ytid = (u) => {
  const m = String(u || "").match(/(?:youtu\.be\/|[?&]v=|shorts\/|embed\/|live\/)([\w-]{11})/);
  return m ? m[1] : "";
};
