"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
  rotation: number;
  vRot: number;
  shape: "rect" | "circle" | "line" | "blurred-circle";
  opacity: number;
  wobble: number;
  wobbleSpeed: number;
}

export default function ConfettiCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Pembe, mor, altın ve uçuk mavi tonları
    const colors = [
      "#EC4899", // Vibrant Pink
      "#F472B6", // Soft Pink
      "#8B5CF6", // Royal Purple
      "#C084FC", // Soft Purple
      "#F59E0B", // Luxury Gold
      "#FDE047", // Bright Gold
      "#38BDF8", // Sky Blue (Uçuk Mavi)
      "#7DD3FC", // Light Sky Blue
    ];

    const shapes: ("rect" | "circle" | "line" | "blurred-circle")[] = [
      "rect",
      "circle",
      "line",
      "blurred-circle",
    ];

    const createParticle = (): Particle => {
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: shape === "blurred-circle" ? Math.random() * 24 + 12 : Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 1.2,
        vy: Math.random() * 0.8 + 0.3, // Süzülen hareket
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 4,
        shape,
        opacity: Math.random() * 0.6 + 0.25,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.03 + 0.01,
      };
    };

    // 100 süzülen konfeti parçacığı
    const particles: Particle[] = Array.from({ length: 100 }, () => createParticle());

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx + Math.sin(p.wobble) * 0.6;
        p.y += p.vy;
        p.wobble += p.wobbleSpeed;
        p.rotation += p.vRot;

        // Ekrandan çıkınca yukarıdan tekrar süzülsün
        if (p.y > height + 30) {
          p.y = -20;
          p.x = Math.random() * width;
          p.opacity = Math.random() * 0.6 + 0.25;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;

        ctx.fillStyle = p.color;

        if (p.shape === "rect") {
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        } else if (p.shape === "circle") {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === "line") {
          ctx.beginPath();
          ctx.moveTo(-p.size, 0);
          ctx.lineTo(p.size, 0);
          ctx.lineWidth = 2.5;
          ctx.strokeStyle = p.color;
          ctx.stroke();
        } else if (p.shape === "blurred-circle") {
          ctx.shadowBlur = 18;
          ctx.shadowColor = p.color;
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
