const bullets = [
  { icon: "ri-home-4-line", text: "New construction on vacant land" },
  { icon: "ri-stack-line", text: "Additional floors to existing building" },
  { icon: "ri-store-2-line", text: "Commercial buildings & offices" },
  { icon: "ri-tools-line", text: "Structural renovations or alterations" },
  { icon: "ri-map-2-line", text: "Layout development & plotting" },
];

export default function WhenPermissionSection() {
  return (
    <section id="about" className="py-24 lg:py-32" style={{ background: "#F8F6F0" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Left: Portrait Image */}
          <div className="flex items-center justify-center">
            <div
              className="relative w-full max-w-[400px] mx-auto flex items-center justify-center rounded-xl overflow-hidden"
              style={{
                background: "#EEE9DC",
                minHeight: "480px",
                boxShadow: "0 8px 40px rgba(11,31,58,0.13)",
              }}
            >
              <img
                src="https://storage.readdy-site.link/project_files/e935d4ba-d68c-4c45-9f24-abafaff5b522/b32e47c8-962b-4d47-bdab-4372373811f2_b6767aff-e250-44dc-b11e-13efdea5dc1f.jpeg?v=7740b1c7572b9170c15b5f8185b33d96"
                alt="Building permit approval - GHMC TG-BPASS permission Hyderabad"
                className="w-full object-contain"
                style={{ display: "block", maxHeight: "560px", minHeight: "480px" }}
              />

            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: "#C8960C", fontFamily: '"DM Sans", sans-serif', letterSpacing: "0.15em" }}
            >
              Know Your Requirements
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-7 leading-tight"
              style={{ color: "#0B1F3A", fontFamily: '"Playfair Display", serif' }}
            >
              When is a Building Permission Required?
            </h2>

            <p
              className="text-base text-gray-500 mb-8 leading-loose"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              As per GHMC building permission regulations, obtaining a valid building permission is mandatory before commencing any of the following construction activities:
            </p>

            <div className="flex flex-col gap-3">
              {bullets.map((b) => (
                <div
                  key={b.text}
                  className="flex items-center gap-4 p-4 rounded-sm bg-white hover:translate-x-1 transition-transform duration-200"
                  style={{ border: "1px solid #EEEAE0" }}
                >
                  <span
                    className="w-10 h-10 flex items-center justify-center rounded-sm flex-shrink-0"
                    style={{ background: "rgba(200,150,12,0.1)" }}
                  >
                    <i className={`${b.icon} text-lg`} style={{ color: "#C8960C" }}></i>
                  </span>
                  <span
                    className="text-base font-medium"
                    style={{ color: "#0B1F3A", fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {b.text}
                  </span>
                </div>
              ))}
            </div>

            <p
              className="text-sm text-gray-400 mt-6"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              Not sure which approval you need?{" "}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="font-semibold hover:underline cursor-pointer"
                style={{ color: "#C8960C" }}
              >
                Contact us for free guidance ↓
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
