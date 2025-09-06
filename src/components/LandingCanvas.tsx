'use client';

import React, { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

interface LandingCanvasProps {
  onAnimationComplete: () => void;
}

export default function LandingCanvas({ onAnimationComplete }: LandingCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationIdRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  const createParticle = useCallback((x: number, y: number): Particle => {
    return {
      x,
      y,
      vx: (Math.random() - 0.5) * 2,
      vy: Math.random() * 3 + 1,
      life: 0,
      maxLife: Math.random() * 60 + 60,
    };
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const now = Date.now();
    if (!startTimeRef.current) startTimeRef.current = now;
    const elapsed = (now - startTimeRef.current) / 1000;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set background
    ctx.fillStyle = '#FFEAF2';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw name
    const fontSize = Math.min(canvas.width / 8, 120);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `bold ${fontSize}px ui-sans-serif, system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    const nameText = 'MICHELLE LU';
    const textWidth = ctx.measureText(nameText).width;
    const textX = canvas.width / 2;
    const textY = canvas.height / 2;

    ctx.fillText(nameText, textX, textY);

    // Create particles from the text
    if (elapsed > 0.5 && elapsed < 2.5) {
      for (let i = 0; i < 3; i++) {
        const x = textX + (Math.random() - 0.5) * textWidth;
        const y = textY + (Math.random() - 0.5) * fontSize * 0.6;
        particlesRef.current.push(createParticle(x, y));
      }
    }

    // Update and draw particles
    ctx.globalCompositeOperation = 'destination-out';
    particlesRef.current = particlesRef.current.filter(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life++;

      const alpha = Math.max(0, 1 - particle.life / particle.maxLife);
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.8})`;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, Math.random() * 8 + 4, 0, Math.PI * 2);
      ctx.fill();

      return particle.life < particle.maxLife;
    });

    ctx.globalCompositeOperation = 'source-over';

    // Fade out effect after 2.5 seconds
    if (elapsed > 2.5) {
      const fadeProgress = Math.min(1, (elapsed - 2.5) / 0.5);
      ctx.fillStyle = `rgba(255, 234, 242, ${fadeProgress})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      if (fadeProgress >= 1) {
        onAnimationComplete();
        return;
      }
    }

    animationIdRef.current = requestAnimationFrame(animate);
  }, [createParticle, onAnimationComplete]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Skip animation for users who prefer reduced motion
      setTimeout(onAnimationComplete, 100);
    } else {
      animationIdRef.current = requestAnimationFrame(animate);
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [animate, onAnimationComplete]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-50 bg-bg"
      style={{ pointerEvents: 'none' }}
    />
  );
}