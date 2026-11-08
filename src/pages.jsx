import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { C, B, PROJECTS, PHOTO } from "./data.js";
import { Roll, Head, Socials, Marquee, Tile, Logo, PhotoCycle, ytid } from "./components.jsx";

const skills = ["Photography", "Cinematography", "Editing", "Motion design", "Color grading", "Art direction"];
const roles = [["photographer", "photography"], ["cinematographer", "ovc"], ["editor", "creative-reels"], ["motion designer", "motion-design"]];

export function Home() {
  const [k, setK] = useState(0);
  const names = useRef([]);
  useEffect(() => { const t = setInterval(() => setK((x) => x + 1), 1400); return () => clearInterval(t); }, []);
  useEffect(() => {
    const f = () => names.current.forEach((n, i) => n && (n.style.transform = `translateX(${(i ? 1 : -1) * scrollY * 0.22}px)`));
    addEventListener("scroll", f, { passive: true });
    return () => removeEventListener("scroll", f);
  }, []);
  const word = (t, i) => <span key={i} className={t === " " ? "sp" : ""} style={{ "--i": i }}>{t === " " ? "\u00A0" : t}</span>;
  const [noPic, setNoPic] = useState(false);
  return (
    <>
      <section className="hero">
        <div className="spot" />
        <div className="wrap">
          <div className="namebox">
            <div className="me">
              <div className={"frame" + (noPic ? " empty" : "")}>
                {noPic
                  ? <span>RBY</span>
                  : <img src={PHOTO} alt="Rizwan Bin Yousuf" onError={() => setNoPic(true)} />}
              </div>

            </div>
            <div className="avail">Available for your projects</div>
            <h1 className="name" aria-label="Rizwan Bin Yousuf" ref={(e) => (names.current[0] = e)}>{"RIZWAN".split("").map(word)}</h1>
            <h1 className="name" aria-hidden="true" ref={(e) => (names.current[1] = e)}>{"BIN YOUSUF".split("").map((l, i) => word(l, i + 4))}</h1>
          </div>
          <p className="roles">
            Hi, I’m Rizwan, a{" "}
            {roles.map(([t, slug], i) => (
              <span key={slug}>
                <a href={"#work-" + slug} className={k % 4 === i ? "hl" : ""}>{t}</a>
                {i < 2 ? ", " : i === 2 ? " and " : ""}
              </span>
            ))}{" "}based in Chittagong,Bangladesh.
          </p>
          <div className="needs">
            <a href="#work-photography"><small>Need a photographer?</small>See photography →</a>
            <a href="#work-promotional-videos"><small>Need a video?</small>See films →</a>
            <a href="#work-motion-design"><small>Need motion?</small>See motion design →</a>
          </div>
        </div>
      </section>
      <div className="ribbon"><div className="track">
        {[0, 1, 2, 3].flatMap((n) => skills.map((s, i) => <span key={n + "-" + i}>{s}</span>))}
      </div></div>
      <section className="pad"><div className="wrap">
        <Head title="Featured work" text="Pick a category to see the projects inside." />
        <div className="tiles t3">{C.slice(0, 6).map((c, i) => <Tile key={c[0]} c={c} i={i} />)}</div>
        <p style={{ marginTop: 30 }}><a className="btn ghost" href="#work"><Roll>All categories</Roll></a></p>
      </div></section>
      <section className="pad" style={{ borderTop: "1px solid var(--line)" }}><div className="wrap split">
        <h2>Behind the lens</h2>
        <div>
          <p className="lead">I shoot it, cut it and animate it, so your story keeps one voice from first frame to final export.</p>
          <p style={{ color: "var(--mute)" }}>Founder-led production across photo, film and motion. National campaigns and neighborhood restaurants get the same care.</p>
          <a className="btn ghost" href="#about"><Roll>More about me</Roll></a>
        </div>
      </div></section>
      <section style={{ borderTop: "1px solid var(--line)" }}>
        <div className="wrap" style={{ paddingTop: 60 }}><div className="head"><h2>Trusted by</h2><a className="btn ghost" href="#brands"><Roll>All brands</Roll></a></div></div>
        <Marquee items={B} /><div style={{ height: 40 }} />
      </section>
      <section className="pad cta" style={{ borderTop: "1px solid var(--line)" }}><div className="wrap">
        <h2>Let’s work<br />together</h2><a className="btn" href="#contact"><Roll>Contact now</Roll></a>
      </div></section>
    </>
  );
}

export function About() {
  const disc = [
    ["Photography", "Brand, product and food stills with clean light and a clear point of view.", [["photography", "Photography"], ["food-photography", "Food"]]],
    ["Cinematography", "Commercials and brand films, lit, framed and directed on set.", [["ovc", "OVC"], ["promotional-videos", "Promotional videos"]]],
    ["Editing", "Story-first cuts, sound design and color grading for ads, reels and long form.", [["creative-reels", "Creative reels"], ["restaurant-reels", "Restaurant reels"]]],
    ["Motion design", "Titles, logo animation, explainers and product animation that move with purpose.", [["motion-design", "Motion design"]]],
  ];
  const steps = [["Brief", "We talk goals, audience, budget and deadline."], ["Plan", "Concept, moodboard, shot list and schedule."], ["Shoot", "On location or in studio, with the right crew and gear."], ["Edit", "Cut, grade, sound and motion, with revision rounds."], ["Deliver", "Final files in every format you need for each platform."]];
  const exp = [["Filmaniac", "Founder & Owner", "2025 – Now"], ["Lead Bangladesh", "Assisstant Manager, Creative Production", "2023 – Now"],];
  const faq = [["How long does a project take?", "A photo shoot is usually delivered in days, a reel in about a week, and a full commercial in two to four weeks, depending on scope."], ["Do you travel?", "Yes. I work across Bangladesh and take projects abroad. Travel costs are quoted up front."], ["What do I receive?", "Edited, color-graded files in the formats you need, plus raw selects on request."], ["How do we start?", "Press “Start a project” and share a few lines about your goal and timeline. I’ll reply with ideas and a quote."]];
  const bd = { borderTop: "1px solid var(--line)" };
  return (
    <>
      <section className="pad"><div className="wrap split">
        <div className="portrait"><img src="/rizwan.jpg" alt="Rizwan Bin Yousuf" /></div>
        <div>
          <h2 style={{ marginBottom: 34 }}>About</h2>
          <p className="lead">I’m a photographer, cinematographer, editor and motion designer who treats every frame, cut and animation as part of one story.</p>
          <p style={{ color: "var(--mute)" }}>I’ve spent seven years making visuals for national brands, agencies and local businesses across Bangladesh. I began with photography, moved into film, and picked up editing and motion design along the way. That means I can take a project from first idea to final export without handing it off, so the look and pace stay consistent.</p>
          <p style={{ color: "var(--mute)" }}>I care about light, movement and rhythm. A restaurant reel and a national campaign need different scale, but both need a clear idea, honest craft and delivery on time.</p>
          <div className="stats">
            {[["7+", "years of experience"], ["50+", "brands"], ["500+", "projects"],].map(([n, l]) => <div key={l}><b>{n}</b><span>{l}</span></div>)}
          </div>
        </div>
      </div></section>
      <section className="pad" style={bd}><div className="wrap">
        <Head title="What I do" />
        <div className="disc">{disc.map(([t, p, links]) => (
          <div key={t}><h3>{t}</h3><p>{p}</p>{links.map(([s, l]) => <a key={s} href={"#work-" + s}>{l}</a>)}</div>
        ))}</div>
      </div></section>
      <section className="pad" style={bd}><div className="wrap">
        <Head title="How I work" text="A simple process so you always know what happens next." />
        <div className="steps">{steps.map(([t, p]) => <div key={t}><h3>{t}</h3><p>{p}</p></div>)}</div>
      </div></section>
      <section className="pad" style={bd}><div className="wrap split">
        <h2>Experience</h2>
        <ul className="list">{exp.map(([a, b, c]) => <li key={a}><b>{a}</b><span>{b}<br />{c}</span></li>)}</ul>
      </div></section>
      <section className="pad" style={bd}><div className="wrap split">
        <h2>Good to know</h2>
        <div>{faq.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
      </div></section>
      <section className="pad cta" style={bd}><div className="wrap">
        <h2>Have a project<br />in mind?</h2><a className="btn" href="#contact"><Roll>Contact now</Roll></a>
      </div></section>
    </>
  );
}

export function Work() {
  return (
    <section className="pad"><div className="wrap">
      <Head title="Work" text="Seven categories. Open one to see every project inside." />
      <div className="tiles">{C.map((c, i) => <Tile key={c[0]} c={c} i={i} />)}</div>
    </div></section>
  );
}

export function Brands() {
  const [n, setN] = useState(0), [out, setOut] = useState(false);
  const go = (d) => { setOut(true); setTimeout(() => { setN((x) => (x + d + B.length) % B.length); setOut(false); }, 300); };
  useEffect(() => { const t = setInterval(() => go(1), 2600); return () => clearInterval(t); }, []);
  return (
    <section className="pad">
      <div className="wrap"><Head title="Brands" text="Names I’ve made content for, from national campaigns to local favorites." /></div>
      <div className="spotlight">
        <b className={(out ? "out" : "") + (B[n].logo ? " lg" : "")}><Logo b={B[n]} /></b>
        <div className="ctl">
          <button onClick={() => go(-1)} aria-label="Previous brand">←</button>
          <span>{n + 1} / {B.length}</span>
          <button onClick={() => go(1)} aria-label="Next brand">→</button>
        </div>
      </div>
      <div style={{ padding: "30px 0" }}><Marquee items={B} /><Marquee items={[...B].reverse()} rev /></div>
    </section>
  );
}

export function Contact() {
  const send = (e) => {
    e.preventDefault();
    const d = new FormData(e.target);
    location.href = "mailto:rizwanbinyousuf1@gmail.com?subject=" + encodeURIComponent(d.get("t") + " inquiry from " + d.get("n")) +
      "&body=" + encodeURIComponent(d.get("m") + "\n\n" + d.get("e"));
  };
  return (
    <section className="pad"><div className="wrap split">
      <div>
        <h2 style={{ marginBottom: 34 }}>Let’s talk</h2>
        <a className="big" href="mailto:rizwanbinyousuf1@gmail.com">rizwanbinyousuf1@gmail.com</a>
        <a className="big" href="tel:+8801785815090">+8801785815090</a>
        <p style={{ color: "var(--mute)" }}>Based in Chittagong. Taking projects across Bangladesh and abroad.</p>
        <Socials />
      </div>
      <form onSubmit={send}>
        <label>Name<input name="n" required /></label>
        <label>Email<input type="email" name="e" required /></label>
        <label>Project type<select name="t">{C.map((c) => <option key={c[0]}>{c[1]}</option>)}<option>Other</option></select></label>
        <label>Tell me about it<textarea name="m" rows="5" required /></label>
        <button className="btn" type="submit"><Roll>Send message</Roll></button>
      </form>
    </div></section>
  );
}

export function Cat({ slug }) {
  const i = C.findIndex((c) => c[0] === slug), c = C[i];
  const next = C[(i + 1) % C.length], prev = C[(i + C.length - 1) % C.length];
  const stills = c[2] === "Stills";
  const [lb, setLb] = useState(null);
  const step = (d) => setLb((x) => x && x.imgs ? { ...x, n: (x.n + d + x.imgs.length) % x.imgs.length } : x);
  useEffect(() => { document.body.style.overflow = lb ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [!!lb]);
  const sx = useRef(null);
  const swipe = (e) => {
    if (sx.current == null) return;
    const d = e.changedTouches[0].clientX - sx.current; sx.current = null;
    if (Math.abs(d) > 50) step(d < 0 ? 1 : -1);
  };
  useEffect(() => {
    const f = (e) => {
      if (e.key === "Escape") setLb(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    addEventListener("keydown", f);
    return () => removeEventListener("keydown", f);
  }, []);
  return (
    <section className="pad"><div className="wrap">
      <a className="back" href="#work">← All work</a>
      <Head title={c[1]} />
      <div className="proj" data-r={c[3].replace("/", "x")}>
        {(PROJECTS[slug] || []).map((p, n) => {
          const id = ytid(p.url);
          const imgs = (p.imgs || (p.img ? [p.img] : [])).filter(Boolean).slice(0, 5);
          const has = id || imgs.length;
          return (
            <a key={n} className="pj" href={"#work-" + slug}
               onClick={(e) => {
                 e.preventDefault();
                 if (id) setLb({ id, t: p.title || "", v: c[3] === "9/16" });
                 else if (imgs.length) setLb({ imgs, n: 0, t: p.title || "" });
               }}>
              <div className="th" data-k={stills ? "+" : "▶"}
                   style={{ "--r": c[3], "--a": c[4], "--h": (c[5] + n * 22) % 360 }}>
                {stills
                  ? <PhotoCycle imgs={imgs} hue={(c[5] + n * 22) % 360} />
                  : id && <img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy"
                               onError={(e) => (e.currentTarget.style.display = "none")} />}
              </div>
              <h3>{p.title || `${c[1]} project ${n + 1}`}</h3>
              <small>{p.client || "Client name"}</small>
            </a>
          );
        })}
      </div>
      <div className="pager">
        <a href={"#work-" + prev[0]}><Roll>{"← " + prev[1]}</Roll></a>
        <a href={"#work-" + next[0]}><Roll>{next[1] + " →"}</Roll></a>
      </div>
      {lb && createPortal(
        <div className="lb" onClick={(e) => e.target === e.currentTarget && setLb(null)}>
          <button className="x" aria-label="Close" onClick={() => setLb(null)}>✕</button>
          {lb.imgs && lb.imgs.length > 1 && (
            <>
              <button className="lbarrow prev" onClick={() => step(-1)} aria-label="Previous photo">←</button>
              <button className="lbarrow next" onClick={() => step(1)} aria-label="Next photo">→</button>
            </>
          )}
          <div className={"lbin" + (lb.v ? " v" : "") + (lb.imgs ? " pic" : "")}
               onTouchStart={(e) => (sx.current = e.touches[0].clientX)} onTouchEnd={swipe}>
            {lb.id
              ? <iframe src={`https://www.youtube-nocookie.com/embed/${lb.id}?autoplay=1&rel=0`} title={lb.t}
                        allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
              : <img src={lb.imgs[lb.n]} alt={lb.t} onClick={() => step(1)} />}
          </div>
          {lb.imgs && lb.imgs.length > 1 && (
            <>
              <div className="lbnav">
                <button onClick={() => step(-1)} aria-label="Previous photo">←</button>
                <span>{lb.n + 1} / {lb.imgs.length}</span>
                <button onClick={() => step(1)} aria-label="Next photo">→</button>
              </div>
              <div className="lbthumbs">
                {lb.imgs.map((src, k) => (
                  <button key={k} className={k === lb.n ? "on" : ""} aria-label={"Photo " + (k + 1)}
                          onClick={() => setLb((x) => ({ ...x, n: k }))}>
                    <img src={src} alt="" />
                  </button>
                ))}
              </div>
            </>
          )}
          <p>{lb.t}{lb.id && <a href={"https://youtu.be/" + lb.id} target="_blank" rel="noopener">Open on YouTube</a>}</p>
        </div>,
        document.body
      )}
    </div></section>
  );
}
