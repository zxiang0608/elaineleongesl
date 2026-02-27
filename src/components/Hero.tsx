'use client';

import { useEffect, useRef } from 'react';

export function Hero() {
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // Keeping this effect empty or removing previously added mouse parallax listener
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        if (heroRef.current) {
            heroRef.current.querySelectorAll('.blur-reveal, .hero-visible').forEach((el) => {
                observer.observe(el);
            });
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-start px-4 md:px-6 pt-24 lg:pt-32 pb-12 overflow-hidden w-full max-w-[100vw] noise">

            <div className="z-10 w-full max-w-7xl mx-auto relative flex flex-col items-center overflow-hidden">

                {/* 1. Centered Headline */}
                <div className="text-center mb-8 md:mb-16 lg:mb-24 z-20 w-full max-w-full px-2">
                    <p className="uppercase tracking-[0.8em] text-[10px] md:text-[14px] mb-8 md:mb-10 text-khaki-dark font-bold hero-visible">Personal Brand Navigational System</p>
                    <h1 className="serif text-[11vw] sm:text-6xl md:text-[150px] font-light leading-[0.9] md:leading-[0.85] tracking-tight md:tracking-normal hero-visible mix-blend-multiply shimmer-text shrink-0 w-full flex flex-col items-center justify-center">
                        <span className="block w-full whitespace-nowrap">IMAGE IS</span>
                        <span className="italic text-khaki-dark block w-full mt-2 md:mt-0 whitespace-nowrap">ENERGY</span>
                    </h1>
                </div>

                {/* 2. Interlocked Content */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 hero-visible relative z-10 w-full">

                    {/* Credentials Section */}
                    <div className="text-center lg:text-right flex flex-col items-center lg:items-end order-2 lg:order-1">
                        {/* Quote Moved Here */}
                        <div className="mb-6 md:mb-10 w-full text-center lg:text-right px-8 md:px-0">
                            <p className="serif italic text-lg md:text-2xl leading-relaxed text-deep-charcoal">
                                &quot;People have <span className="not-italic font-semibold text-deep-charcoal">unlimited potential</span>;<br className="hidden md:block" />
                                only unbelievable goals can create unbelievable results&quot;
                            </p>
                        </div>

                        <p className="serif text-4xl md:text-6xl font-bold text-deep-charcoal mb-2 tracking-tight">Elaine Leong</p>
                        <h2 className="serif text-3xl md:text-4xl italic text-khaki-dark leading-tight mb-4">Image & Energy Consultant</h2>
                        <p className="text-[11px] md:text-[13px] font-sans font-bold tracking-[0.25em] uppercase text-deep-charcoal opacity-40 mb-10 leading-relaxed">
                            International Mentor & Stylist
                        </p>

                        <div className="flex flex-col lg:flex-row justify-center lg:justify-end items-center lg:items-center gap-8 md:gap-10 border-t border-khaki-dark/20 pt-8 w-full mt-4">
                            <div className="text-center lg:text-right">
                                <span className="text-[13px] md:text-[14px] tracking-[0.2em] font-semibold uppercase block opacity-40 mb-2 md:mb-1">Pedagogy</span>
                                <span className="text-[14px] md:text-[15px] tracking-[0.1em] font-bold uppercase text-deep-charcoal">16 Years Teaching</span>
                            </div>
                            <div className="hidden lg:block w-[1px] h-8 bg-khaki-dark/20"></div>
                            <div className="text-center lg:text-right">
                                <span className="text-[13px] md:text-[14px] tracking-[0.2em] font-semibold uppercase block opacity-40 mb-2 md:mb-1">Career Span</span>
                                <span className="text-[14px] md:text-[15px] tracking-[0.1em] font-bold uppercase text-deep-charcoal">26 Years Industry</span>
                            </div>
                        </div>
                    </div>

                    {/* Arch Photo of Elaine Leong */}
                    <div className="consultant-frame order-1 lg:order-2">
                        <img
                            src="/images/hero-portrait.jpg"
                            className="w-full h-full object-cover brightness-110 contrast-105"
                            alt="Elaine Leong"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
