import { useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Users, BarChart3, Award, CheckCircle2, X } from 'lucide-react';

const WHATSAPP_NUMBER='27151010500';

const heroSlides=[
  {
    image:'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=2200&q=90',
    title:'Professional Audit, Tax and',
    accent:'Advisory Services',
    suffix:'for a Better Tomorrow',
    text:'KAM Internal Auditors Inc. delivers trusted audit, taxation, financial, governance and ICT solutions to municipalities, businesses and individuals.',
    quote:'Integrity. Accountability. Better Communities.'
  },
  {
    image:'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2200&q=90',
    title:'Stronger Governance and',
    accent:'Smarter Financial Control',
    suffix:'for Sustainable Growth',
    text:'We help organisations strengthen internal controls, improve accountability and make better financial and operational decisions.',
    quote:'Professional. Experienced. Tailored Solutions.'
  },
  {
    image:'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2200&q=90',
    title:'Modern Business and',
    accent:'ICT Solutions',
    suffix:'Built for Today',
    text:'From infrastructure and cybersecurity to business systems and staff training, we support organisations with practical digital solutions.',
    quote:'Innovation. Efficiency. Excellence.'
  }
];

const services=[
  {title:'Internal Audit & Governance',image:'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85',desc:'Strengthening governance, internal controls, accountability and operational performance.'},
  {title:'Asset Management',image:'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85',desc:'Asset verification, asset registers, condition assessments and asset management support.'},
  {title:'Budgeting & Municipal Financial Services',image:'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=85',desc:'Budget preparation, financial reporting, GRAP compliance and municipal finance support.'},
  {title:'Enterprise Risk Management',image:'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=85',desc:'Risk assessments, risk registers and implementation of risk management frameworks.'}
];

export default function Home(){
  const [slide,setSlide]=useState(0);
  const [selected,setSelected]=useState<string|null>(null);
  const [name,setName]=useState('');
  const [phone,setPhone]=useState('');
  const [details,setDetails]=useState('');

  useEffect(()=>{const timer=window.setInterval(()=>setSlide(s=>(s+1)%heroSlides.length),6500);return()=>window.clearInterval(timer)},[]);
  const current=heroSlides[slide];

  const openRequest=(service:string)=>{setSelected(service);setDetails(`I would like more information about ${service}.`)};
  const sendWhatsApp=()=>{
    if(!selected)return;
    const text=`Hello KAM Internal Auditors Inc.\n\nSERVICE ENQUIRY: ${selected}\nName: ${name||'Not provided'}\nPhone: ${phone||'Not provided'}\nDetails: ${details||`I would like more information about ${selected}.`}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,'_blank');
  };

  return <div className="bg-white pt-24 md:pt-[132px]">
    <section className="relative min-h-[610px] md:min-h-[660px] overflow-hidden bg-[#071d38]">
      {heroSlides.map((item,index)=><img key={item.image} src={item.image} alt="Professional KAM advisory environment" className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${index===slide?'opacity-100 scale-100':'opacity-0 scale-105'}`}/>)}
      <div className="absolute inset-0 bg-gradient-to-r from-[#041a2f]/95 via-[#08213f]/78 to-[#08213f]/30"/>
      <div className="relative max-w-7xl mx-auto px-5 py-20 md:py-24 min-h-[610px] md:min-h-[660px] grid lg:grid-cols-[1.25fr_.75fr] gap-10 items-center">
        <div className="max-w-3xl text-white">
          <h1 key={slide} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.04] tracking-tight animate-fade-up">
            {current.title}<br/><span className="text-[#27b267]">{current.accent}</span><br/>{current.suffix}
          </h1>
          <p className="mt-6 text-base md:text-lg text-slate-100 leading-8 max-w-2xl">{current.text}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/services" className="inline-flex items-center gap-2 bg-[#0aa35b] hover:bg-[#07884c] text-white px-7 py-3.5 rounded-lg font-bold transition">Our Services <ArrowRight size={17}/></a>
            <a href="/contact" className="inline-flex items-center gap-2 border-2 border-white text-white px-7 py-3.5 rounded-lg font-bold hover:bg-white hover:text-[#08213f] transition">Contact Us</a>
          </div>
        </div>
        <div className="hidden lg:block text-white justify-self-end max-w-sm">
          <div className="text-3xl font-black leading-tight mb-7">“{current.quote}”</div>
          <div className="h-1 w-12 bg-[#27b267] mb-8"/>
          <div className="space-y-5">
            {[['Trusted by Municipalities',ShieldCheck],['Professional & Experienced',Users],['Tailored Solutions',BarChart3],['Committed to Excellence',Award]].map(([label,Icon])=><div key={label as string} className="flex gap-4 items-start"><div className="w-10 h-10 rounded-xl border border-white/25 bg-white/10 flex items-center justify-center"><Icon size={20}/></div><div className="font-semibold leading-6">{label as string}</div></div>)}
          </div>
        </div>
      </div>
      <button onClick={()=>setSlide(s=>(s-1+heroSlides.length)%heroSlides.length)} aria-label="Previous slide" className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/70 text-white flex items-center justify-center bg-black/15 hover:bg-black/30"><ChevronLeft size={20}/></button>
      <button onClick={()=>setSlide(s=>(s+1)%heroSlides.length)} aria-label="Next slide" className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/70 text-white flex items-center justify-center bg-black/15 hover:bg-black/30"><ChevronRight size={20}/></button>
      <div className="absolute bottom-7 left-5 md:left-[calc((100%-1280px)/2+20px)] flex gap-2">{heroSlides.map((_,i)=><button key={i} onClick={()=>setSlide(i)} aria-label={`Go to slide ${i+1}`} className={`h-3 rounded-full transition-all ${slide===i?'w-3 bg-[#27b267]':'w-3 bg-white/85'}`}/>)}</div>
    </section>

    <section className="bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 py-7 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {[[Users,'100+','Satisfied Clients'],[ShieldCheck,'15+','Municipalities Supported'],[BarChart3,'10+','Years of Experience'],[Award,'Professional','Registered & Compliant']].map(([Icon,value,label])=><div key={label as string} className="flex items-center gap-4"><div className="text-[#08213f]"><Icon size={34}/></div><div><div className="text-2xl font-black text-[#08213f]">{value as string}</div><div className="text-sm text-slate-600">{label as string}</div></div></div>)}
      </div>
    </section>

    <section className="py-16 md:py-20 bg-[#fbfcfd]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-10">
          <div>
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.18em] text-slate-600"><span className="w-7 h-0.5 bg-[#27b267]"/> Our Services</div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#08213f] mt-3">Comprehensive Solutions for Your Success</h2>
            <p className="text-slate-600 mt-3 max-w-2xl">We offer professional services that help organisations improve governance, strengthen controls, maintain compliance and operate more effectively.</p>
          </div>
          <a href="/services" className="inline-flex items-center gap-2 border border-[#08213f] text-[#08213f] px-6 py-3 rounded-lg font-bold hover:bg-[#08213f] hover:text-white transition">View All Services <ArrowRight size={16}/></a>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {services.map(service=><article key={service.title} className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden hover:-translate-y-1 hover:shadow-xl transition group">
            <div className="h-44 overflow-hidden"><img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500"/></div>
            <div className="p-5"><h3 className="text-lg font-black text-[#08213f] leading-tight min-h-[48px]">{service.title}</h3><p className="text-slate-600 text-sm leading-6 mt-2 min-h-[96px]">{service.desc}</p><button onClick={()=>openRequest(service.title)} className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-[#0aa35b] hover:bg-[#07884c] text-white px-4 py-3 rounded-md font-bold transition">Request This Service</button></div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="py-16 bg-[#08213f] text-white">
      <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center">
        <div><div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.18em] text-emerald-300"><span className="w-7 h-0.5 bg-[#27b267]"/> Why Choose KAM</div><h2 className="text-3xl md:text-5xl font-black mt-4">Professional. Compliant. Client-Focused.</h2><p className="text-slate-300 leading-8 mt-5">KAM Internal Auditors Inc. combines financial expertise, governance knowledge and technology capability to deliver practical, cost-effective solutions for public and private organisations.</p><div className="grid sm:grid-cols-2 gap-4 mt-7">{['Professional expertise','Registered & compliant','Innovative solutions','Client-centred service'].map(item=><div key={item} className="flex items-center gap-3"><CheckCircle2 className="text-[#27b267]" size={19}/><span>{item}</span></div>)}</div></div>
        <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=85" alt="Professional advisory meeting" className="w-full h-[380px] object-cover rounded-2xl shadow-2xl"/>
      </div>
    </section>

    {selected&&<div className="fixed inset-0 z-[90] bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4"><div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-7 relative"><button onClick={()=>setSelected(null)} className="absolute right-5 top-5 text-slate-500 hover:text-slate-900"><X/></button><div className="text-xs font-bold uppercase tracking-[.18em] text-[#0aa35b]">Service Enquiry</div><h3 className="text-2xl font-black text-[#08213f] mt-2 pr-10">{selected}</h3><p className="text-slate-500 text-sm mt-2 mb-5">Complete the form and the selected service will be included automatically in the WhatsApp message.</p><div className="space-y-3"><input value={name} onChange={e=>setName(e.target.value)} placeholder="Your full name" className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400"/><input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Your phone number" className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400"/><textarea value={details} onChange={e=>setDetails(e.target.value)} rows={4} placeholder="Tell us what you need" className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400"/><button onClick={sendWhatsApp} className="w-full bg-[#0aa35b] hover:bg-[#07884c] text-white py-3.5 rounded-lg font-bold">Continue to WhatsApp</button></div></div></div>}
  </div>
}
