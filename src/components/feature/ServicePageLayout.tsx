import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import SiteNavbar from "./SiteNavbar";
import SiteFooter from "./SiteFooter";
import FloatingWhatsApp from "./FloatingWhatsApp";
import { useInView, animStyles } from "../../hooks/useInView";
import { useJsonLd } from "../../hooks/useJsonLd";

export interface ServiceFAQ { q: string; a: string; }
export interface ServiceCard { icon: string; title: string; desc: string; }
export interface ServiceStep { title: string; desc: string; }

export interface ServiceData {
  metaTitle: string;
  metaDesc: string;
  badge: string;
  heroImage: string;
  heroImageAlt: string;
  heroHeading: string;
  heroHighlight: string;
  heroSubtext: string;
  aboutHeading: string;
  aboutParas: string[];
  importanceHeading: string;
  importancePoints: string[];
  whoNeeds: ServiceCard[];
  servicesInclude: ServiceCard[];
  process: ServiceStep[];
  documents: string[];
  faqs: ServiceFAQ[];
}

const whyChoose = [
  { icon: "ri-eye-line", title: "Transparent Process", desc: "We keep you updated at every stage — no hidden steps or surprises." },
  { icon: "ri-award-line", title: "Expert Handling", desc: "15+ years of GHMC, HMDA & TG-BPASS / BuildNow approval experience." },
  { icon: "ri-flashlight-line", title: "Fast Approvals", desc: "Streamlined process ensures your approval happens without unnecessary delays." },
  { icon: "ri-service-line", title: "End-to-End Service", desc: "From document checking to final certificate — we manage everything." },
];

export default function ServicePageLayout({ data }: { data: ServiceData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://example.com";

  // Build the service page URL from the badge — MUST be declared before useEffect
  const pageSlug = useMemo(() => {
    const slug = data.badge
      .split("·")[0]
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    return slug;
  }, [data.badge]);

  useEffect(() => {
    document.title = data.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", data.metaDesc);
    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) canonical.setAttribute("href", `${siteUrl}/services/${pageSlug}`);
    window.scrollTo(0, 0);
  }, [data, pageSlug, siteUrl]);

  const serviceSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": `${siteUrl}/services/${pageSlug}#service`,
          name: `${data.heroHeading} ${data.heroHighlight}`,
          description: data.heroSubtext,
          provider: {
            "@type": "LocalBusiness",
            "@id": `${siteUrl}/#localbusiness`,
            name: "Casa Associates",
            telephone: "+91-9000975046",
            url: `${siteUrl}/`,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Hyderabad",
              addressRegion: "Telangana",
              addressCountry: "IN",
            },
          },
          areaServed: {
            "@type": "City",
            name: "Hyderabad",
          },
          serviceType: data.heroHeading,
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${siteUrl}/services/${pageSlug}#breadcrumb`,
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
            { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
            {
              "@type": "ListItem",
              position: 3,
              name: `${data.heroHeading} ${data.heroHighlight}`,
              item: `${siteUrl}/services/${pageSlug}`,
            },
          ],
        },
        {
          "@type": "FAQPage",
          "@id": `${siteUrl}/services/${pageSlug}#faqpage`,
          mainEntity: data.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        },
      ],
    }),
    [data, pageSlug, siteUrl]
  );

  useJsonLd(serviceSchema, "service-page-jsonld");

  const { ref: aboutRef, inView: aboutInView } = useInView(0.1);
  const { ref: whoRef, inView: whoInView } = useInView(0.05);
  const { ref: servicesRef, inView: servicesInView } = useInView(0.05);
  const { ref: processRef, inView: processInView } = useInView(0.05);
  const { ref: whyRef, inView: whyInView } = useInView(0.05);
  const { ref: faqRef, inView: faqInView } = useInView(0.05);
  const { ref: ctaRef, inView: ctaInView } = useInView(0.1);

  return (
    <div style={{ fontFamily: '"DM Sans", sans-serif' }}>
      <SiteNavbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden" style={{ background: "#0B1F3A" }}>
        <div className="absolute inset-0">
          <img src={data.heroImage} alt={data.heroImageAlt} className="w-full h-full object-cover object-top opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/80 to-[#0B1F3A]/60"></div>
        </div>
        <div className="absolute top-0 left-0 h-full w-1" style={{ background: "linear-gradient(to bottom, transparent, #C8960C 30%, #C8960C 70%, transparent)" }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Link
            to="/services"
            className="hero-animate-1 inline-flex items-center gap-2 text-sm mb-6 transition-colors cursor-pointer hover:opacity-100"
            style={{ color: "rgba(200,150,12,0.65)", fontFamily: '"DM Sans", sans-serif' }}
          >
            <span className="w-4 h-4 flex items-center justify-center">
              <i className="ri-arrow-left-line text-sm"></i>
            </span>
            All Services
          </Link>
          <div className="max-w-3xl">
            <div className="hero-animate-2 inline-flex items-center gap-3 mb-7 px-5 py-2.5 rounded-sm" style={{ background: "rgba(200,150,12,0.15)", border: "1px solid rgba(200,150,12,0.4)" }}>
              <span className="w-4 h-4 flex items-center justify-center"><i className="ri-building-2-line text-sm" style={{ color: "#C8960C" }}></i></span>
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C8960C", letterSpacing: "0.12em" }}>{data.badge}</span>
            </div>
            <h1 className="hero-animate-3 text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
              {data.heroHeading} <span style={{ color: "#C8960C" }}>{data.heroHighlight}</span>
            </h1>
            <p className="hero-animate-4 text-lg text-white/70 leading-loose mb-10">{data.heroSubtext}</p>
            <div className="hero-animate-4 flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/919000975046?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.%0A%0AFull%20Name%3A%20%0APhone%20Number%3A%20%0AEmail%20Address%3A%20%0AService%20Required%3A%20%0AMessage%3A%20" target="_blank" rel="nofollow noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-semibold text-base rounded-sm transition-all cursor-pointer whitespace-nowrap">
                <span className="w-5 h-5 flex items-center justify-center"><i className="ri-whatsapp-line text-lg"></i></span>
                Get Free Consultation on WhatsApp
              </a>
              <a href="tel:+919000975046"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold text-base rounded-sm transition-all cursor-pointer whitespace-nowrap text-white hover:bg-white/10"
                style={{ border: "1px solid rgba(200,150,12,0.5)" }}>
                <span className="w-5 h-5 flex items-center justify-center"><i className="ri-phone-line text-lg" style={{ color: "#C8960C" }}></i></span>
                Call Now
              </a>
            </div>
            <p className="hero-animate-5 text-xs mt-5" style={{ color: "rgba(200,150,12,0.6)" }}>
              <i className="ri-shield-check-line mr-1"></i>
              Get free consultation within minutes &nbsp;·&nbsp; 500+ Approvals &nbsp;·&nbsp; 98% Success Rate
            </p>
          </div>
        </div>
      </section>

      {/* About + Importance */}
      <section ref={aboutRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div style={animStyles(aboutInView, 0)}>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-sm" style={{ background: "#FDF3DC" }}>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C8960C", letterSpacing: "0.1em" }}>About The Service</span>
              </div>
              <h2 className="text-3xl font-bold mb-6 leading-tight" style={{ fontFamily: '"Playfair Display", serif', color: "#0B1F3A" }}>{data.aboutHeading}</h2>
              {data.aboutParas.map((p, i) => (
                <p key={i} className="text-base text-gray-600 leading-loose mb-4">{p}</p>
              ))}
            </div>
            <div style={animStyles(aboutInView, 0.15)}>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-sm" style={{ background: "#FDF3DC" }}>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C8960C", letterSpacing: "0.1em" }}>Why It Matters</span>
              </div>
              <h3 className="text-2xl font-bold mb-6 leading-tight" style={{ fontFamily: '"Playfair Display", serif', color: "#0B1F3A" }}>{data.importanceHeading}</h3>
              <ul className="flex flex-col gap-4">
                {data.importancePoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full mt-0.5 text-xs font-bold" style={{ background: "#FDF3DC", color: "#C8960C" }}>{i + 1}</div>
                    <span className="text-base text-gray-600 leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs This */}
      <section className="py-20" style={{ background: "#F8F9FC" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-sm" style={{ background: "#FDF3DC" }}>
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C8960C", letterSpacing: "0.1em" }}>Target Clients</span>
            </div>
            <h2 className="text-3xl font-bold" style={{ fontFamily: '"Playfair Display", serif', color: "#0B1F3A" }}>Who Needs This Service?</h2>
          </div>
          <div ref={whoRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.whoNeeds.map((c, i) => (
              <div key={c.title} className="bg-white p-7 rounded-sm flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300 cursor-default" style={{ border: "1px solid rgba(11,31,58,0.08)", ...animStyles(whoInView, i * 0.08) }}>
                <div className="w-12 h-12 flex items-center justify-center rounded-sm" style={{ background: "#FDF3DC" }}>
                  <i className={`${c.icon} text-xl`} style={{ color: "#C8960C" }}></i>
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1.5" style={{ fontFamily: '"Playfair Display", serif', color: "#0B1F3A" }}>{c.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Include */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-sm" style={{ background: "#FDF3DC" }}>
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C8960C", letterSpacing: "0.1em" }}>What We Offer</span>
            </div>
            <h2 className="text-3xl font-bold" style={{ fontFamily: '"Playfair Display", serif', color: "#0B1F3A" }}>Our Services Include</h2>
          </div>
          <div ref={servicesRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.servicesInclude.map((s, i) => (
              <div key={s.title} className="p-7 rounded-sm flex gap-5 hover:-translate-y-1 transition-all duration-300 cursor-default" style={{ background: "#F8F9FC", border: "1px solid rgba(11,31,58,0.07)", ...animStyles(servicesInView, i * 0.07) }}>
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-sm" style={{ background: "#FDF3DC" }}>
                  <i className={`${s.icon} text-xl`} style={{ color: "#C8960C" }}></i>
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1.5" style={{ fontFamily: '"Playfair Display", serif', color: "#0B1F3A" }}>{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page WhatsApp CTA Banner */}
      <section className="py-10" style={{ background: "linear-gradient(135deg, #0B1F3A 0%, #0e2847 100%)", borderTop: "1px solid rgba(200,150,12,0.2)", borderBottom: "1px solid rgba(200,150,12,0.2)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="text-center sm:text-left">
              <p className="text-white font-semibold text-lg" style={{ fontFamily: '"Playfair Display", serif' }}>
                Ready to start your approval?
              </p>
              <p className="text-sm mt-1" style={{ color: "rgba(200,150,12,0.8)" }}>
                <i className="ri-flashlight-line mr-1"></i>
                Get free consultation within minutes — no upfront charges.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <a href="https://wa.me/919000975046?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.%0A%0AFull%20Name%3A%20%0APhone%20Number%3A%20%0AEmail%20Address%3A%20%0AService%20Required%3A%20%0AMessage%3A%20" target="_blank" rel="nofollow noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-green-500 hover:bg-green-400 text-white font-semibold text-sm rounded-sm transition-all whitespace-nowrap cursor-pointer">
                <span className="w-4 h-4 flex items-center justify-center"><i className="ri-whatsapp-line text-sm"></i></span>
                Get Free Consultation on WhatsApp
              </a>
              <a href="tel:+919000975046"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 font-semibold text-sm rounded-sm transition-all whitespace-nowrap cursor-pointer hover:bg-white/10 text-white"
                style={{ border: "1px solid rgba(200,150,12,0.4)" }}>
                <span className="w-4 h-4 flex items-center justify-center"><i className="ri-phone-line text-sm" style={{ color: "#C8960C" }}></i></span>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process + Documents */}
      <section className="py-20" style={{ background: "#0B1F3A" }}>
        <div ref={processRef} className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div style={animStyles(processInView, 0)}>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-sm" style={{ background: "rgba(200,150,12,0.15)", border: "1px solid rgba(200,150,12,0.4)" }}>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C8960C", letterSpacing: "0.1em" }}>How It Works</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: '"Playfair Display", serif' }}>Our Process</h2>
              <div className="flex flex-col gap-0">
                {data.process.map((step, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-full text-sm font-bold" style={{ background: "#C8960C", color: "#0B1F3A" }}>{i + 1}</div>
                      {i < data.process.length - 1 && <div className="w-0.5 h-full min-h-[2rem] mt-1" style={{ background: "rgba(200,150,12,0.25)" }}></div>}
                    </div>
                    <div className="pb-7">
                      <h3 className="text-base font-bold text-white mb-1" style={{ fontFamily: '"Playfair Display", serif' }}>{step.title}</h3>
                      <p className="text-sm text-white/55 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={animStyles(processInView, 0.15)}>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-sm" style={{ background: "rgba(200,150,12,0.15)", border: "1px solid rgba(200,150,12,0.4)" }}>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C8960C", letterSpacing: "0.1em" }}>Documents Required</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: '"Playfair Display", serif' }}>Required Documents</h2>
              <ul className="flex flex-col gap-3 mb-8">
                {data.documents.map((doc, i) => (
                  <li key={i} className="flex items-center gap-4 py-3.5 px-5 rounded-sm" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(200,150,12,0.15)" }}>
                    <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full text-xs font-bold" style={{ background: "rgba(200,150,12,0.2)", color: "#C8960C" }}>{i + 1}</div>
                    <span className="text-sm text-white/80">{doc}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-white/45 leading-relaxed">
                Don&apos;t have all documents? Our team will guide you if any documents are missing or need correction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20" style={{ background: "#F8F9FC" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-sm" style={{ background: "#FDF3DC" }}>
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C8960C", letterSpacing: "0.1em" }}>Why Us</span>
            </div>
            <h2 className="text-3xl font-bold" style={{ fontFamily: '"Playfair Display", serif', color: "#0B1F3A" }}>Why Choose Casa Associates?</h2>
          </div>
          <div ref={whyRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((w, i) => (
              <div key={w.title} className="bg-white p-8 rounded-sm flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300 cursor-default" style={{ border: "1px solid rgba(11,31,58,0.08)", ...animStyles(whyInView, i * 0.08) }}>
                <div className="w-12 h-12 flex items-center justify-center rounded-sm" style={{ background: "#FDF3DC" }}>
                  <i className={`${w.icon} text-xl`} style={{ color: "#C8960C" }}></i>
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1.5" style={{ fontFamily: '"Playfair Display", serif', color: "#0B1F3A" }}>{w.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div ref={faqRef} className="max-w-3xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12" style={animStyles(faqInView, 0)}>
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-sm" style={{ background: "#FDF3DC" }}>
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C8960C", letterSpacing: "0.1em" }}>FAQ</span>
            </div>
            <h2 className="text-3xl font-bold" style={{ fontFamily: '"Playfair Display", serif', color: "#0B1F3A" }}>Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col gap-3">
            {data.faqs.map((faq, i) => (
              <div key={i} className="rounded-sm overflow-hidden" style={{ border: "1px solid rgba(11,31,58,0.1)", ...animStyles(faqInView, 0.1 + i * 0.06) }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer hover:bg-gray-50 transition-colors min-h-[64px]"
                >
                  <span className="text-base font-semibold" style={{ color: "#0B1F3A", fontFamily: '"DM Sans", sans-serif' }}>{faq.q}</span>
                  <span className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full transition-transform duration-300" style={{ background: "#FDF3DC", transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)" }}>
                    <i className="ri-add-line text-sm" style={{ color: "#C8960C" }}></i>
                  </span>
                </button>
                <div style={{ maxHeight: openFaq === i ? "300px" : "0", overflow: "hidden", transition: "max-height 0.35s ease" }}>
                  <div className="px-6 pb-5 text-sm text-gray-500 leading-loose" style={{ borderTop: "1px solid rgba(11,31,58,0.06)" }}>
                    <p className="pt-4">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={ctaRef} className="py-20" style={{ background: "#0B1F3A" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-sm" style={{ background: "rgba(200,150,12,0.15)", border: "1px solid rgba(200,150,12,0.4)", ...animStyles(ctaInView, 0) }}>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C8960C", letterSpacing: "0.1em" }}>Free Consultation</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: '"Playfair Display", serif', ...animStyles(ctaInView, 0.1) }}>
            Send Your Documents on WhatsApp for <span style={{ color: "#C8960C" }}>Free Consultation</span>
          </h2>
          <p className="text-base text-white/60 mb-3 leading-loose" style={animStyles(ctaInView, 0.2)}>
            Get expert guidance from our team — <strong className="text-white/80">get free consultation within minutes</strong>. We&apos;ll review your documents and advise the best path forward.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-10" style={animStyles(ctaInView, 0.25)}>
            {[
              { val: "500+", lbl: "Approvals" },
              { val: "98%", lbl: "Success Rate" },
              { val: "15+", lbl: "Years Exp." },
            ].map((s) => (
              <div key={s.lbl} className="text-center">
                <div className="text-2xl font-bold" style={{ color: "#C8960C", fontFamily: '"Playfair Display", serif' }}>{s.val}</div>
                <div className="text-xs text-white/45 mt-0.5">{s.lbl}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8" style={animStyles(ctaInView, 0.3)}>
            <a href="https://wa.me/919000975046?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.%0A%0AFull%20Name%3A%20%0APhone%20Number%3A%20%0AEmail%20Address%3A%20%0AService%20Required%3A%20%0AMessage%3A%20" target="_blank" rel="nofollow noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-semibold text-base rounded-sm transition-all cursor-pointer whitespace-nowrap">
              <span className="w-5 h-5 flex items-center justify-center"><i className="ri-whatsapp-line text-lg"></i></span>
              Get Free Consultation on WhatsApp
            </a>
            <a href="tel:+919000975046"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold text-base rounded-sm transition-all cursor-pointer whitespace-nowrap text-white hover:bg-white/10"
              style={{ border: "1px solid rgba(200,150,12,0.5)" }}>
              <span className="w-5 h-5 flex items-center justify-center"><i className="ri-phone-line text-lg" style={{ color: "#C8960C" }}></i></span>
              Call +91 90009 75046
            </a>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm transition-colors cursor-pointer hover:opacity-100"
            style={{ color: "rgba(200,150,12,0.55)", fontFamily: '"DM Sans", sans-serif' }}
          >
            <span className="w-4 h-4 flex items-center justify-center">
              <i className="ri-grid-line text-sm"></i>
            </span>
            View All Services
          </Link>
          <p className="text-xs text-white/30 mt-4">We are a private consultancy. Not affiliated with GHMC, HMDA, or any government body.</p>
        </div>
      </section>

      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
