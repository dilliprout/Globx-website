import { Server, Shield, Cpu, Database, Network, Building, Landmark, Briefcase, CheckCircle } from 'lucide-react';

const detailsData = {
  // SERVICES
  'it-applications': {
    category: "Services",
    title: "IT Applications & Software Development",
    tagline: "Custom Software Architectures & Modernization Pipelines",
    icon: <Cpu className="w-8 h-8 text-blue-600" />,
    desc: "We design, build, and support enterprise-grade software applications tailored to resolve specific business operation delays. From single-page React web apps to automated database sync scripts and cloud modernizations, we manage the complete lifecycle.",
    features: [
      "Full-stack web application development (React, Node.js, Express, Postgres)",
      "Database schema optimization, clustering, and security hardening",
      "API integrations connecting proprietary applications with ERP systems",
      "Modernization of legacy systems into secure cloud-ready architectures",
      "AI/ML pipeline integrations for automated text classification and processing"
    ],
    techStack: "React, Node.js, Next.js, Python, PostgreSQL, REST APIs"
  },
  'business-process': {
    category: "Services",
    title: "Business Process Management & Automation",
    tagline: "Operational Mapping & Robotic Workflow Engines",
    icon: <Server className="w-8 h-8 text-cyan-600" />,
    desc: "Streamline daily business tasks, remove paper bottlenecks, and improve operational transparency. We analyze workflows to engineer automated software routing paths that eliminate manual delays.",
    features: [
      "Corporate workflow analysis and logical operations mapping",
      "Integration of automated email, SMS, and ticket notification rules",
      "Electronic document filing structures and approval loops",
      "Employee timesheet tracking, vacation allocations, and task queues",
      "Robotic process automation (RPA) for repetitive database entries"
    ],
    techStack: "Workplace Engines, RPA Tools, Custom Scripts, WebHooks"
  },
  'digital-enterprise': {
    category: "Services",
    title: "Digital Enterprise ERP Applications",
    tagline: "Unified ERP Customization & CRM Alignments",
    icon: <Database className="w-8 h-8 text-indigo-600" />,
    desc: "Consolidate inventory pools, customer records, accounting books, and support tasks under a single enterprise database. We integrate and customize robust ERP systems designed to scale.",
    features: [
      "ERP software installation, setup configuration, and support",
      "Inventory tracking pipelines with barcoding and multi-warehouse sync",
      "Billing systems, automated purchase orders, and tax ledger audits",
      "CRM portal deployment mapping customer support ticket history",
      "User security permissions profiles (Role-Based Access Control)"
    ],
    techStack: "Odoo, SAP, Oracle NetSuite, Custom ERP Modules"
  },

  // SOLUTIONS
  'security-solutions': {
    category: "Solutions",
    title: "Enterprise Security Solutions",
    tagline: "Next-Gen Firewalls & Network Threat Isolation",
    icon: <Shield className="w-8 h-8 text-rose-600" />,
    desc: "Secure your corporate files and active network ports from hacking attempts, ransomware spikes, and data breaches. We deploy secure next-generation firewalls that audit traffic patterns continuously.",
    features: [
      "Next-generation UTM firewall configuration and policy rules",
      "Intrusion detection (IDS) and automated threat isolation (IPS)",
      "Virtual Local Area Network (VLAN) security segmentations",
      "Multi-factor authentication (MFA) setups for VPN login gateways",
      "Continuous network vulnerability scans and device audit logging"
    ],
    techStack: "Fortinet FortiGate, Sophos XGS, Palo Alto Networks, SonicWall"
  },
  'wireless-solutions': {
    category: "Solutions",
    title: "Wireless & RF Networking Solutions",
    tagline: "High-Density Campus Wi-Fi 6 & Heatmap Auditing",
    icon: <Network className="w-8 h-8 text-blue-600" />,
    desc: "Deploy seamless wireless networks across corporate offices, warehouses, and university campuses. We execute radio frequency (RF) heatmapping to position access points for maximum speeds.",
    features: [
      "Wi-Fi 6 / Wi-Fi 6E access point installs (indoor and outdoor)",
      "Centralized cloud/on-premise wireless controller configurations",
      "Custom guest Wi-Fi portal pages with secure SMS authentication",
      "Wireless signal heatmapping and signal leakage surveys",
      "IoT device wireless isolated networks with strict MAC-filtering"
    ],
    techStack: "Ruckus Wireless, Ubiquiti UniFi, Aruba Instant On, Cisco Catalyst"
  },
  'mobility-solutions': {
    category: "Solutions",
    title: "Enterprise Mobility Management (EMM)",
    tagline: "Secure Remote Devices & BYOD Security Rules",
    icon: <Network className="w-8 h-8 text-cyan-600" />,
    desc: "Manage and secure the mobile devices, tablets, and remote laptops used by your personnel. We set up central directories allowing managers to push software configurations, lock lost devices, and enforce password rules.",
    features: [
      "Mobile Device Management (MDM) software integrations",
      "Enforcing remote device disk encryption and passcode rules",
      "Secure corporate email and data folders isolated on user devices",
      "Automated over-the-air corporate Wi-Fi and VPN profile configurations",
      "Remote lock, wipe, and diagnostic commands for security incidents"
    ],
    techStack: "Microsoft Intune, MobileIron, VMware Workspace ONE"
  },
  'surveillance-solutions': {
    category: "Solutions",
    title: "IP Camera Surveillance & AI Video Analytics",
    tagline: "High-Definition Site Surveillance & Access Gates",
    icon: <Shield className="w-8 h-8 text-slate-800" />,
    desc: "Secure physical premises with high-resolution IP camera networks. We deploy intelligent Network Video Recorders (NVR) integrated with face detection, tripwire sensors, and license plate readers.",
    features: [
      "IP camera installations (bullet, dome, PTZ) with infrared night-vision",
      "High-capacity RAID NVR storage server configuration for long retention",
      "AI analytics: perimeter intrusion alerts, object left behind, count logs",
      "Smart physical access gates (RFID, biometric fingerprint, face-scan)",
      "Central control room displays showing multiple site cameras"
    ],
    techStack: "Hikvision IP Cameras, Dahua NVRs, Honeywell Systems, Milestone VMS"
  },
  'bms-solutions': {
    category: "Solutions",
    title: "Building Management System (BMS)",
    tagline: "Integrated Campus Automation & Energy Optimization",
    icon: <Building className="w-8 h-8 text-blue-600" />,
    desc: "Consolidate your HVAC cooling systems, campus lighting grids, water level sensors, and power backups under a single centralized operations dashboard to cut down utility waste.",
    features: [
      "Modbus/BACnet smart sensor installation for temperature and power tracking",
      "Automated chiller and HVAC scheduler configurations based on occupancy",
      "UPS battery status dashboard telemetry and fuel levels tracking",
      "Lighting zoning controllers and automatic smart switch triggers",
      "Centralized alarm manager generating notifications for pump failures"
    ],
    techStack: "Schneider Electric EcoStruxure, Siemens Desigo, Honeywell BMS"
  },
  'pa-solutions': {
    category: "Solutions",
    title: "IP Public Announcement (PA) Systems",
    tagline: "Zoned IP Audio Distribution & Evacuation Alarms",
    icon: <Network className="w-8 h-8 text-indigo-600" />,
    desc: "Install modern network-connected public address systems. Allows admin staff to broadcast audio alerts, schedule class/shift ring tones, or trigger evacuation sirens.",
    features: [
      "Zoned IP audio controllers and network-connected speaker setups",
      "Central console software scheduling bell tones and pre-recorded alerts",
      "Evacuation alarm system integrations triggering emergency audio rules",
      "Microphone stations with localized zoning keypads",
      "High-power outdoor horn installations for industrial PSUs"
    ],
    techStack: "Bosch Praesideo, TOA IP-PA, Ahuja Sound Systems"
  },
  'server-storage-solutions': {
    category: "Solutions",
    title: "Server & Storage SAN/NAS Solutions",
    tagline: "High-Availability Disk Arrays & Virtualization Layers",
    icon: <Database className="w-8 h-8 text-blue-700" />,
    desc: "Consolidate corporate files on enterprise-class storage pools. We configure high-speed SAN/NAS cabinets with active disk replication to shield your databases from drive failures.",
    features: [
      "High-density SAN and NAS storage server cabinets (RAID configurations)",
      "VMware ESXi and Microsoft Hyper-V virtualization host clustering",
      "High-speed fiber channel switches connecting servers to SAN pools",
      "Incremental backup routines and local snapshot configurations",
      "Offsite database vaulting setups for ransomware recovery"
    ],
    techStack: "Dell PowerStore, Synology RackStation, HPE MSA, Veeam Backups"
  },
  'cloud-solutions': {
    category: "Solutions",
    title: "Managed Cloud Infrastructure & Hosting",
    tagline: "Secure Hybrid Hosting & Virtual Server Provisioning",
    icon: <Server className="w-8 h-8 text-cyan-600" />,
    desc: "Bridge your local office servers with high-security public cloud databases. We provision virtual computing resources, cloud storage buckets, and secure DNS configurations.",
    features: [
      "Virtual private cloud (VPC) design and gateway installations",
      "Database scaling, migration pipelines, and automated replication",
      "Web application hosting and content delivery network (CDN) setups",
      "Cloud budget forecasting, utilization reports, and size tuning",
      "Infrastructure-as-Code setups for repeatable developer environments"
    ],
    techStack: "AWS, Azure, Cloud DNS, CDN, VMware Hybrid Cloud"
  },

  // INDUSTRIES
  'government': {
    category: "Industries",
    title: "Government Enterprises",
    tagline: "SLA-Compliant Networking & Secure Data Corridors",
    icon: <Landmark className="w-8 h-8 text-blue-600" />,
    desc: "We design and deploy compliant networks for state government corporations, administrative directories, and municipal offices. We prioritize security, data localizations, and audit histories.",
    features: [
      "Secure network setups adhering to national security standards",
      "Cabling layouts and optical terminations in administrative buildings",
      "Dedicated state datacenter server maintenance agreements",
      "Secure document routing portals with authenticated audit logs",
      "Standby hardware replacements for key communications links"
    ],
    techStack: "NIC Compliance, Localized Hosting, Secure Fiber Loops"
  },
  'public-sector': {
    category: "Industries",
    title: "Public Sector Units (PSUs)",
    tagline: "Industrial IP Surveillance & Redundant LAN Systems",
    icon: <Landmark className="w-8 h-8 text-indigo-600" />,
    desc: "For public sector manufacturing sites, steel plants, and mining offices, we deploy heavy-duty networking cabling, IP camera boundaries, zoning PA speakers, and active standby server setups.",
    features: [
      "Heavy-duty outdoor fiber optic cables laid in protective conduits",
      "Industrial network switches certified for dust and high temperatures",
      "Thermal IP cameras for machinery health monitoring",
      "Zoned emergency announcement networks and horn installations",
      "24/7 technical maintenance contracts with onsite response SLAs"
    ],
    techStack: "Rugged Industrial Networks, Zoned IP-PA, Thermal Telemetry"
  },
  'corporates': {
    category: "Industries",
    title: "Corporate IT Systems & Network Setup",
    tagline: "Smart Wi-Fi 6 Networks & Workspace Configurations",
    icon: <Briefcase className="w-8 h-8 text-emerald-600" />,
    desc: "Equip modern corporate workspaces with high-speed wireless mesh coverage, structured Cat6A desks ports, secure SSL VPN connections for remote workers, and email directory platforms.",
    features: [
      "Structured Cat6A copper desk cabling terminated at patch panels",
      "High-speed office Wi-Fi 6 mesh networks with clean handover metrics",
      "Central directory configurations (Active Directory / Google LDAP)",
      "Meeting room AV projection setups and wireless presentation keys",
      "Prompt ticket response workflows logged in our OneTrack system"
    ],
    techStack: "Microsoft 365, LDAP, Zoom Rooms, Mesh Wi-Fi 6, Cat6A Cabling"
  }
};

export default function ServiceOrSolutionDetail({ detailId }) {
  const currentData = detailsData[detailId];

  if (!currentData) {
    return (
      <div className="w-full bg-slate-50 py-32 text-center font-sans">
        <h2 className="text-2xl font-bold text-slate-800">Detail Page Not Found</h2>
        <p className="text-slate-500 mt-2">The requested ID ({detailId}) could not be resolved.</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 font-sans">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-r from-[#091E42] to-[#0c2957] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-wider text-blue-400">{currentData.category}</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            {currentData.title}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl font-light leading-relaxed">
            {currentData.tagline}
          </p>
        </div>
      </section>

      {/* 2. Detail Body */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-8 bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-md">
            
            <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100">
                {currentData.icon}
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Service Category</span>
                <h2 className="text-2xl font-bold font-display text-brand-dark">{currentData.title}</h2>
              </div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
              {currentData.desc}
            </p>

            <div className="space-y-4">
              <h3 className="text-base font-bold font-display text-brand-dark border-l-4 border-blue-500 pl-3">Deployment Scope & Standard Deliveries</h3>
              
              <ul className="space-y-3.5">
                {currentData.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3 text-slate-600 text-sm sm:text-base">
                    <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-6 border border-slate-800 shadow-xl">
              <h3 className="text-lg font-bold font-display border-b border-slate-800 pb-3">Ecosystem & Tech Stack</h3>
              
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Standard Tech / Protocols</span>
                  <p className="text-sm font-semibold text-white mt-1">{currentData.techStack}</p>
                </div>
                
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">SLA Protection</span>
                  <p className="text-xs text-slate-300 mt-1 font-light leading-relaxed">
                    All deployments are eligible for our SLA active monitoring and onsite technical response contracts.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="mailto:info@globx.co.in"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl block text-center shadow-lg shadow-blue-900/30 transition-all"
                  >
                    Request Technical Sizing
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-3xl p-6 space-y-3">
              <h4 className="font-bold text-brand-dark text-sm sm:text-base">Need a custom topology?</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Our network and systems engineers are available to review existing network diagrams, check wireless coverage maps, and provide free assessment reports.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
