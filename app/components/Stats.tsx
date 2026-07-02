export default function Stats() {
  const stats = [
    {
      value: "99.99%",
      label: "Uptime Guaranteed",
      description: "Our active network failovers keep your servers online no matter what.",
    },
    {
      value: "< 15 min",
      label: "Average SLA Response",
      description: "Immediate support from local certified engineers when issues arise.",
    },
    {
      value: "100%",
      label: "Data Recoverability",
      description: "Automated hourly cloud backups with regular restore testing verify safety.",
    },
    {
      value: "98.7%",
      label: "Client Retention Rate",
      description: "Businesses stick with us because we deliver measurable growth and peace of mind.",
    },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-gray-950/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center lg:items-start text-center lg:text-left gap-2 p-4 relative group"
            >
              {/* Vertical line indicator */}
              <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-gradient-to-b from-brand-cyan to-transparent opacity-30 group-hover:opacity-100 transition-opacity" />

              <span className="font-display font-extrabold text-4xl sm:text-5xl text-white bg-gradient-to-r from-brand-cyan to-brand-indigo bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="font-display font-bold text-base text-gray-200">
                {stat.label}
              </span>
              <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
