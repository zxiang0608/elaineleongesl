'use client';

import { useState } from 'react';
import Link from 'next/link';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-[100] px-8 py-4 flex justify-between items-center bg-white/30 backdrop-blur-[20px] border-b border-black/5 transition-all duration-300">
      <div className="flex items-center gap-3">
        <div className="w-1.5 h-1.5 bg-[#8E7D62] rounded-full shadow-[0_0_12px_rgba(142,125,98,1)]"></div>
        <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#121212]">ESL Academy</span>
      </div>
      <div className="hidden md:flex space-x-12 text-[9px] uppercase tracking-[0.3em] font-semibold opacity-70 text-[#121212]">
        <Link href="#impact" className="hover:text-[#8E7D62] transition-colors">The Impact</Link>
        <Link href="#testimony" className="hover:text-[#8E7D62] transition-colors">The Shift</Link>
        <Link href="#contact" className="px-6 py-2.5 bg-[#121212] text-white rounded-full hover:bg-[#8E7D62] transition-all transform hover:scale-105 shadow-xl">Find My Direction</Link>
      </div>

      {/* Mobile Hamburger (Simplified for now, can be expanded later) */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-[#121212] focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#F4F1EA] shadow-xl py-6 px-8 flex flex-col gap-6 md:hidden">
          <Link href="#impact" onClick={() => setIsOpen(false)} className="text-xs uppercase tracking-[0.3em] font-bold text-[#121212]">The Impact</Link>
          <Link href="#testimony" onClick={() => setIsOpen(false)} className="text-xs uppercase tracking-[0.3em] font-bold text-[#121212]">The Shift</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="text-xs uppercase tracking-[0.3em] font-bold text-[#121212] pt-4 border-t border-black/10">Find My Direction</Link>
        </div>
      )}
    </nav>
  );
}
