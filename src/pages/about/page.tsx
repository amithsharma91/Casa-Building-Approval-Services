import SiteNavbar from "../../components/feature/SiteNavbar";
import SiteFooter from "../../components/feature/SiteFooter";
import FloatingWhatsApp from "../../components/feature/FloatingWhatsApp";
import { useEffect } from "react";
import { useJsonLd } from "../../hooks/useJsonLd";

const whatWeDo = [
  { icon: "ri-building-2-line", title: "Building Permissions", desc: "GHMC & HMDA approvals for new constructions and additions." },
  { icon: "ri-layout-grid-line", title: "Layout Approvals", desc: "Complete layout permission handling for residential & commercial plots." },
  { icon: "ri-map-2-line", title: "Land Use Verification", desc: "Master plan and land use checks before you invest or build." },
  { icon: "ri-file-certificate-line", title: "Occupancy Certificates", desc: "Obtaining OC after construction completion from GHMC/HMDA." },
  { icon: "ri-exchange-funds-line", title: "TDR Services", desc: "Transfer of Development Rights – additional floors and claim TDR." },
];

const whyTrust = [
  { icon: "ri-shield-user-line", title: "Experienced Team", desc: "Over 15 years of handling GHMC, HMDA & TG-BPASS / BuildNow approvals." },
  { icon: "ri-route-line", title: "End-to-End Support", desc: "We manage every step from document checking to approval certificate." },
  { icon: "ri-trophy-line", title: "High Success Rate", desc: "98% approval success across 500+ projects in Hyderabad." },
  { icon: "ri-eye-line", title: "Transparent Process", desc: "Regular updates and clear communication at every stage." },
];

export default function AboutPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://buildingapprovalservices.com";

  useEffect(() => {
    document.title =
      "About Casa Associates | Building Approval Services Hyderabad | GHMC Experts";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc)
      metaDesc.setAttribute(
        "content",
        "Casa Associates \u2014 15+ years of expert building approval services in Hyderabad. GHMC, HMDA & TG-BPASS / BuildNow approvals with 500+ successful projects and 98% success rate. Trusted consultancy."
      );
    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) canonical.setAttribute("href", `${siteUrl}/about`);
    window.scrollTo(0, 0);
  }, [siteUrl]);

  useJsonLd(
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "AboutPage",
          "@id": `${siteUrl}/about#webpage`,
          url: `${siteUrl}/about`,
          name: "About Casa Associates | GHMC Building Permission Experts Hyderabad",
          description:
            "Casa Associates is a professional GHMC building permission and HMDA layout approval consultancy in Hyderabad with over 15 years of experience.",
          inLanguage: "en-IN",
          isPartOf: { "@id": `${siteUrl}/#website` },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${siteUrl}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "About",
                item: `${siteUrl}/about`,
              },
            ],
          },
        },
        {
          "@type": "Organization",
          "@id": `${siteUrl}/#organization`,
          name: "Casa Associates",
          url: `${siteUrl}/`,
          telephone: "+91-9000975046",
          email: "ghmcbpservices@gmail.com",
          foundingDate: "2014",
          numberOfEmployees: { "@type": "QuantitativeValue", value: 10 },
          areaServed: [
            { "@type": "City", name: "Hyderabad" },
            { "@type": "State", name: "Telangana" },
          ],
          knowsAbout: [
            "GHMC Building Permission",
            "TG-BPASS Approval",
            "HMDA Layout Permission",
            "Occupancy Certificate",
            "TDR Services",
            "Building Approval Services Hyderabad",
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            addressCountry: "IN",
          },
        },
      ],
    },
    "about-jsonld"
  );

  return (
    <div style={{ fontFamily: '"DM Sans", sans-serif' }}>
      <SiteNavbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden" style={{ background: "#0B1F3A" }}>
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://readdy.ai/api/search-image?query=modern%20Hyderabad%20skyline%20aerial%20view%20residential%20buildings%20urban%20architecture%20professional%20corporate%20background%20navy%20blue%20tone%20wide%20angle%20Telangana%20cityscape&width=1440&height=600&seq=about-hero-casa&orientation=landscape"
            alt="Casa Associates building permission consultancy Hyderabad about page"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="absolute top-0 left-0 h-full w-1" style={{ background: "linear-gradient(to bottom, transparent, #C8960C 30%, #C8960C 70%, transparent)" }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-sm" style={{ background: "rgba(200,150,12,0.15)", border: "1px solid rgba(200,150,12,0.4)" }}>
            <span className="w-4 h-4 flex items-center justify-center"><i className="ri-building-2-line text-sm" style={{ color: "#C8960C" }}></i></span>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C8960C", letterSpacing: "0.12em" }}>Hyderabad, Telangana</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
            About <span style={{ color: "#C8960C" }}>Casa Associates</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-loose">
            Building Permission Experts in Hyderabad — trusted by hundreds of clients for GHMC, HMDA, and TG-BPASS / BuildNow approvals.
          </p>
          <a
            href="https://wa.me/919000975046"
            target="_blank"
            rel="nofollow noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-semibold text-base rounded-sm transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            <span className="w-5 h-5 flex items-center justify-center"><i className="ri-whatsapp-line text-lg"></i></span>
            Contact on WhatsApp
          </a>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-sm" style={{ background: "#FDF3DC" }}>
                <span className="w-4 h-4 flex items-center justify-center"><i className="ri-information-line text-sm" style={{ color: "#C8960C" }}></i></span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C8960C", letterSpacing: "0.1em" }}>Who We Are</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight" style={{ fontFamily: '"Playfair Display", serif', color: "#0B1F3A" }}>
                Professional Building Permission Consultancy
              </h2>
              <p className="text-base text-gray-600 leading-loose mb-6">
                Casa Associates is a professional consultancy providing building permission and approval services in Hyderabad. We specialize in <strong>GHMC, HMDA, and TG-BPASS / BuildNow approvals</strong> with a transparent and guided process.
              </p>
              <p className="text-base text-gray-600 leading-loose mb-8">
                With over 15 years of experience and 500+ successful approvals, our team handles everything from document checking to final certificate issuance — ensuring your project moves forward without delays or rejections.
              </p>
              <div className="p-5 rounded-sm" style={{ background: "#FDF3DC", borderLeft: "3px solid #C8960C" }}>
                <p className="text-sm font-semibold" style={{ color: "#9e7509" }}>
                  <strong>Our Mission:</strong> To simplify the building approval process and provide reliable, fast, and transparent services to every client in Hyderabad.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-sm overflow-hidden" style={{ height: "400px" }}>
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20Indian%20architects%20urban%20planners%20working%20together%20reviewing%20building%20blueprints%20architectural%20drawings%20office%20Hyderabad%20corporate%20team%20consultation%20modern%20interior%20clean%20background&width=700&height=500&seq=about-team-casa&orientation=landscape"
                  alt="Casa Associates team - GHMC building permission experts Hyderabad"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div
                className="absolute -bottom-5 -left-5 px-6 py-5 rounded-sm"
                style={{ background: "#0B1F3A", border: "2px solid #C8960C" }}
              >
                <div className="text-3xl font-bold" style={{ color: "#C8960C", fontFamily: '"Playfair Display", serif' }}>500+</div>
                <div className="text-xs text-white/70 mt-1">Approvals Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20" style={{ background: "#F8F9FC" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-sm" style={{ background: "#FDF3DC" }}>
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C8960C", letterSpacing: "0.1em" }}>Our Expertise</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: '"Playfair Display", serif', color: "#0B1F3A" }}>What We Do</h2>
            <p className="text-base text-gray-500 max-w-xl mx-auto">End-to-end building approval services across Hyderabad and surrounding areas.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDo.map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-sm flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 cursor-default"
                style={{ border: "1px solid rgba(11,31,58,0.08)" }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-sm" style={{ background: "#FDF3DC" }}>
                  <i className={`${item.icon} text-xl`} style={{ color: "#C8960C" }}></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ fontFamily: '"Playfair Display", serif', color: "#0B1F3A" }}>{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-20" style={{ background: "#0B1F3A" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-sm" style={{ background: "rgba(200,150,12,0.15)", border: "1px solid rgba(200,150,12,0.4)" }}>
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C8960C", letterSpacing: "0.1em" }}>Why Trust Us</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white" style={{ fontFamily: '"Playfair Display", serif' }}>
              Why Clients Choose <span style={{ color: "#C8960C" }}>Casa Associates</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {whyTrust.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-sm flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 cursor-default"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(200,150,12,0.2)" }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-sm" style={{ background: "rgba(200,150,12,0.15)" }}>
                  <i className={`${item.icon} text-xl`} style={{ color: "#C8960C" }}></i>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>{item.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6" style={{ borderTop: "1px solid rgba(200,150,12,0.2)", paddingTop: "3rem" }}>
            {[
              { val: "500+", lbl: "Approvals Completed" },
              { val: "15+", lbl: "Years Experience" },
              { val: "98%", lbl: "Success Rate" },
              { val: "7+", lbl: "Services Offered" },
            ].map((s) => (
              <div key={s.lbl} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2" style={{ color: "#C8960C", fontFamily: '"Playfair Display", serif' }}>{s.val}</div>
                <div className="text-sm text-white/55">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4" style={{ fontFamily: '"Playfair Display", serif', color: "#0B1F3A" }}>
            Ready to Start Your Building Permission?
          </h2>
          <p className="text-base text-gray-500 mb-8">Send your documents on WhatsApp for expert guidance — free consultation for your first query.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919000975046"
              target="_blank"
              rel="nofollow noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-semibold text-base rounded-sm transition-all cursor-pointer whitespace-nowrap"
            >
              <span className="w-5 h-5 flex items-center justify-center"><i className="ri-whatsapp-line text-lg"></i></span>
              Send Documents on WhatsApp
            </a>
            <a
              href="tel:+919000975046"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold text-base rounded-sm transition-all cursor-pointer whitespace-nowrap hover:bg-gray-50"
              style={{ border: "1px solid rgba(11,31,58,0.2)", color: "#0B1F3A" }}
            >
              <span className="w-5 h-5 flex items-center justify-center"><i className="ri-phone-line text-lg" style={{ color: "#C8960C" }}></i></span>
              Call +91 90009 75046
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-6">We are a private consultancy. Not affiliated with GHMC, HMDA, or any government body.</p>
        </div>
      </section>

      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
