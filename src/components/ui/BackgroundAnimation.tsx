'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  phase: number;
  phaseSpeed: number;
}

export function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize, { passive: true });

    // Determine particle count based on screen width
    const getParticleCount = () => {
      if (width < 640) return 30;
      if (width < 1024) return 45;
      return 65;
    };

    let particles: Particle[] = [];

    const initParticles = () => {
      particles = [];
      const count = getParticleCount();
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 1.8 + 1.2,
          baseAlpha: Math.random() * 0.4 + 0.2,
          alpha: 0.3,
          phase: Math.random() * Math.PI * 2,
          phaseSpeed: Math.random() * 0.02 + 0.01,
        });
      }
    };

    initParticles();

    // Check if dark theme
    const isDarkTheme = () => document.documentElement.classList.contains('dark');

    // Animation Loop
    const render = () => {
      // Check prefers-reduced-motion
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const dark = isDarkTheme();
      const dotColor = dark ? '138, 180, 248' : '26, 115, 232';
      const secondaryColor = dark ? '154, 154, 163' : '98, 98, 107';
      const lineColor = dark ? '138, 180, 248' : '21, 87, 176';

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries smoothly
        if (p.x < -10) p.x = width + 10;
        else if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        else if (p.y > height + 10) p.y = -10;

        // Pulsing twinkle
        p.phase += p.phaseSpeed;
        p.alpha = p.baseAlpha + Math.sin(p.phase) * 0.15;

        // Mouse interaction: subtle acceleration
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 0.8;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        const useAccent = i % 3 === 0;
        const color = useAccent ? dotColor : secondaryColor;
        ctx.fillStyle = `rgba(${color}, ${p.alpha})`;
        ctx.fill();

        // Connect nearby particles with subtle hairlines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distBetween = Math.hypot(p.x - p2.x, p.y - p2.y);
          const maxDist = 110;

          if (distBetween < maxDist) {
            const lineAlpha = (1 - distBetween / maxDist) * (dark ? 0.18 : 0.12);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${lineColor}, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Connect to mouse if close
        if (dist < mouse.radius) {
          const mouseLineAlpha = (1 - dist / mouse.radius) * (dark ? 0.28 : 0.18);
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(${dotColor}, ${mouseLineAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 w-full h-full opacity-70 transition-opacity duration-700"
    />
  );
}
