import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  pulseSpeed: number;
}

interface FloatingCoin {
  x: number;
  y: number;
  vy: number;
  size: number;
  symbol: string;
  alpha: number;
}

export const FuturisticCyberMatrix: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Cyber laser particles
    const particleCount = Math.min(width < 768 ? 40 : 75, 75);
    const colors = ['#06b6d4', '#8b5cf6', '#3b82f6', '#ec4899', '#10b981'];
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.3,
        pulseSpeed: Math.random() * 0.02 + 0.01
      });
    }

    // Floating currency symbols (₹, ₿, $, %)
    const coins: FloatingCoin[] = [];
    const symbols = ['₹', '₹', '%', '₹', 'k'];
    for (let i = 0; i < 12; i++) {
      coins.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vy: -(Math.random() * 0.4 + 0.2),
        size: Math.random() * 6 + 10,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        alpha: Math.random() * 0.25 + 0.1
      });
    }

    // Interactive mouse coordinates with smooth lerping
    const mouse = { x: -1000, y: -1000, currentX: -1000, currentY: -1000, maxDist: 130 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (mouse.currentX === -1000) {
        mouse.currentX = e.clientX;
        mouse.currentY = e.clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
        if (mouse.currentX === -1000) {
          mouse.currentX = mouse.x;
          mouse.currentY = mouse.y;
        }
      }
    };

    const handleLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('mouseleave', handleLeave);

    const maxConnectionDist = width < 768 ? 95 : 130;
    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Smooth cursor follower lerp
      if (mouse.x !== -1000) {
        mouse.currentX += (mouse.x - mouse.currentX) * 0.1;
        mouse.currentY += (mouse.y - mouse.currentY) * 0.1;

        // Draw Interactive Neon Glow Aura around cursor
        const auraGradient = ctx.createRadialGradient(
          mouse.currentX, mouse.currentY, 0,
          mouse.currentX, mouse.currentY, 180
        );
        auraGradient.addColorStop(0, 'rgba(6, 182, 212, 0.12)');
        auraGradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.05)');
        auraGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = auraGradient;
        ctx.beginPath();
        ctx.arc(mouse.currentX, mouse.currentY, 180, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw floating currency symbols
      ctx.font = 'bold 12px monospace';
      for (let i = 0; i < coins.length; i++) {
        const c = coins[i];
        c.y += c.vy;
        if (c.y < -20) {
          c.y = height + 20;
          c.x = Math.random() * width;
        }

        ctx.fillStyle = '#06b6d4';
        ctx.globalAlpha = c.alpha * (0.6 + 0.4 * Math.sin(time + i));
        ctx.fillText(c.symbol, c.x, c.y);
      }

      // Draw particle connections & nodes
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Update position
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0) p1.x = width;
        if (p1.x > width) p1.x = 0;
        if (p1.y < 0) p1.y = height;
        if (p1.y > height) p1.y = 0;

        // Mouse interaction
        const dxMouse = mouse.currentX - p1.x;
        const dyMouse = mouse.currentY - p1.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < mouse.maxDist) {
          const force = (1 - distMouse / mouse.maxDist) * 0.6;
          p1.x -= dxMouse * force * 0.04;
          p1.y -= dyMouse * force * 0.04;
        }

        // Draw particle dot with glow
        const currentRadius = p1.radius * (0.8 + 0.3 * Math.sin(time * 2 + i));
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.globalAlpha = p1.alpha;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p1.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw laser connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectionDist) {
            const lineAlpha = (1 - dist / maxConnectionDist) * 0.25;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p1.color;
            ctx.globalAlpha = lineAlpha;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseleave', handleLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Cyber Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(6, 182, 212, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Cyber Ambient Glowing Orbs with Pulsing Animation */}
      <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] bg-cyan-600/10 rounded-full blur-[140px] animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />
      <div className="absolute top-2/3 right-1/4 w-[30rem] h-[30rem] bg-purple-600/10 rounded-full blur-[130px] animate-pulse pointer-events-none" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[25rem] h-[25rem] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Interactive Laser Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
    </div>
  );
};
