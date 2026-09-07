import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Facebook, Linkedin, Youtube, ArrowRight } from 'lucide-react';

export default function Navbar(){
  const [open,setOpen]=useState(false);
  const links=[['Home','/'],['About Us','/about'],['Our Services','/services'],['Gallery','/gallery'],['Contact Us','/contact']];
  const go=(to:string)=>{ setOpen(false); window.location.assign(to); };

  return <header className="fixed top-0 left-0 right-0 z-50 shadow-md">
    <div className="hidden md:block bg-[#07304d] text-white text-xs">
      <div className="max-w-7xl mx-auto px-5 h-9 flex items-center justify-between gap-6">
        <div className="flex items-center gap-6 min-w-0">
          <a href="tel:+27151010500" className="flex items-center gap-2 whitespace-nowrap"><Phone size={13}/> +27 15 101 0500</a>
          <a href="mailto:info@kaminternalauditors.com" className="flex items-center gap-2 whitespace-nowrap"><Mail size={13}/> info@kaminternalauditors.com</a>
          <span className="hidden xl:flex items-center gap-2 truncate"><MapPin size={13}/>58–60 Landros Mare Street, Thabakgolo Building, 3rd Floor, Polokwane, 0700</span>
        </div>
        <div className="flex items-center gap-2"><a href="#" aria-label="Facebook" className="p-1 hover:text-emerald-300"><Facebook size={14}/></a><a href="#" aria-label="LinkedIn" className="p-1 hover:text-emerald-300"><Linkedin size={14}/></a><a href="#" aria-label="YouTube" className="p-1 hover:text-emerald-300"><Youtube size={14}/></a></div>
      </div>
    </div>
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
        <button onClick={()=>go('/')} className="flex items-center" aria-label="KAM home"><img src="/kam-logo.png" className="h-[76px] w-auto max-w-[235px] object-contain" alt="KAM Internal Auditors Inc."/></button>
        <nav className="hidden lg:flex items-center gap-7">
          {links.map(([label,to])=><button key={to} onClick={()=>go(to)} className={`relative py-3 text-sm font-semibold transition ${window.location.pathname===to?'text-[#08213f]':'text-[#13283d] hover:text-[#0aa35b]'}`}>{label}{window.location.pathname===to&&<span className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[#08213f]"/>}</button>)}
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={()=>go('/contact')} className="hidden md:inline-flex items-center gap-3 bg-[#0aa35b] hover:bg-[#07884c] text-white px-6 py-3.5 rounded-lg text-sm font-bold transition shadow-sm">Request a Consultation <ArrowRight size={16}/></button>
          <button aria-label="Open menu" className="lg:hidden text-[#08213f] p-2.5 rounded-lg border border-slate-200" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
        </div>
      </div>
      {open&&<div className="lg:hidden bg-white border-t border-slate-100 px-5 pb-5 shadow-xl">{links.map(([label,to])=><button key={to} onClick={()=>go(to)} className="block w-full text-left py-3.5 text-[#08213f] font-semibold border-b border-slate-100">{label}</button>)}<button onClick={()=>go('/contact')} className="mt-4 w-full bg-[#0aa35b] text-white rounded-lg py-3 font-bold">Request a Consultation</button></div>}
    </div>
  </header>;
}
