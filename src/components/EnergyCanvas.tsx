'use client';

import { useEffect, useRef } from 'react';

export function EnergyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const mouse = { x: -1000, y: -1000 };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initBling();
        };

        class Particle {
            x: number = 0;
            y: number = 0;
            size: number = 0;
            speedX: number = 0;
            speedY: number = 0;
            alpha: number = 0;
            twinklePhase: number = 0;

            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.4;
                this.speedY = (Math.random() - 0.5) * 0.4;
                this.alpha = Math.random() * 0.5 + 0.1;
                this.twinklePhase = Math.random() * Math.PI * 2;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.twinklePhase += 0.02;
                this.alpha = (Math.sin(this.twinklePhase) + 1) / 2 * 0.6 + 0.1;

                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 150) {
                    this.alpha = Math.min(this.alpha + 0.5, 1);
                    this.x += dx * 0.01;
                    this.y += dy * 0.01;
                }

                if (this.x < 0 || this.x > canvas!.width || this.y < 0 || this.y > canvas!.height) {
                    this.reset();
                }
            }

            draw() {
                ctx!.beginPath();
                ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx!.fillStyle = `rgba(195, 176, 145, ${this.alpha})`;
                if (this.alpha > 0.6) {
                    ctx!.shadowBlur = 15;
                    ctx!.shadowColor = 'rgba(245, 230, 200, 0.8)';
                } else {
                    ctx!.shadowBlur = 0;
                }
                ctx!.fill();
            }
        }

        const initBling = () => {
            particles = [];
            const count = Math.floor((canvas.width * canvas.height) / 10000);
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        };

        const animateBling = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const auraGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 300);
            auraGrad.addColorStop(0, 'rgba(229, 221, 208, 0.15)');
            auraGrad.addColorStop(1, 'rgba(244, 241, 234, 0)');
            ctx.fillStyle = auraGrad;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            animationFrameId = requestAnimationFrame(animateBling);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);

        resize();
        animateBling();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            id="energy-canvas"
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
        />
    );
}
