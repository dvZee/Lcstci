import { useState } from "react";
import { DollarSign, ShieldAlert, Clock, BarChart3 } from "lucide-react";

export default function Calculator() {
  const [employees, setEmployees] = useState(15);
  const [hasServers, setHasServers] = useState(true);
  const [complianceNeeded, setComplianceNeeded] = useState(false);

  // Computations
  const baseRatePerEmployee = 120; // $120 per user
  const serverSurcharge = hasServers ? 250 : 0;
  const complianceMultiplier = complianceNeeded ? 1.35 : 1.0;
  
  const estimatedITCost = Math.round(
    (employees * baseRatePerEmployee + serverSurcharge) * complianceMultiplier
  );

  // Estimates for in-house full-time equivalents
  const inHouseCost = Math.round(employees > 20 ? 6500 : 3500); 
  const monthlySavings = Math.max(0, inHouseCost - estimatedITCost);

  // Estimated downtime reduction (hours/month)
  const downtimeSaved = Math.round(employees * 0.8 + (hasServers ? 4 : 0));

  return (
    <section id="calculator" className="py-24 bg-gray-950/30 relative">
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-brand-cyan/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-cyan">
            INTERACTIVE ESTIMATOR
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Estimate Your Support Package & ROI
          </h2>
          <p className="text-gray-400 text-lg">
            Tell us about your organization to see an instant estimate of potential savings and downtime reduction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Inputs Panel */}
          <div className="lg:col-span-6 glass rounded-2xl p-8 flex flex-col justify-between">
            <div className="space-y-8">
              {/* Employee Count Slider */}
              <div className="space-y-4 text-left">
                <div className="flex justify-between items-baseline">
                  <label htmlFor="employees" className="text-base font-semibold text-white">
                    Number of Team Members
                  </label>
                  <span className="text-2xl font-display font-extrabold text-brand-cyan">
                    {employees}
                  </span>
                </div>
                <input
                  id="employees"
                  type="range"
                  min="5"
                  max="100"
                  value={employees}
                  onChange={(e) => setEmployees(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                />
                <div className="flex justify-between text-xs text-gray-400">
                  <span>5 Users</span>
                  <span>100+ Users</span>
                </div>
              </div>

              {/* Server Toggle */}
              <div className="flex items-center justify-between py-4 border-y border-white/5">
                <div className="text-left">
                  <label htmlFor="servers" className="text-base font-semibold text-white block">
                    Do you have on-premise servers?
                  </label>
                  <span className="text-xs text-gray-400">
                    Select if you manage network hardware, domain controllers, or database hosts.
                  </span>
                </div>
                <button
                  id="servers"
                  onClick={() => setHasServers(!hasServers)}
                  className={`w-14 h-8 rounded-full p-1 transition-colors duration-200 focus:outline-none ${
                    hasServers ? "bg-brand-cyan" : "bg-white/10"
                  }`}
                  aria-label="Toggle on-premise servers"
                >
                  <div
                    className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-200 ${
                      hasServers ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Compliance Toggle */}
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <label htmlFor="compliance" className="text-base font-semibold text-white block">
                    Do you need SOC2/HIPAA Audits?
                  </label>
                  <span className="text-xs text-gray-400">
                    Enables advanced encryption, endpoint logs, and compliance report filings.
                  </span>
                </div>
                <button
                  id="compliance"
                  onClick={() => setComplianceNeeded(!complianceNeeded)}
                  className={`w-14 h-8 rounded-full p-1 transition-colors duration-200 focus:outline-none ${
                    complianceNeeded ? "bg-brand-cyan" : "bg-white/10"
                  }`}
                  aria-label="Toggle compliance audit"
                >
                  <div
                    className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-200 ${
                      complianceNeeded ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Note */}
            <div className="mt-8 pt-6 border-t border-white/5 text-xs text-gray-400 text-left">
              *Estimates are calculated based on standard support baselines. Final pricing is customized during audit.
            </div>
          </div>

          {/* Outputs / ROI Panel */}
          <div className="lg:col-span-6 bg-gradient-to-br from-indigo-950/60 to-purple-950/40 border border-brand-indigo/30 rounded-2xl p-8 flex flex-col justify-between text-left relative overflow-hidden">
            {/* Top right card highlight border */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-cyan/20 to-transparent pointer-events-none" />

            <div className="space-y-6">
              <h3 className="font-display font-bold text-xl text-white">
                Estimated Value Summary
              </h3>

              {/* Metric Card: Monthly cost */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex gap-2 items-center text-xs text-gray-400 uppercase font-semibold mb-2">
                    <DollarSign className="w-4 h-4 text-brand-cyan" />
                    <span>Estimated Support</span>
                  </div>
                  <div className="font-display font-extrabold text-3xl text-white">
                    ${estimatedITCost}
                    <span className="text-sm text-gray-400 font-normal"> / mo</span>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/25">
                  <div className="flex gap-2 items-center text-xs text-emerald-400 uppercase font-semibold mb-2">
                    <BarChart3 className="w-4 h-4" />
                    <span>Est. Cost Savings</span>
                  </div>
                  <div className="font-display font-extrabold text-3xl text-emerald-400">
                    ${monthlySavings}
                    <span className="text-sm text-emerald-400/70 font-normal"> / mo</span>
                  </div>
                </div>
              </div>

              {/* Downtime Saved Metric */}
              <div className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/5">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-brand-cyan">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Tech Friction Solved</h4>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Estimated <span className="text-white font-bold">{downtimeSaved} hours/month</span> of tech troubleshooting saved across your team.
                  </p>
                </div>
              </div>

              {/* Action summary */}
              <div className="p-4 rounded-xl bg-brand-indigo/10 border border-brand-indigo/20 text-xs text-indigo-200">
                🚀 Includes: Active endpoint backup monitoring, anti-phishing mail filters, and local engineer helpdesk escalation routing.
              </div>
            </div>

            {/* Main CTA */}
            <div className="mt-8">
              <a
                href="#contact"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-base font-bold bg-gradient-to-r from-brand-cyan to-brand-indigo text-white shadow-xl shadow-indigo-500/20 hover:scale-[1.01] transition-transform glow-btn"
              >
                Claim Your Free IT Audit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
