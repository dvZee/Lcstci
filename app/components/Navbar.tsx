import { useState, useEffect } from "react";
import { Menu, X, Laptop } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "ROI Calculator", href: "#calculator" },
    { label: "Our Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-cyan via-brand-indigo to-brand-violet flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <Laptop className="w-5 h-5" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-brand-cyan transition-colors">
            Lightbourne
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-cyan after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-brand-cyan to-brand-indigo text-white shadow-lg hover:shadow-indigo-500/20 hover:scale-[1.02] transition-all glow-btn"
          >
            Get Free Audit
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-[60px] z-40 bg-gray-950/95 backdrop-blur-md md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 gap-6 h-full justify-between">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-300 hover:text-white transition-colors py-2 border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pb-12">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full block text-center py-4 rounded-xl text-base font-semibold bg-gradient-to-r from-brand-cyan to-brand-indigo text-white shadow-lg shadow-indigo-500/10"
            >
              Get Free Audit
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
