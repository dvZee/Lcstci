import { Search, ToggleLeft, Activity, ArrowRight } from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: Search,
      stepNum: "01",
      title: "Comprehensive Security & IT Audit",
      description:
        "We audit your hardware, backups, email settings, and network ports for security loopholes. This report highlights exact issues and costs zero dollars.",
      highlight: "Completed in 48 Hours",
    },
    {
      icon: ToggleLeft,
      stepNum: "02",
      title: "Hardening & Modernization",
      description:
        "We clean up network configurations, install active anti-virus agents, configure automated hourly backups, and verify compliance baselines.",
      highlight: "Zero Operations Interruption",
    },
    {
      icon: Activity,
      stepNum: "03",
      title: "Active 24/7 Management",
      description:
        "Our dashboard checks server vitals, installs patches, and keeps team members secure. If something raises an alert, we solve it before you even notice.",
      highlight: "99.9% System Uptime Guaranteed",
    },
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute top-1/4 bottom-1/4 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-brand-cyan via-brand-indigo to-transparent opacity-20 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-20 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-cyan">
            OUR WORKFLOW
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Partnering With Us is Simple & Transparent
          </h2>
          <p className="text-gray-400 text-lg">
            We don't believe in long-winded setup periods or locking you into confusing operations. Here is our 3-step blueprint.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative group p-8 rounded-2xl glass hover:border-brand-cyan/30 transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div>
                  {/* Step Num & Icon */}
                  <div className="flex justify-between items-center mb-8">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-brand-cyan group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-display font-extrabold text-4xl text-white/10 group-hover:text-brand-cyan/20 transition-colors">
                      {step.stepNum}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Footnote badge */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-brand-cyan font-semibold">{step.highlight}</span>
                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-brand-cyan group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick action hook */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-400">
            Ready to secure your workspace?{" "}
            <a
              href="#contact"
              className="text-brand-cyan font-bold hover:underline inline-flex items-center gap-1"
            >
              Request your audit report now <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
