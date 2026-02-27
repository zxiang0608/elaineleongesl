'use client';

import { useEffect, useRef } from 'react';

export function Ability() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        if (sectionRef.current) {
            sectionRef.current.querySelectorAll('.blur-reveal').forEach((el) => {
                observer.observe(el);
            });
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="ability" className="py-40 px-6 md:px-24 bg-white/10 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-12 lg:col-span-5 mb-24 lg:mb-0 lg:sticky lg:top-40 h-fit z-20 bg-off-white/80 backdrop-blur-md lg:bg-transparent p-4 lg:p-0 rounded-lg text-deep-charcoal">
                        <h2 className="serif text-6xl md:text-8xl mb-8 leading-tight">
                            The <br />
                            <span className="italic text-khaki-base">Framework.</span>
                        </h2>
                        <p className="text-gray-500 text-lg leading-loose max-w-sm mb-12 font-light opacity-70">
                            A technical blueprint for visual communication. We align your biological data with your professional trajectory.
                        </p>
                        <div className="w-16 h-[1px] bg-khaki-dark opacity-30"></div>
                    </div>

                    <div className="col-span-12 lg:col-span-7 space-y-52 z-10 text-deep-charcoal">
                        <div className="flex flex-col md:flex-row gap-16 items-center blur-reveal">
                            <div className="w-full md:w-1/2 aspect-[4/5] overflow-hidden bg-white shadow-2xl relative">
                                <img
                                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
                                    className="w-full h-full object-cover grayscale"
                                    alt="Framework Stage 1"
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <span className="text-khaki-dark font-bold text-[10px] tracking-[0.4em] mb-6 block uppercase">Stage 01</span>
                                <h3 className="serif text-4xl mb-6 italic">Biological Harmony</h3>
                                <p className="text-gray-500 leading-relaxed font-light text-sm opacity-70">
                                    Decoding your skin&apos;s unique chromatic frequency to build a palette that isn&apos;t just aesthetic—it&apos;s resonant.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row-reverse gap-16 items-center blur-reveal">
                            <div className="w-full md:w-1/2 aspect-[4/5] overflow-hidden bg-white shadow-2xl relative">
                                <img
                                    src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop"
                                    className="w-full h-full object-cover grayscale"
                                    alt="Framework Stage 2"
                                />
                            </div>
                            <div className="w-full md:w-1/2 text-right md:text-left">
                                <span className="text-khaki-dark font-bold text-[10px] tracking-[0.4em] mb-6 block uppercase">Stage 02</span>
                                <h3 className="serif text-4xl mb-6 italic">Proportion Sculpting</h3>
                                <p className="text-gray-500 leading-relaxed font-light text-sm opacity-70">
                                    Using architectural proportion theory to curate a silhouette that commands the room instantly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
