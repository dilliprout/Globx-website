import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Zap, Shield, Award, TrendingUp, Heart, Code2, Server, ArrowRight, Mail } from 'lucide-react';
import FloatingLines from '../components/FloatingLines';
import careersHero from '../assets/careers_hero.png';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

function SectionWrapper({ children, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const cultureValues = [
  {
    icon: <Zap className="w-6 h-6" />,
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    title: 'Innovation First',
    desc: 'We push boundaries across enterprise networking, AI-driven monitoring, and custom ERP systems. Every engineer here is encouraged to experiment and solve real-world problems at scale.'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    title: 'Integrity in Everything',
    desc: 'From ISO-certified deployment practices to transparent client communication, we operate with uncompromising professional integrity at every level of the organization.'
  },
  {
    icon: <Users className="w-6 h-6" />,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    title: 'Collaborative Culture',
    desc: 'Our cross-functional teams work side by side — network engineers, software developers, and field technicians — delivering holistic IT solutions together.'
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
    title: 'Continuous Growth',
    desc: 'We invest in certifications, workshops, and hands-on lab environments to ensure every team member stays ahead in a fast-moving technology landscape.'
  },
  {
    icon: <Heart className="w-6 h-6" />,
    color: 'text-rose-500',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    title: 'People-Centered',
    desc: 'Your well-being matters. We maintain an open-door policy, celebrate milestones, and build a workplace where diverse perspectives are heard and valued.'
  },
  {
    icon: <Award className="w-6 h-6" />,
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-100',
    title: 'Excellence by Default',
    desc: 'We hold our deployments — whether a campus fiber ring or an ERP rollout — to the same standard of quality that enterprise clients expect and depend on.'
  }
];

const domains = [
  { icon: <Server className="w-5 h-5" />, label: 'IT Infrastructure & Datacenter', color: 'text-blue-600 bg-blue-50' },
  { icon: <Code2 className="w-5 h-5" />, label: 'Software Engineering & AI/ML', color: 'text-emerald-600 bg-emerald-50' },
  { icon: <Shield className="w-5 h-5" />, label: 'Network & Security Engineering', color: 'text-indigo-600 bg-indigo-50' },
  { icon: <Users className="w-5 h-5" />, label: 'Client Success & Support', color: 'text-amber-600 bg-amber-50' },
];

export default function Careers({ onNavigate }) {
  return (
    <div className="w-full bg-slate-50 font-sans">

      {/* ── 1. Hero Banner ── */}
      <section className="relative overflow-hidden bg-[#091E42] text-white min-h-[520px] flex items-center">
        {/* BG image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${careersHero})`,
            filter: 'brightness(0.22)'
          }}
        />
        {/* Floating lines animation */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <FloatingLines
            enabledWaves={['top', 'middle', 'bottom']}
            lineCount={[10, 14, 18]}
            lineDistance={[8, 5, 3]}
            bendRadius={5}
            bendStrength={-0.5}
            linesGradient={['#4073b3', '#0f1c57', '#00B8D9']}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-brand-accent mb-4">
              Join Our Team
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white mb-6 leading-tight">
              Build the Future of{' '}
              <span className="text-brand-accent">Enterprise Technology</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mb-8">
              At GLOBX, we architect the digital backbone of Odisha's most critical institutions —
              government bodies, public sector units, research labs, and Fortune-tier corporates.
              Come grow with engineers who are passionate about impact at scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.03, y: -2, boxShadow: '0 8px 24px rgba(0,184,217,0.35)' }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                className="bg-brand-accent text-[#091E42] font-bold px-7 py-3 rounded-xl text-sm shadow-md cursor-pointer"
                onClick={() => document.getElementById('openings-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Openings
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                className="border border-white/30 text-white font-semibold px-7 py-3 rounded-xl text-sm hover:bg-white/10 transition-colors cursor-pointer"
                onClick={() => onNavigate && onNavigate('about')}
              >
                Our Story
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Culture & Values ── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <motion.div variants={fadeUp} className="text-center mb-16 max-w-2xl mx-auto">
              <span className="text-xs uppercase font-extrabold tracking-widest text-brand-primary mb-3 block">
                Our Culture
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-brand-dark mb-4">
                Where Professionals Thrive
              </h2>
              <p className="text-slate-500 text-base font-light leading-relaxed">
                We believe great technology is built by great people. Our workplace is designed to inspire,
                challenge, and support every member of the GLOBX family.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cultureValues.map((v, i) => (
                <motion.div
                  key={v.title}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,82,204,0.08)' }}
                  className="bg-white border border-slate-100 rounded-2xl p-6 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl ${v.bg} border ${v.border} flex items-center justify-center mb-4 ${v.color}`}>
                    {v.icon}
                  </div>
                  <h3 className="text-base font-bold text-brand-dark mb-2 font-display">{v.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* ── 3. Domains ── */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="text-xs uppercase font-extrabold tracking-widest text-brand-primary mb-2 block">Domains We Hire In</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-brand-dark">Engineering Excellence, Every Discipline</h2>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {domains.map((d) => (
                <motion.div
                  key={d.label}
                  variants={fadeUp}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-4 bg-white rounded-xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${d.color}`}>
                    {d.icon}
                  </div>
                  <span className="text-sm font-semibold text-brand-dark leading-snug">{d.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </SectionWrapper>
        </div>
      </section>

      {/* ── 4. Open Positions (Currently Empty) ── */}
      <section id="openings-section" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="text-xs uppercase font-extrabold tracking-widest text-brand-primary mb-3 block">Open Positions</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-dark mb-4">Current Openings</h2>
              <p className="text-slate-500 font-light max-w-xl mx-auto">
                We're always on the lookout for talented individuals. Check back soon for new opportunities.
              </p>
            </motion.div>

            {/* Empty state card */}
            <motion.div
              variants={fadeUp}
              className="max-w-lg mx-auto bg-slate-50 border border-slate-100 rounded-3xl p-12 text-center flex flex-col items-center gap-6"
            >
              {/* Custom loader — recolored to brand palette */}
              <div className="careers-loader" aria-label="Loading openings" />

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-brand-dark font-display">No Openings Right Now</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed">
                  We're currently fully staffed. We'll post new roles here as soon as they become available.
                  <br />
                  In the meantime, feel free to send your profile to our HR team.
                </p>
              </div>

              <motion.a
                href="mailto:hr@globx.co.in"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-brand-primary text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-sm hover:bg-brand-secondary transition-colors"
              >
                <Mail className="w-4 h-4" />
                Send Your Profile
              </motion.a>
            </motion.div>
          </SectionWrapper>
        </div>
      </section>

      {/* ── 5. "Looking For Something Else?" CTA Banner ── */}
      <section className="bg-slate-50 pb-24 pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <motion.div
              variants={fadeUp}
              className="cta-contact-banner relative overflow-hidden rounded-2xl border border-slate-200 bg-white px-8 py-16 text-center group cursor-default"
              style={{ boxShadow: '0 4px 40px rgba(0,82,204,0.07)' }}
            >
              {/* Full-width connected rib SVG spanning entire card */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 1200 220"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Rib lines — each is a full-width sine-wave path */}
                <path d="M0,20 C150,5 300,35 450,20 C600,5 750,35 900,20 C1050,5 1150,30 1200,20" stroke="#00B8D9" strokeWidth="1.4" fill="none" opacity="0.45" className="rib-wave rib-1"/>
                <path d="M0,38 C160,20 310,58 460,38 C610,18 760,58 910,38 C1060,18 1150,48 1200,38" stroke="#0052CC" strokeWidth="1.1" fill="none" opacity="0.3" className="rib-wave rib-2"/>
                <path d="M0,56 C140,38 290,74 440,56 C590,38 740,74 890,56 C1040,38 1150,66 1200,56" stroke="#00B8D9" strokeWidth="1.0" fill="none" opacity="0.22" className="rib-wave rib-3"/>
                <path d="M0,74 C155,56 305,90 455,74 C605,56 755,90 905,74 C1055,56 1155,84 1200,74" stroke="#0747A6" strokeWidth="0.9" fill="none" opacity="0.18" className="rib-wave rib-4"/>
                <path d="M0,92 C145,74 295,110 445,92 C595,74 745,110 895,92 C1045,74 1148,102 1200,92" stroke="#00B8D9" strokeWidth="0.8" fill="none" opacity="0.15" className="rib-wave rib-5"/>
                {/* Bottom ribs mirrored */}
                <path d="M0,200 C150,185 300,215 450,200 C600,185 750,215 900,200 C1050,185 1150,210 1200,200" stroke="#00B8D9" strokeWidth="1.4" fill="none" opacity="0.45" className="rib-wave rib-1"/>
                <path d="M0,182 C160,162 310,198 460,182 C610,162 760,198 910,182 C1060,162 1150,192 1200,182" stroke="#0052CC" strokeWidth="1.1" fill="none" opacity="0.3" className="rib-wave rib-2"/>
                <path d="M0,164 C140,144 290,180 440,164 C590,144 740,180 890,164 C1040,144 1150,174 1200,164" stroke="#00B8D9" strokeWidth="1.0" fill="none" opacity="0.22" className="rib-wave rib-3"/>
                <path d="M0,146 C155,126 305,162 455,146 C605,126 755,162 905,146 C1055,126 1155,156 1200,146" stroke="#0747A6" strokeWidth="0.9" fill="none" opacity="0.18" className="rib-wave rib-4"/>
                <path d="M0,128 C145,108 295,144 445,128 C595,108 745,144 895,128 C1045,108 1148,138 1200,128" stroke="#00B8D9" strokeWidth="0.8" fill="none" opacity="0.15" className="rib-wave rib-5"/>
              </svg>

              {/* Interactive gradient pulse on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,184,217,0.06) 0%, transparent 70%)' }}
              />

              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-brand-dark mb-2">
                  Looking For <span className="text-brand-accent">Something Else?</span>
                </h2>
                <p className="text-slate-500 text-sm font-light mb-8">Write or talk to us.</p>
                <motion.button
                  whileHover={{ scale: 1.04, y: -2, boxShadow: '0 8px 28px rgba(0,82,204,0.28)' }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 26 }}
                  onClick={() => onNavigate && onNavigate('contact')}
                  className="inline-flex items-center gap-2 bg-brand-primary text-white font-semibold px-8 py-3 rounded-xl text-sm shadow-md cursor-pointer"
                >
                  Contact Us <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </SectionWrapper>
        </div>
      </section>

    </div>
  );
}
