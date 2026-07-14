import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  CheckCircle2, 
  Users, 
  Database, 
  Clock, 
  ShieldCheck, 
  ChevronRight, 
  Monitor, 
  Plus, 
  FileSpreadsheet,
  Activity,
  MessageSquare,
  FileText,
  TrendingUp,
  AlertCircle,
  Bell,
  Mail,
  Lock,
  ArrowRight,
  Sparkles,
  Send,
  Check,
  CheckSquare,
  Bookmark,
  Shield
} from 'lucide-react';
import onedeskDashboard from '../assets/onedesk_dashboard.png';

export default function OneDesk() {
  const [activeTab, setActiveTab] = useState('ticket');
  const [activeRole, setActiveRole] = useState('manager');
  
  // Interactive Simulator States
  const [simTickets, setSimTickets] = useState([
    { id: "TKT-492", title: "Enterprise Database Connection Timeout", client: "NALCO", priority: "HIGH", status: "OPEN", assignedTo: "Debasish P." },
    { id: "TKT-491", title: "Optical Loop Latency Issue", client: "High Court of Odisha", priority: "HIGH", status: "ASSIGNED", assignedTo: "Ranjan Dash" },
    { id: "TKT-489", title: "Request for Secondary WAN Port Setup", client: "OCAC", priority: "MEDIUM", status: "RESOLVED", assignedTo: "Subhadip Roy" },
    { id: "TKT-485", title: "Account Portal Access Glitch", client: "IndianOil", priority: "LOW", status: "RESOLVED", assignedTo: "Lipsa Tripathy" }
  ]);
  
  const [newTicketTitle, setNewTicketTitle] = useState("");
  const [newTicketClient, setNewTicketClient] = useState("OCAC");
  const [newTicketPriority, setNewTicketPriority] = useState("HIGH");
  
  // Simulated Toast Notification
  const [toast, setToast] = useState(null);

  const triggerToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 4000);
  };

  const handleCreateTicket = (e) => {
    e.preventDefault();
    if (!newTicketTitle.trim()) return;

    const newId = `TKT-${Math.floor(100 + Math.random() * 900)}`;
    const newTkt = {
      id: newId,
      title: newTicketTitle,
      client: newTicketClient,
      priority: newTicketPriority,
      status: "OPEN",
      assignedTo: "Unassigned"
    };

    setSimTickets([newTkt, ...simTickets]);
    setNewTicketTitle("");
    triggerToast(`✨ [WebSocket] New Ticket Raised: ${newId} - "${newTicketTitle}"`);
    
    // Auto-assignment simulation after 3 seconds
    setTimeout(() => {
      setSimTickets(prev => prev.map(t => {
        if (t.id === newId) {
          triggerToast(`⚡ [OneDesk Smart Assignment] ${newId} automatically routed to engineer: Debasish P.`);
          return { ...t, status: "ASSIGNED", assignedTo: "Debasish P." };
        }
        return t;
      }));
    }, 3000);
  };

  const handleUpdateStatus = (id, nextStatus) => {
    setSimTickets(prev => prev.map(t => {
      if (t.id === id) {
        triggerToast(`📝 Ticket ${id} updated to ${nextStatus}`);
        return { ...t, status: nextStatus };
      }
      return t;
    }));
  };

  const tabs = {
    ticket: {
      title: "Intelligent Ticket Management",
      badge: "Automation Core",
      icon: <Layers className="w-5 h-5" />,
      features: [
        { title: "Multi-Channel Support", desc: "Consolidate and capture inbound service requests from phone calls, corporate emails, and web forms into a single unified grid." },
        { title: "Smart Auto-Routing", desc: "Uses automated triage logic to assign tickets instantly to certified engineers based on product category, workload, and location." },
        { title: "Priority-Based SLA Workflows", desc: "Differentiate urgent outages from routine maintenance with strict High/Medium/Low thresholds linked to contract targets." },
        { title: "Real-Time Tracking Matrix", desc: "Monitor lifecycle transitions from OPEN, to ASSIGNED, IN PROGRESS, ON TRIAL, and RESOLVED with automated alert triggers." }
      ]
    },
    task: {
      title: "Powerful Task Management",
      badge: "Work Breakdown",
      icon: <CheckSquare className="w-5 h-5" />,
      features: [
        { title: "Linked Sub-Tasks", desc: "Break down complex support operations (such as server rack migration) into trackable sub-tasks with discrete checklists." },
        { title: "Smart Load Balancing", desc: "Distribute workloads efficiently across local field technicians and network operations center (NOC) teams." },
        { title: "Due Date Tracker Alerts", desc: "Prevent SLA breaches with built-in timing reminders, color-coded countdown indicators, and email warning pings." },
        { title: "Interactive Progress Audit", desc: "Track tasks in real-time from 'Not Started' to 'Completed' with instant engineer completion logs and signature tags." }
      ]
    },
    account: {
      title: "Account & Contact Management",
      badge: "Unified Database",
      icon: <Users className="w-5 h-5" />,
      features: [
        { title: "Centralized Customer CRM", desc: "Keep all client organization profiles, locations, active contract dates, and billing metrics consolidated in one secure vault." },
        { title: "Account Hierarchies", desc: "Map multiple contact individuals, secondary site administrators, and operations heads under a single parent enterprise profile." },
        { title: "Self-Service Client Portal", desc: "Enable clients to submit tickets, upload site photographs, track engineer dispatch locations, and read diagnostics report logs." },
        { title: "Designation Grouping", desc: "Organize contacts by corporate roles and responsibilities to streamline emergency notification routing." }
      ]
    },
    product: {
      title: "Advanced Product Tracking",
      badge: "Asset Matrix",
      icon: <Database className="w-5 h-5" />,
      features: [
        { title: "Universal Product Catalog", desc: "Log networking switches, database cores, server stacks, and software licenses, complete with OEM warranties." },
        { title: "Granular Issue Tagging", desc: "Group service tickets under specific categories (e.g., WAN Outage, Database Query Lag) to identify structural weaknesses." },
        { title: "Product-Specific Ticket Links", desc: "Link diagnostic details directly to a physical hardware serial number or license key to track individual node lifespans." },
        { title: "Recursive Historical Logs", desc: "Instantly view past ticket trends on a specific device to identify chronic hardware fatigue or cable faults." }
      ]
    },
    collaboration: {
      title: "Real-Time Collaboration",
      badge: "Team Sync",
      icon: <MessageSquare className="w-5 h-5" />,
      features: [
        { title: "Live WebSocket Alerts", desc: "Receive immediate screen updates, system assignment popups, and ticket progress pings without page refreshes." },
        { title: "Activity Feeds Audit Trail", desc: "Read a live-scrolling timeline logging every note, state change, device replacement, and assignment update." },
        { title: "Direct Attachment Vault", desc: "Upload and attach configuration files, terminal trace logs, speed test captures, and site wiring diagrams directly." },
        { title: "Internal Team Notes", desc: "Write private system notes visible only to engineers and managers to brainstorm solutions without alerting clients." }
      ]
    },
    audit: {
      title: "Comprehensive Audit Logging",
      badge: "Security & Compliance",
      icon: <ShieldCheck className="w-5 h-5" />,
      features: [
        { title: "Tamper-Resistant Audit Trail", desc: "Log every user action, status modification, configuration note, and database query in a read-only historical record." },
        { title: "ISO & SLA Compliance Ready", desc: "Meet strict corporate and public sector SLA auditing standards with exportable CSV/PDF compliance records." },
        { title: "User Activity Mapping", desc: "Precisely trace who resolved a ticket, who authorized a spares shipment, and when a task checklist was checked." },
        { title: "Relentless Data Integrity", desc: "Protect client SLA reports and service timelines with strict cryptographic validation of system transaction records." }
      ]
    }
  };

  return (
    <div className="w-full bg-[#f8fafc] text-[#091E42] font-sans overflow-x-hidden selection:bg-blue-600 selection:text-white">
      
      {/* simulated WebSocket Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 max-w-md bg-slate-900 text-white px-5 py-4 rounded-2xl shadow-2xl border border-blue-500/30 flex items-center gap-3.5"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></div>
            <span className="text-xs font-mono tracking-tight leading-relaxed">{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO SECTION WITH MODERN SCREENSHOT VIEWPORT */}
      <section className="relative bg-gradient-to-br from-[#091E42] via-[#0d2a5c] to-slate-950 text-white pt-20 pb-28 sm:pt-24 sm:pb-36 overflow-hidden">
        {/* Decorative Grid Overlay & Ambient Glows */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute -bottom-20 -right-10 w-[500px] h-[500px] bg-[#00B8D9]/15 rounded-full blur-[130px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Hero Description */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 space-y-8"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/25 text-xs font-semibold text-blue-300 uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-spin" />
                <span>Next-Gen Enterprise Support Hub</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight leading-[1.08] text-white">
                Transform Your <br />
                Customer Support <br />
                with <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">OneDesk</span>
              </h1>
              
              <p className="text-slate-300 text-lg font-light leading-relaxed max-w-xl">
                A unified, audit-ready support operations console. By bridging centralized account hierarchies, advanced hardware product tracking, and multi-channel ticketing, OneDesk guarantees rapid resolution, live team sync, and bulletproof SLA compliance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  whileHover={{ scale: 1.03, y: -2, boxShadow: '0 12px 30px rgba(59, 130, 246, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  href="#onedesk-simulator"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold bg-blue-600 text-white cursor-pointer shadow-lg hover:bg-blue-500 transition-colors text-sm"
                >
                  Launch Simulator
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="#onedesk-capabilities"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold bg-white/5 border border-white/10 text-slate-200 cursor-pointer hover:bg-white/10 transition-all text-sm"
                >
                  Explore Capabilities
                </motion.a>
              </div>

              {/* Quick stats tags */}
              <div className="flex flex-wrap gap-x-8 gap-y-4 pt-6 border-t border-white/10">
                <div>
                  <span className="text-2xl font-extrabold text-white block">99.8%</span>
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">SLA Compliance</span>
                </div>
                <div className="h-10 w-px bg-white/10 self-center hidden sm:block"></div>
                <div>
                  <span className="text-2xl font-extrabold text-white block">&lt; 15m</span>
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Avg Response Time</span>
                </div>
                <div className="h-10 w-px bg-white/10 self-center hidden sm:block"></div>
                <div>
                  <span className="text-2xl font-extrabold text-white block">100%</span>
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Auditable Trail</span>
                </div>
              </div>
            </motion.div>
            
            {/* Right Hero Video/Image Viewport - Large Dashboard Mockup */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96, rotateY: 8 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative perspective"
            >
              {/* Outer glow ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 rounded-[28px] blur-xl opacity-35 animate-pulse"></div>
              
              {/* Device Frame */}
              <div className="relative bg-slate-900/90 rounded-[28px] p-2.5 border border-slate-700/60 shadow-2xl backdrop-blur-md">
                {/* Browser bar */}
                <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800/80 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                    <span className="text-[10px] text-slate-400 font-mono ml-4 select-none">onedesk.globx.systems/portal</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></div>
                    <span className="text-[9px] font-mono tracking-wider">LIVE DATA</span>
                  </div>
                </div>
                
                {/* Image itself */}
                <div className="overflow-hidden rounded-2xl border border-slate-800 shadow-inner group relative">
                  <img 
                    src={onedeskDashboard} 
                    alt="OneDesk Enterprise Dashboard UI Overview" 
                    className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700" 
                  />
                  {/* Subtle sheen layer on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. TABBED CORE FUNCTIONALITY SHOWCASE */}
      <section id="onedesk-capabilities" className="py-24 sm:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full">Product Pillars</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
              A Comprehensive Customer Support Ecosystem
            </h2>
            <p className="text-slate-500 font-light text-base leading-relaxed">
              Explore the critical architectural segments designed to optimize ticketing volume, ensure accountability, and keep enterprise engineering workflows running at peak performance.
            </p>
          </div>

          {/* Desktop/Tablet Horizontal Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {Object.keys(tabs).map((tabKey) => (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                className={`flex items-center gap-2.5 px-6 py-4 rounded-xl text-xs sm:text-sm font-semibold transition-all border cursor-pointer ${
                  activeTab === tabKey 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/15' 
                    : 'bg-slate-50 text-slate-600 border-slate-200/80 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {tabs[tabKey].icon}
                <span>{tabs[tabKey].title}</span>
              </button>
            ))}
          </div>

          {/* Tab content panel */}
          <div className="bg-[#f8fafc] border border-slate-200/60 rounded-3xl p-8 sm:p-12 shadow-sm max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                
                {/* Left explanation text */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/50 text-[10px] font-bold text-blue-700 uppercase tracking-wider">
                    {tabs[activeTab].badge}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
                    {tabs[activeTab].title}
                  </h3>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">
                    Designed to maintain deep historical visibility, improve response compliance margins, and empower cross-team collaboration for complex IT operations.
                  </p>
                  
                  <div className="h-px bg-slate-200 w-full my-4"></div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600">
                      {tabs[activeTab].icon}
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block uppercase font-bold tracking-wider">Module Status</span>
                      <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1.5 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                        Production Deployment Active
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right detailed list grid */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {tabs[activeTab].features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300"
                    >
                      <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                        <Check className="w-4 h-4 text-blue-600" />
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base tracking-tight mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  ))}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE SIMULATOR (LIVE CLIENT PORTAL & TASKBOARD) */}
      <section id="onedesk-simulator" className="py-24 sm:py-32 bg-[#f1f5f9] border-t border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest text-indigo-600">Live Hands-on Simulator</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">OneDesk System Role Simulator</h2>
            <p className="text-slate-500 font-light text-base leading-relaxed">
              Interact with our support simulator. Submit tickets as a customer, track updates as a manager, or close tickets as an engineer to see the platform in action.
            </p>
          </div>

          {/* Role selector tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { key: 'manager', label: 'Operations Manager Console' },
              { key: 'engineer', label: 'Field Engineer Workspace' },
              { key: 'customer', label: 'Customer Ticket Portal' }
            ].map((role) => (
              <button
                key={role.key}
                onClick={() => setActiveRole(role.key)}
                className={`px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                  activeRole === role.key 
                    ? 'bg-slate-900 text-white border-slate-900 shadow-lg' 
                    : 'bg-white text-slate-600 border-slate-200/80 hover:bg-slate-50'
                }`}
              >
                {role.label}
              </button>
            ))}
          </div>

          {/* Console layout */}
          <div className="bg-slate-950 text-white rounded-3xl shadow-2xl border border-slate-800 max-w-6xl mx-auto overflow-hidden">
            
            {/* Header controls bar */}
            <div className="bg-slate-900 px-6 py-4.5 border-b border-slate-800 flex flex-wrap justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                <span className="text-xs text-slate-400 font-mono ml-4 hidden sm:inline select-none">OneDesk Client Console v3.1.2</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-xl text-[10px] sm:text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-slate-400 font-mono">WS_CONNECT_OK</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-indigo-600 border border-indigo-500/20 flex items-center justify-center text-xs font-bold text-white uppercase select-none shadow">
                  OD
                </div>
              </div>
            </div>

            {/* Simulated workspaces */}
            <div className="min-h-[520px] p-6 sm:p-8 bg-slate-950">
              
              <AnimatePresence mode="wait">
                
                {/* 1. MANAGER VIEW */}
                {activeRole === 'manager' && (
                  <motion.div
                    key="manager"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-8"
                  >
                    {/* Console stats grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        { label: "Active Tickets", val: simTickets.filter(t => t.status !== "RESOLVED").length, color: "text-blue-400", sub: "Awaiting resolution" },
                        { label: "SLA Compliance Rate", val: "99.8%", color: "text-emerald-400", sub: "Contract limits" },
                        { label: "Total Handled Today", val: simTickets.length, color: "text-indigo-400", sub: "Updated in real-time" },
                        { label: "High Priority Incidents", val: simTickets.filter(t => t.priority === "HIGH" && t.status !== "RESOLVED").length, color: "text-rose-400 animate-pulse", sub: "Action required" }
                      ].map((item, idx) => (
                        <div key={idx} className="bg-slate-900 border border-slate-800/80 p-5 rounded-2xl space-y-2">
                          <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">{item.label}</span>
                          <h4 className={`text-3xl font-extrabold ${item.color}`}>{item.val}</h4>
                          <span className="text-[10px] text-slate-400 block">{item.sub}</span>
                        </div>
                      ))}
                    </div>

                    {/* Active queues and charts mockup */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                      {/* Ticket Queue list */}
                      <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                        <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                          <h4 className="text-sm font-bold tracking-wide flex items-center gap-2">
                            <Activity className="w-4 h-4 text-blue-400" />
                            <span>Global Support Incident Queue</span>
                          </h4>
                          <span className="text-[10px] text-slate-500 uppercase font-mono">Sorted by Date</span>
                        </div>

                        <div className="space-y-3 max-h-[250px] overflow-y-auto pr-1">
                          {simTickets.map((t) => (
                            <div key={t.id} className="bg-slate-950/60 border border-slate-800/60 p-4 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs hover:border-slate-700 transition-colors">
                              <div className="space-y-1">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="font-mono text-slate-500 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-[10px]">{t.id}</span>
                                  <span className="text-slate-200 font-semibold">{t.title}</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-400 text-[10px] pt-0.5">
                                  <span>Client: <strong className="text-slate-300">{t.client}</strong></span>
                                  <span>•</span>
                                  <span>Assignee: <strong className="text-blue-400">{t.assignedTo}</strong></span>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                                <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                                  t.priority === 'HIGH' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                                }`}>{t.priority}</span>
                                <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                                  t.status === 'RESOLVED' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                }`}>{t.status}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Mock SLA Trends */}
                      <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-4">
                        <div>
                          <h4 className="text-sm font-bold tracking-wide flex items-center gap-2 mb-4">
                            <TrendingUp className="w-4 h-4 text-indigo-400" />
                            <span>Monthly SLA Target Metrics</span>
                          </h4>
                          
                          <div className="space-y-4 pt-2">
                            {[
                              { label: "Hardware Dispatch (<4h)", progress: 98 },
                              { label: "Network Loop Ping (<15m)", progress: 99 },
                              { label: "Software Patch Check (<2h)", progress: 95 }
                            ].map((item, idx) => (
                              <div key={idx} className="space-y-1">
                                <div className="flex justify-between text-xs">
                                  <span className="text-slate-400">{item.label}</span>
                                  <span className="text-emerald-400 font-mono">{item.progress}%</span>
                                </div>
                                <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-800">
                                  <div className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full" style={{ width: `${item.progress}%` }}></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-[10px] text-slate-400 leading-normal">
                          <span className="text-white font-bold block mb-1">💡 MANAGER PRO-TIP:</span>
                          Review the workload dispatch queue daily to balance active tickets between back-office and site field teams.
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 2. ENGINEER VIEW */}
                {activeRole === 'engineer' && (
                  <motion.div
                    key="engineer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-800 pb-4 gap-2">
                      <div>
                        <h4 className="text-sm font-bold tracking-wide">My Assigned Tasks Workspace</h4>
                        <p className="text-xs text-slate-500 mt-0.5">Showing tickets routed directly to your profile queue.</p>
                      </div>
                      <span className="text-[10px] text-slate-500 bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg font-mono">Assigned Engineer: Debasish P.</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {simTickets.filter(t => t.assignedTo === "Debasish P.").map((t) => (
                        <div key={t.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors">
                          <div className="space-y-3">
                            <div className="flex justify-between items-start gap-2">
                              <span className="font-mono text-[10px] bg-slate-950 border border-slate-800 px-2 py-0.5 rounded text-slate-400">{t.id}</span>
                              <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                                t.status === 'RESOLVED' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                              }`}>{t.status}</span>
                            </div>
                            <h5 className="font-bold text-white text-sm sm:text-base leading-snug">{t.title}</h5>
                            <div className="flex gap-4 text-[10px] text-slate-400">
                              <span>Client: <strong className="text-slate-300">{t.client}</strong></span>
                              <span>Priority: <strong className={t.priority === 'HIGH' ? 'text-rose-400' : 'text-blue-400'}>{t.priority}</strong></span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
                            {t.status !== 'RESOLVED' ? (
                              <>
                                <button 
                                  onClick={() => handleUpdateStatus(t.id, "IN PROGRESS")}
                                  className={`px-3 py-1.5 rounded-lg text-[10px] font-bold cursor-pointer transition-colors ${
                                    t.status === 'IN PROGRESS' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                  }`}
                                >
                                  In Progress
                                </button>
                                <button 
                                  onClick={() => handleUpdateStatus(t.id, "RESOLVED")}
                                  className="px-3 py-1.5 rounded-lg text-[10px] font-bold bg-emerald-600/20 text-emerald-400 border border-emerald-500/25 cursor-pointer hover:bg-emerald-600 hover:text-white transition-all"
                                >
                                  Mark Resolved
                                </button>
                              </>
                            ) : (
                              <span className="text-[10px] text-slate-500 flex items-center gap-1.5 py-1">
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                Task Completed & Logged in Audit Trail
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* 3. CUSTOMER VIEW */}
                {activeRole === 'customer' && (
                  <motion.div
                    key="customer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8"
                  >
                    {/* Submit Ticket Form */}
                    <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                      <h4 className="text-sm font-bold tracking-wide flex items-center gap-2 border-b border-slate-800 pb-4">
                        <Plus className="w-4 h-4 text-blue-400" />
                        <span>Submit New Support Ticket</span>
                      </h4>

                      <form onSubmit={handleCreateTicket} className="space-y-4">
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase font-bold text-slate-400 block">Ticket Subject</label>
                          <input 
                            type="text" 
                            value={newTicketTitle}
                            onChange={(e) => setNewTicketTitle(e.target.value)}
                            placeholder="Describe the issue briefly..." 
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-slate-400 block">Organization</label>
                            <select 
                              value={newTicketClient}
                              onChange={(e) => setNewTicketClient(e.target.value)}
                              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                            >
                              <option value="NALCO">NALCO</option>
                              <option value="OCAC">OCAC</option>
                              <option value="High Court of Odisha">Odisha HC</option>
                              <option value="IndianOil">IndianOil</option>
                              <option value="TPCODL">TPCODL</option>
                            </select>
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-slate-400 block">Priority</label>
                            <select 
                              value={newTicketPriority}
                              onChange={(e) => setNewTicketPriority(e.target.value)}
                              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                            >
                              <option value="HIGH">High</option>
                              <option value="MEDIUM">Medium</option>
                              <option value="LOW">Low</option>
                            </select>
                          </div>
                        </div>

                        <button 
                          type="submit"
                          className="w-full py-3 rounded-xl bg-blue-600 text-xs font-bold text-white flex items-center justify-center gap-2 hover:bg-blue-500 cursor-pointer shadow-lg shadow-blue-500/10 transition-colors"
                        >
                          <Send className="w-3.5 h-3.5" />
                          Send Support Ticket
                        </button>
                      </form>
                    </div>

                    {/* Customer Portal status feed */}
                    <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                      <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                        <h4 className="text-sm font-bold tracking-wide">
                          <span>My Tickets Live Status</span>
                        </h4>
                        <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider animate-pulse flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Live sync
                        </span>
                      </div>

                      <div className="space-y-3 max-h-[260px] overflow-y-auto pr-1">
                        {simTickets.map((t) => (
                          <div key={t.id} className="bg-slate-950/60 border border-slate-800/60 p-4 rounded-xl flex justify-between items-center text-xs gap-3">
                            <div className="space-y-0.5">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-mono text-slate-400 text-[10px]">{t.id}</span>
                                <span className="text-white font-medium">{t.title}</span>
                              </div>
                              <span className="text-[10px] text-slate-500 block">Assigned Engineer: <strong className="text-blue-400">{t.assignedTo}</strong></span>
                            </div>
                            
                            <div className="flex items-center gap-2 shrink-0">
                              <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase ${
                                t.status === 'RESOLVED' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                                t.status === 'ASSIGNED' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                                'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                              }`}>{t.status}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </motion.div>
                )}

              </AnimatePresence>

            </div>

          </div>

        </div>
      </section>

      {/* 4. DETAILS - PRODUCT BENEFITS GRID */}
      <section className="py-24 sm:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-100 px-3.5 py-1.5 rounded-full">Value Proposition</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
              Actionable Benefits Built For Every Stakeholder
            </h2>
            <p className="text-slate-500 font-light text-base leading-relaxed">
              OneDesk is engineered to deliver customized value across three key tiers: operations management, technical staff, and client organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Managers Card */}
            <div className="bg-[#f8fafc] border border-slate-200/50 rounded-3xl p-8 space-y-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/10 flex items-center justify-center text-blue-600">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">For Management</h3>
              <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                Empowers directors with high-level reporting data to track engineer workloads, measure SLA responses, and monitor client contracts.
              </p>
              <ul className="space-y-3.5 pt-2 text-xs sm:text-sm text-slate-700">
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Real-Time Analytics</strong> – Interactive visual widgets representing tickets raised, active queues, and resolutions.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Team Load Balancer</strong> – Track active workloads per engineer to balance technical dispatching.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Monthly Report Ledger</strong> – Instant exports of SLA target performance to present to corporate partners.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>SLA Compliance Warnings</strong> – Automated escalation loops trigger alerts before timing thresholds are reached.</span>
                </li>
              </ul>
            </div>

            {/* Engineers Card */}
            <div className="bg-[#f8fafc] border border-slate-200/50 rounded-3xl p-8 space-y-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/10 flex items-center justify-center text-indigo-600">
                <CheckSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">For Engineers</h3>
              <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                An absolute focus-first layout containing checklist grids, diagnostic tools, and live communications to close cases quickly.
              </p>
              <ul className="space-y-3.5 pt-2 text-xs sm:text-sm text-slate-700">
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>Focused Workflow Queue</strong> – Filters the system to display only tickets and tasks assigned directly to you.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>Instant WebSocket Alerts</strong> – Audio and text warnings signal the moment a new critical escalation is dispatched.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>Deep Diagnostic Context</strong> – Full device specs, warranty lists, and customer profiles appear inline.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>Quick Operations Panel</strong> – Change status tags, write internal team pings, and attach speed logs instantly.</span>
                </li>
              </ul>
            </div>

            {/* Customers Card */}
            <div className="bg-[#f8fafc] border border-slate-200/50 rounded-3xl p-8 space-y-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/10 flex items-center justify-center text-cyan-600">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">For Customers</h3>
              <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                Provides clients with a clear window into active operations, preventing communication gaps and building long-term trust.
              </p>
              <ul className="space-y-3.5 pt-2 text-xs sm:text-sm text-slate-700">
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span><strong>Seamless Ticket Form</strong> – Initiate a new issue directly inside the web browser with minimum effort.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span><strong>Real-Time Resolution Tracker</strong> – Watch ticket status live as engineers pick up tasks.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span><span><strong>Automated Email Alerts</strong> – Stay in the loop with transactional alerts sent upon ticket progress updates.</span></span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span><strong>Cryptographic Security</strong> – Access is limited via strict corporate accounts, guaranteeing data privacy.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 5. AUDIT COMPLIANCE STATEMENT */}
      <section className="py-20 sm:py-24 bg-slate-950 text-white relative">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <Shield className="w-12 h-12 text-blue-500 mx-auto animate-pulse" />
          <h2 className="text-3xl font-bold font-display tracking-tight text-white">Compliance & Governance Guaranteed</h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-light">
            OneDesk adheres strictly to ISO/IEC 27001 security parameters and local government auditing directives. Every ticket modification, technician dispatch log, and client message is permanently cataloged, ensuring absolute traceability for administrative compliance.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-4 text-xs font-mono text-slate-500">
            <span>ISO 27001 AUDITED</span>
            <span>•</span>
            <span>AES-256 ENCRYPTED</span>
            <span>•</span>
            <span>SLA BOUND CONTRACTS</span>
            <span>•</span>
            <span>REGULATORY ARCHIVE READY</span>
          </div>
        </div>
      </section>

    </div>
  );
}
