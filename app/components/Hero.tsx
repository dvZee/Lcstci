import { ArrowRight, ShieldCheck, Zap, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-1/10 w-[300px] h-[300px] rounded-full bg-brand-cyan/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[350px] h-[350px] rounded-full bg-brand-violet/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/5 blur-[150px] pointer-events-none" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-semibold text-brand-cyan">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Modern Business IT Solutions</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-white">
            Uninterrupted Operations.{" "}
            <span className="bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-violet bg-clip-text text-transparent">
              Smarter IT Solutions.
            </span>
          </h1>

          {/* Value Hook */}
          <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
            Stop firefighting tech issues. Lightbourne delivers managed IT, cloud migration, and elite cybersecurity that accelerates your company's growth. We keep your systems running at 99.9% uptime, guaranteed.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-4">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-violet text-white shadow-xl shadow-indigo-500/10 hover:shadow-indigo-500/25 hover:scale-[1.02] transition-all glow-btn"
            >
              Get Free IT Audit
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#calculator"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold glass text-white hover:bg-white/10 hover:border-white/20 transition-all"
            >
              Calculate Savings
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-6 mt-6 border-t border-white/5 pt-6 w-full">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>SOC2 Compliance Standards</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Zap className="w-5 h-5 text-amber-400" />
              <span>15-Minute Response SLA</span>
            </div>
          </div>
        </div>

        {/* Visual Component */}
        <div className="lg:col-span-5 relative w-full flex justify-center">
          <div className="relative w-full max-w-[420px] aspect-square rounded-3xl glass p-6 flex flex-col justify-between shadow-2xl border border-white/10 overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-brand-cyan/25 blur-3xl group-hover:scale-110 transition-transform" />
            
            <div className="flex justify-between items-start z-10">
              <div className="space-y-1">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Network Health</span>
                <h3 className="font-display font-bold text-2xl text-white">99.99% Uptime</h3>
              </div>
              <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase animate-pulse">
                Active
              </span>
            </div>

            {/* Simulated Live System Diagram */}
            <div className="my-6 space-y-3 z-10">
              <div className="flex justify-between text-xs text-gray-400">
                <span>Infrastructure Load</span>
                <span>34% - Safe</span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-gradient-to-r from-brand-cyan to-brand-indigo rounded-full" />
              </div>

              <div className="flex justify-between text-xs text-gray-400 pt-2">
                <span>Threats Blocked Today</span>
                <span className="text-brand-cyan font-semibold">1,248</span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="w-[85%] h-full bg-gradient-to-r from-brand-indigo to-brand-violet rounded-full" />
              </div>
            </div>

            {/* Sub-card info */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 z-10">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-sm">
                SLA
              </div>
              <div className="flex-1 text-left">
                <p className="text-xs text-gray-400 font-medium">Avg. Helpdesk Reply</p>
                <p className="text-sm font-semibold text-white">6 minutes, 42 seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
