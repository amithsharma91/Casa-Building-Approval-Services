import { Link } from "react-router-dom";
import { useGtagConversion } from "@/hooks/useGtagConversion";

const LOGO_URL = "https://storage.readdy-site.link/project_files/e935d4ba-d68c-4c45-9f24-abafaff5b522/ee8ae188-79fa-4b7d-8352-80456f8ccb79_IMG_20260327_014746-removebg-preview.png?v=908567f38165471e00a7b0e447a7b9af";

const services = [
  { label: "All Services Overview", href: "/services" },
  { label: "Building Permission (GHMC/HMDA)", href: "/services/ghmc-building-permission" },
  { label: "Layout Permission (HMDA)", href: "/services/hmda-layout-permission" },
  { label: "Land Use / Master Plan Verification", href: "/services/land-use-master-plan" },
  { label: "Occupancy Certificate", href: "/services/occupancy-certificate" },
  { label: "TDR – Additional Floors", href: "/services/tdr-services" },
  { label: "Road Widening Check", href: "/services/road-widening-check" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Documents Required", href: "/documents" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  const { trackConversion } = useGtagConversion();
  const WA_URL = "https://wa.me/919000975046?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.%0A%0AFull%20Name%3A%20%0APhone%20Number%3A%20%0AEmail%20Address%3A%20%0AService%20Required%3A%20%0AMessage%3A%20";

  return (
    <footer style={{ background: "#060E1C" }}>
      <div style={{ background: "#0B1F3A", borderBottom: "1px solid rgba(200,150,12,0.2)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-7">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>
                Ready to Get Your Building Permission?
              </h3>
              <p className="text-base text-white/50" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                Send your property documents on WhatsApp for free expert guidance — no upfront charges.
              </p>
            </div>
            <div className="flex items-center gap-4 flex-shrink-0">
              <a
                href="tel:+919000975046"
                onClick={() => trackConversion()}
                className="flex items-center gap-2 px-6 py-3.5 rounded-sm border text-white text-sm font-semibold whitespace-nowrap cursor-pointer hover:bg-white/10 transition-all"
                style={{ borderColor: "rgba(200,150,12,0.4)", fontFamily: '"DM Sans", sans-serif' }}
              >
                <span className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-phone-line text-sm" style={{ color: "#C8960C" }}></i>
                </span>
                Call Now
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="nofollow noreferrer"
                onClick={() => trackConversion(WA_URL)}
                className="flex items-center gap-2 px-6 py-3.5 rounded-sm bg-green-500 hover:bg-green-400 text-white text-sm font-semibold whitespace-nowrap cursor-pointer transition-all"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                <span className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-whatsapp-line text-sm"></i>
                </span>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-6 cursor-pointer">
              <img
                src={LOGO_URL}
                alt="Casa Associates - Building Permission Services Hyderabad"
                className="h-12 w-auto object-contain"
                style={{ maxWidth: "180px" }}
              />
            </Link>
            <p className="text-sm text-white/45 leading-loose mb-6" style={{ fontFamily: '"DM Sans", sans-serif' }}>
              Expert building permission consultancy for GHMC, HMDA, and TG-BPASS / BuildNow approvals in Hyderabad, Telangana.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+919000975046"
                onClick={() => trackConversion()}
                className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors cursor-pointer"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                <span className="w-4 h-4 flex items-center justify-center"><i className="ri-phone-line text-xs" style={{ color: "#C8960C" }}></i></span>
                +91 90009 75046
              </a>
              <a href="mailto:Casa.Approvals@gmail.com" className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors cursor-pointer" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                <span className="w-4 h-4 flex items-center justify-center"><i className="ri-mail-line text-xs" style={{ color: "#C8960C" }}></i></span>
                Casa.Approvals@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-6 tracking-wide" style={{ fontFamily: '"Playfair Display", serif', letterSpacing: "0.05em" }}>Our Services</h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link to={s.href} className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors cursor-pointer leading-snug" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                    <span className="w-3 h-3 flex items-center justify-center flex-shrink-0"><i className="ri-arrow-right-s-line text-xs" style={{ color: "#C8960C" }}></i></span>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-6 tracking-wide" style={{ fontFamily: '"Playfair Display", serif', letterSpacing: "0.05em" }}>Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors cursor-pointer" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                    <span className="w-3 h-3 flex items-center justify-center flex-shrink-0"><i className="ri-arrow-right-s-line text-xs" style={{ color: "#C8960C" }}></i></span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-6 tracking-wide" style={{ fontFamily: '"Playfair Display", serif', letterSpacing: "0.05em" }}>Contact Info</h4>
            <div className="flex flex-col gap-5 mb-7">
              <div className="flex items-start gap-3">
                <span className="w-4 h-4 flex items-center justify-center mt-0.5 flex-shrink-0"><i className="ri-map-pin-line text-xs" style={{ color: "#C8960C" }}></i></span>
                <span className="text-sm text-white/45 leading-snug" style={{ fontFamily: '"DM Sans", sans-serif' }}>Road No. 01, Avenue 07, 4th Floor,<br />Bhooma Plaza, Street 04,<br />near GVK One Mall, Banjara Hills,<br />Hyderabad, Telangana 500034</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-4 h-4 flex items-center justify-center mt-0.5 flex-shrink-0"><i className="ri-time-line text-xs" style={{ color: "#C8960C" }}></i></span>
                <div>
                  <div className="text-sm text-white/45" style={{ fontFamily: '"DM Sans", sans-serif' }}>Mon – Sat: 9:00 AM – 7:00 PM</div>
                  <div className="text-xs text-white/25 mt-1" style={{ fontFamily: '"DM Sans", sans-serif' }}>Sunday: Closed</div>
                </div>
              </div>
            </div>
            <a
              href={WA_URL}
              target="_blank"
              rel="nofollow noreferrer"
              onClick={() => trackConversion(WA_URL)}
              className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-sm bg-green-600 hover:bg-green-500 text-white text-sm font-semibold whitespace-nowrap cursor-pointer transition-all"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              <span className="w-4 h-4 flex items-center justify-center"><i className="ri-whatsapp-line text-sm"></i></span>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 text-center sm:text-left" style={{ fontFamily: '"DM Sans", sans-serif' }}>
            &copy; {new Date().getFullYear()} Casa Associates. All rights reserved. &nbsp;|&nbsp; Hyderabad, Telangana
          </p>
          <p className="text-xs text-white/35 text-center sm:text-right" style={{ fontFamily: '"DM Sans", sans-serif' }}>
            <strong className="text-white/50">Disclaimer:</strong> We are a private consultancy. Not affiliated with GHMC, HMDA, or any government body.
          </p>
        </div>
      </div>
    </footer>
  );
}
