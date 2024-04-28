import React from "react";
import { useRef, useEffect } from "react";
import "./CustomCanvas.css";

export function CustomCanvas({ children }) {
  const canvRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const wh = 128;
    const w2h = wh * wh;
    canvas.width = wh;
    canvas.height = wh;

    const img = ctx.createImageData(wh, wh);
    const id = img.data;
    let t = 0;
    const inc = 1 / wh;
    const arr = [];

    // Initialize the array with random values
    for (let k = 0; k < w2h; ++k) {
      arr[k] = Math.random() * 0.7 - 0.6;
    }

    function draw() {
      requestAnimationFrame(draw);
      t += inc;

      for (let x = 1; x >= 0; x -= inc) {
        for (let y = 1; y >= 0; y -= inc) {
          const idx = (y * wh + x) * 4;
          const dx = x;
          const dy = y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const ax = oct(x, y);
          const ay = oct(x + 2, y + t / 3);
          const bx = oct(x + dist * 0.3 + ax / 22 + 0.7, y + ay / 5 + 2);
          const by = oct(x + ax / 3 + 4 * t, y + ay / 3 + 5);
          const n = oct(x + bx / 5, y + by / 2) * 0.7 + 0.15;
          const d = (ax * by) / 2;
          const e = (ay * bx) / 2;

          id[idx + 0] = hue(n + d / 5);
          id[idx + 1] = hue(n / 3 + e / 5 + d);
          id[idx + 2] = hue(d + e);
          id[idx + 3] = hue(255 * (1 - ease(dist) * (e + d) * 5));
        }
      }

      ctx.putImageData(img, 0, 0);
    }

    function hue(value) {
      return Math.min(Math.max(value, 0), 255);
    }

    function ease(x) {
      return x > 0.2 ? 0 : i(1, 0, x * 6);
    }

    function i(a, b, t) {
      t = t * t * t * (6 * t * t - 15 * t + 10);
      return a + (b - a) * t;
    }

    function n(x, y) {
      const i = Math.abs(x * wh + y) % w2h;
      return arr[i];
    }

    function oct(x, y) {
      const o1 = p(x * 3.0, y * 4.0);
      const o2 = p(x * 4.0, y * 5.0);
      return o1 + o2 * 0.5;
    }

    function p(x, y) {
      const nx = Math.floor(x);
      const ny = Math.floor(y);
      return i(
        i(n(nx, ny), n(nx + 1, ny), x - nx),
        i(n(nx, ny + 1), n(nx + 1, ny + 1), x - nx),
        y - ny,
      );
    }

    draw();

    return () => {
      // Clean up canvas when component unmounts
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, []); // Empty dependency array to run once on component mount/
  return <canvas ref={canvRef}>{children}</canvas>;
}
