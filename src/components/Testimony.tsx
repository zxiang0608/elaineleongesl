'use client';

import { useState, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

interface TestimonyCardProps {
    beforeImage: string;
    afterImage: string;
}

const TestimonyCard = ({ beforeImage, afterImage }: TestimonyCardProps) => {
    const [position, setPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handlePointerMove = (e: React.PointerEvent | React.MouseEvent | React.TouchEvent) => {
        if (!containerRef.current) return;
        const { left, width } = containerRef.current.getBoundingClientRect();

        // Support for both mouse and touch events
        let clientX = 0;
        if ('touches' in e) {
            if (e.touches.length > 0) {
                clientX = e.touches[0].clientX;
            } else {
                return; // No touch points
            }
        } else {
            clientX = (e as React.MouseEvent).clientX;
        }

        const x = clientX - left;
        const newPosition = (x / width) * 100;

        setPosition(Math.min(Math.max(newPosition, 0), 100));
    };

    const handlePointerDown = (e: React.PointerEvent) => {
        e.currentTarget.setPointerCapture(e.pointerId);
    };

    const handlePointerUp = (e: React.PointerEvent) => {
        e.currentTarget.releasePointerCapture(e.pointerId);
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-square sm:aspect-[3/4] shrink-0 rounded-lg overflow-hidden cursor-ew-resize group shadow-sm bg-neutral-100 dark:bg-neutral-900"
            onPointerMove={handlePointerMove}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            // Allow horizontal scrolling on the container to happen when dragging up/down, but prevent swipe back gestures
            style={{ touchAction: 'pan-y pinch-zoom' }}
        >
            {/* After Image (Background) */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${afterImage}')`, pointerEvents: 'none' }}
            />

            {/* Before Image (Foreground - Clipped) */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('${beforeImage}')`,
                    clipPath: `inset(0 ${100 - position}% 0 0)`,
                    pointerEvents: 'none'
                }}
            />

            {/* Slider Line & Handle */}
            <div
                className="absolute inset-y-0 w-[3px] bg-white shadow-[0_0_15px_rgba(0,0,0,0.2)] z-10"
                style={{ left: `${position}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black font-bold text-[9px] sm:text-[10px] tracking-[0.2em] px-5 py-2 sm:px-6 sm:py-2.5 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] whitespace-nowrap select-none transition-transform duration-200 group-hover:scale-105">
                    SHIFT
                </div>
            </div>
        </div>
    );
};

export function Testimony() {
    const testimonies = [
        {
            before: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
            after: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
            tag: '01 / CORPORATE REBIRTH',
            title: 'Visual Authority Engineering'
        },
        {
            before: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop',
            after: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop',
            tag: '02 / CREATIVE PIVOT',
            title: 'Aesthetic Frequency Alignment'
        },
        {
            before: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop',
            after: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop',
            tag: '03 / EXECUTIVE PRESENCE',
            title: 'Subconscious Impact Strategy'
        },
        {
            before: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop',
            after: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop',
            tag: '04 / BRAND ASCENSION',
            title: 'High-Ticket Aura Design'
        }
    ];

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const { scrollXProgress } = useScroll({ container: scrollContainerRef });

    return (
        <section className="relative w-full py-24 md:py-32 bg-[#FAF9F6] dark:bg-neutral-950 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 mb-16 relative z-10">
                <div className="flex flex-col items-center justify-center text-center space-y-6">
                    <motion.h4
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="uppercase tracking-[0.3em] text-xs md:text-sm font-semibold text-neutral-800 dark:text-neutral-200"
                    >
                        Witness the real shift
                    </motion.h4>

                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-serif italic text-neutral-900 dark:text-neutral-50 leading-none"
                        style={{
                            fontFamily: 'var(--font-playfair-display), serif',
                            fontWeight: 400
                        }}
                    >
                        The <span className="text-neutral-400 dark:text-neutral-500 font-sans not-italic font-medium">Shift.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xs tracking-[0.2em] md:text-sm uppercase text-neutral-500 dark:text-neutral-400 mt-8 mb-4 max-w-lg mx-auto"
                    >
                        Slide across any card to reveal the energy transformation
                    </motion.p>
                </div>
            </div>

            <div className="relative w-full overflow-hidden">
                {/* Desktop Grid Layout (lg+), Scrollable Container for Mobile/Tablet */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto lg:grid lg:grid-cols-4 snap-x snap-mandatory lg:snap-none hide-scrollbar gap-4 md:gap-6 px-4 md:px-12 lg:px-8 pb-12 pt-4 items-start"
                >
                    {/* Spacer for mobile/tablet only */}
                    <div className="flex-shrink-0 w-4 md:w-8 lg:hidden" aria-hidden="true" />

                    {testimonies.map((testimony, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="snap-center w-[85vw] sm:w-[350px] lg:w-auto flex-shrink-0 lg:flex-shrink flex flex-col gap-6"
                        >
                            <div className="w-full aspect-square sm:aspect-[3/4]">
                                <TestimonyCard beforeImage={testimony.before} afterImage={testimony.after} />
                            </div>

                            {/* Card Details (Mobile specific matching reference) */}
                            <div className="flex flex-col space-y-2 px-1">
                                <span className="uppercase tracking-[0.15em] text-[10px] font-bold text-neutral-500 dark:text-neutral-400">
                                    {testimony.tag}
                                </span>
                                <h3
                                    className="text-2xl md:text-3xl font-serif italic text-neutral-900 dark:text-neutral-100"
                                    style={{ fontFamily: 'var(--font-playfair-display), serif' }}
                                >
                                    {testimony.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}

                    {/* Spacer for mobile/tablet only */}
                    <div className="flex-shrink-0 w-4 md:w-8 lg:hidden" aria-hidden="true" />
                </div>

                {/* Mobile Scroll Progress Indicator */}
                <div className="flex lg:hidden flex-col items-center justify-center mt-2 mb-8 space-y-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-neutral-400 dark:text-neutral-500">
                        Swipe to explore
                    </span>
                    <div className="w-full max-w-[150px] h-[2px] bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-neutral-800 dark:bg-neutral-300"
                            style={{
                                scaleX: scrollXProgress,
                                transformOrigin: 'left'
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Video Testimonies Section */}
            <div className="container mx-auto px-4 md:px-6 mt-16 md:mt-24 relative z-10">
                <div className="flex flex-col items-center justify-center text-center space-y-4 mb-12 lg:mb-16">
                    <motion.h4
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="uppercase tracking-[0.3em] text-xs md:text-sm font-semibold text-neutral-800 dark:text-neutral-200"
                    >
                        Hear their stories
                    </motion.h4>

                    <motion.h3
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-serif italic text-neutral-900 dark:text-neutral-50"
                        style={{ fontFamily: 'var(--font-playfair-display), serif' }}
                    >
                        Unedited <span className="text-neutral-400 dark:text-neutral-500 font-sans not-italic font-medium text-3xl md:text-5xl">Truth.</span>
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
                    {[1, 2, 3, 4].map((_, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 shadow-md group"
                        >
                            <iframe
                                className="absolute inset-0 w-full h-full border-0"
                                src="https://www.youtube.com/embed/9qDkh6e8R2Q?rel=0"
                                title="Elaine Image Academy Testimony"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    );
}
