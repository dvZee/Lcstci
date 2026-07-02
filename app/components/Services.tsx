import { Shield, Cloud, Settings, Compass, Cpu, CheckCircle } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Settings,
      title: "Managed IT Support",
      description: "Our certified technicians manage your devices, software updates, and server infrastructure proactively.",
      outcomes: ["24/7/365 active monitoring", "Average 15 min support resolution", "Zero disruption patching"],
      badge: "Most Popular",
    },
    {
      icon: Shield,
      title: "Cybersecurity Shield",
      description: "Keep hackers out and protect your files. We deploy advanced antivirus, email filters, and firewalls.",
      outcomes: ["Zero breach track record", "Compliance mapping (SOC2/HIPAA)", "Security awareness training"],
      badge: "Critical Safeguard",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Migrate safely to Microsoft 365, Google Workspace, AWS or Azure to unlock hybrid-work productivity.",
      outcomes: ["99.99% cloud systems uptime", "Secure remote workspace logins", "Instant offsite file sharing"],
      badge: "Modernization",
    },
    {
      icon: Compass,
      title: "Strategic IT Consulting",
      description: "Develop a multi-year IT roadmap that aligns with budgeting, scaling goals, and digital transformations.",
      outcomes: ["Maximize return on tech spend", "Pre-acquisition system audits", "Dedicated virtual CIO service"],
      badge: "Growth Engine",
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      {/* Background glow decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-indigo/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-cyan">
            WHAT WE DO
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Outcome-First IT Services Designed to Scale
          </h2>
          <p className="text-gray-400 text-lg">
            We don't charge by the hour to fix broken items. We partner with you to keep your systems operational and secure.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="relative group p-8 rounded-2xl glass hover:border-brand-indigo/40 hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Header Row */}
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    {service.badge && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-brand-indigo/20 text-indigo-300 border border-brand-indigo/20">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Outcomes / Features list */}
                <div className="border-t border-white/5 pt-6 mt-auto">
                  <span className="text-xs text-gray-300 uppercase tracking-wider font-semibold block mb-3">
                    Expected Outcomes:
                  </span>
                  <ul className="space-y-2">
                    {service.outcomes.map((outcome, oIdx) => (
                      <li key={oIdx} className="flex items-center gap-2.5 text-xs text-gray-300">
                        <CheckCircle className="w-4 h-4 text-brand-cyan shrink-0" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
