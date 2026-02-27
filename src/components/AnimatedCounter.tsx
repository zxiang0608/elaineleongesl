'use client';

import { useEffect, useRef, useState } from 'react';

export function AnimatedCounter({
    endValue,
    duration = 2000,
    suffix = "+"
}: {
    endValue: number;
    duration?: number;
    suffix?: string;
}) {
    const [count, setCount] = useState(0);
    const elementRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    startAnimation();
                    observer.disconnect(); // Only animate once
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const startAnimation = () => {
        let startTime: number | null = null;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = currentTime - startTime;

            // Easing function (easeOutExpo) to slow down towards the end
            const easeProgress = progress === duration ? 1 : 1 - Math.pow(2, -10 * progress / duration);

            if (progress < duration) {
                setCount(Math.floor(endValue * easeProgress));
                requestAnimationFrame(animate);
            } else {
                setCount(endValue);
            }
        };

        requestAnimationFrame(animate);
    };

    return (
        <span ref={elementRef}>
            {count.toLocaleString()}{suffix}
        </span>
    );
}
