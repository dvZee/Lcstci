import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Lightbourne migrated our entire team of 45 employees to secure cloud instances over a single weekend. Zero downtime, zero file losses, and our team productivity has soared.",
      author: "Sarah Jenkins",
      role: "COO, Nexa Logistics",
      outcome: "Zero-Downtime Cloud Migration",
    },
    {
      quote:
        "We used to waste hours waiting for local IT help. Lightbourne resolved 92% of our support tickets in under 15 minutes last quarter. They feel like our own in-house tech department.",
      author: "David Chen",
      role: "Founder, Apex Capital",
      outcome: "Support SLA under 12 mins",
    },
    {
      quote:
        "Preparing for a SOC2 compliance audit was daunting. Lightbourne came in, configured encrypted endpoints, hardened backups, and documented our controls in two weeks flat.",
      author: "Elena Rostova",
      role: "CTO, CloudScribe",
      outcome: "SOC2 Compliance Audited",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-950/40 relative">
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-brand-violet/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-cyan">
            CLIENT SUCCESS STORIES
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Trusted by Modern Growing Businesses
          </h2>
          <p className="text-gray-400 text-lg">
            Read how we help organizations eliminate technical friction and focus on their core operations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-2xl glass hover:border-brand-violet/30 transition-all duration-300 flex flex-col justify-between text-left"
            >
              {/* Quote icon overlay */}
              <div className="absolute top-6 right-8 text-white/5">
                <Quote className="w-12 h-12" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6 text-brand-cyan">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <blockquote className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                  "{t.quote}"
                </blockquote>
              </div>

              {/* Author & Outcome */}
              <div className="border-t border-white/5 pt-4 mt-auto">
                <p className="font-display font-bold text-base text-white">
                  {t.author}
                </p>
                <p className="text-xs text-gray-400">
                  {t.role}
                </p>
                <div className="mt-2.5 inline-block text-[10px] font-bold uppercase tracking-wider text-brand-cyan bg-cyan-500/10 px-2 py-0.5 rounded">
                  Outcome: {t.outcome}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
