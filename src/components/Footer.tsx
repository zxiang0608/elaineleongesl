'use client';

import { ArrowUpRight, MessageCircle } from 'lucide-react';

export function Footer() {
    const socials = [
        { name: 'Instagram', url: 'https://www.instagram.com/invites/contact/?i=arx46j9p69tp&utm_content=6o2nnv9' },
        { name: 'Xiaohongshu', url: 'https://www.xiaohongshu.com/user/profile/5eba09e50000000001006871?xhsshare=CopyLink&appuid=5eba09e50000000001006871&apptime=1666870698' },
        { name: 'TikTok', url: 'https://vt.tiktok.com/ZSJD2BY41/' },
        { name: 'Facebook', url: 'https://www.facebook.com/esl27/' },
    ];
    return (
        <footer id="contact" className="studio-vignette text-deep-charcoal noise pt-24 pb-12 relative z-10 border-t border-black/5 overflow-hidden">
            <div className="w-full flex flex-col items-center">

                {/* 1. Header & Ecosystem */}
                <div className="w-full mb-12 md:mb-20 flex flex-col items-center text-center px-6">
                    <p className="text-[10px] md:text-[12px] tracking-[0.3em] uppercase font-bold text-khaki-dark mb-4">ESL Image Consultancy</p>
                    <h2 className="serif text-3xl md:text-5xl leading-none">
                        Connect with the <span className="italic text-khaki-dark">Ecosystem.</span>
                    </h2>
                </div>

                {/* 9.5 Editorial Marquee Menu */}
                <div className="w-full flex flex-col items-center justify-center mb-24 md:mb-32">
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative w-full text-center py-2 md:py-4 transition-all duration-500 hover:bg-black/5"
                        >
                            <h3 className="serif text-6xl md:text-[8rem] lg:text-[11rem] leading-[0.8] md:leading-[0.8] tracking-tighter opacity-30 group-hover:opacity-100 group-hover:italic transition-all duration-500 text-deep-charcoal relative z-10 mix-blend-multiply">
                                {social.name}
                            </h3>
                            {/* Hidden Image that appears on hover - acts as the luxury editorial layer */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] lg:w-[500px] lg:h-[300px] opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-700 pointer-events-none z-0 rounded-2xl overflow-hidden shadow-2xl skew-y-3 group-hover:skew-y-0">
                                <img src="/images/hero-portrait.jpg" alt={`${social.name} Background`} className="w-full h-full object-cover grayscale mix-blend-overlay brightness-75 blur-[2px] group-hover:blur-0 transition-all duration-700" />
                            </div>
                        </a>
                    ))}
                </div>

                {/* 2. Primary CTA: WhatsApp */}
                <div className="w-full max-w-7xl px-6 border-t border-black/10 pt-20 md:pt-32 flex flex-col items-center text-center">
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
                <div className="w-full max-w-7xl px-6 mt-24 pt-8 border-t border-deep-charcoal/10 flex flex-col md:flex-row justify-between items-center gap-4 opacity-50 text-[8px] md:text-[9px] uppercase tracking-widest text-deep-charcoal">
                    <span>© {new Date().getFullYear()} ESL Image Consultancy. All rights reserved.</span>
                    <span>Klang Valley, Selangor</span>
                </div>
            </div>
        </footer>
    );
}
