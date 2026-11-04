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

export const Tile = ({ c, i }) => (
  <a className="tile" href={"#work-" + c[0]} style={{ "--h": c[5] }}>
    <div className="top"><small>{c[2]}</small><small>{String(i + 1).padStart(2, "0")}</small></div>
    <div className="btm"><h3>{c[1]}</h3><span className="go">→</span></div>
  </a>
);

// Pulls the video id out of any YouTube link
export const ytid = (u) => {
  const m = String(u || "").match(/(?:youtu\.be\/|[?&]v=|shorts\/|embed\/|live\/)([\w-]{11})/);
  return m ? m[1] : "";
};
