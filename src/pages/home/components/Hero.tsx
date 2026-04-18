import { useInView, animStyles } from '../../../hooks/useInView';
import { useGtagConversion } from '@/hooks/useGtagConversion';

const stats = [
  { value: "500+", label: "Approvals Delivered" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Success Rate" },
];

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const { ref: statsRef, inView: statsInView } = useInView(0.2);
  const { trackConversion } = useGtagConversion();

  const WA_URL = "https://wa.me/919008710698?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.%0A%0AFull%20Name%3A%20%0APhone%20Number%3A%20%0AEmail%20Address%3A%20%0AService%20Required%3A%20%0AMessage%3A%20";

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 hero-animate-fade">
        <img
          src="https://readdy.ai/api/search-image?query=elegant%20modern%20luxury%20residential%20building%20facade%20Hyderabad%20India%20gold%20and%20white%20architectural%20details%20clean%20contemporary%20design%20polished%20marble%20exterior%20premium%20real%20estate%20twilight%20dusk%20warm%20lighting%20professional%20corporate%20photography%20sharp%20detail%20wide%20angle&width=1440&height=900&seq=hero-casa-v2&orientation=landscape"
          alt="Casa Associates GHMC Building Permission Hyderabad - Premium Architecture"
          className="w-full h-full object-cover object-top"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(11,31,58,0.97) 0%, rgba(11,31,58,0.93) 50%, rgba(11,31,58,0.72) 80%, rgba(11,31,58,0.5) 100%)",
          }}
        ></div>
        <div
          className="absolute top-0 left-0 h-full w-1"
          style={{ background: "linear-gradient(to bottom, transparent, #C8960C 30%, #C8960C 70%, transparent)" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-36 lg:py-44">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Eyebrow */}
          <div
            className="hero-animate-1 inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-sm"
            style={{ background: "rgba(200,150,12,0.15)", border: "1px solid rgba(200,150,12,0.4)" }}
          >
            <span className="w-4 h-4 flex items-center justify-center">
              <i className="ri-map-pin-2-fill text-sm" style={{ color: "#C8960C" }}></i>
            </span>
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "#C8960C", fontFamily: '"DM Sans", sans-serif', letterSpacing: "0.12em" }}
            >
              Hyderabad, Telangana &nbsp;|&nbsp; Private Consultancy
            </span>
          </div>

          {/* Main Heading H1 */}
          <h1
            className="hero-animate-2 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-5 leading-tight"
            style={{ fontFamily: '"Playfair Display", serif', lineHeight: "1.12" }}
          >
            We Transform
            <br />
            <span style={{ color: "#C8960C" }}>Spaces to Reality</span>
          </h1>

          {/* Tagline */}
          <p
            className="hero-animate-3 text-sm sm:text-base font-semibold tracking-widest uppercase mb-6"
            style={{ color: "rgba(200,150,12,0.85)", fontFamily: '"DM Sans", sans-serif', letterSpacing: "0.18em" }}
          >
            Building Permission Services
          </p>

          <p
            className="hero-animate-3 text-base sm:text-lg text-white/75 mb-12 leading-loose max-w-xl"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            Expert guidance for <strong className="text-white font-semibold">GHMC &amp; HMDA building permissions</strong> in Hyderabad.
            We handle TG-BPASS / BuildNow approvals, layout permissions, occupancy certificates, and TDR services — end to end, so you can focus on building.
          </p>

          {/* CTA Buttons */}
          <div className="hero-animate-4 flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href={WA_URL}
              target="_blank"
              rel="nofollow noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-semibold text-base rounded-sm transition-all duration-300 whitespace-nowrap cursor-pointer"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
              onClick={() => trackConversion(WA_URL)}
            >
              <span className="w-5 h-5 flex items-center justify-center">
                <i className="ri-whatsapp-line text-lg"></i>
              </span>
              Get Free Consultation on WhatsApp
            </a>
            <a
              href="#services"
              onClick={(e) => { e.preventDefault(); handleScroll("#services"); }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold text-base rounded-sm transition-all duration-300 whitespace-nowrap cursor-pointer hover:bg-white/10"
              style={{
                fontFamily: '"DM Sans", sans-serif',
                border: "1px solid rgba(200,150,12,0.6)",
                color: "#C8960C",
              }}
            >
              <span className="w-5 h-5 flex items-center justify-center">
                <i className="ri-grid-line text-lg"></i>
              </span>
              Our Services
            </a>
          </div>

          {/* Stats */}
          <div
            ref={statsRef}
            className="pt-8 border-t flex flex-wrap gap-x-0 gap-y-6"
            style={{ borderColor: "rgba(200,150,12,0.25)" }}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="pr-8 sm:pr-12"
                style={{
                  borderRight: i < stats.length - 1 ? "1px solid rgba(200,150,12,0.25)" : "none",
                  marginRight: i < stats.length - 1 ? "2rem" : "0",
                  ...animStyles(statsInView, 0.7 + i * 0.1),
                }}
              >
                <div
                  className="text-3xl sm:text-4xl font-bold"
                  style={{ color: "#C8960C", fontFamily: '"Playfair Display", serif' }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs sm:text-sm text-white/60 mt-1.5 font-medium whitespace-nowrap"
                  style={{ fontFamily: '"DM Sans", sans-serif' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => handleScroll("#about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer hero-animate-5"
        aria-label="Scroll down"
      >
        <div
          className="w-8 h-12 rounded-full border-2 flex items-start justify-center pt-2"
          style={{ borderColor: "rgba(200,150,12,0.4)" }}
        >
          <div
            className="w-1 h-3 rounded-full animate-bounce"
            style={{ background: "#C8960C" }}
          ></div>
        </div>
      </button>
    </section>
  );
}
