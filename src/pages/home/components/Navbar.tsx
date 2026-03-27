import { useState, useEffect } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Documents", href: "#documents" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "#0B1F3A"
          : "linear-gradient(to bottom, rgba(11,31,58,0.95) 0%, rgba(11,31,58,0.6) 100%)",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center cursor-pointer group flex-shrink-0">
            <div className="h-10 lg:h-12 w-auto flex items-center justify-center">
              <img
                src="https://storage.readdy-site.link/project_files/e935d4ba-d68c-4c45-9f24-abafaff5b522/ee8ae188-79fa-4b7d-8352-80456f8ccb79_IMG_20260327_014746-removebg-preview.png?v=908567f38165471e00a7b0e447a7b9af"
                alt="Casa Associates - Building Permission Services Hyderabad"
                className="h-full w-auto object-contain"
                style={{ maxWidth: "180px" }}
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-sm font-medium transition-colors cursor-pointer whitespace-nowrap text-white/80 hover:text-white relative group"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ background: "#C8960C" }}
                ></span>
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919980377877"
              className="flex items-center gap-2 px-4 py-2 rounded-sm border text-white text-sm font-medium transition-all whitespace-nowrap cursor-pointer hover:bg-white/10"
              style={{ borderColor: "rgba(200,150,12,0.5)", fontFamily: '"DM Sans", sans-serif' }}
            >
              <span className="w-4 h-4 flex items-center justify-center">
                <i className="ri-phone-line text-sm" style={{ color: "#C8960C" }}></i>
              </span>
              +91 99803 77877
            </a>
            <a
              href="https://wa.me/919980377877"
              target="_blank"
              rel="nofollow noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-sm bg-green-500 text-white text-sm font-semibold hover:bg-green-400 transition-all whitespace-nowrap cursor-pointer"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              <span className="w-4 h-4 flex items-center justify-center">
                <i className="ri-whatsapp-line text-sm"></i>
              </span>
              WhatsApp
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-9 h-9 flex items-center justify-center cursor-pointer text-white"
            aria-label="Toggle menu"
          >
            <i className={`text-xl ${menuOpen ? "ri-close-line" : "ri-menu-3-line"}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t" style={{ background: "#0B1F3A", borderColor: "rgba(200,150,12,0.3)" }}>
          <div className="px-4 py-5 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="block py-3 px-4 text-white/80 hover:text-white font-medium rounded-sm transition-colors cursor-pointer whitespace-nowrap"
                style={{ fontFamily: '"DM Sans", sans-serif', borderLeft: "2px solid transparent" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderLeftColor = "#C8960C"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderLeftColor = "transparent"; }}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-4 pt-4" style={{ borderTop: "1px solid rgba(200,150,12,0.3)" }}>
              <a
                href="tel:+919980377877"
                className="flex items-center justify-center gap-2 py-3 rounded-sm border text-white font-medium text-sm cursor-pointer whitespace-nowrap"
                style={{ borderColor: "rgba(200,150,12,0.5)" }}
              >
                <i className="ri-phone-line" style={{ color: "#C8960C" }}></i>
                +91 99803 77877
              </a>
              <a
                href="https://wa.me/919980377877"
                target="_blank"
                rel="nofollow noreferrer"
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
