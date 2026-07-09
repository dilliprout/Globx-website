import { useState } from 'react';
import { Network, Settings, RefreshCw, Eye, ShieldAlert, Check } from 'lucide-react';

export default function NetworkingSolutions() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "1. Audit & RF Heatmap Survey",
      description: "Our certified engineers execute physical and radio frequency audits of your campus or workspace. We identify cable path bottlenecks, EMI interferences, and map wireless zones using advanced heatmapping tools."
    },
    {
      title: "2. Topology Design & Simulation",
      description: "We compile logical and physical topology diagrams in Cisco Packet Tracer or Microsoft Visio. We model IP address distribution schemes, subnetting architectures, and core redundancy loops before hardware purchasing."
    },
    {
      title: "3. Structured Cabling & Optical Splicing",
      description: "Physical media installation including Cat6A/Cat8 copper trunks and single-mode/multi-mode optical fibers. We perform fusion splicing, install patch panels, and certify each connection with fluke network analyzers."
    },
    {
      title: "4. Switching & Security Provisioning",
      description: "We configure Core and Access switches. We implement VLAN allocations, link aggregation groups (LAG), spanning-tree protocols (STP) to prevent broadcast storms, and establish UTM firewall rules."
    },
    {
      title: "5. Commissioning & Active Telemetry",
      description: "We transition the network to production. The entire infrastructure is connected to our active SNMP-based telemetry dashboards, providing live indicators of port traffic, latency spikes, and packet losses."
    }
  ];

  const pillars = [
    {
      icon: <Network className="w-6 h-6 text-blue-600" />,
      title: "Network Design & Architecture",
      desc: "Creating logical structures, redundancy paths, and address schemes to support high user densities and enterprise file systems."
    },
    {
      icon: <Settings className="w-6 h-6 text-cyan-600" />,
      title: "Infrastructure Deployment",
      desc: "Lay optical trunks, install physical switches, configure edge routers, and set up high-power indoor/outdoor wireless Access Points."
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-indigo-600" />,
      title: "Software-Defined Networking (SDN)",
      desc: "Deploy centralized controllers like Cisco DNA Center or Ubiquiti UniFi to provision and modify policies across multiple nodes instantly."
    },
    {
      icon: <Eye className="w-6 h-6 text-emerald-600" />,
      title: "Network Monitoring & Management",
      desc: "Track port utilization, detect routing anomalies, configure flow-based alerts, and execute firmware updates during scheduled maintenance."
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-rose-600" />,
      title: "Secure Tunnels & VPN Corridors",
      desc: "Deploy IPsec and SSL VPN tunnels with multi-factor authentication, allowing remote staff to securely access local file stores."
    }
  ];

  return (
    <div className="w-full bg-slate-50 font-sans">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-r from-[#091E42] to-[#0b2b5d] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-wider text-blue-400">Networking Excellence</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            Enterprise Networking Solutions
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl font-light leading-relaxed">
            Deploying high-speed, redundant network loops, structured cabling systems, and secure software-defined wireless systems.
          </p>
        </div>
      </section>

      {/* 2. Interactive Deployment Lifecycle */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-wider text-blue-600">The GlobX Implementation Loop</span>
            <h2 className="text-3xl font-bold font-display text-brand-dark tracking-tight">Structured Deployment Lifecycle</h2>
            <p className="text-slate-500 font-light text-sm sm:text-base leading-relaxed">
              We follow a strict engineering pathway to ensure that every network we commission satisfies strict SLA metrics and structural checks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Step Selection Left */}
            <div className="lg:col-span-5 space-y-3">
              {steps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left px-5 py-4 rounded-xl font-semibold text-sm transition-all border cursor-pointer flex justify-between items-center ${idx === activeStep ? 'bg-blue-50 border-blue-200 text-blue-600 shadow-sm' : 'bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100/50'}`}
                >
                  <span>{step.title.split(". ")[1]}</span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${idx === activeStep ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                    {idx + 1}
                  </div>
                </button>
              ))}
            </div>

            {/* Step Description Right */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-inner min-h-[250px] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="text-xs uppercase font-extrabold text-blue-600 tracking-wider">Phase Detail</div>
                <h3 className="text-2xl font-bold font-display text-brand-dark">{steps[activeStep].title}</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                  {steps[activeStep].description}
                </p>
              </div>
              
              <div className="mt-8 pt-4 border-t border-slate-200/50 text-xs text-slate-400 font-semibold uppercase tracking-wider flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-600" />
                <span>Audited under certified engineering guidelines</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Core Capabilities Grid */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-wider text-blue-600">Specialized Capabilities</span>
            <h2 className="text-3xl font-bold font-display text-brand-dark tracking-tight">Our Core Networking Pillars</h2>
            <p className="text-slate-500 font-light text-sm sm:text-base leading-relaxed">
              We design and configure every aspect of your enterprise communications to guarantee continuous operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-dark font-display">{pillar.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">{pillar.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
