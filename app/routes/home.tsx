import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Calculator from "../components/Calculator";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Managed IT Services & Cybersecurity Strategy | Lightbourne" },
    {
      name: "description",
      content:
        "Lightbourne Computer Services (Lcstci.com) delivers outcome-first managed IT support, threat detection cybersecurity, and cloud migration for growing businesses. Request your free system audit report today.",
    },
    // Open Graph (Social SEO)
    { property: "og:title", content: "Managed IT Services & Cybersecurity Strategy | Lightbourne" },
    {
      property: "og:description",
      content:
        "Proactive managed IT solutions, advanced threat protection, and automated recovery backups. Get a 15-minute response SLA. Claim your free systems audit.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://lcstci.com" },
    { property: "og:site_name", content: "Lightbourne Computer Services" },
    // Twitter Cards SEO
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Managed IT Services & Cybersecurity Strategy | Lightbourne" },
    {
      name: "twitter:description",
      content:
        "Eliminate system downtime. Lightbourne provides proactive local IT support, 15-min SLAs, and compliance auditing for growing companies.",
    },
  ];
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Lightbourne Computer Services",
    "url": "https://lcstci.com",
    "telephone": "+18005550199",
    "email": "support@lcstci.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Miami",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.7617,
      "longitude": -80.1918
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://linkedin.com",
      "https://twitter.com",
      "https://github.com"
    ]
  };

  return (
    <>
      {/* Schema.org Structured Data for Local Business SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative min-h-screen text-gray-100 selection:bg-brand-cyan selection:text-gray-900">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Services />
          <Calculator />
          <Process />
          <Testimonials />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </>
  );
}
