import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, Server, Shield, Network, Cpu, Terminal, Database, Sparkles } from 'lucide-react';

function Counter({ target, suffix = "", duration = 2 }) {
  const ref = useRef(null);
  const count = useMotionValue(0);
  
  // Format numbers, supporting decimals (e.g., 99.8)
  const decimals = target.toString().includes('.') ? (target.toString().split('.')[1] || '').length : 0;
  
  const rounded = useTransform(count, (latest) => {
    return latest.toFixed(decimals) + suffix;
  });
  
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, target, {
        duration,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [inView, target, count, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
import imgServerRacks from '../assets/server_racks.png';
import imgTeamCollaboration from '../assets/team_collaboration.png';
import imgFiberNetwork from '../assets/fiber_network.png';

// Partners
import logoAws from '../assets/partners/Amazon_Web_Services_Logo.svg';
import logoBroadcom from '../assets/partners/Broadcom_logo_(2016-present).svg';
import logoCisco from '../assets/partners/Cisco_logo_blue_2016.svg';
import logoDell from '../assets/partners/Dell_Logo.svg';
import logoFortinet from '../assets/partners/Fortinet_logo.svg';
import logoGoogle from '../assets/partners/Google-Logo.wine.svg';
import logoHpe from '../assets/partners/Hewlett_Packard_Enterprise_logo.svg';
import logoIbm from '../assets/partners/IBM_logo.svg';
import logoAzure from '../assets/partners/Microsoft_Azure_Logo.svg';
import logoMicrosoft from '../assets/partners/Microsoft_logo_(2012).svg';
import logoSchneider from '../assets/partners/Schinder_Electric.svg';
import logoSophos from '../assets/partners/Sophos_logo.svg';
import logoDlink from '../assets/partners/D-Link_wordmark.svg';

// Clients
import clientNalco from '../assets/Esteemsed_clients/Nalco.svg';
import clientHighCourt from '../assets/Esteemsed_clients/highcourt-Odisha.png';
import clientIndianOil from '../assets/Esteemsed_clients/Indian_Oil_Logo.svg';
import clientTpcodl from '../assets/Esteemsed_clients/TPCODL.jpg';
import clientOrsac from '../assets/Esteemsed_clients/orsac.jpg';
import clientNiser from '../assets/Esteemsed_clients/Niser.png';
import clientNitRourkela from '../assets/Esteemsed_clients/NIT_Rourkela.png';
import clientIop from '../assets/Esteemsed_clients/Institute Of Physics.jpg';
import clientIitBhubaneswar from '../assets/Esteemsed_clients/IIT_Bhubaneswar.png';
import clientOcac from '../assets/Esteemsed_clients/Ocac.png';


export default function Home({ onNavigate }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [sectionVisible, setSectionVisible] = useState(false);
  const clientSectionRef = useRef(null);

  const slides = [
    {
      image: imgServerRacks,
      title: "Enterprise-Grade IT Infrastructure",
      subtitle: "Powering secure high-availability servers, storage pools, and cloud integrations for government and public sector systems.",
      badge: "Managed Infrastructure"
    },
    {
      image: imgTeamCollaboration,
      title: "Intelligent Apps & Digital Portals",
      subtitle: "Accelerate your workflows with tailor-made ERPs, custom software platforms, and real-time collaboration engines.",
      badge: "Software & AI/ML Development"
    },
    {
      image: imgFiberNetwork,
      title: "Secure Next-Gen Networks",
      subtitle: "Deploying high-speed software-defined networks, enterprise wireless Wi-Fi 6, and zero-trust security firewalls.",
      badge: "Networking & Security"
    }
  ];

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(slideTimer);
  }, [slides.length]);

  // Intersection Observer for staggered client entry animation
  useEffect(() => {
    const currentRef = clientSectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const partnerIds = [
    'ibm',
    'cisco',
    'google',
    'broadcom',
    'microsoft',
    'schneider',
    'sophos',
    'fortinet',
    'aws',
    'axure',
    'dell',
    'hpe',
    'dlink'
  ];

  const renderPartnerLogo = (id) => {
    let src;
    let alt;
    switch(id) {
      case 'ibm':
        src = logoIbm;
        alt = "IBM";
        break;
      case 'cisco':
        src = logoCisco;
        alt = "Cisco";
        break;
      case 'google':
        src = logoGoogle;
        alt = "Google";
        break;
      case 'broadcom':
        src = logoBroadcom;
        alt = "Broadcom";
        break;
      case 'microsoft':
        src = logoMicrosoft;
        alt = "Microsoft";
        break;
      case 'schneider':
        src = logoSchneider;
        alt = "Schneider Electric";
        break;
      case 'sophos':
        src = logoSophos;
        alt = "Sophos";
        break;
      case 'fortinet':
        src = logoFortinet;
        alt = "Fortinet";
        break;
      case 'aws':
        src = logoAws;
        alt = "AWS";
        break;
      case 'axure':
        src = logoAzure;
        alt = "Axure / Azure";
        break;
      case 'dell':
        src = logoDell;
        alt = "Dell";
        break;
      case 'hpe':
        src = logoHpe;
        alt = "HPE";
        break;
      case 'dlink':
        src = logoDlink;
        alt = "D-Link";
        break;
      default:
        return null;
    }
    return (
      <img 
        src={src} 
        alt={alt} 
        className="max-h-11 max-w-full object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
      />
    );
  };

  const renderClientLogo = (name) => {
    switch (name) {
      case "NALCO":
        return (
          <div className="flex flex-col items-center gap-1.5">
            <svg viewBox="0 0 40 40" className="w-10 h-10 text-emerald-600" fill="currentColor">
              <path d="M20,2 L35,10 L35,30 L20,38 L5,30 L5,10 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <path d="M12,15 L20,9 L28,15 L28,25 L20,31 L12,25 Z" fill="currentColor" opacity="0.8" />
              <circle cx="20" cy="20" r="4" fill="white" />
            </svg>
            <span className="text-[11px] font-black text-slate-800 tracking-wider">NALCO</span>
          </div>
        );
      case "OCAC":
        return (
          <div className="flex flex-col items-center gap-1.5">
            <svg viewBox="0 0 40 40" className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="8" y="8" width="24" height="24" rx="4" />
              <circle cx="20" cy="20" r="5" fill="currentColor" />
              <path d="M20,8 L20,15 M20,25 L20,32 M8,20 L15,20 M25,20 L32,20" strokeLinecap="round" />
            </svg>
            <span className="text-[11px] font-black text-slate-800 tracking-wider">OCAC</span>
          </div>
        );
      case "High Court of Odisha":
        return (
          <div className="flex flex-col items-center gap-1">
            <svg viewBox="0 0 40 40" className="w-9 h-9 text-amber-700 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6,34 L34,34 M10,34 L10,16 M30,34 L30,16 M20,34 L20,16" strokeLinecap="round" />
              <path d="M8,16 L32,16 L20,8 Z" fill="currentColor" opacity="0.15" />
              <path d="M15,12 L25,12" strokeWidth="3" />
            </svg>
            <span className="text-[10px] font-bold text-slate-800 tracking-tight text-center leading-tight mt-1">ODISHA HC</span>
          </div>
        );
      case "IndianOil":
        return (
          <div className="flex flex-col items-center gap-1">
            <svg viewBox="0 0 40 40" className="w-10 h-10 text-orange-600" fill="currentColor">
              <circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" strokeWidth="3" />
              <circle cx="20" cy="20" r="9" />
              <rect x="13" y="18" width="14" height="4" fill="white" />
            </svg>
            <span className="text-[10px] font-black text-slate-800 tracking-wider mt-1">INDIANOIL</span>
          </div>
        );
      case "TPCODL":
        return (
          <div className="flex flex-col items-center gap-1.5">
            <svg viewBox="0 0 40 40" className="w-10 h-10 text-cyan-600" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="20" cy="20" r="15" />
              <path d="M22,10 L14,21 L20,21 L18,30 L26,19 L20,19 Z" fill="currentColor" stroke="none" />
            </svg>
            <span className="text-[11px] font-black text-slate-800 tracking-wider">TPCODL</span>
          </div>
        );
      case "ORSAC":
        return (
          <div className="flex flex-col items-center gap-1.5">
            <svg viewBox="0 0 40 40" className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="20" cy="20" r="16" strokeDasharray="4 2" />
              <ellipse cx="20" cy="20" rx="14" ry="5" transform="rotate(-30 20 20)" />
              <circle cx="20" cy="20" r="4" fill="currentColor" stroke="none" />
            </svg>
            <span className="text-[11px] font-black text-slate-800 tracking-wider">ORSAC</span>
          </div>
        );
      case "IIT Bhubaneswar":
        return (
          <div className="flex flex-col items-center gap-1">
            <svg viewBox="0 0 40 40" className="w-9 h-9 text-blue-800" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="20" cy="20" r="15" />
              <path d="M20,10 L30,16 L20,22 L10,16 Z" fill="currentColor" opacity="0.2" />
              <path d="M14,19 L14,26 C14,29 20,31 20,31 C20,31 26,29 26,26 L26,19" />
              <path d="M30,16 L30,24" />
            </svg>
            <span className="text-[9px] font-bold text-slate-800 tracking-tight text-center leading-tight mt-1">IIT BBS</span>
          </div>
        );
      case "NISER":
        return (
          <div className="flex flex-col items-center gap-1.5">
            <svg viewBox="0 0 40 40" className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" strokeWidth="1.5">
              <ellipse cx="20" cy="20" rx="16" ry="6" transform="rotate(30 20 20)" />
              <ellipse cx="20" cy="20" rx="16" ry="6" transform="rotate(-30 20 20)" />
              <ellipse cx="20" cy="20" rx="16" ry="6" transform="rotate(90 20 20)" />
              <circle cx="20" cy="20" r="4.5" fill="currentColor" stroke="none" />
            </svg>
            <span className="text-[11px] font-black text-slate-800 tracking-wider">NISER</span>
          </div>
        );
      case "NIT Rourkela":
        return (
          <div className="flex flex-col items-center gap-1">
            <svg viewBox="0 0 40 40" className="w-9 h-9 text-red-600" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="20" cy="20" r="10" strokeDasharray="3 3" />
              <path d="M20,5 L20,35 M5,20 L35,20 M9.5,9.5 L30.5,30.5 M9.5,30.5 L30.5,9.5" />
              <circle cx="20" cy="20" r="14" />
            </svg>
            <span className="text-[9px] font-bold text-slate-800 tracking-tight text-center leading-tight mt-1">NIT RKL</span>
          </div>
        );
      case "Utkal University":
        return (
          <div className="flex flex-col items-center gap-1">
            <svg viewBox="0 0 40 40" className="w-9 h-9 text-emerald-800" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20,6 L32,12 L32,28 L20,34 L8,28 L8,12 Z" />
              <path d="M20,12 L20,28" />
              <path d="M14,18 L26,18 M14,22 L26,22" />
            </svg>
            <span className="text-[9px] font-bold text-slate-800 tracking-tight text-center leading-tight mt-1">UTKAL UNIV</span>
          </div>
        );
      default:
        return (
          <div className="w-12 h-12 rounded-full bg-blue-50/80 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs uppercase shadow-sm">
            {name.substring(0, 3)}
          </div>
        );
    }
  };

  const esteemedClients = [
    {
      name: "NALCO",
      fullName: "National Aluminium Company Limited",
      logo: clientNalco,
      sector: "Public Sector Unit"
    },
    {
      name: "OCAC",
      fullName: "Odisha Computer Application Centre",
      logo: clientOcac,
      sector: "Government of Odisha"
    },
    {
      name: "High Court of Odisha",
      fullName: "Orissa High Court",
      logo: clientHighCourt,
      sector: "Judiciary"
    },
    {
      name: "IndianOil",
      fullName: "Indian Oil Corporation Limited",
      logo: clientIndianOil,
      sector: "Public Sector Unit"
    },
    {
      name: "TPCODL",
      fullName: "TP Central Odisha Distribution Limited",
      logo: clientTpcodl,
      sector: "Utility & Power"
    },
    {
      name: "ORSAC",
      fullName: "Odisha Space Applications Centre",
      logo: clientOrsac,
      sector: "Space & Research"
    },
    {
      name: "Institute of Physics",
      fullName: "Institute of Physics Bhubaneswar",
      logo: clientIop,
      sector: "Education & R&D"
    },
    {
      name: "NISER",
      fullName: "National Institute of Science Education and Research",
      logo: clientNiser,
      sector: "Education & R&D"
    },
    {
      name: "NIT Rourkela",
      fullName: "National Institute of Technology Rourkela",
      logo: clientNitRourkela,
      sector: "Education & R&D"
    },
    {
      name: "IIT Bhubaneswar",
      fullName: "Indian Institute of Technology Bhubaneswar",
      logo: clientIitBhubaneswar,
      sector: "Education & R&D"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.13 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="w-full relative overflow-hidden bg-slate-50 font-sans">

      {/* ═══════════════════════════════════════════════════════
          1. HERO — LIGHT THEME · ENHANCED CAROUSEL · GRADIENT EDGES
          ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center bg-white overflow-hidden">

        {/* ── TOP-RIGHT ambient corner glow shade ── */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none z-10"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(59,130,246,0.18) 0%, rgba(99,102,241,0.10) 40%, transparent 70%)' }}
        />

        {/* ── BOTTOM sunset glow — animated pulse ── */}
        <motion.div
          animate={{ opacity: [0.55, 0.9, 0.55], scale: [1, 1.08, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-0 right-0 h-56 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to top, rgba(251,191,36,0.10) 0%, rgba(249,115,22,0.07) 30%, rgba(59,130,246,0.06) 60%, transparent 100%)' }}
        />
        {/* Static bottom glow base */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-40 pointer-events-none z-10 rounded-full"
          style={{ background: 'radial-gradient(ellipse at bottom center, rgba(59,130,246,0.12) 0%, rgba(6,182,212,0.08) 40%, transparent 70%)', filter: 'blur(24px)' }}
        />

        {/* ── Carousel background image — full screen, fading top to bottom ── */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence mode="sync">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <img
                src={slides[activeSlide].image}
                alt=""
                className="w-full h-full object-cover"
                style={{
                  opacity: 0.42,
                  maskImage: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.3) 70%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.3) 70%, transparent 100%)',
                }}
              />
            </motion.div>
          </AnimatePresence>
          {/* Blend bottom edge gradient */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
        </div>

        {/* Top/bottom soft fades */}
        <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, transparent 25%, transparent 80%, rgba(255,255,255,0.7) 100%)' }} />

        {/* ── Main content ── */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            {/* Animated service badge */}
            <motion.div variants={itemVariants} className="mb-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`badge-${activeSlide}`}
                  inherit={false}
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase shadow-sm"
                  style={{ background: 'linear-gradient(135deg, rgba(0, 82, 204, 0.08), rgba(0, 184, 217, 0.06))', border: '1px solid rgba(0, 82, 204, 0.25)', color: '#0052CC' }}
                >
                  {slides[activeSlide].badge}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.1] text-[#091E42] font-display mb-2"
            >
              Architecting the Future of{' '}
              <span className="bg-gradient-to-r from-[#0052CC] via-[#00B8D9] to-[#0747A6] bg-clip-text text-transparent">
                Enterprise Systems
              </span>
            </motion.h1>

            {/* Dynamic subtitle */}
            <motion.div variants={itemVariants} className="min-h-[64px] flex items-center justify-center text-center mt-4 mb-6 w-full max-w-2xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`sub-${activeSlide}`}
                  inherit={false}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="text-lg sm:text-xl text-slate-700 font-normal leading-relaxed"
                >
                  {slides[activeSlide].subtitle}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.04, y: -2, boxShadow: '0 16px 40px rgba(0, 82, 204, 0.35)' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('it-infrastructure')}
                className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-white cursor-pointer text-sm"
                style={{ background: 'linear-gradient(135deg, #0747A6, #0052CC, #00B8D9)', boxShadow: '0 8px 28px rgba(0, 82, 204, 0.25)' }}
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('contact')}
                className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-slate-700 cursor-pointer text-sm border border-slate-200 bg-white shadow-sm hover:border-[#DEEBFF] hover:bg-[#DEEBFF]/30 transition-colors"
              >
                Schedule Consultation
              </motion.button>
            </motion.div>

            {/* ── Slide dots ── */}
            <motion.div variants={itemVariants} className="flex items-center gap-2.5 mt-8">
              {slides.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  animate={{
                    width: idx === activeSlide ? 28 : 8,
                    background: idx === activeSlide
                      ? '#4B5563'
                      : '#D1D5DB'
                  }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="h-2 rounded-full cursor-pointer"
                  style={{ minWidth: 8 }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. INFINITE LOGO MARQUEE - HD ORIGINAL ICONS */}
      <section className="relative bg-white py-12 border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-6">
          <span className="text-xs uppercase font-bold tracking-wider text-slate-400">Our Strategic Hardware & Software Partnerships</span>
        </div>
        
        {/* Infinite scrolling wrapper */}
        <div className="w-full overflow-hidden relative flex mask-horizontal-fades py-2">
          <div className="flex animate-marquee whitespace-nowrap min-w-max">
            {/* First Set of original partner logos */}
            <div className="flex items-center shrink-0">
              {partnerIds.map((partnerId, idx) => (
                <div key={`p1-${idx}`} className="flex items-center justify-center mx-8 h-16 w-32 shrink-0">
                  {renderPartnerLogo(partnerId)}
                </div>
              ))}
            </div>
            {/* Second Set of original partner logos */}
            <div className="flex items-center shrink-0" aria-hidden="true">
              {partnerIds.map((partnerId, idx) => (
                <div key={`p2-${idx}`} className="flex items-center justify-center mx-8 h-16 w-32 shrink-0">
                  {renderPartnerLogo(partnerId)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. VALUE PROPOSITION STATS */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x divide-slate-100">
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center px-4"
            >
              <div className="text-4xl lg:text-5xl font-extrabold font-display text-blue-600 mb-2">
                <Counter target={15} suffix="+" />
              </div>
              <div className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Years of Excellence</div>
              <div className="text-xs text-slate-400 mt-2">Delivering certified SLA support since 2011.</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-center px-4"
            >
              <div className="text-4xl lg:text-5xl font-extrabold font-display text-blue-600 mb-2">
                <Counter target={200} suffix="+" />
              </div>
              <div className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Enterprise Deployments</div>
              <div className="text-xs text-slate-400 mt-2">Successfully serving PSU, Govt, and corporate environments.</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="text-center px-4"
            >
              <div className="text-4xl lg:text-5xl font-extrabold font-display text-blue-600 mb-2">
                <Counter target={50} suffix="+" />
              </div>
              <div className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Certified Engineers</div>
              <div className="text-xs text-slate-400 mt-2">Certified across Cisco, Fortinet, VM & cloud systems.</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="text-center px-4"
            >
              <div className="text-4xl lg:text-5xl font-extrabold font-display text-blue-600 mb-2">
                <Counter target={99.8} suffix="%" />
              </div>
              <div className="text-sm font-semibold text-slate-700 uppercase tracking-wider">SLA Compliance</div>
              <div className="text-xs text-slate-400 mt-2">Continuous active surveillance & incident response.</div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. CORE COMPETENCIES GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-dark tracking-tight">
              Enterprise Solutions Tailored for Digital Transformation
            </h2>
            <p className="text-slate-600 text-lg font-light leading-relaxed">
              GlobX delivers high-performing integration across network hardware, custom business software, and secure cloud storage infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: IT Infrastructure */}
            <div className="group bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  <Server className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#091E42] mb-3">IT Infrastructure Services</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  End-to-end server orchestration, storage arrays, backup clusters, virtualization deployment, and workspace productivity consulting.
                </p>
              </div>
              <button 
                onClick={() => onNavigate('it-infrastructure')}
                className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 group-hover:translate-x-1 transition-all cursor-pointer font-sans"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 2: Networking solutions */}
            <div className="group bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-600 mb-6 group-hover:scale-110 transition-transform">
                  <Network className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#091E42] mb-3">Networking Solutions</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  Deploy secure localized optical networks, enterprise routing corridors, SD-WAN, and indoor/outdoor controller-based wireless.
                </p>
              </div>
              <button 
                onClick={() => onNavigate('networking-solutions')}
                className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 group-hover:translate-x-1 transition-all cursor-pointer font-sans"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 3: Security solutions */}
            <div className="group bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#091E42] mb-3">Security & Surveillance</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  Intrusion detection, next-gen UTM firewalls, access control systems, IP camera setups, and advanced AI-assisted video analytics.
                </p>
              </div>
              <button 
                onClick={() => onNavigate('solution-detail', 'security-solutions')}
                className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 group-hover:translate-x-1 transition-all cursor-pointer font-sans"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 4: IT Applications */}
            <div className="group bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#091E42] mb-3">IT Applications & AI/ML</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  Full stack React & Node apps, modernization of legacy databases, data lake pipelines, and deep machine learning integrations.
                </p>
              </div>
              <button 
                onClick={() => onNavigate('service-detail', 'it-applications')}
                className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 group-hover:translate-x-1 transition-all cursor-pointer font-sans"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 5: Business Process Management */}
            <div className="group bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform">
                  <Terminal className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#091E42] mb-3">Workflow & BPM Automation</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  Map and automate custom operational logic, eliminate manual document processing, and improve resource scheduling pipelines.
                </p>
              </div>
              <button 
                onClick={() => onNavigate('service-detail', 'business-process')}
                className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 group-hover:translate-x-1 transition-all cursor-pointer font-sans"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 6: ERP Software */}
            <div className="group bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-600 mb-6 group-hover:scale-110 transition-transform">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#091E42] mb-3">Digital Enterprise ERPs</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  Design unified platforms covering inventory pools, accounting flows, HR dashboards, customer relationships, and support tools.
                </p>
              </div>
              <button 
                onClick={() => onNavigate('service-detail', 'digital-enterprise')}
                className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 group-hover:translate-x-1 transition-all cursor-pointer font-sans"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 5. ESTEEMED CLIENTS SECTION */}
      <section 
        id="esteemed-clients-section"
        ref={clientSectionRef}
        className="py-24 bg-slate-50 border-t border-slate-100 overflow-hidden relative"
      >
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-96 h-96 rounded-full bg-blue-100/20 blur-[100px] pointer-events-none"></div>
        <div className="absolute left-0 bottom-0 w-80 h-80 rounded-full bg-cyan-100/10 blur-[80px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700 uppercase tracking-wider">
              <span>Trusted Partner</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#091E42] tracking-tight">
              Our Esteemed Clients
            </h2>
            <p className="text-slate-500 text-lg font-light leading-relaxed">
              Serving elite educational institutions, large public sector units, utilities, and judiciary organizations across Odisha.
            </p>
          </div>

          {/* Grid with stagger animations */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {esteemedClients.map((client, idx) => (
              <div 
                key={idx}
                style={{
                  transitionDelay: `${idx * 80}ms`,
                  transform: sectionVisible ? 'translateY(0)' : 'translateY(40px)',
                  opacity: sectionVisible ? 1 : 0
                }}
                className="group relative bg-white border border-slate-200/60 rounded-2xl p-6 flex flex-col items-center justify-center h-44 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden cursor-pointer"
              >
                 {/* Glaze reflection sheen sweep */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl z-20">
                  <div className="w-1/2 h-[220%] bg-white/20 absolute -top-12 left-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-glaze-loop"></div>
                </div>

                {/* Card logo image or fallback badge */}
                <div className="flex-1 flex items-center justify-center mb-4 transition-transform duration-300 transform group-hover:scale-105 w-full px-2">
                  {client.logo ? (
                    <img 
                      src={client.logo} 
                      alt={client.fullName} 
                      className="max-h-20 max-w-[90%] object-contain transition-all duration-300"
                    />
                  ) : (
                    renderClientLogo(client.name)
                  )}
                </div>

                {/* Subtitle sector badge */}
                <div className="absolute bottom-3 text-[9px] font-semibold text-slate-400 tracking-wider uppercase group-hover:text-blue-600 transition-colors duration-300">
                  {client.sector}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-3xl p-8 sm:p-16 relative overflow-hidden shadow-xl text-center flex flex-col items-center justify-center space-y-6">
            
            {/* Glow particles */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-700/60 to-cyan-600/40 pointer-events-none"></div>
            <div className="absolute -top-24 -left-24 w-60 h-60 rounded-full bg-cyan-400/25 blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 max-w-2xl space-y-4">
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight leading-tight">
                Ready to Upgrade Your Corporate Infrastructure?
              </h2>
              <p className="text-blue-100 text-sm sm:text-base font-light">
                Consult with our systems engineers today. Let's build a secure, scalable network topology engineered for maximum performance and SLA compliance.
              </p>
            </div>
            
            <div className="relative z-10 pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl shadow-lg transition-all cursor-pointer font-sans"
              >
                Inquire Now / Contact Us
              </button>
              <a
                href="mailto:info@globx.co.in"
                className="bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 flex items-center justify-center transition-all"
              >
                Email: info@globx.co.in
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
