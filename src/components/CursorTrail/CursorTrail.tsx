import { useEffect } from "react";
import "./CursorTrail.scss";
import Bat from "../../assets/bat.svg?raw";

export default function CursorTrail() {
  useEffect(() => {
    let lastTime = 0;
    let touchStartX = 0;
    let touchStartY = 0;
    let isTouching = false;
    let clearTouchTimeout: number | null = null;
    const layer = document.createElement("div");
    layer.className = "cursor-trail-layer";
    document.body.appendChild(layer);

    const clearTouchTrails = () => {
      layer
        .querySelectorAll(".cursor-trail-touch")
        .forEach((el) => el.remove());
    };

    const spawnBat = (x: number, y: number, isTouch: boolean = false) => {
      const now = performance.now();
      if (now - lastTime < 40) return;
      lastTime = now;

      const el = document.createElement("span");
      el.className = isTouch
        ? "cursor-trail cursor-trail-touch"
        : "cursor-trail";
      el.innerHTML = Bat;
      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);
      el.style.setProperty("--dx", `${(Math.random() - 0.5) * 45}px`);
      el.style.setProperty("--dy", `${(Math.random() - 0.5) * 45}px`);
      el.style.setProperty("--rot", `${(Math.random() - 0.5) * 80}deg`);
      el.style.setProperty("--scale", `${0.45 + Math.random() * 0.35}`);
      layer.appendChild(el);
      el.addEventListener("animationend", () => el.remove(), { once: true });
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== "touch") {
        spawnBat(e.clientX, e.clientY);
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (!touch) return;
      isTouching = true;
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
      clearTouchTrails();
    };

    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (!touch) return;

      const x = touch.clientX;
      const y = touch.clientY;

      if (!isTouching) {
        isTouching = true;
        touchStartX = x;
        touchStartY = y;
        return;
      }

      const dx = x - touchStartX;
      const dy = y - touchStartY;
      const dist = Math.hypot(dx, dy);

      touchStartX = x;
      touchStartY = y;

      if (dist < 0.1) return;

      spawnBat(x, y, true);

      if (clearTouchTimeout) {
        clearTimeout(clearTouchTimeout);
      }
      clearTouchTimeout = setTimeout(() => {
        clearTouchTrails();
      }, 50);
    };

    const onTouchEnd = () => {
      isTouching = false;
      if (clearTouchTimeout) {
        clearTimeout(clearTouchTimeout);
        clearTouchTimeout = null;
      }
      clearTouchTrails();
    };

    const onTouchCancel = () => {
      isTouching = false;
      if (clearTouchTimeout) {
        clearTimeout(clearTouchTimeout);
        clearTouchTimeout = null;
      }
      clearTouchTrails();
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("touchcancel", onTouchCancel, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchcancel", onTouchCancel);
      if (clearTouchTimeout) clearTimeout(clearTouchTimeout);
      layer.remove();
    };
  }, []);

  return null;
}
