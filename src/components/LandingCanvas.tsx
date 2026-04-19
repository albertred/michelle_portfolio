'use client';

import React, { useEffect, useRef, useCallback } from 'react';

interface RainDrop {
  x: number;
  y: number;
  speed: number;
  length: number;
  opacity: number;
  thickness: number;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
}

interface Drip {
  x: number;
  y: number;
  vy: number;
  radius: number;
  opacity: number;
  maxY: number;
}

interface LandingCanvasProps {
  onAnimationComplete: () => void;
}

export default function LandingCanvas({ onAnimationComplete }: LandingCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const rainDropsRef = useRef<RainDrop[]>([]);
  const ripplesRef = useRef<Ripple[]>([]);
  const dripsRef = useRef<Drip[]>([]);
  const offscreenRef = useRef<HTMLCanvasElement | null>(null);

  const initRain = useCallback((width: number, height: number) => {
    const drops: RainDrop[] = [];
    const count = Math.floor((width * height) / 2800);
    for (let i = 0; i < count; i++) {
      drops.push({
        x: Math.random() * width * 1.2 - width * 0.1,
        y: Math.random() * -height,
        speed: Math.random() * 10 + 18,
        length: Math.random() * 28 + 18,
        opacity: Math.random() * 0.5 + 0.4,
        thickness: Math.random() * 1.2 + 0.8,
      });
    }
    rainDropsRef.current = drops;
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    const offscreen = offscreenRef.current;
    if (!canvas || !offscreen) return;

    const ctx = canvas.getContext('2d');
    const offCtx = offscreen.getContext('2d');
    if (!ctx || !offCtx) return;

    const now = Date.now();
    if (!startTimeRef.current) startTimeRef.current = now;
    const elapsed = (now - startTimeRef.current) / 1000;

    const W = canvas.width;
    const H = canvas.height;

    // Phase timing (total ~2.8s):
    // 0.0 - 0.2: rain ramps in fast
    // 0.2 - 1.2: name fades in with melt + ripples on letters
    // 1.2 - 2.0: full rain, drips falling
    // 2.0 - 2.8: fade out

    const rainIntensity = elapsed < 0.2
      ? elapsed / 0.2
      : elapsed < 2.0
      ? 1
      : Math.max(0, 1 - (elapsed - 2.0) / 0.6);

    // Background
    ctx.fillStyle = '#FFEAF2';
    ctx.fillRect(0, 0, W, H);

    // --- Render name to offscreen ---
    const fontSize = Math.min(W / 8, 110);
    offCtx.clearRect(0, 0, W, H);
    offCtx.font = `bold ${fontSize}px ui-sans-serif, system-ui, sans-serif`;
    offCtx.textAlign = 'center';
    offCtx.textBaseline = 'middle';

    const textX = W / 2;
    const textY = H / 2;
    const metrics = offCtx.measureText('MICHELLE LU');
    const textWidth = metrics.width;
    const textLeft = textX - textWidth / 2;
    const textTop = textY - fontSize * 0.55;
    const textBottom = textY + fontSize * 0.55;

    const nameOpacity = elapsed < 0.2 ? 0 : Math.min(1, (elapsed - 0.2) / 0.6);

    if (nameOpacity > 0) {
      offCtx.fillStyle = '#ffffff';
      offCtx.fillText('MICHELLE LU', textX, textY);

      // Melt slices
      const sliceCount = 50;
      const sliceH = (fontSize * 1.3) / sliceCount;
      const topY = textY - fontSize * 0.65;
      const meltProgress = elapsed < 0.6 ? 0 : Math.min(1, (elapsed - 0.6) / 1.2);

      ctx.save();
      ctx.globalAlpha = nameOpacity;
      for (let i = 0; i < sliceCount; i++) {
        const sy = topY + i * sliceH;
        const t = i / sliceCount;
        const meltOffset = meltProgress * t * t * 22;
        const wobble = Math.sin(elapsed * 5 + i * 0.5) * meltProgress * 1.8;
        ctx.drawImage(
          offscreen,
          0, sy, W, sliceH + 1,
          0, sy + meltOffset + wobble, W, sliceH + 1
        );
      }
      ctx.restore();

      // Ripple impacts on the text itself — simulates rain hitting the letters
      if (elapsed > 0.3 && elapsed < 2.1 && Math.random() < 0.7) {
        const rx = textLeft + Math.random() * textWidth;
        const ry = textTop + Math.random() * (textBottom - textTop);
        ripplesRef.current.push({
          x: rx,
          y: ry,
          radius: 2,
          maxRadius: Math.random() * 18 + 12,
          opacity: 0.9,
        });
      }

      // Spawn drips falling from the text
      if (meltProgress > 0.2 && elapsed < 2.2 && Math.random() < 0.5 * meltProgress) {
        const dripX = textLeft + Math.random() * textWidth;
        dripsRef.current.push({
          x: dripX,
          y: textBottom,
          vy: Math.random() * 2 + 1,
          radius: Math.random() * 3.5 + 2,
          opacity: nameOpacity,
          maxY: textBottom + Math.random() * 100 + 40,
        });
      }
    }

    // Draw ripples (on top of the text, clipped to the text area approximately)
    ripplesRef.current = ripplesRef.current.filter(r => {
      r.radius += 0.8;
      r.opacity -= 0.04;
      if (r.opacity <= 0 || r.radius > r.maxRadius) return false;

      ctx.save();
      ctx.globalAlpha = r.opacity;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
      ctx.stroke();

      // Tiny inner splash highlight
      ctx.fillStyle = `rgba(255, 255, 255, ${r.opacity * 0.4})`;
      ctx.beginPath();
      ctx.arc(r.x, r.y, Math.max(0.5, 2 - r.radius * 0.15), 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      return true;
    });

    // Update & draw drips
    dripsRef.current = dripsRef.current.filter(drip => {
      drip.y += drip.vy;
      drip.vy += 0.08;
      const progress = (drip.y - textBottom) / (drip.maxY - textBottom);
      const alpha = drip.opacity * (1 - Math.max(0, progress));
      if (alpha <= 0) return false;

      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.ellipse(drip.x, drip.y, drip.radius * 0.55, drip.radius, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      return drip.y < drip.maxY;
    });

    // --- Rain streaks (heavier, more visible) ---
    ctx.save();
    const drops = rainDropsRef.current;
    for (let i = 0; i < drops.length; i++) {
      const drop = drops[i];
      drop.y += drop.speed * rainIntensity;
      if (drop.y > H + drop.length) {
        drop.y = -drop.length - Math.random() * 80;
        drop.x = Math.random() * W * 1.2 - W * 0.1;
      }

      const alpha = drop.opacity * rainIntensity;
      // Gradient streak: brighter leading edge
      const grad = ctx.createLinearGradient(
        drop.x - drop.length * 0.2, drop.y - drop.length,
        drop.x, drop.y
      );
      grad.addColorStop(0, `rgba(170, 120, 145, 0)`);
      grad.addColorStop(1, `rgba(170, 120, 145, ${alpha})`);
      ctx.strokeStyle = grad;
      ctx.lineWidth = drop.thickness;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(drop.x - drop.length * 0.2, drop.y - drop.length);
      ctx.lineTo(drop.x, drop.y);
      ctx.stroke();
    }
    ctx.restore();

    // Ground puddle
    if (elapsed > 0.3) {
      const puddleOpacity = Math.min(0.25, (elapsed - 0.3) * 0.18) * rainIntensity;
      const grad = ctx.createLinearGradient(0, H - 26, 0, H);
      grad.addColorStop(0, `rgba(190, 140, 165, 0)`);
      grad.addColorStop(1, `rgba(190, 140, 165, ${puddleOpacity})`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, H - 26, W, 26);
    }

    // Fade out
    if (elapsed > 2.0) {
      const fadeProgress = Math.min(1, (elapsed - 2.0) / 0.8);
      ctx.fillStyle = `rgba(255, 234, 242, ${fadeProgress})`;
      ctx.fillRect(0, 0, W, H);
      if (fadeProgress >= 1) {
        onAnimationComplete();
        return;
      }
    }

    animationIdRef.current = requestAnimationFrame(animate);
  }, [onAnimationComplete]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (offscreenRef.current) {
        offscreenRef.current.width = window.innerWidth;
        offscreenRef.current.height = window.innerHeight;
      }
      initRain(window.innerWidth, window.innerHeight);
    };

    offscreenRef.current = document.createElement('canvas');
    offscreenRef.current.width = window.innerWidth;
    offscreenRef.current.height = window.innerHeight;

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setTimeout(onAnimationComplete, 100);
    } else {
      animationIdRef.current = requestAnimationFrame(animate);
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
    };
  }, [animate, initRain, onAnimationComplete]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-50"
      style={{ pointerEvents: 'none', background: '#FFEAF2' }}
    />
  );
}
