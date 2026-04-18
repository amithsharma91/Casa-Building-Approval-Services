import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useGtagConversion } from "@/hooks/useGtagConversion";

const LOGO_URL = "https://storage.readdy-site.link/project_files/e935d4ba-d68c-4c45-9f24-abafaff5b522/ee8ae188-79fa-4b7d-8352-80456f8ccb79_IMG_20260327_014746-removebg-preview.png?v=908567f38165471e00a7b0e447a7b9af";

const serviceLinks = [
  { label: "GHMC Building Permission", href: "/services/ghmc-building-permission" },
  { label: "HMDA Layout Permission", href: "/services/hmda-layout-permission" },
  { label: "Land Use & Master Plan", href: "/services/land-use-master-plan" },
  { label: "Occupancy Certificate", href: "/services/occupancy-certificate" },
  { label: "TDR Services", href: "/services/tdr-services" },
  { label: "Road Widening Check", href: "/services/road-widening-check" },
];

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Documents", href: "/documents" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { trackConversion } = useGtagConversion();

  const WA_URL = "https://wa.me/919008710698";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const handleHashLink = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    setMenuOpen(false);
    e.preventDefault();
    if (location.pathname === "/") {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  };

  const isActive = (href: string) => location.pathname === href;
  const isServiceActive = location.pathname.startsWith("/services");

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "#0B1F3A"
          : location.pathname === "/"
          ? "linear-gradient(to bottom, rgba(11,31,58,0.95) 0%, rgba(11,31,58,0.6) 100%)"
          : "#0B1F3A",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer group flex-shrink-0">
            <div className="h-10 lg:h-12 w-auto flex items-center justify-center">
              <img
                src={LOGO_URL}
                alt="Casa Associates - Building Permission Services Hyderabad"
                className="h-full w-auto object-contain"
                style={{ maxWidth: "180px" }}
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5">
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1.5 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap relative group"
                style={{ fontFamily: '"DM Sans", sans-serif', color: isServiceActive ? "#C8960C" : "rgba(255,255,255,0.8)" }}
              >
                Services
                <span className="w-4 h-4 flex items-center justify-center">
                  <i className={`ri-arrow-down-s-line text-sm transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}></i>
                </span>
                <span className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ background: "#C8960C", width: isServiceActive ? "100%" : "0" }}></span>
              </button>

              {/* Dropdown Panel */}
              {servicesOpen && (
                <div
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 rounded-sm overflow-hidden"
                  style={{ background: "#0B1F3A", border: "1px solid rgba(200,150,12,0.3)", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
                >
                  <div className="px-4 py-3" style={{ borderBottom: "1px solid rgba(200,150,12,0.2)" }}>
                    <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C8960C", letterSpacing: "0.1em" }}>Our Services</p>
                  </div>
                  {/* All Services hub link */}
                  <Link
                    to="/services"
                    className="flex items-center gap-3 px-4 py-3.5 text-sm font-semibold transition-colors cursor-pointer hover:bg-white/10"
                    style={{ color: isActive("/services") ? "#C8960C" : "#fff", fontFamily: '"DM Sans", sans-serif', borderBottom: "1px solid rgba(200,150,12,0.2)", background: "rgba(200,150,12,0.07)" }}
                  >
                    <span className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                      <i className="ri-apps-2-line text-xs" style={{ color: "#C8960C" }}></i>
                    </span>
                    View All Services
                  </Link>
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      to={s.href}
                      className="flex items-center gap-3 px-4 py-3.5 text-sm transition-colors cursor-pointer hover:bg-white/5"
                      style={{ color: isActive(s.href) ? "#C8960C" : "rgba(255,255,255,0.75)", fontFamily: '"DM Sans", sans-serif', borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                    >
                      <span className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                        <i className="ri-arrow-right-s-line text-xs" style={{ color: "#C8960C" }}></i>
                      </span>
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {pageLinks.map((link) => (
              link.href === "/#services" ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleHashLink(e, "#services")}
                  className="text-sm font-medium transition-colors cursor-pointer whitespace-nowrap relative group"
                  style={{ fontFamily: '"DM Sans", sans-serif', color: "rgba(255,255,255,0.8)" }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300" style={{ background: "#C8960C" }}></span>
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-medium transition-colors cursor-pointer whitespace-nowrap relative group"
                  style={{ fontFamily: '"DM Sans", sans-serif', color: isActive(link.href) ? "#C8960C" : "rgba(255,255,255,0.8)" }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ background: "#C8960C", width: isActive(link.href) ? "100%" : "0" }}></span>
                </Link>
              )
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a
              href="tel:+919008710698"
              onClick={() => trackConversion()}
              className="flex items-center gap-2 px-4 py-2 rounded-sm border text-white text-sm font-medium transition-all whitespace-nowrap cursor-pointer hover:bg-white/10"
              style={{ borderColor: "rgba(200,150,12,0.5)", fontFamily: '"DM Sans", sans-serif' }}
            >
              <span className="w-4 h-4 flex items-center justify-center"><i className="ri-phone-line text-sm" style={{ color: "#C8960C" }}></i></span>
              +91 90087 10698
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="nofollow noreferrer"
              onClick={() => trackConversion(WA_URL)}
              className="flex items-center gap-2 px-5 py-2 rounded-sm bg-green-500 text-white text-sm font-semibold hover:bg-green-400 transition-all whitespace-nowrap cursor-pointer"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              <span className="w-4 h-4 flex items-center justify-center"><i className="ri-whatsapp-line text-sm"></i></span>
              WhatsApp
            </a>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden w-9 h-9 flex items-center justify-center cursor-pointer text-white" aria-label="Toggle menu">
            <i className={`text-xl ${menuOpen ? "ri-close-line" : "ri-menu-3-line"}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t" style={{ background: "#0B1F3A", borderColor: "rgba(200,150,12,0.3)" }}>
          <div className="px-4 py-5 flex flex-col gap-1">
            {/* Mobile Services Toggle */}
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between py-3 px-4 font-medium rounded-sm transition-colors cursor-pointer w-full text-left"
              style={{ fontFamily: '"DM Sans", sans-serif', color: isServiceActive ? "#C8960C" : "rgba(255,255,255,0.8)", borderLeft: `2px solid ${isServiceActive ? "#C8960C" : "transparent"}` }}
            >
              Services
              <span className="w-5 h-5 flex items-center justify-center">
                <i className={`ri-arrow-down-s-line text-sm transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}></i>
              </span>
            </button>

            {mobileServicesOpen && (
              <div className="ml-4 mb-2 flex flex-col gap-0" style={{ borderLeft: "2px solid rgba(200,150,12,0.3)" }}>
                {/* All Services hub link in mobile */}
                <Link
                  to="/services"
                  className="block py-2.5 px-4 text-sm font-semibold transition-colors cursor-pointer"
                  style={{ fontFamily: '"DM Sans", sans-serif', color: isActive("/services") ? "#C8960C" : "rgba(255,255,255,0.85)" }}
                >
                  View All Services
                </Link>
                {serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    className="block py-2.5 px-4 text-sm transition-colors cursor-pointer"
                    style={{ fontFamily: '"DM Sans", sans-serif', color: isActive(s.href) ? "#C8960C" : "rgba(255,255,255,0.65)" }}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}

            {pageLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="block py-3 px-4 font-medium rounded-sm transition-colors cursor-pointer whitespace-nowrap"
                style={{ fontFamily: '"DM Sans", sans-serif', color: isActive(link.href) ? "#C8960C" : "rgba(255,255,255,0.8)", borderLeft: `2px solid ${isActive(link.href) ? "#C8960C" : "transparent"}` }}
              >
                {link.label}
              </Link>
            ))}

            <div className="flex flex-col gap-2 mt-4 pt-4" style={{ borderTop: "1px solid rgba(200,150,12,0.3)" }}>
              <a
                href="tel:+919008710698"
                onClick={() => trackConversion()}
                className="flex items-center justify-center gap-2 py-3 rounded-sm border text-white font-medium text-sm cursor-pointer whitespace-nowrap"
                style={{ borderColor: "rgba(200,150,12,0.5)" }}
              >
                <i className="ri-phone-line" style={{ color: "#C8960C" }}></i>
                +91 90087 10698
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="nofollow noreferrer"
                onClick={() => trackConversion(WA_URL)}
                className="flex items-center justify-center gap-2 py-3 rounded-sm bg-green-500 text-white font-semibold text-sm cursor-pointer whitespace-nowrap"
              >
                <i className="ri-whatsapp-line"></i>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
