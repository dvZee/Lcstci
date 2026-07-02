import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    need: "Managed IT Support",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) return;

    setStatus("submitting");

    // Simulate API call for lead capturing
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        need: "Managed IT Support",
        message: "",
      });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-indigo-950/40 to-purple-950/20 border border-brand-indigo/20 text-left relative overflow-hidden">
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-brand-cyan/15 to-transparent pointer-events-none" />

            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest font-bold text-brand-cyan block">
                GET IN TOUCH
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
                Request a Free Systems Audit
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                No contract obligations. No pushy sales calls. Just a clean, technical breakdown of your security, hardware, and backup status.
              </p>

              <div className="space-y-4 pt-6">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-brand-cyan">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-medium">Email Support</span>
                    <a href="mailto:support@lcstci.com" className="text-white hover:text-brand-cyan transition-colors text-sm font-semibold">
                      support@lcstci.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-brand-cyan">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-medium">Call Helpdesk</span>
                    <a href="tel:+18005550199" className="text-white hover:text-brand-cyan transition-colors text-sm font-semibold">
                      +1 (800) 555-0199
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-brand-cyan">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-medium">Headquarters</span>
                    <address className="text-white not-italic text-sm font-semibold">
                      Miami, FL, United States
                    </address>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-white/5 text-xs text-gray-400">
              🔒 We value your privacy. Company details are only used to prepare your security audit proposal.
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7 glass rounded-2xl p-8 sm:p-10 relative">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white">
                  Audit Proposal Requested!
                </h3>
                <p className="text-gray-300 max-w-sm text-sm">
                  Thank you. An IT engineer will reach out to scheduling access within the next 4 business hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-6 py-2.5 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/10 text-white transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                      Work Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Company */}
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-gray-300">
                      Company Name
                    </label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nexa Logistics Ltd"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors"
                    />
                  </div>

                  {/* Primary Tech Need */}
                  <div className="space-y-2">
                    <label htmlFor="need" className="text-sm font-medium text-gray-300">
                      Primary IT Focus
                    </label>
                    <select
                      id="need"
                      name="need"
                      value={formData.need}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-gray-300 focus:outline-none focus:border-brand-cyan transition-colors"
                    >
                      <option className="bg-gray-950 text-white">Managed IT Support</option>
                      <option className="bg-gray-950 text-white">Cybersecurity Shield</option>
                      <option className="bg-gray-950 text-white">Cloud Migration/Setup</option>
                      <option className="bg-gray-950 text-white">IT Consulting & Strategy</option>
                      <option className="bg-gray-950 text-white">Custom Hardware/Servers</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">
                    Additional Details (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your team size, system setup, or current bottlenecks..."
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-base font-bold bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-violet text-white shadow-xl shadow-indigo-500/10 hover:scale-[1.01] transition-all disabled:opacity-50"
                >
                  {status === "submitting" ? (
                    <span>Processing request...</span>
                  ) : (
                    <>
                      <span>Get Audit Report</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
