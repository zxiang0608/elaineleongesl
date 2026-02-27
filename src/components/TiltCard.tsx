'use client';

import React, { useRef, useState, useEffect, ReactNode } from 'react';

interface TiltCardProps {
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export function TiltCard({ children, className = '', style = {} }: TiltCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [sheenX, setSheenX] = useState(0);
    const [sheenY, setSheenY] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // Mouse position relative to the card center
        const x = e.clientX - rect.left - width / 2;
        const y = e.clientY - rect.top - height / 2;

        // Calculate rotation limits (max 10 degrees)
        const dampen = 20;
        setRotateX(-(y / height) * dampen);
        setRotateY((x / width) * dampen);

        // Calculate sheen position based on mouse proximity
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        setSheenX((mouseX / width) * 100);
        setSheenY((mouseY / height) * 100);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <div
            ref={cardRef}
            className={`relative transform-gpu transition-all duration-300 ease-out overflow-hidden ${className}`}
            style={{
                transform: isHovered
                    ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
                    : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                transformStyle: 'preserve-3d',
                ...style
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Base Content */}
            <div className="relative z-10 h-full w-full">
                {children}
            </div>

            {/* Specular Sheen Effect (Layered on top but behind content) */}
            <div
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 ease-out"
                style={{
                    background: `radial-gradient(circle at ${sheenX}% ${sheenY}%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 50%)`,
                    opacity: isHovered ? 1 : 0,
                }}
            />

            {/* Glassmorphism Border Highlights */}
            <div
                className="pointer-events-none absolute inset-0 z-20 border border-white/20 transition-opacity duration-300 rounded-inherit"
                style={{ opacity: isHovered ? 1 : 0.5 }}
            />
        </div>
    );
}
