import { useEffect, useRef } from "react";

// Cursor dot, color glow that follows the mouse, and magnetic buttons.
// Remove <Effects /> from App.jsx to turn them off.
export default function Effects() {
  const cur = useRef(), glow = useRef(), label = useRef();
  useEffect(() => {
    if (matchMedia("(hover:none)").matches || matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    let x = innerWidth / 2, y = innerHeight / 2, cx = x, cy = y, gx = x, gy = y, raf;
    const move = (e) => {
      x = e.clientX; y = e.clientY; glow.current.classList.add("on");
      const b = e.target.closest && e.target.closest(".btn");
      if (b) {
        const r = b.getBoundingClientRect();
        b.style.transform = `translate(${(x - r.left - r.width / 2) * 0.25}px,${(y - r.top - r.height / 2) * 0.35}px)`;
      }
    };
    const over = (e) => {
      const t = e.target.closest(".tile,.proj a");
      cur.current.classList.toggle("big", !!t);
      if (t) label.current.textContent = t.matches(".tile") ? "Open" : "View";
    };
    const out = (e) => { const b = e.target.closest(".btn"); if (b) b.style.transform = ""; };
    const loop = () => {
      cx += (x - cx) * 0.18; cy += (y - cy) * 0.18; gx += (x - gx) * 0.08; gy += (y - gy) * 0.08;
      cur.current.style.transform = `translate(${cx}px,${cy}px)`;
      glow.current.style.transform = `translate(${gx}px,${gy}px)`;
      raf = requestAnimationFrame(loop);
    };
    loop();
    addEventListener("mousemove", move); addEventListener("mouseover", over); addEventListener("mouseout", out);
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("mousemove", move); removeEventListener("mouseover", over); removeEventListener("mouseout", out);
    };
  }, []);
  return (
    <>
      <div className="cur" ref={cur}><span ref={label}>View</span></div>
      <div className="glow" ref={glow} />
    </>
  );
}
