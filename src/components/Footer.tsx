'use client';

export function Footer() {
    return (
        <footer id="contact" className="bg-deep-charcoal text-white pt-40 pb-12 px-6 md:px-24 relative z-10">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="serif text-8xl md:text-[10rem] mb-12">Found <br /><span className="italic text-khaki-base">Directly.</span></h2>
                <button className="px-12 py-6 bg-khaki-base text-black rounded-full uppercase tracking-[0.4em] text-[10px] font-bold hover:bg-white transition-all transform hover:scale-105 shadow-2xl">
                    Find My Direction
                </button>
                <div className="mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-30 text-[9px] uppercase tracking-widest text-white">
                    <span>© {new Date().getFullYear()} Studio North / Klang Valley, Selangor</span>
                    <div className="flex gap-12 text-white">
                        <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
                        <a href="#" className="hover:opacity-100 transition-opacity">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
