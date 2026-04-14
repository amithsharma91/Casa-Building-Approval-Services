import { Link } from "react-router-dom";
import { useInView, animStyles } from "../../../hooks/useInView";

const services = [
  {
    icon: "ri-government-line",
    title: "Building Permission",
    subtitle: "GHMC / HMDA",
    desc: "End-to-end assistance for GHMC and HMDA building permission applications through TG-BPASS. We handle documentation, plan submission, fee payment, and final approval.",
    tag: "Most Popular",
    tagColor: "#C8960C",
    featured: true,
    href: "/services/ghmc-building-permission",
  },
  {
    icon: "ri-map-2-line",
    title: "Layout Permission",
    subtitle: "HMDA",
    desc: "Professional handling of HMDA layout permissions for residential and commercial plot developments. We ensure your layout complies with master plan norms.",
    tag: "Layout",
    tagColor: "#0B1F3A",
    featured: false,
    href: "/services/hmda-layout-permission",
  },
  {
    icon: "ri-compass-discover-line",
    title: "Land Use / Master Plan",
    subtitle: "Verification",
    desc: "We verify land use classification and master plan status to confirm your plot's permissible usage under HMDA zoning regulations before you invest.",
    tag: "Verification",
    tagColor: "#0B1F3A",
    featured: false,
    href: "/services/land-use-master-plan",
  },
  {
    icon: "ri-building-3-line",
    title: "Occupancy Certificate",
    subtitle: "Post Construction",
    desc: "After construction completion, we assist you in obtaining the Occupancy Certificate (OC) from GHMC/HMDA — essential for legal occupation of your building.",
    tag: "OC",
    tagColor: "#0B1F3A",
    featured: false,
    href: "/services/occupancy-certificate",
  },
  {
    icon: "ri-arrow-up-circle-line",
    title: "TDR – Additional Floors",
    subtitle: "Transfer of Development Rights",
    desc: "Leverage TDR entitlements to construct additional floors on your existing property. We handle the entire TDR utilization process with GHMC seamlessly.",
    tag: "TDR",
    tagColor: "#C8960C",
    featured: true,
    href: "/services/tdr-services",
  },
  {
    icon: "ri-hand-coin-line",
    title: "Claim Your TDR",
    subtitle: "Road Affected Properties",
    desc: "If your land is affected by Road Widening, FTL, MFL, NALA, or Buffer Zones, you may be eligible for TDR compensation. We help you file and claim your TDR entitlement.",
    tag: "Claim",
    tagColor: "#0B1F3A",
    featured: false,
    href: "/services/road-widening-check",
  },
];

export default function ServicesSection() {
  const { ref: headerRef, inView: headerInView } = useInView(0.15);
  const { ref: cardsRef, inView: cardsInView } = useInView(0.05);
  const { ref: ctaRef, inView: ctaInView } = useInView(0.2);
  const { ref: roadRef, inView: roadInView } = useInView(0.2);

  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div
            className="text-xs font-semibold tracking-widest uppercase mb-5"
            style={{ color: "#C8960C", fontFamily: '"DM Sans", sans-serif', letterSpacing: "0.15em", ...animStyles(headerInView, 0) }}
          >
            What We Do
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5"
            style={{ color: "#0B1F3A", fontFamily: '"Playfair Display", serif', ...animStyles(headerInView, 0.1) }}
          >
            Our Expert Services
          </h2>
          <p
            className="text-base text-gray-500 max-w-xl mx-auto leading-loose"
            style={{ fontFamily: '"DM Sans", sans-serif', ...animStyles(headerInView, 0.2) }}
          >
            Casa Associates provides comprehensive building approval services in Hyderabad — from GHMC building permission to TDR claims. Every service is handled by experts who know the system inside out.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-10">
          {services.map((svc, idx) => (
            <Link
              key={svc.title}
              to={svc.href}
              className="group flex flex-col p-7 rounded-sm bg-white transition-all duration-300 cursor-pointer relative overflow-hidden"
              style={{
                border: svc.featured ? "1px solid rgba(200,150,12,0.35)" : "1px solid #EEEAE0",
                textDecoration: "none",
                ...animStyles(cardsInView, idx * 0.07),
              }}
            >
              {/* Top accent line */}
              <div
                className={`absolute top-0 left-0 h-0.5 transition-all duration-500 ${svc.featured ? "w-full" : "w-0 group-hover:w-full"}`}
                style={{ background: "#C8960C" }}
              ></div>

              {/* Tag */}
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-sm"
                  style={{ background: "rgba(200,150,12,0.1)" }}
                >
                  <i className={`${svc.icon} text-2xl`} style={{ color: "#C8960C" }}></i>
                </div>
                <span
                  className="text-xs font-semibold px-3 py-1.5 rounded-sm"
                  style={{
                    background: svc.tagColor === "#C8960C" ? "rgba(200,150,12,0.12)" : "rgba(11,31,58,0.07)",
                    color: svc.tagColor,
                    fontFamily: '"DM Sans", sans-serif',
                  }}
                >
                  {svc.tag}
                </span>
              </div>

              <h3
                className="text-lg font-bold mb-1"
                style={{ color: "#0B1F3A", fontFamily: '"Playfair Display", serif' }}
              >
                {svc.title}
              </h3>
              <p
                className="text-xs font-semibold mb-4"
                style={{ color: "#C8960C", fontFamily: '"DM Sans", sans-serif', letterSpacing: "0.05em" }}
              >
                {svc.subtitle}
              </p>
              <p
                className="text-sm text-gray-500 leading-loose flex-1"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                {svc.desc}
              </p>

              <div
                className="mt-6 pt-5 flex items-center gap-2 text-sm font-semibold"
                style={{ borderTop: "1px solid #F0EDE5", color: "#C8960C", fontFamily: '"DM Sans", sans-serif' }}
              >
                <span className="flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
                  Learn More
                  <span className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-arrow-right-line text-sm"></i>
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Services CTA */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-between gap-5 py-8 px-7 mb-8 rounded-sm"
          style={{ background: "#F8F9FC", border: "1px solid rgba(11,31,58,0.08)", ...animStyles(ctaInView, 0) }}
        >
          <div>
            <p className="text-base font-semibold" style={{ color: "#0B1F3A", fontFamily: '"Playfair Display", serif' }}>
              Need help choosing the right service?
            </p>
            <p className="text-sm text-gray-500 mt-1">Browse our complete building approval services for Hyderabad.</p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-sm font-semibold text-sm whitespace-nowrap cursor-pointer transition-all duration-200 hover:opacity-90 flex-shrink-0"
            style={{ background: "#0B1F3A", color: "#C8960C", fontFamily: '"DM Sans", sans-serif', border: "1px solid rgba(200,150,12,0.3)" }}
          >
            View All Services
            <span className="w-4 h-4 flex items-center justify-center">
              <i className="ri-arrow-right-line text-sm"></i>
            </span>
          </Link>
        </div>

        {/* Road Widening Highlight */}
        <div
          ref={roadRef}
          className="rounded-sm p-8 lg:p-10 flex flex-col lg:flex-row items-center lg:items-start gap-7"
          style={{ background: "#0B1F3A", ...animStyles(roadInView, 0) }}
        >
          <div
            className="w-16 h-16 flex items-center justify-center rounded-sm flex-shrink-0"
            style={{ background: "rgba(200,150,12,0.2)" }}
          >
            <i className="ri-road-map-line text-3xl" style={{ color: "#C8960C" }}></i>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h3
              className="text-xl font-bold text-white mb-3"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Road Widening / Master Plan Check
            </h3>
            <p
              className="text-base text-white/65 leading-loose max-w-2xl"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              Before purchasing or constructing, verify if your property is affected by proposed road widening or HMDA master plan reservations. This critical check prevents costly mistakes and helps you understand your TDR eligibility. Our experts perform a detailed road widening check and provide a comprehensive report.
            </p>
          </div>
          <a
            href="https://wa.me/919008710698?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.%0A%0AFull%20Name%3A%20%0APhone%20Number%3A%20%0AEmail%20Address%3A%20%0AService%20Required%3A%20%0AMessage%3A%20"
            target="_blank"
            rel="nofollow noreferrer"
            className="flex items-center gap-2 px-7 py-4 rounded-sm text-sm font-semibold whitespace-nowrap cursor-pointer transition-all hover:bg-green-400 flex-shrink-0"
            style={{ background: "#25D366", color: "#fff", fontFamily: '"DM Sans", sans-serif' }}
          >
            <span className="w-4 h-4 flex items-center justify-center">
              <i className="ri-whatsapp-line text-sm"></i>
            </span>
            Get Free Consultation on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
