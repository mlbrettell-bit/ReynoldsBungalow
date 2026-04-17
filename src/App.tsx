/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, DollarSign, Ruler, Home, Accessibility, ShieldCheck, ArrowRight, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

const blueprintData = [
  { title: "Title Page", id: "A0-000", img: "https://i.postimg.cc/QVZjgB9k/A0-000-Title-Page.png" },
  { title: "Assembly & Legends", id: "A0-001", img: "https://i.postimg.cc/yxZVShd7/A0-001-Assembly-Legends.png" },
  { title: "Site Plan & Zoning Info", id: "A1-000", img: "https://i.postimg.cc/4y9Jhvd4/A1-000-Site-Plan-Zoning-Info.png" },
  { title: "Foundation Plans", id: "A2-000", img: "https://i.postimg.cc/8c61rd5N/A2-000-Foundation-Plans.png" },
  { title: "Basement Floor Plans", id: "A2-100", img: "https://i.postimg.cc/qgHpcthM/A2-100-Basement-Floor-Plans.png"},
  { title: "Main Floor Plans", id: "A2-101", img: "https://i.postimg.cc/G9nbPB8P/A2-101-Main-Floor-Plans.png" },
  { title: "Enlarged Plans", id: "A2-300", img: "https://i.postimg.cc/MXJz0cMV/A2-300-Enlarged-Plans.png" },
  { title: "Building Elevations", id: "A3-000", img: "https://i.postimg.cc/jqwNhGwF/A3-000-Building-Elevations.png" },
  { title: "Building Elevations", id: "A3-001", img: "https://i.postimg.cc/PfpZMBvL/A3-001-Building-Elevations.png" },
  { title: "Building Sections", id: "A4-000", img: "https://i.postimg.cc/SQB91Dcs/A4-000-Building-Sections.png" },
  { title: "Building Sections", id: "A4-001", img: "https://i.postimg.cc/gcChtN3n/A4-001-Building-Sections.png" },
  { title: "Main Floor - Millwork Plans", id: "ID4-000", img: "https://i.postimg.cc/NG3XCpRr/ID4-000-Main-Floor.png" },
  { title: "Basement - Millwork Plans", id: "ID4-001", img: "https://i.postimg.cc/pVwjcqKD/ID4-001-Basement.png" }
];

export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedBlueprint, setSelectedBlueprint] = useState<{img: string, title: string, id: string} | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = window.innerWidth > 768 ? 800 : window.innerWidth * 0.85;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-emerald-200 selection:text-emerald-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="font-glacial text-xl font-bold tracking-widest text-stone-800 uppercase">
            Olive Branch <span className="text-emerald-700">Design Co.</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-stone-600 tracking-wide uppercase">
            <a href="#overview" className="hover:text-emerald-700 transition-colors">Overview</a>
            <a href="#features" className="hover:text-emerald-700 transition-colors">Features</a>
            <a href="#blueprints" className="hover:text-emerald-700 transition-colors">Blueprints</a>
            <a href="#design" className="hover:text-emerald-700 transition-colors">Design</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.postimg.cc/p2WsBLWP/1-0-Exterior.png" 
            alt="Mid-Century Modern Home Exterior" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-900/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-emerald-400 font-semibold tracking-[0.2em] uppercase text-sm mb-6 block">
              Technical Report & Portfolio
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Multi-Generational <br/> Executive Bungalow
            </h1>
            <p className="text-lg md:text-xl text-stone-300 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              A timeless mid-century modern design balancing accessible living, structural excellence, and multi-generational functionality.
            </p>
            <a href="#overview" className="inline-flex items-center px-8 py-4 bg-emerald-700 text-white rounded-full font-medium hover:bg-emerald-800 transition-all duration-300 hover:scale-105">
              Explore the Project <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="overview" className="py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard icon={<MapPin />} label="Location" value="Ridgeway, ON" />
            <StatCard icon={<DollarSign />} label="Budget" value="$632,488" />
            <StatCard icon={<Calendar />} label="Timeline" value="7 Months" />
            <StatCard icon={<Ruler />} label="Square Footage" value="1,770 sq. ft." />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-28 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-emerald-700 tracking-widest uppercase mb-4">The Vision</h2>
              <h3 className="text-4xl font-serif font-bold text-stone-900 mb-6 leading-tight">Aging in Place with Elegance</h3>
              <p className="text-stone-600 mb-6 leading-relaxed text-lg">
                Commissioned by the Reynolds family, this executive bungalow is designed to allow the clients to age in place through a fully accessible main floor plan. Simultaneously, it incorporates a two-car garage and a fully finished, self-contained Accessory Dwelling Unit (ADU) in the basement for extended family or future rental opportunities.
              </p>
              <p className="text-stone-600 leading-relaxed text-lg">
                The project's vision is deeply rooted in mid-century modern design. The exterior features a distinct double shed roof and composite wood clapboard siding, while the interior offers an open floor plan focusing on clean lines, natural light, and warm tones.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-white flex items-center justify-center p-4"
            >
              <img 
                src="https://i.postimg.cc/jSxPbC26/Main-Floor-Presentation.png" 
                alt="Main Floor Presentation" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-28 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-emerald-400 tracking-widest uppercase mb-4">Core Pillars</h2>
            <h3 className="text-4xl font-serif font-bold mb-6">Thoughtful Design & Engineering</h3>
            <p className="text-stone-400 text-lg">A harmonious blend of form and function, ensuring long-term comfort without compromising on aesthetic appeal.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Accessibility className="w-8 h-8 text-emerald-400" />}
              title="Barrier-Free Accessibility"
              description="Widened 1100mm hallways, 850mm doorways, and a 1500mm turning radius in the ensuite ensure seamless movement. Radiant heating in the driveway and ramp provides a maintenance-free, safe winter exterior."
            />
            <FeatureCard 
              icon={<Home className="w-8 h-8 text-emerald-400" />}
              title="Accessory Dwelling Unit"
              description="A fully finished basement ADU featuring a kitchen, living room, two bedrooms, and a private exterior entrance. Designed with the same high-quality mid-century finishes as the main floor."
            />
            <FeatureCard 
              icon={<ShieldCheck className="w-8 h-8 text-emerald-400" />}
              title="Structural Integrity"
              description="Constructed with over-sized 10-inch concrete foundation walls, a triple sill plate for increased basement height, steel beams, and engineered wood I-joists to support the low-sloped roofline."
            />
          </div>
        </div>
      </section>

      {/* Blueprints Section */}
      <section id="blueprints" className="py-28 bg-stone-100 border-t border-stone-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-sm font-bold text-emerald-700 tracking-widest uppercase mb-4">Documentation</h2>
            <h3 className="text-4xl font-serif font-bold text-stone-900 mb-6">Architectural Drawings</h3>
            <p className="text-stone-600 text-lg">Swipe through the comprehensive drafting and design documents that brought this executive mid-century modern bungalow to life.</p>
          </div>
        </div>

        {/* Scrollable Container */}
        <div className="w-full relative group">
          <button 
            onClick={() => scroll('left')} 
            className="absolute left-4 md:left-12 top-1/2 -translate-y-[calc(50%+1.5rem)] z-20 bg-white hover:bg-stone-50 text-stone-800 p-3 rounded-full shadow-lg border border-stone-200 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 hidden md:block"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scroll('right')} 
            className="absolute right-4 md:right-12 top-1/2 -translate-y-[calc(50%+1.5rem)] z-20 bg-white hover:bg-stone-50 text-stone-800 p-3 rounded-full shadow-lg border border-stone-200 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 hidden md:block"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 px-6 md:px-[10vw] pb-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {blueprintData.map((bp, i) => (
              <div key={i} className="snap-center shrink-0 w-[85vw] max-w-[900px] bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden flex flex-col">
                <div className="bg-stone-800 text-stone-200 px-6 py-4 flex justify-between items-center border-b border-stone-700">
                  <span className="font-mono text-sm tracking-widest text-emerald-400">{bp.id}</span>
                  <span className="font-medium text-sm tracking-wide uppercase">{bp.title}</span>
                </div>
                <div 
                  className="relative aspect-[4/3] md:aspect-[16/9] w-full bg-stone-50 p-3 md:p-6 cursor-pointer group/img"
                  onClick={() => setSelectedBlueprint({ img: bp.img, title: bp.title, id: bp.id })}
                >
                  <div className="w-full h-full border-2 border-dashed border-stone-300 rounded-xl overflow-hidden relative bg-white shadow-inner">
                    <img 
                      src={bp.img} 
                      alt={bp.title} 
                      className="absolute inset-0 w-full h-full object-cover filter contrast-125 opacity-90 mix-blend-multiply transition-transform duration-700 group-hover/img:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    {/* Architectural grid overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white/95 text-emerald-800 px-6 py-3 rounded-full font-medium flex items-center gap-2 backdrop-blur-sm shadow-xl transform translate-y-4 group-hover/img:translate-y-0 transition-all">
                        <Maximize2 className="w-5 h-5" /> View Blueprint
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Finishes */}
      <section id="design" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:flex justify-between items-end">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-emerald-700 tracking-widest uppercase mb-4">Materials</h2>
              <h3 className="text-4xl font-serif font-bold text-stone-900">Premium Finishes</h3>
            </div>
            <p className="text-stone-600 max-w-md mt-6 md:mt-0 text-lg">
              Every material was carefully selected to balance the mid-century modern aesthetic with durability, low maintenance, and executive-level quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MaterialCard 
              image="https://i.postimg.cc/HnGzTH8S/Quartz-Counter.jpg"
              title="Quartz Countertops"
              desc="Extremely durable, low maintenance, and visually striking for both kitchens."
            />
            <MaterialCard 
              image="https://i.postimg.cc/903bcVwn/Flooring.jpg"
              title="Engineered Hardwood"
              desc="Warm, natural tones that tie the open-concept living spaces together."
            />
            <MaterialCard 
              image="https://i.postimg.cc/rs6jqcRf/siding.jpg"
              title="Composite Clapboard"
              desc="A natural wood appearance with superior weather resistance and longevity."
            />
            <MaterialCard 
              image="https://i.postimg.cc/8chH53LH/roof.png"
              title="Double Shed Roof"
              desc="Asphalt shingles on a low-profile roof, shedding water effectively while maintaining the aesthetic."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 py-16 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="font-glacial text-2xl font-bold tracking-widest text-white mb-3 uppercase">
              Olive Branch <span className="text-emerald-600">Design Co.</span>
            </div>
            <p className="text-sm text-stone-500">Prepared by Michael Brettell, Alex Hyde, and James Dawkes</p>
          </div>
          <div className="text-sm text-center md:text-right text-stone-500">
            <p className="mb-2">Faculty Advisor: Denise Van Osch</p>
            <p>&copy; 2026 Olive Branch Design Co. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Blueprint Modal */}
      {selectedBlueprint && (
        <div className="fixed inset-0 z-[100] bg-stone-900/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8" onClick={() => setSelectedBlueprint(null)}>
          <button 
            className="absolute top-6 right-6 text-stone-400 hover:text-white bg-stone-800/80 hover:bg-stone-700 p-3 rounded-full transition-colors z-[110]"
            onClick={(e) => { e.stopPropagation(); setSelectedBlueprint(null); }}
          >
            <X className="w-6 h-6" />
          </button>
          
          <div 
            className="relative w-full max-w-7xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full bg-stone-800 text-stone-200 px-6 py-4 flex justify-between items-center rounded-t-xl border-b border-stone-700 shadow-xl">
              <span className="font-mono text-sm tracking-widest text-emerald-400">{selectedBlueprint.id}</span>
              <span className="font-medium text-sm tracking-wide uppercase">{selectedBlueprint.title}</span>
            </div>
            <div className="w-full bg-white md:bg-stone-50 p-0 rounded-b-xl shadow-2xl overflow-hidden relative">
               <img 
                src={selectedBlueprint.img} 
                alt={selectedBlueprint.title} 
                className="w-full h-auto max-h-[75vh] object-contain filter contrast-125 mx-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-stone-50 border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mb-5">
        {icon}
      </div>
      <div className="text-stone-500 text-xs font-bold uppercase tracking-widest mb-2">{label}</div>
      <div className="text-2xl font-serif font-bold text-stone-900">{value}</div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-stone-800 p-10 rounded-3xl border border-stone-700 shadow-xl"
    >
      <div className="mb-8 bg-stone-900/50 w-20 h-20 rounded-2xl flex items-center justify-center border border-stone-700/50">
        {icon}
      </div>
      <h4 className="text-2xl font-serif font-bold text-white mb-4">{title}</h4>
      <p className="text-stone-400 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

function MaterialCard({ image, title, desc }: { image: string, title: string, desc: string }) {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
      className="group relative overflow-hidden rounded-3xl aspect-[3/4] shadow-lg"
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-1000 lg:group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/95 via-stone-900/30 to-transparent flex flex-col justify-end p-8">
        <h4 className="text-white font-serif font-bold text-2xl lg:mb-3 transform transition-transform duration-500 lg:group-hover:-translate-y-2">
          {title}
        </h4>
        
        {/* Desktop: Hover to reveal */}
        <p className="hidden lg:block text-stone-300 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 leading-relaxed">
          {desc}
        </p>

        {/* Mobile: Animate in on scroll */}
        <motion.p 
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }
          }}
          className="lg:hidden text-stone-300 text-sm leading-relaxed mt-2"
        >
          {desc}
        </motion.p>
      </div>
    </motion.div>
  );
}
