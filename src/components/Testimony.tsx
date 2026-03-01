'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

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

    const writtenTestimonies = [
        {
            quote: "I've never felt so powerful entering a boardroom. Elaine didn't just change my wardrobe; she re-engineered my entire executive aura. The results were immediate.",
            name: "Sarah Jenkins",
            role: "Chief Marketing Officer"
        },
        {
            quote: "The 'Shift' is real. Within 3 weeks of implementing the aesthetic frequency alignment, our closing rate on high-ticket enterprise contracts increased by 40%.",
            name: "David Chen",
            role: "Founder & CEO, TechVentures"
        },
        {
            quote: "Elaine understands the psychology of first impressions better than anyone in the industry. Her approach is clinical, precise, and undeniably effective.",
            name: "Marcus Thorne",
            role: "VP of Global Sales"
        },
        {
            quote: "It's not about fashion; it's about visual authority. I went from being interrupted in meetings to commanding the room before I even spoke. Truly transformative.",
            name: "Elena Rodriguez",
            role: "Managing Director"
        }
    ];

    return (
        <section className="relative w-full py-24 md:py-32 bg-[#FAF9F6] dark:bg-neutral-950 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 mb-12 md:mb-16 relative z-10">
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

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8 max-w-[1400px] mx-auto">
                    {testimonies.map((testimony, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="w-full flex flex-col gap-5 lg:gap-6 mx-auto max-w-[400px] lg:max-w-none"
                        >
                            <div className="w-full aspect-square md:aspect-[3/4]">
                                <TestimonyCard beforeImage={testimony.before} afterImage={testimony.after} />
                            </div>

                            {/* Card Details */}
                            <div className="flex flex-col space-y-2 px-1 text-center md:text-left">
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
                </div>
            </div>

            {/* Video Testimonies Section */}
            <div className="container mx-auto px-4 md:px-6 mt-16 md:mt-24 relative z-10" >
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

            {/* Written Testimonies Section */}
            <div className="container mx-auto px-4 md:px-6 mt-16 md:mt-24 lg:mt-32 relative z-10 pb-12">
                <div className="flex flex-col items-center justify-center text-center space-y-4 mb-12">
                    <motion.h4
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="uppercase tracking-[0.3em] text-xs md:text-sm font-semibold text-neutral-800 dark:text-neutral-200"
                    >
                        The Impact
                    </motion.h4>
                    <motion.h3
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-5xl font-serif italic text-neutral-900 dark:text-neutral-50"
                        style={{ fontFamily: 'var(--font-playfair-display), serif' }}
                    >
                        Words of <span className="text-neutral-400 dark:text-neutral-500 font-sans not-italic font-medium text-2xl md:text-4xl">Authority.</span>
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {writtenTestimonies.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-neutral-900 p-8 md:p-10 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-800 flex flex-col justify-between"
                        >
                            <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8 italic font-serif">
                                "{item.quote}"
                            </p>
                            <div>
                                <h4 className="font-bold text-neutral-900 dark:text-neutral-100 uppercase tracking-widest text-xs mb-1">
                                    {item.name}
                                </h4>
                                <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                                    {item.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
