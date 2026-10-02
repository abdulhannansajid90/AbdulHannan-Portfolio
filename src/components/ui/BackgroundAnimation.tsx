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
  colorType: 'cyan' | 'indigo' | 'purple' | 'neutral';
}

interface GlowingOrb {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  phase: number;
  phaseSpeed: number;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
}

interface Comet {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  alpha: number;
  color: string;
}

export function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;

    // Viewport dimensions
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Pointer state (works for both mouse & touch)
    const pointer = {
      x: -1000,
      y: -1000,
      radius: 180,
      isActive: false,
    };

    const ripples: Ripple[] = [];
    const comets: Comet[] = [];

    const isDarkTheme = () => document.documentElement.classList.contains('dark');

    const resizeCanvas = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      pointer.radius = width < 640 ? 120 : 200;

      initOrbs();
      initParticles();
    };

    let orbs: GlowingOrb[] = [];
    const initOrbs = () => {
      const isMobile = width < 640;
      const orbCount = isMobile ? 3 : 5;
      orbs = [];

      const dark = isDarkTheme();
      const palette = dark
        ? ['56, 189, 248', '129, 140, 248', '168, 85, 247', '34, 211, 238', '99, 102, 241']
        : ['37, 99, 235', '99, 102, 241', '147, 51, 234', '14, 165, 233', '79, 70, 229'];

      for (let i = 0; i < orbCount; i++) {
        const baseRadius = isMobile
          ? Math.min(width, height) * 0.4 + Math.random() * 50
          : Math.min(width, height) * 0.35 + Math.random() * 120;

        orbs.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: baseRadius,
          color: palette[i % palette.length],
          phase: Math.random() * Math.PI * 2,
          phaseSpeed: 0.005 + Math.random() * 0.01,
        });
      }
    };

    let particles: Particle[] = [];
    const getParticleCount = () => {
      if (width < 640) return 40;
      if (width < 1024) return 60;
      return 90;
    };

    const initParticles = () => {
      particles = [];
      const count = getParticleCount();
      const types: Particle['colorType'][] = ['cyan', 'indigo', 'purple', 'neutral'];

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          radius: Math.random() * 1.8 + 1.2,
          baseAlpha: Math.random() * 0.4 + 0.2,
          alpha: 0.3,
          phase: Math.random() * Math.PI * 2,
          phaseSpeed: Math.random() * 0.03 + 0.01,
          colorType: types[i % types.length],
        });
      }
    };

    const spawnComet = () => {
      if (Math.random() > 0.015) return; // Rare spawn rate
      const dark = isDarkTheme();
      comets.push({
        x: Math.random() * width,
        y: -50,
        vx: 6 + Math.random() * 6,
        vy: 6 + Math.random() * 6,
        length: 80 + Math.random() * 120,
        alpha: Math.random() * 0.6 + 0.4,
        color: dark ? '255, 255, 255' : '100, 116, 139',
      });
    };

    const updatePointer = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = clientX - rect.left;
      pointer.y = clientY - rect.top;
      pointer.isActive = true;
    };

    const handleMouseMove = (e: MouseEvent) => updatePointer(e.clientX, e.clientY);
    const handleMouseLeave = () => { pointer.isActive = false; pointer.x = -1000; pointer.y = -1000; };
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updatePointer(e.touches[0].clientX, e.touches[0].clientY);
        ripples.push({ x: pointer.x, y: pointer.y, radius: 10, maxRadius: width < 640 ? 120 : 180, alpha: 0.6 });
      }
    };
    const handleTouchMove = (e: TouchEvent) => { if (e.touches.length > 0) updatePointer(e.touches[0].clientX, e.touches[0].clientY); };
    const handleTouchEnd = () => { pointer.isActive = false; pointer.x = -1000; pointer.y = -1000; };
    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      ripples.push({ x: e.clientX - rect.left, y: e.clientY - rect.top, radius: 10, maxRadius: 180, alpha: 0.55 });
    };
    const handleVisibilityChange = () => { isVisible = document.visibilityState === 'visible'; };

    window.addEventListener('resize', resizeCanvas, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('click', handleClick, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    resizeCanvas();

    const getColorRgb = (type: Particle['colorType'], dark: boolean) => {
      if (dark) {
        switch (type) {
          case 'cyan': return '56, 189, 248';
          case 'indigo': return '129, 140, 248';
          case 'purple': return '192, 132, 252';
          default: return '226, 232, 240';
        }
      } else {
        switch (type) {
          case 'cyan': return '2, 132, 199';
          case 'indigo': return '79, 70, 229';
          case 'purple': return '147, 51, 234';
          default: return '100, 116, 139';
        }
      }
    };

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const dark = isDarkTheme();
      const isMobile = width < 640;

      // 1. Draw Orbs
      ctx.globalCompositeOperation = dark ? 'screen' : 'multiply';
      for (let i = 0; i < orbs.length; i++) {
        const orb = orbs[i];
        orb.x += orb.vx;
        orb.y += orb.vy;
        orb.phase += orb.phaseSpeed;

        if (orb.x < -orb.radius) orb.x = width + orb.radius;
        if (orb.x > width + orb.radius) orb.x = -orb.radius;
        if (orb.y < -orb.radius) orb.y = height + orb.radius;
        if (orb.y > height + orb.radius) orb.y = -orb.radius;

        const currentRadius = orb.radius + Math.sin(orb.phase) * (orb.radius * 0.15);
        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, currentRadius);
        const orbMaxAlpha = dark ? (isMobile ? 0.08 : 0.12) : (isMobile ? 0.04 : 0.07);

        gradient.addColorStop(0, `rgba(${orb.color}, ${orbMaxAlpha})`);
        gradient.addColorStop(0.5, `rgba(${orb.color}, ${orbMaxAlpha * 0.45})`);
        gradient.addColorStop(1, `rgba(${orb.color}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = 'source-over';

      // 2. Draw Comets
      spawnComet();
      for (let i = comets.length - 1; i >= 0; i--) {
        const c = comets[i];
        c.x += c.vx;
        c.y += c.vy;

        const grad = ctx.createLinearGradient(c.x, c.y, c.x - c.vx * c.length * 0.1, c.y - c.vy * c.length * 0.1);
        grad.addColorStop(0, `rgba(${c.color}, ${c.alpha})`);
        grad.addColorStop(1, `rgba(${c.color}, 0)`);

        ctx.beginPath();
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(c.x - c.vx * c.length * 0.1, c.y - c.vy * c.length * 0.1);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.stroke();

        if (c.x > width + 100 || c.y > height + 100) {
          comets.splice(i, 1);
        }
      }

      // 3. Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 4;
        r.alpha *= 0.92;

        if (r.alpha < 0.02 || r.radius > r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        const rippleColor = dark ? '56, 189, 248' : '37, 99, 235';
        ctx.strokeStyle = `rgba(${rippleColor}, ${r.alpha * 0.6})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // 4. Particles & Geometric Plexus
      const maxConnectDist = isMobile ? 100 : 140;
      const primaryLineColor = dark ? '56, 189, 248' : '37, 99, 235';
      const secondaryLineColor = dark ? '168, 85, 247' : '147, 51, 234';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -20) p.x = width + 20;
        else if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        else if (p.y > height + 20) p.y = -20;

        p.phase += p.phaseSpeed;
        p.alpha = p.baseAlpha + Math.sin(p.phase) * 0.2;

        const dx = p.x - pointer.x;
        const dy = p.y - pointer.y;
        const dist = Math.hypot(dx, dy);

        // Vortex Swirl Effect on Pointer
        if (pointer.isActive && dist < pointer.radius) {
          const force = (1 - dist / pointer.radius) * 0.8;
          // Pull slightly in
          p.x -= (dx / (dist || 1)) * force;
          p.y -= (dy / (dist || 1)) * force;
          // Tangential push (swirl)
          p.x += (dy / (dist || 1)) * force * 3;
          p.y -= (dx / (dist || 1)) * force * 3;
        }

        const rgb = getColorRgb(p.colorType, dark);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${p.alpha})`;
        ctx.fill();

        // Connect particles (Geometric Plexus - connecting 3 points if close)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist1 = Math.hypot(p.x - p2.x, p.y - p2.y);

          if (dist1 < maxConnectDist) {
            // Draw line
            const proximityFactor = 1 - dist1 / maxConnectDist;
            const lineAlpha = proximityFactor * (dark ? 0.3 : 0.15);

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${i % 2 === 0 ? primaryLineColor : secondaryLineColor}, ${lineAlpha})`;
            ctx.lineWidth = proximityFactor * 1.5 + 0.2;
            ctx.stroke();

            // Try to find a 3rd point for a filled polygon
            for (let k = j + 1; k < particles.length; k++) {
              const p3 = particles[k];
              const dist2 = Math.hypot(p2.x - p3.x, p2.y - p3.y);
              const dist3 = Math.hypot(p.x - p3.x, p.y - p3.y);

              if (dist2 < maxConnectDist && dist3 < maxConnectDist) {
                const polyAlpha = Math.min(1 - dist1 / maxConnectDist, 1 - dist2 / maxConnectDist, 1 - dist3 / maxConnectDist) * (dark ? 0.06 : 0.03);
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.lineTo(p3.x, p3.y);
                ctx.closePath();
                ctx.fillStyle = `rgba(${primaryLineColor}, ${polyAlpha})`;
                ctx.fill();
              }
            }
          }
        }

        // Pointer connection rays
        if (pointer.isActive && dist < pointer.radius * 1.2) {
          const pointerProximity = 1 - dist / (pointer.radius * 1.2);
          const tetherAlpha = pointerProximity * (dark ? 0.5 : 0.35);

          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.strokeStyle = `rgba(${primaryLineColor}, ${tetherAlpha})`;
          ctx.lineWidth = pointerProximity * 1.5 + 0.5;
          ctx.stroke();
        }
      }

      // 5. Glow on pointer
      if (pointer.isActive && pointer.x > 0 && pointer.y > 0) {
        const glowRadius = isMobile ? 45 : 60;
        const glowGradient = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, glowRadius);
        const glowColor = dark ? '168, 85, 247' : '99, 102, 241';
        glowGradient.addColorStop(0, `rgba(${glowColor}, ${dark ? 0.3 : 0.2})`);
        glowGradient.addColorStop(1, `rgba(${glowColor}, 0)`);

        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('click', handleClick);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 w-full h-full opacity-90 transition-opacity duration-700"
    />
  );
}
