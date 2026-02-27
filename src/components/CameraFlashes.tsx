'use client';

import { useEffect, useState } from 'react';

export function CameraFlashes() {
    const [flashes, setFlashes] = useState<{ id: number; top: string; left: string; size: string; delay: string }[]>([]);

    useEffect(() => {
        // Generate random flashes periodically
        const generateFlashes = () => {
            const newFlashes = Array.from({ length: 3 }).map((_, i) => {
                // Decide if it spawns on the far left (0-15%) or far right (85-100%)
                const isLeft = Math.random() > 0.5;
                const leftPos = isLeft ? Math.random() * 15 : 85 + Math.random() * 15;

                return {
                    id: Date.now() + i,
                    top: `${Math.random() * 100}%`,
                    left: `${leftPos}%`,
                    size: `${Math.random() * 75 + 25}px`, // 25px to 100px (50% smaller)
                    delay: `${Math.random() * 1}s`, // 0s to 1s delay
                };
            });

            setFlashes(newFlashes);
        };

        // Initial flashes
        generateFlashes();

        // Interval to create new bursts of flashes every 1-2 seconds (faster)
        const interval = setInterval(() => {
            generateFlashes();
        }, Math.random() * 1000 + 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden mix-blend-screen">
            {flashes.map((flash) => (
                <div
                    key={flash.id}
                    className="absolute rounded-full bg-white opacity-0 animate-camera-flash"
                    style={{
                        top: flash.top,
                        left: flash.left,
                        width: flash.size,
                        height: flash.size,
                        animationDelay: flash.delay,
                        filter: 'blur(20px)',
                    }}
                />
            ))}
        </div>
    );
}
