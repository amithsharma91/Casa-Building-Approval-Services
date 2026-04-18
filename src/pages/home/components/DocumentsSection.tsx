const documents = [
  { icon: "ri-file-text-line", title: "Sale Deed / Title Deed", desc: "Registered ownership document proving legal title to the property" },
  { icon: "ri-receipt-line", title: "Property Tax Receipt", desc: "Latest property tax payment receipt from GHMC or local municipal body" },
  { icon: "ri-shield-check-line", title: "Encumbrance Certificate (EC)", desc: "Obtained from Sub-Registrar office showing all registered transactions on the property" },
  { icon: "ri-links-line", title: "Link Documents", desc: "Chain of ownership documents tracing title from original registered owner" },
  { icon: "ri-id-card-line", title: "Aadhaar Card", desc: "Valid Aadhaar card of the property owner as identity proof" },
  { icon: "ri-map-pin-line", title: "Plot Layout Copy", desc: "Approved layout plan showing your plot with survey number and dimensions" },
  { icon: "ri-ruler-line", title: "Architect Building Plan", desc: "Certified building plan prepared by a licensed architect as per GHMC norms" },
];

export default function DocumentsSection() {
  return (
    <section id="documents" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* Left */}
          <div>
            <div
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: "#C8960C", fontFamily: '"DM Sans", sans-serif', letterSpacing: "0.15em" }}
            >
              Checklist
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight"
              style={{ color: "#0B1F3A", fontFamily: '"Playfair Display", serif' }}
            >
              Documents Required
            </h2>
            <p
              className="text-base text-gray-500 mb-10 leading-loose"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              For GHMC building permission and TG-BPASS / BuildNow approvals in Hyderabad, ensure you have the following documents ready. Additional documents may be required based on property type or zone.
            </p>

            <div className="flex flex-col gap-4">
              {documents.map((doc, i) => (
                <div
                  key={doc.title}
                  className="flex items-start gap-4 p-5 rounded-sm bg-white hover:shadow-sm transition-all"
                  style={{ border: "1px solid #EEEAE0" }}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-sm flex-shrink-0"
                    style={{ background: "rgba(200,150,12,0.1)" }}
                  >
                    <i className={`${doc.icon} text-xl`} style={{ color: "#C8960C" }}></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className="flex items-center gap-2 mb-1"
                    >
                      <span
                        className="inline-flex w-6 h-6 items-center justify-center rounded-full text-xs font-bold flex-shrink-0"
                        style={{ background: "#0B1F3A", color: "#C8960C", fontSize: "10px" }}
                      >
                        {i + 1}
                      </span>
                      <span
                        className="text-base font-semibold"
                        style={{ color: "#0B1F3A", fontFamily: '"DM Sans", sans-serif' }}
                      >
                        {doc.title}
                      </span>
                    </div>
                    <p
                      className="text-sm text-gray-400 leading-relaxed ml-8"
                      style={{ fontFamily: '"DM Sans", sans-serif' }}
                    >
                      {doc.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info + disclaimer */}
          <div className="flex flex-col gap-5 lg:pt-16">
            {/* Send documents info */}
            <div
              className="rounded-sm p-6"
              style={{ background: "#0B1F3A" }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-11 h-11 flex items-center justify-center rounded-sm flex-shrink-0"
                  style={{ background: "rgba(200,150,12,0.18)" }}
                >
                  <i className="ri-folder-check-line text-xl" style={{ color: "#C8960C" }}></i>
                </div>
                <div>
                  <div
                    className="text-base font-bold text-white mb-1"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                  >
                    Don't have all documents?
                  </div>
                  <p
                    className="text-sm text-white/55 leading-relaxed"
                    style={{ fontFamily: '"DM Sans", sans-serif' }}
                  >
                    Our team will guide you through any missing or incomplete documents as part of the free consultation.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line text-base" style={{ color: "#C8960C" }}></i>
                  </span>
                  <a
                    href="tel:+919000975046"
                    className="text-sm text-white/70 hover:text-white transition-colors cursor-pointer"
                    style={{ fontFamily: '"DM Sans", sans-serif' }}
                  >
                    +91 90009 75046
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-base" style={{ color: "#C8960C" }}></i>
                  </span>
                  <a
                    href="mailto:Casa.Approvals@gmail.com"
                    className="text-sm text-white/70 hover:text-white transition-colors cursor-pointer"
                    style={{ fontFamily: '"DM Sans", sans-serif' }}
                  >
                    Casa.Approvals@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Additional docs note */}
            <div
              className="rounded-sm p-5 flex items-start gap-3"
              style={{ background: "#FDF3DC", border: "1px solid rgba(200,150,12,0.25)" }}
            >
              <span className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                <i className="ri-information-line text-base" style={{ color: "#C8960C" }}></i>
              </span>
              <p
                className="text-sm text-gray-600 leading-relaxed"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                Additional documents may be required based on plot size, zone classification, or type of construction. Our team will provide a complete checklist after reviewing your property details.
              </p>
            </div>

            {/* Disclaimer */}
            <div
              className="rounded-sm p-5 flex items-start gap-3"
              style={{ background: "rgba(200,150,12,0.06)", border: "1px solid rgba(200,150,12,0.2)" }}
            >
              <span className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                <i className="ri-shield-line text-base" style={{ color: "#C8960C" }}></i>
              </span>
              <p
                className="text-sm text-gray-500 leading-relaxed"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                <strong style={{ color: "#0B1F3A" }}>Disclaimer:</strong> Casa Associates is a private consultancy. We are <strong>not affiliated with GHMC, HMDA, or any government department</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
