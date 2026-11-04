import { useEffect, useRef, useState } from "react";
import { C } from "./data.js";
import { Roll, Socials } from "./components.jsx";
import { Home, About, Work, Brands, Contact, Cat } from "./pages.jsx";
import Effects from "./Effects.jsx";

const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
const getPage = () => location.hash.slice(1) || "home";
const clock = () => "Dhaka " + new Date().toLocaleTimeString("en-GB", { timeZone: "Asia/Dhaka" });

// Hash routing with a colored curtain between pages
function useRoute(curtain) {
  const [page, setPage] = useState(getPage);
  useEffect(() => {
    const on = () => {
      const cv = curtain.current;
      if (reduce) { setPage(getPage()); scrollTo(0, 0); return; }
      cv.style.transition = "transform .5s cubic-bezier(.7,0,.2,1)";
      cv.style.transform = "translateY(0)";
      setTimeout(() => {
        setPage(getPage()); scrollTo(0, 0);
        cv.style.transform = "translateY(-100%)";
        setTimeout(() => { cv.style.transition = "none"; cv.style.transform = "translateY(100%)"; }, 550);
      }, 520);
    };
    addEventListener("hashchange", on);
    return () => removeEventListener("hashchange", on);
  }, []);
  return page;
}

// Fade items in as they scroll into view
function useReveal(dep) {
  useEffect(() => {
    if (reduce) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll("#app .tile,#app .proj>a,#app .disc>div,#app .steps>div,#app .list li,#app details,#app .stats>div,#app .needs a,#app .head")
      .forEach((el, i) => { el.classList.add("rv"); el.style.transitionDelay = (i % 4) * 90 + "ms"; io.observe(el); });
    return () => io.disconnect();
  }, [dep]);
}

export default function App() {
  const curtain = useRef();
  const page = useRoute(curtain);
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(clock());
  useEffect(() => { const t = setInterval(() => setTime(clock()), 1000); return () => clearInterval(t); }, []);
  useEffect(() => { setOpen(false); }, [page]);
  useEffect(() => {
    const f = (e) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", f);
    return () => removeEventListener("keydown", f);
  }, []);
  useReveal(page);

  const slug = page.startsWith("work-") && C.some((c) => "work-" + c[0] === page) ? page.slice(5) : null;
  const section = slug ? "work" : page;
  const views = { home: <Home />, about: <About />, work: <Work />, brands: <Brands />, contact: <Contact /> };
  const view = slug ? <Cat slug={slug} /> : views[page] || views.home;

  return (
    <>
      <header><div className="wrap">
        <a className="logo" href="#home">Rizwan Bin Yousuf</a>
        <nav aria-label="Main">
          {["home", "about", "work", "brands", "contact"].map((p) => (
            <a key={p} href={"#" + p} className={section === p ? "on" : ""}><Roll>{p[0].toUpperCase() + p.slice(1)}</Roll></a>
          ))}
        </nav>
        <span className="clock">{time}</span>
        <button className="btn sm" onClick={() => setOpen(true)}><Roll>Start a project</Roll></button>
      </div></header>

      <aside className={"panel" + (open ? " open" : "")} aria-label="Contact">
        <button className="x" onClick={() => setOpen(false)} aria-label="Close">✕</button>
        <h2 style={{ fontSize: "1.8rem" }}>Let’s talk</h2>
        <p>Tell me what you’re making. I usually reply within a day.</p>
        <a className="big" href="mailto:rizwanbinyousuf1@gmail.com">rizwanbinyousuf1@gmail.com</a>
        <a className="big" href="tel:+8801785815090">+8801785815090</a>
        <Socials />
        <a className="btn" href="#contact" style={{ justifyContent: "center" }}><Roll>Open contact form</Roll></a>
      </aside>

      <main id="app"><div className="view" key={page}>{view}</div></main>

      <footer><div className="wrap">
        <span>© 2026 Rizwan Bin Yousuf</span><span>Photography, Film and Motion</span><a href="#home">Back to top</a>
      </div></footer>

      <div className="curtain" ref={curtain} />
      <Effects />
    </>
  );
}
