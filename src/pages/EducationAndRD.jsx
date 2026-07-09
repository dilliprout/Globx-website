import { GraduationCap, Video, BookOpen, Database, BarChart, Key, BookOpenCheck } from 'lucide-react';

export default function EducationAndRD() {
  const academicTech = [
    {
      icon: <BookOpen className="w-5 h-5 text-blue-600" />,
      title: "Learning Management Systems (LMS)",
      description: "Customized LMS platforms for universities and research institutes. Supports student enrolment pipelines, course syllabus builders, assignments, online examinations, and automatic progress reports."
    },
    {
      icon: <Video className="w-5 h-5 text-cyan-600" />,
      title: "Smart Classrooms & Audio-Visual Systems",
      description: "Integration of interactive digital boards, high-definition camera arrays for hybrid learning, ceiling-mounted zone microphones, and centralized audio distribution systems."
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-indigo-600" />,
      title: "Student Information Systems (SIS)",
      description: "Secure database platforms managing student records, grade archives, class timetables, tuition billing logs, hostal occupancy checklists, and consolidated attendance sheets."
    }
  ];

  const researchTech = [
    {
      icon: <Database className="w-5 h-5 text-emerald-600" />,
      title: "High-Performance Computing (HPC)",
      description: "Deploying high-density blade servers, clustered computing layers, and storage systems engineered for parallel scientific calculations and simulation algorithms."
    },
    {
      icon: <BarChart className="w-5 h-5 text-teal-600" />,
      title: "Data Analytics & Storage Lakes",
      description: "Configuring multi-terabyte data lakes and analytics pools that allow research departments to aggregate, parse, and backup raw statistical observations securely."
    },
    {
      icon: <Key className="w-5 h-5 text-rose-600" />,
      title: "Cybersecurity & Campus Networks",
      description: "Design isolated research LANs, campus-wide authentication portals, device-specific firewall access rules, and secure VPN corridors for remote scientific access."
    }
  ];

  return (
    <div className="w-full bg-slate-50 font-sans">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-r from-[#091E42] to-[#0b2958] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-wider text-blue-400">Industry Verticals</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            Education & R&D Institutes
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl font-light leading-relaxed">
            Delivering high-availability academic portals, interactive classrooms, and high-performance computing clusters for leading research facilities.
          </p>
        </div>
      </section>

      {/* 2. Intro Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <BookOpenCheck className="w-12 h-12 text-blue-600 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-brand-dark tracking-tight">
            Empowering Modern Academic Environments
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
            GlobX bridges the gap between administrative requirements and scientific research computing. We configure the physical cabling, provision local switches, deploy student databases, and maintain high-performance HPC clusters under unified service agreements.
          </p>
        </div>
      </section>

      {/* 3. Solutions Grid: Academic vs Research */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Section A: Academics */}
          <div className="space-y-10">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs uppercase font-extrabold tracking-wider text-blue-600">Part A</span>
              <h3 className="text-2xl font-bold font-display text-brand-dark">Academics & Campus Administration</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {academicTech.map((tech, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    {tech.icon}
                  </div>
                  <h4 className="text-lg font-bold text-brand-dark font-display">{tech.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section B: Research */}
          <div className="space-y-10">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-600">Part B</span>
              <h3 className="text-2xl font-bold font-display text-brand-dark">Scientific Research & HPC Infrastructure</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {researchTech.map((tech, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                    {tech.icon}
                  </div>
                  <h4 className="text-lg font-bold text-brand-dark font-display">{tech.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
