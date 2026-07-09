import { useState } from 'react';
import { Server, Cloud, Network, Shield, Monitor, HardDrive, Compass, ChevronRight, Check } from 'lucide-react';

export default function ITInfrastructure() {
  const [activeTab, setActiveTab] = useState('managed-infra');

  const services = [
    {
      id: 'managed-infra',
      title: "Managed Infrastructure Services",
      icon: <Server className="w-5 h-5" />,
      tagline: "Active Surveillance & Proactive Infrastructure Monitoring",
      description: "We assume operational responsibility for your server arrays, storage systems, and active directory servers. Through custom dashboard metrics and automated event thresholds, we isolate potential failures before they impact business continuity.",
      bullets: [
        "24/7/365 active monitoring of server CPU, RAM, and IOPS parameters",
        "Automated backup checks and verification scripts",
        "Operating system patch management and security updates",
        "Hardware status tracking and warranty management log integrations"
      ],
      hardware: "Cisco UCS Servers, Dell PowerEdge Clusters, HPE ProLiant Systems"
    },
    {
      id: 'managed-cloud',
      title: "Managed Cloud Infrastructure",
      icon: <Cloud className="w-5 h-5" />,
      tagline: "Hybrid Cloud Scaling & Infrastructure-as-Code (IaC)",
      description: "Deploy and optimize cloud environments with strict container configurations and database partitions. We assist in migrating legacy servers to hybrid architectures that bridge on-premise blade systems with secure public clouds.",
      bullets: [
        "AWS, Microsoft Azure, and Google Cloud platform administration",
        "Virtual machine sizing, provisioning, and automatic scale configurations",
        "Database orchestration, backup policies, and geographic redundancy",
        "Containerization setup via Kubernetes and secure Docker containers"
      ],
      hardware: "AWS DirectConnect, Microsoft Azure ExpressRoute, VMware vRealize"
    },
    {
      id: 'enterprise-network',
      title: "Enterprise Network Management",
      icon: <Network className="w-5 h-5" />,
      tagline: "Structured Cabling & High-Availability LAN/WAN",
      description: "We architect and deploy secure campus-wide communications. From installing high-speed optical fiber trunks in corporate offices to configuring software-defined switches, we construct redundant routing loops.",
      bullets: [
        "Structured copper (Cat6A/Cat8) and fiber optic cabling layout design",
        "Enterprise Core, Distribution, and Access switch installations",
        "Dynamic routing setups (OSPF, BGP) for absolute connection redundancy",
        "Centralized wireless controller configuration and heatmapping site surveys"
      ],
      hardware: "Cisco Catalyst, Aruba CX, Ruckus Wireless Controllers"
    },
    {
      id: 'infra-security',
      title: "Infrastructure Security",
      icon: <Shield className="w-5 h-5" />,
      tagline: "Zero-Trust Firewalls & Unified Threat Management",
      description: "Secure your operational perimeter from external vectors. We integrate multi-layered threat prevention systems that audit traffic patterns, prevent unauthorized access, and isolate anomalies.",
      bullets: [
        "Next-Generation Firewall (NGFW) deployment and security policy rules",
        "Intrusion Prevention Systems (IPS) and malware file inspection",
        "Secure remote user access tunnels (SSL VPN, IPsec VPN) with MFA",
        "Vulnerability scanning, endpoint detection, and secure VLAN segmentations"
      ],
      hardware: "Fortinet FortiGate UTM, Sophos XGS Firewalls, Palo Alto Networks"
    },
    {
      id: 'digital-workspace',
      title: "Digital Workspace Solutions",
      icon: <Monitor className="w-5 h-5" />,
      tagline: "Standardized User Provisioning & Corporate Support Systems",
      description: "Equip your personnel with standardized computing environments. We manage software distribution, Active Directory permissions, corporate email clients, and remote helpdesk operations.",
      bullets: [
        "Automated software installation pipelines and security setups",
        "Active Directory, LDAP, and single-sign-on (SSO) configurations",
        "Unified Communications integrations (Microsoft 365, Google Workspace)",
        "Triage support integrated directly with our OneTrack ticketing portal"
      ],
      hardware: "Windows Server AD, Microsoft Intune, Google Workspace Admin"
    },
    {
      id: 'system-integration',
      title: "Comprehensive System Integration",
      icon: <HardDrive className="w-5 h-5" />,
      tagline: "High-Performance SAN/NAS Storage & Disaster Recovery",
      description: "Consolidate your digital records with secure network storage. We specialize in configuring multi-terabyte storage Area Networks (SAN) and Network Attached Storage (NAS) pools with active replication.",
      bullets: [
        "High-density SAN and NAS system configurations with RAID arrays",
        "Virtualization layer deployment (VMware ESXi, Microsoft Hyper-V)",
        "Disaster recovery planning, bare-metal restore points, and vaulting",
        "Legacy server data migration with zero record corruption"
      ],
      hardware: "Synology Enterprise NAS, Dell PowerStore SAN, Veeam Availability Suite"
    },
    {
      id: 'infra-consulting',
      title: "Consulting & Site Assessment",
      icon: <Compass className="w-5 h-5" />,
      tagline: "Compliance Audits, Sizing Plans, & Migration Blueprints",
      description: "Before initiating modifications, our senior engineers audit your active topologies. We provide comprehensive blueprints assessing server utilization, network bottlenecks, and compliance vulnerabilities.",
      bullets: [
        "Network penetration tests and firewall configuration audits",
        "Server hardware energy efficiency and capacity utilization checks",
        "Structured cabling testing with certified fluke meter reports",
        "Detailed IT budget estimations and equipment lifecycle planning"
      ],
      hardware: "Fluke DSX-8000 CableAnalyzer, Wireshark Deep Packet analysis"
    }
  ];

  const activeService = services.find(s => s.id === activeTab) || services[0];

  return (
    <div className="w-full bg-slate-50 font-sans">
      
      {/* 1. Page Header */}
      <section className="bg-gradient-to-r from-[#091E42] to-[#0a2754] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-wider text-blue-400">Enterprise Services</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight">
            IT Infrastructure Led Services
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl font-light leading-relaxed">
            From physical optical trunk terminations to virtual machine resource configurations, we deliver highly compliant systems engineering.
          </p>
        </div>
      </section>

      {/* 2. Interactive Navigation Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Column */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-100 p-4 shadow-sm space-y-1">
            <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider block px-4 mb-3">Service Spectrum</span>
            {services.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-left text-sm font-semibold transition-all cursor-pointer ${activeTab === item.id ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600 pl-3' : 'text-slate-700 hover:bg-slate-50'}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-1.5 rounded-lg ${activeTab === item.id ? 'bg-blue-600/10 text-blue-600' : 'text-slate-400'}`}>
                    {item.icon}
                  </div>
                  <span>{item.title}</span>
                </div>
                <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${activeTab === item.id ? 'translate-x-1 text-blue-600' : ''}`} />
              </button>
            ))}
          </div>

          {/* Right Content Pane */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-100 p-8 sm:p-10 shadow-md min-h-[500px] flex flex-col justify-between transition-all duration-300">
            
            <div className="space-y-6">
              {/* Service header */}
              <div className="space-y-2">
                <span className="text-xs uppercase font-extrabold tracking-wider text-blue-600">{activeService.tagline}</span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-brand-dark tracking-tight">{activeService.title}</h2>
              </div>

              {/* Service description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                {activeService.description}
              </p>

              {/* Bullets list */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider">Features & Delivery Scope</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {activeService.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-2 text-slate-600 text-sm">
                      <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Hardware & Systems Callout */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Standardized Ecosystem Technologies</span>
                <span className="text-sm font-semibold text-slate-700">{activeService.hardware}</span>
              </div>
              <div className="text-xs font-semibold text-slate-500 uppercase">
                SLA Enabled Service
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. SLA and Operations Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs uppercase font-extrabold tracking-wider text-blue-400">Operations Guidelines</span>
              <h3 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight leading-tight">
                Standard SLA Commitments
              </h3>
              <p className="text-slate-300 font-light text-sm sm:text-base leading-relaxed">
                GlobX operates on highly structured maintenance contracts designed to match critical enterprise workloads. We outline exact response hours based on incident classification.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-slate-800 p-4 rounded-xl">
                  <div className="text-xl font-bold text-white">4 Hours</div>
                  <div className="text-xs text-slate-400 mt-1">Severity 1 (Critical outage) onsite resolution response</div>
                </div>
                <div className="border border-slate-800 p-4 rounded-xl">
                  <div className="text-xl font-bold text-white">Next Business Day</div>
                  <div className="text-xs text-slate-400 mt-1">Severity 2 hardware replacement logistics</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-800 p-8 rounded-3xl space-y-6">
              <h4 className="text-base font-bold font-display text-white border-b border-slate-800 pb-3">Standard Maintenance Tasks</h4>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold shrink-0 mt-0.5">1</span>
                  <div>
                    <span className="font-semibold text-white block">Preventative Auditing:</span>
                    Quarterly onsite evaluations checking cabling decay, power backups, and switch fan dust screens.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold shrink-0 mt-0.5">2</span>
                  <div>
                    <span className="font-semibold text-white block">Dynamic Log Monitoring:</span>
                    Aggregation of authentication logs to monitor security incidents and unauthorized root attempts.
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
