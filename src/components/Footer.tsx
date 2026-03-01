'use client';

import { ArrowUpRight, MessageCircle } from 'lucide-react';

export function Footer() {
    const socials = [
        { name: 'Instagram', url: 'https://www.instagram.com/invites/contact/?i=arx46j9p69tp&utm_content=6o2nnv9' },
        { name: 'Xiaohongshu', url: 'https://www.xiaohongshu.com/user/profile/5eba09e50000000001006871?xhsshare=CopyLink&appuid=5eba09e50000000001006871&apptime=1666870698' },
        { name: 'TikTok', url: 'https://vt.tiktok.com/ZSJD2BY41/' },
        { name: 'Facebook Page', url: 'https://www.facebook.com/esl27/' },
        { name: 'Facebook Profile', url: 'https://www.facebook.com/elaineleong0327' },
    ];
    return (
        <footer id="contact" className="studio-vignette text-deep-charcoal noise pt-24 pb-12 px-6 md:px-12 lg:px-24 relative z-10 border-t border-black/5">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* 1. Header & Ecosystem */}
                <div className="w-full mb-20 md:mb-32 flex flex-col items-start md:items-center text-left md:text-center">
                    <p className="text-[10px] md:text-[12px] tracking-[0.3em] uppercase font-bold text-khaki-dark mb-4">ESL Image Consultancy</p>
                    <h2 className="serif text-5xl md:text-7xl lg:text-[7rem] leading-none mb-12 md:mb-16">
                        Connect with the <br className="hidden md:block" />
                        <span className="italic text-khaki-dark">Ecosystem.</span>
                    </h2>

                    {/* High-Visibility Social Grid */}
                    <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-x-12 md:gap-y-8 w-full">
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between md:justify-center gap-4 text-xl md:text-2xl lg:text-3xl font-medium tracking-tight hover:text-khaki-dark transition-colors border-b border-black/10 md:border-none pb-4 md:pb-0"
                            >
                                <span className="group-hover:italic transition-all duration-300">{social.name}</span>
                                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* 2. Primary CTA: WhatsApp */}
                <div className="w-full border-t border-black/10 pt-20 md:pt-32 flex flex-col items-center text-center">
                    <p className="text-xl md:text-3xl serif italic text-deep-charcoal/60 mb-8">Ready to shift your energy?</p>
                    <a
                        href="https://wa.link/838cs5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 px-8 md:px-12 py-5 md:py-6 bg-deep-charcoal text-white rounded-full uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-[12px] font-bold hover:bg-neutral-800 transition-all transform hover:scale-105 shadow-2xl relative overflow-hidden group w-full md:w-auto"
                    >
                        <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                        <span>WhatsApp Elaine Now</span>

                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite] transition-all"></div>
                    </a>
                </div>

                {/* 3. Footer Copyright */}
                <div className="w-full mt-24 pt-8 border-t border-deep-charcoal/10 flex flex-col md:flex-row justify-between items-center gap-4 opacity-50 text-[8px] md:text-[9px] uppercase tracking-widest text-deep-charcoal">
                    <span>© {new Date().getFullYear()} ESL Image Consultancy. All rights reserved.</span>
                    <span>Klang Valley, Selangor</span>
                </div>
            </div>
        </footer>
    );
}
