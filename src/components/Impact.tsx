'use client';

import { useEffect, useRef } from 'react';
import { AnimatedCounter } from './AnimatedCounter';
import { TiltCard } from './TiltCard';

export function Impact() {
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
        <section ref={sectionRef} id="impact" className="py-20 md:py-32 px-6 md:px-24 bg-[#F5F2EC] relative z-10 border-t border-black/5">
            <div className="max-w-6xl mx-auto">

                {/* Scale of Influence Header */}
                <div className="text-center mb-8 md:mb-12 blur-reveal">
                    <span className="text-[11px] uppercase tracking-[0.6em] text-deep-charcoal font-bold block mb-6">Scale of Influence</span>
                    <h2 className="serif text-6xl md:text-9xl text-deep-charcoal">
                        <span className="italic">The</span> <span className="text-khaki-dark opacity-60">Impact.</span>
                    </h2>
                </div>

                {/* Statistical Impact (Two Columns) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 mb-24 text-center blur-reveal">

                    {/* Stat 1 */}
                    <div className="flex flex-col items-center">
                        <h4 className="serif text-8xl md:text-[8rem] italic text-deep-charcoal mb-4 tracking-tighter">
                            <AnimatedCounter endValue={12700} duration={2500} suffix="+" />
                        </h4>
                        <p className="text-[11px] md:text-[13px] uppercase tracking-[0.5em] font-bold text-deep-charcoal mb-6">Training Achievements</p>
                        <p className="serif italic text-lg md:text-xl text-deep-charcoal opacity-60">
                            Over twelve thousand makeup artists trained globally.
                        </p>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex flex-col items-center">
                        <h4 className="serif text-8xl md:text-[8rem] italic text-deep-charcoal mb-4 tracking-tighter">
                            <AnimatedCounter endValue={10000} duration={2500} suffix="+" />
                        </h4>
                        <p className="text-[11px] md:text-[13px] uppercase tracking-[0.5em] font-bold text-deep-charcoal mb-6">Client Portfolio</p>
                        <p className="serif italic text-lg md:text-xl text-deep-charcoal opacity-60">
                            Ten thousand visual identities redefined and curated.
                        </p>
                    </div>
                </div>

                {/* The Authority Header */}
                <div className="mt-40 mb-20 text-center blur-reveal">
                    <span className="text-[11px] uppercase tracking-[0.6em] text-deep-charcoal font-bold block mb-6">The Pedigree of Excellence</span>
                    <h2 className="serif text-6xl md:text-9xl text-deep-charcoal">
                        <span className="italic">The</span> <span className="text-khaki-dark opacity-60">Authority.</span>
                    </h2>
                </div>

                {/* Legacy Box */}
                <div className="w-full border border-black/5 bg-[#F8F6F1] p-12 md:p-16 mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-12 blur-reveal">
                    <div>
                        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-deep-charcoal block mb-6">Institutional Legacy</span>
                        <h3 className="serif text-5xl md:text-6xl text-deep-charcoal leading-tight mb-4">
                            ESL Image &<br />
                            <span className="italic">Makeup Academy</span>
                        </h3>
                        <p className="serif text-2xl text-deep-charcoal opacity-70">Founder & Principal Mentor</p>
                    </div>
                    <div className="md:max-w-md text-left md:text-right">
                        <p className="text-[11px] md:text-[13px] uppercase tracking-[0.2em] font-medium text-deep-charcoal opacity-50 leading-loose">
                            Setting the gold standard for image engineering and aesthetic education across Southeast Asia for over 26 years.
                        </p>
                    </div>
                </div>

                {/* 3 Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

                    {/* Column 1: Leadership */}
                    <TiltCard className="bg-white/40 backdrop-blur-md border border-white/40 shadow-xl p-12 rounded-xl blur-reveal" style={{ transitionDelay: '0ms' }}>
                        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-deep-charcoal block mb-12">01 / Leadership</span>
                        <h4 className="serif text-4xl text-deep-charcoal mb-12">Executive Roles</h4>
                        <ul className="space-y-8 relative z-10">
                            <li className="flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-khaki-base mt-2 mr-4 flex-shrink-0"></span>
                                <p className="text-sm text-deep-charcoal leading-relaxed"><strong className="font-semibold">2026</strong> JCI Puchong President</p>
                            </li>
                            <li className="flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-khaki-base mt-2 mr-4 flex-shrink-0"></span>
                                <p className="text-sm text-deep-charcoal leading-relaxed"><strong className="font-semibold">2025</strong> BNI ZHIYA President</p>
                            </li>
                            <li className="flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-khaki-base mt-2 mr-4 flex-shrink-0"></span>
                                <p className="text-sm text-deep-charcoal leading-relaxed"><strong className="font-semibold">2025</strong> JCI Puchong Vice President</p>
                            </li>
                            <li className="flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-khaki-base mt-2 mr-4 flex-shrink-0"></span>
                                <p className="text-sm text-deep-charcoal leading-relaxed"><strong className="font-semibold">2023</strong> JCI MINES Vice President</p>
                            </li>
                        </ul>
                    </TiltCard>

                    {/* Column 2: Pedagogy */}
                    <TiltCard className="bg-white/40 backdrop-blur-md border border-white/40 shadow-xl p-12 rounded-xl blur-reveal" style={{ transitionDelay: '100ms' }}>
                        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-deep-charcoal block mb-12">02 / Pedagogy</span>
                        <h4 className="serif text-4xl text-deep-charcoal mb-12">Academic Stature</h4>
                        <ul className="space-y-8 relative z-10">
                            <li className="flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-khaki-base mt-2 mr-4 flex-shrink-0"></span>
                                <p className="text-sm text-deep-charcoal leading-relaxed"><strong className="font-semibold">2025</strong> NCS Certified Train The Trainer</p>
                            </li>
                            <li className="flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-khaki-base mt-2 mr-4 flex-shrink-0"></span>
                                <p className="text-sm text-deep-charcoal leading-relaxed"><strong className="font-semibold">2025</strong> HRDC Certified Train The Trainer</p>
                            </li>
                            <li className="flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-khaki-base mt-2 mr-4 flex-shrink-0"></span>
                                <p className="text-sm text-deep-charcoal leading-relaxed"><strong className="font-semibold">2022</strong> Universiti Teknologi Malaysia Makeup Educator</p>
                            </li>
                            <li className="flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-khaki-base mt-2 mr-4 flex-shrink-0"></span>
                                <p className="text-sm text-deep-charcoal leading-relaxed">IBCI Professional Makeup Educator Certification</p>
                            </li>
                        </ul>
                    </TiltCard>

                    {/* Column 3: Prestige */}
                    <TiltCard className="bg-white/40 backdrop-blur-md border border-white/40 shadow-xl p-12 rounded-xl blur-reveal" style={{ transitionDelay: '200ms' }}>
                        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-deep-charcoal block mb-12">03 / Prestige</span>
                        <h4 className="serif text-4xl text-deep-charcoal mb-12">Honors & Media</h4>
                        <ul className="space-y-8 relative z-10">
                            <li className="flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-khaki-base mt-2 mr-4 flex-shrink-0"></span>
                                <p className="text-sm text-deep-charcoal leading-relaxed"><strong className="font-semibold">2024</strong> Britishpedia Media: Successful People in Malaysia & Singapore</p>
                            </li>
                            <li className="flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-khaki-base mt-2 mr-4 flex-shrink-0"></span>
                                <p className="text-sm text-deep-charcoal leading-relaxed"><strong className="font-semibold">2022</strong> MIE Malaysia's Most Influential Educator Award</p>
                            </li>
                            <li className="flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-khaki-base mt-2 mr-4 flex-shrink-0"></span>
                                <p className="text-sm text-deep-charcoal leading-relaxed"><strong className="font-semibold">2021</strong> Outstanding Intellectual Figure of the Year Award</p>
                            </li>
                            <li className="flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-khaki-base mt-2 mr-4 flex-shrink-0"></span>
                                <p className="text-sm text-deep-charcoal leading-relaxed"><strong className="font-semibold">2019</strong> Asia Pacific Outstanding Emerging Enterprise Award</p>
                            </li>
                            <li className="flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-khaki-base mt-2 mr-4 flex-shrink-0"></span>
                                <p className="text-sm text-deep-charcoal leading-relaxed"><strong className="font-semibold">2018</strong> TOP International Beauty & Fashion Awards</p>
                            </li>
                            <li className="flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-khaki-base mt-2 mr-4 flex-shrink-0"></span>
                                <p className="text-sm text-deep-charcoal leading-relaxed"><strong className="font-semibold">2017</strong> Golden Phoenix & Prestige Enterprise Awards</p>
                            </li>
                        </ul>
                    </TiltCard>
                </div>
            </div>
        </section>
    );
}
