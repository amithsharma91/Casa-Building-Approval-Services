import { useEffect } from "react";
import { Link } from "react-router-dom";
import SiteNavbar from "../../components/feature/SiteNavbar";
import SiteFooter from "../../components/feature/SiteFooter";
import FloatingWhatsApp from "../../components/feature/FloatingWhatsApp";
import { useJsonLd } from "../../hooks/useJsonLd";

const services = [
  {
    icon: "ri-building-2-line",
    title: "GHMC Building Permission",
    desc: "Complete assistance with building plan approvals through GHMC including documentation, TG-BPASS filing, fee payment, and approval tracking.",
    href: "/services/ghmc-building-permission",
    tag: "Most Popular",
    featured: true,
  },
  {
    icon: "ri-layout-grid-line",
    title: "HMDA Layout Permission",
    desc: "Get layout approvals for plots and residential/commercial developments under HMDA guidelines with proper OSR and infrastructure compliance.",
    href: "/services/hmda-layout-permission",
    tag: "",
    featured: false,
  },
  {
    icon: "ri-map-2-line",
    title: "Land Use & Master Plan Verification",
    desc: "Verify zoning, land usage, and master plan details before you invest or build — avoid costly mistakes with proper DP zone checks.",
    href: "/services/land-use-master-plan",
    tag: "",
    featured: false,
  },
  {
    icon: "ri-file-certificate-line",
    title: "Occupancy Certificate",
    desc: "Obtain your occupancy certificate after construction completion from GHMC/HMDA without hassle — we handle inspection and follow-up.",
    href: "/services/occupancy-certificate",
    tag: "",
    featured: false,
  },
  {
    icon: "ri-exchange-funds-line",
    title: "TDR Services",
    desc: "Use Transfer of Development Rights to gain additional construction benefits — eligibility check, TDR certificate, and floor area calculations.",
    href: "/services/tdr-services",
    tag: "",
    featured: false,
  },
  {
    icon: "ri-road-map-line",
    title: "Road Widening / Master Plan Check",
    desc: "Check if your property is affected by road widening or planning regulations — impact assessment, setback calculations, and advisory.",
    href: "/services/road-widening-check",
    tag: "",
    featured: false,
  },
];

const whyChoose = [
  {
    icon: "ri-award-line",
    title: "Expert Knowledge of GHMC & HMDA",
    desc: "15+ years of specialized experience handling approvals across all municipal bodies in Hyderabad and Telangana.",
  },
  {
    icon: "ri-eye-line",
    title: "Transparent Process",
    desc: "We keep you informed at every stage — no hidden steps, no surprise fees, full visibility throughout.",
  },
  {
    icon: "ri-timer-flash-line",
    title: "Fast Turnaround",
    desc: "Streamlined workflows and direct liaison with authorities to reduce approval timelines significantly.",
  },
  {
    icon: "ri-route-line",
    title: "End-to-End Service",
    desc: "From document checking to final approval certificate — we manage the entire process so you don't have to.",
  },
];

export default function ServicesPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://buildingapprovalservices.com";

  useEffect(() => {
    document.title = "Building Approval Services Hyderabad | GHMC, HMDA, TG-BPASS / BuildNow | Casa Associates";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Complete building approval services in Hyderabad — GHMC building permission, HMDA layout approval, TG-BPASS / BuildNow applications, occupancy certificates, TDR services & road widening checks. 500+ approvals, 98% success.");
    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) canonical.setAttribute("href", `${siteUrl}/services`);
    window.scrollTo(0, 0);
  }, [siteUrl]);

  useJsonLd(
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CollectionPage",
          "@id": `${siteUrl}/services#webpage`,
          url: `${siteUrl}/services`,
          name: "Building Approval Services Hyderabad | GHMC, HMDA, TG-BPASS | Casa Associates",
          description:
            "Complete building approval services in Hyderabad — GHMC building permission, HMDA layout approval, TG-BPASS, occupancy certificates, TDR services, and road widening checks.",
          inLanguage: "en-IN",
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
              { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
            ],
          },
        },
        {
          "@type": "ItemList",
          "@id": `${siteUrl}/services#itemlist`,
          name: "Building Approval Services in Hyderabad",
          description: "Complete list of building approval and permission services offered by Casa Associates in Hyderabad.",
          numberOfItems: 6,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "GHMC Building Permission",
              url: `${siteUrl}/services/ghmc-building-permission`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "HMDA Layout Permission",
              url: `${siteUrl}/services/hmda-layout-permission`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Land Use & Master Plan Verification",
              url: `${siteUrl}/services/land-use-master-plan`,
            },
            {
              "@type": "ListItem",
              position: 4,
              name: "Occupancy Certificate",
              url: `${siteUrl}/services/occupancy-certificate`,
            },
            {
              "@type": "ListItem",
              position: 5,
              name: "TDR Services",
              url: `${siteUrl}/services/tdr-services`,
            },
            {
              "@type": "ListItem",
              position: 6,
              name: "Road Widening / Master Plan Check",
              url: `${siteUrl}/services/road-widening-check`,
            },
          ],
        },
      ],
    },
    "services-jsonld"
  );

  return (
    <div style={{ fontFamily: '"DM Sans", sans-serif' }}>
      <SiteNavbar />

      {/* ─── HERO ─── */}
      <section className="relative pt-36 pb-28 overflow-hidden" style={{ background: "#0B1F3A" }}>
        {/* Background image overlay */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://readdy.ai/api/search-image?query=Hyderabad%20modern%20city%20skyline%20aerial%20view%20high%20rise%20buildings%20construction%20urban%20development%20Telangana%20professional%20wide%20angle%20architecture%20corporate%20navy%20blue%20tone&width=1440&height=600&seq=services-hero-casa-hub&orientation=landscape"
            alt="Building approval services Hyderabad"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
        {/* Gold left accent line */}
        <div className="absolute top-0 left-0 h-full w-1" style={{ background: "linear-gradient(to bottom, transparent, #C8960C 30%, #C8960C 70%, transparent)" }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-sm" style={{ background: "rgba(200,150,12,0.15)", border: "1px solid rgba(200,150,12,0.4)" }}>
            <span className="w-4 h-4 flex items-center justify-center">
              <i className="ri-service-line text-sm" style={{ color: "#C8960C" }}></i>
            </span>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C8960C", letterSpacing: "0.12em" }}>Building Approval Services Hyderabad</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
            Our Building Permission{" "}
            <span style={{ color: "#C8960C" }}>Services in Hyderabad</span>
          </h1>

          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-6 leading-loose">
            We provide complete assistance for <strong className="text-white/90">GHMC, HMDA, and TG-BPASS / BuildNow approvals</strong> with expert guidance, transparent process, and fast turnaround.
          </p>

          {/* Trust line */}
          <p className="text-sm mb-10" style={{ color: "rgba(200,150,12,0.8)" }}>
            <i className="ri-flashlight-line mr-1"></i>
            Get free consultation within minutes &nbsp;·&nbsp; 500+ Approvals &nbsp;·&nbsp; 98% Success Rate
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919000975046?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.%0A%0AFull%20Name%3A%20%0APhone%20Number%3A%20%0AEmail%20Address%3A%20%0AService%20Required%3A%20%0AMessage%3A%20"
              target="_blank"
              rel="nofollow noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-semibold text-base rounded-sm transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              <span className="w-5 h-5 flex items-center justify-center">
                <i className="ri-whatsapp-line text-lg"></i>
              </span>
              Get Free Consultation on WhatsApp
            </a>
            <a
              href="tel:+919000975046"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold text-base rounded-sm transition-all duration-300 whitespace-nowrap cursor-pointer hover:bg-white/10"
              style={{ border: "1px solid rgba(200,150,12,0.5)", color: "#fff" }}
            >
              <span className="w-5 h-5 flex items-center justify-center">
                <i className="ri-phone-line text-lg" style={{ color: "#C8960C" }}></i>
              </span>
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className="py-14 bg-white" style={{ borderBottom: "1px solid rgba(11,31,58,0.07)" }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-lg text-gray-600 leading-loose">
            <strong className="text-gray-800">Casa Associates</strong> offers end-to-end <strong className="text-gray-800">building approval services in Hyderabad</strong>. From GHMC building permissions and HMDA layout approvals to land use verification and occupancy certificates — we handle the complete approval process efficiently so you can build with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {[
              { icon: "ri-check-double-line", text: "500+ Approvals Completed" },
              { icon: "ri-timer-2-line", text: "15+ Years Experience" },
              { icon: "ri-shield-check-line", text: "98% Success Rate" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2.5 px-5 py-2.5 rounded-sm" style={{ background: "#FDF3DC" }}>
                <span className="w-4 h-4 flex items-center justify-center">
                  <i className={`${item.icon} text-sm`} style={{ color: "#C8960C" }}></i>
                </span>
                <span className="text-sm font-semibold" style={{ color: "#9e7509" }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES GRID ─── */}
      <section className="py-20" style={{ background: "#F8F9FC" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section heading */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-sm" style={{ background: "#FDF3DC" }}>
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C8960C", letterSpacing: "0.1em" }}>What We Offer</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: '"Playfair Display", serif', color: "#0B1F3A" }}>
              Complete Building Approval Services
            </h2>
            <p className="text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
              From initial plan drafting to final approval certificate — we cover every step of the GHMC and HMDA approval process in Hyderabad.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <article
                key={svc.href}
                className="bg-white rounded-sm flex flex-col transition-all duration-300 hover:-translate-y-1 group"
                style={{
                  border: svc.featured ? "2px solid #C8960C" : "1px solid rgba(11,31,58,0.09)",
                  overflow: "hidden",
                }}
              >
                {/* Top accent line */}
                <div
                  className="h-1 w-full transition-all duration-300"
                  style={{ background: svc.featured ? "#C8960C" : "transparent" }}
                ></div>

                <div className="p-8 flex flex-col flex-1 gap-5">
                  {/* Icon + tag row */}
                  <div className="flex items-start justify-between">
                    <div
                      className="w-12 h-12 flex items-center justify-center rounded-sm"
                      style={{ background: svc.featured ? "#FDF3DC" : "#F8F9FC" }}
                    >
                      <i className={`${svc.icon} text-xl`} style={{ color: "#C8960C" }}></i>
                    </div>
                    {svc.featured && (
                      <span className="text-xs font-semibold px-3 py-1 rounded-sm whitespace-nowrap" style={{ background: "#FDF3DC", color: "#9e7509" }}>
                        Most Popular
                      </span>
                    )}
                  </div>

                  {/* Title + desc */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2.5 leading-snug" style={{ fontFamily: '"Playfair Display", serif', color: "#0B1F3A" }}>
                      {svc.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{svc.desc}</p>
                  </div>

                  {/* Learn More */}
                  <Link
                    to={svc.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:gap-3 whitespace-nowrap cursor-pointer"
                    style={{ color: "#C8960C" }}
                    aria-label={`Learn more about ${svc.title} in Hyderabad`}
                  >
                    Learn More
                    <span className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-arrow-right-line text-sm"></i>
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-20" style={{ background: "#0B1F3A" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-sm" style={{ background: "rgba(200,150,12,0.15)", border: "1px solid rgba(200,150,12,0.4)" }}>
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C8960C", letterSpacing: "0.1em" }}>Our Advantage</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Why Choose <span style={{ color: "#C8960C" }}>Casa Associates</span>
            </h2>
            <p className="text-base text-white/55 max-w-xl mx-auto">
              Trusted by homeowners, builders, and developers across Hyderabad for building approval services since over a decade.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-sm flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 cursor-default"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(200,150,12,0.2)" }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-sm" style={{ background: "rgba(200,150,12,0.15)" }}>
                  <i className={`${item.icon} text-xl`} style={{ color: "#C8960C" }}></i>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug" style={{ fontFamily: '"Playfair Display", serif' }}>{item.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-12" style={{ borderTop: "1px solid rgba(200,150,12,0.2)" }}>
            {[
              { val: "500+", lbl: "Approvals Completed" },
              { val: "15+", lbl: "Years Experience" },
              { val: "98%", lbl: "Success Rate" },
              { val: "6", lbl: "Services Available" },
            ].map((s) => (
              <div key={s.lbl} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2" style={{ color: "#C8960C", fontFamily: '"Playfair Display", serif' }}>{s.val}</div>
                <div className="text-sm text-white/55">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-sm" style={{ background: "#FDF3DC" }}>
            <i className="ri-customer-service-2-line text-3xl" style={{ color: "#C8960C" }}></i>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight" style={{ fontFamily: '"Playfair Display", serif', color: "#0B1F3A" }}>
            Need Help with Building Approvals?
          </h2>
          <p className="text-base text-gray-500 mb-3 leading-loose max-w-xl mx-auto">
            Send your documents on WhatsApp for a <strong className="text-gray-700">free consultation</strong>. Our team will review your case and guide you on the fastest approval path.
          </p>
          <p className="text-sm mb-8 font-medium" style={{ color: "#9e7509" }}>
            <i className="ri-flashlight-line mr-1"></i>
            Get free consultation within minutes — no upfront charges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919000975046?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.%0A%0AFull%20Name%3A%20%0APhone%20Number%3A%20%0AEmail%20Address%3A%20%0AService%20Required%3A%20%0AMessage%3A%20"
              target="_blank"
              rel="nofollow noreferrer"
              className="inline-flex items-center justify-center gap-3 px-9 py-4 bg-green-500 hover:bg-green-400 text-white font-semibold text-base rounded-sm transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              <span className="w-5 h-5 flex items-center justify-center">
                <i className="ri-whatsapp-line text-lg"></i>
              </span>
              Get Free Consultation on WhatsApp
            </a>
            <a
              href="tel:+919000975046"
              className="inline-flex items-center justify-center gap-3 px-9 py-4 font-semibold text-base rounded-sm transition-all duration-300 whitespace-nowrap cursor-pointer hover:bg-gray-50"
              style={{ border: "1px solid rgba(11,31,58,0.2)", color: "#0B1F3A" }}
            >
              <span className="w-5 h-5 flex items-center justify-center">
                <i className="ri-phone-line text-lg" style={{ color: "#C8960C" }}></i>
              </span>
              Call +91 90009 75046
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-8 leading-relaxed">
            <strong>Disclaimer:</strong> Casa Associates is a private consultancy. Not affiliated with GHMC, HMDA, or any government body.
          </p>
        </div>
      </section>

      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
