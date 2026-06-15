"use client";
import { useEffect, useRef } from "react";

const CODE_SNIPPETS = [
  "const ai = new AI()",
  "await fetch('/api')",
  "npm install magic",
  "git push origin",
  "SELECT * FROM future",
  "if (AI > human)",
  "return 42;",
  "useEffect(() => {})",
  "import { brain }",
  "model.predict()",
  "async/await ✓",
  "deploy --prod",
  "throw new Error()",
  "console.log(🤖)",
  "while(true) { learn }",
  "export default AI",
  "yarn build",
  "kubectl apply",
  "docker run vivicta",
  "git commit -m '🔥'",
];

interface Dot {
  x: number;
  y: number;
  text: string;
  eaten: boolean;
  alpha: number;
  floatY: number;
}

export default function PacMan() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const state = {
      x: 700, y: 200,
      vx: 1.6, vy: 0.9,
      mouth: 0.1, mouthDir: 1,
      angle: 0,
      following: false,
      mouseX: 0, mouseY: 0,
      dots: [] as Dot[],
      eating: 0,
    };

    function spawnDots() {
      const w = canvas!.width, h = canvas!.height;
      state.dots = CODE_SNIPPETS.map((text) => ({
        x: w * 0.48 + Math.random() * (w * 0.5),
        y: 40 + Math.random() * (h - 80),
        text,
        eaten: false,
        alpha: 1,
        floatY: 0,
      }));
    }

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      spawnDots();
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      state.mouseX = e.clientX - rect.left;
      state.mouseY = e.clientY - rect.top;
      const dx = state.mouseX - state.x;
      const dy = state.mouseY - state.y;
      state.following = Math.sqrt(dx * dx + dy * dy) < 220;
    };
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", () => { state.following = false; });

    let frame = 0;

    const draw = () => {
      frame++;
      const w = canvas.width, h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      state.mouth += 0.07 * state.mouthDir;
      if (state.mouth > 0.38) state.mouthDir = -1;
      if (state.mouth < 0.02) state.mouthDir = 1;
      if (state.eating > 0) state.eating--;

      if (state.following) {
        const dx = state.mouseX - state.x;
        const dy = state.mouseY - state.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 6) {
          state.vx = (dx / dist) * 3;
          state.vy = (dy / dist) * 3;
        }
      } else {
        if (state.x < w * 0.44) state.vx = Math.abs(state.vx) + 0.1;
        if (state.x > w - 25)   state.vx = -Math.abs(state.vx);
        if (state.y < 25)        state.vy = Math.abs(state.vy);
        if (state.y > h - 25)    state.vy = -Math.abs(state.vy);
        if (Math.random() < 0.008) state.vx += (Math.random() - 0.5);
        if (Math.random() < 0.008) state.vy += (Math.random() - 0.5);
        const spd = Math.sqrt(state.vx ** 2 + state.vy ** 2);
        if (spd > 2.2) { state.vx = (state.vx / spd) * 2.2; state.vy = (state.vy / spd) * 2.2; }
        if (spd < 0.8) { state.vx *= 1.4; state.vy *= 1.4; }
      }

      state.x += state.vx;
      state.y += state.vy;
      state.angle = Math.atan2(state.vy, state.vx);

      // Check dot collisions
      state.dots.forEach(dot => {
        if (dot.eaten) return;
        const tw = ctx.measureText(dot.text).width;
        const dx = dot.x + tw / 2 - state.x;
        const dy = dot.y - state.y;
        if (Math.sqrt(dx * dx + dy * dy) < 38) {
          dot.eaten = true;
          state.eating = 12;
        }
      });

      if (state.dots.every(d => d.eaten)) spawnDots();

      // Draw dots
      state.dots.forEach(dot => {
        if (dot.eaten) {
          dot.floatY -= 0.8;
          dot.alpha -= 0.025;
          if (dot.alpha < 0) return;
          ctx.save();
          ctx.globalAlpha = dot.alpha;
          ctx.font = "600 11px monospace";
          ctx.fillStyle = "#16a34a";
          ctx.fillText(dot.text, dot.x, dot.y + dot.floatY);
          ctx.restore();
          return;
        }
        const pulse = 0.85 + Math.sin(frame * 0.04 + dot.x) * 0.15;
        ctx.save();
        ctx.globalAlpha = pulse;
        ctx.font = "600 11px monospace";
        const tw = ctx.measureText(dot.text).width;
        ctx.fillStyle = "rgba(22,163,74,0.08)";
        ctx.beginPath();
        ctx.roundRect(dot.x - 4, dot.y - 13, tw + 8, 18, 4);
        ctx.fill();
        ctx.fillStyle = "#16a34a";
        ctx.fillText(dot.text, dot.x, dot.y);
        ctx.restore();
      });

      // Draw Pac-Man
      const R = 26 + (state.eating > 0 ? 3 : 0);
      const mouthAngle = state.eating > 0 ? 0.55 : state.mouth;

      ctx.save();
      ctx.shadowColor = "#16a34a";
      ctx.shadowBlur = state.eating > 0 ? 28 : 14;
      ctx.beginPath();
      ctx.moveTo(state.x, state.y);
      ctx.arc(state.x, state.y, R, state.angle + mouthAngle, state.angle + Math.PI * 2 - mouthAngle);
      ctx.closePath();
      ctx.fillStyle = state.eating > 0 ? "#22c55e" : "#16a34a";
      ctx.fill();
      ctx.restore();

      // Eye
      const eyeX = state.x + Math.cos(state.angle - 0.55) * R * 0.52;
      const eyeY = state.y + Math.sin(state.angle - 0.55) * R * 0.52;
      ctx.beginPath();
      ctx.arc(eyeX, eyeY, 4, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(eyeX + 0.8, eyeY + 0.8, 2, 0, Math.PI * 2);
      ctx.fillStyle = "#000";
      ctx.fill();

      if (state.eating > 6) {
        ctx.save();
        ctx.globalAlpha = state.eating / 12;
        ctx.font = "bold 13px sans-serif";
        ctx.fillStyle = "#22c55e";
        ctx.fillText("NOM!", state.x + 32, state.y - 20);
        ctx.restore();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "auto",
        cursor: "none",
      }}
    />
  );
}
