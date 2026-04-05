import { useEffect } from "react";
import SiteNavbar from "../../components/feature/SiteNavbar";
import SiteFooter from "../../components/feature/SiteFooter";
import FloatingWhatsApp from "../../components/feature/FloatingWhatsApp";
import { useJsonLd } from "../../hooks/useJsonLd";

const WA_LINK = "https://wa.me/919000975046?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.%0A%0AFull%20Name%3A%20%0APhone%20Number%3A%20%0AEmail%20Address%3A%20%0AService%20Required%3A%20%0AMessage%3A%20";

export default function ContactPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://buildingapprovalservices.com";

  useEffect(() => {
    document.title =
      "Contact Us | Building Approval Services Hyderabad | Free Consultation | Casa Associates";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc)
      metaDesc.setAttribute(
        "content",
        "Contact Casa Associates for building approval services in Hyderabad — GHMC building permission, TG-BPASS / BuildNow approvals & HMDA layout permission. Call +91 90009 75046 or WhatsApp for free consultation."
      );
    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) canonical.setAttribute("href", `${siteUrl}/contact`);
    window.scrollTo(0, 0);
  }, [siteUrl]);

  useJsonLd(
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ContactPage",
          "@id": `${siteUrl}/contact#webpage`,
          url: `${siteUrl}/contact`,
          name: "Contact Casa Associates | Building Approval Services Hyderabad",
          description:
            "Contact Casa Associates for GHMC building permission and TG-BPASS / BuildNow approval services in Hyderabad. Free consultation available.",
          inLanguage: "en-IN",
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
              { "@type": "ListItem", position: 2, name: "Contact", item: `${siteUrl}/contact` },
            ],
          },
        },
        {
          "@type": "LocalBusiness",
          "@id": `${siteUrl}/#localbusiness`,
          name: "Casa Associates",
          telephone: "+91-9000975046",
          email: "Casa.Approvals@gmail.com",
          url: `${siteUrl}/`,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Road No. 01, Avenue 07, 4th Floor, Bhooma Plaza, Street 04, near GVK One Mall",
            addressLocality: "Banjara Hills, Hyderabad",
            addressRegion: "Telangana",
            postalCode: "500034",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "17.4123487",
            longitude: "78.2432304",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "09:00",
              closes: "19:00",
            },
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-9000975046",
            contactType: "customer service",
            availableLanguage: ["English", "Telugu", "Hindi"],
            contactOption: "TollFree",
          },
        },
      ],
    },
    "contact-jsonld"
  );

  return (
    <div style={{ fontFamily: '"DM Sans", sans-serif' }}>
      <SiteNavbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden" style={{ background: "#0B1F3A" }}>
        <div className="absolute top-0 left-0 h-full w-1" style={{ background: "linear-gradient(to bottom, transparent, #C8960C 30%, #C8960C 70%, transparent)" }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-sm" style={{ background: "rgba(200,150,12,0.15)", border: "1px solid rgba(200,150,12,0.4)" }}>
            <span className="w-4 h-4 flex items-center justify-center"><i className="ri-customer-service-2-line text-sm" style={{ color: "#C8960C" }}></i></span>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C8960C", letterSpacing: "0.12em" }}>We&apos;re Here to Help</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
            Get in <span style={{ color: "#C8960C" }}>Touch</span>
          </h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto leading-loose">
            Reach out for free guidance on GHMC building permissions, TG-BPASS / BuildNow approvals, and HMDA layout permissions in Hyderabad.
          </p>
        </div>
      </section>

      {/* WhatsApp Quick CTA */}
      <section className="py-10" style={{ background: "#F8F9FC", borderBottom: "1px solid rgba(11,31,58,0.08)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-7 rounded-sm" style={{ background: "white", border: "1px solid rgba(200,150,12,0.25)" }}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 flex-shrink-0">
                <i className="ri-whatsapp-line text-white text-xl"></i>
              </div>
              <div>
                <div className="text-base font-bold" style={{ color: "#0B1F3A", fontFamily: '"Playfair Display", serif' }}>Quick Response on WhatsApp</div>
                <div className="text-sm text-gray-500">Send your property documents for instant expert guidance</div>
              </div>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="nofollow noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 bg-green-500 hover:bg-green-400 text-white font-semibold text-sm rounded-sm transition-all cursor-pointer whitespace-nowrap flex-shrink-0"
            >
              <span className="w-4 h-4 flex items-center justify-center"><i className="ri-whatsapp-line text-sm"></i></span>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Contact + Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-14">
            {/* WhatsApp CTA Panel (replaces form) */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: '"Playfair Display", serif', color: "#0B1F3A" }}>
                  Contact Us on WhatsApp
                </h2>
                <p className="text-base text-gray-500">Fill your details in WhatsApp and our team will assist you quickly.</p>
              </div>

              <div className="rounded-sm overflow-hidden" style={{ border: "1px solid rgba(11,31,58,0.1)" }}>
                {/* How it works */}
                <div className="p-8" style={{ background: "#F8F9FC" }}>
                  <h3 className="text-lg font-bold mb-6" style={{ fontFamily: '"Playfair Display", serif', color: "#0B1F3A" }}>How it works</h3>
                  <div className="flex flex-col gap-5">
                    {[
                      { num: "1", text: "Click the button below to open WhatsApp", icon: "ri-whatsapp-line" },
                      { num: "2", text: "Fill in your name, phone, email, and service required in the pre-filled message", icon: "ri-edit-line" },
                      { num: "3", text: "Hit send — our team will reply promptly with free expert guidance", icon: "ri-reply-line" },
                    ].map((step) => (
                      <div key={step.num} className="flex items-start gap-4">
                        <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-full font-bold text-sm" style={{ background: "#0B1F3A", color: "#C8960C" }}>{step.num}</div>
                        <div className="flex items-center gap-3 pt-1.5">
                          <span className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                            <i className={`${step.icon} text-base`} style={{ color: "#C8960C" }}></i>
                          </span>
                          <span className="text-base text-gray-600" style={{ fontFamily: '"DM Sans", sans-serif' }}>{step.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA button block */}
                <div className="p-8" style={{ background: "#0B1F3A" }}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500/20 flex-shrink-0">
                      <i className="ri-whatsapp-line text-3xl text-green-400"></i>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white" style={{ fontFamily: '"Playfair Display", serif' }}>Send Details on WhatsApp</div>
                      <div className="text-sm text-white/55 mt-0.5">Free consultation — no upfront charges</div>
                    </div>
                  </div>
                  <p className="text-sm text-white/60 mb-7 leading-loose" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                    Fill your details in WhatsApp and our team will assist you quickly. A pre-filled template will open — just add your details and send.
                  </p>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="nofollow noreferrer"
                    className="w-full flex items-center justify-center gap-3 py-5 bg-green-500 hover:bg-green-400 rounded-sm text-white font-bold text-lg cursor-pointer transition-all whitespace-nowrap"
                    style={{ fontFamily: '"DM Sans", sans-serif' }}
                  >
                    <span className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-whatsapp-line text-2xl"></i>
                    </span>
                    Send Details on WhatsApp
                  </a>
                  <p className="text-xs text-white/35 text-center mt-4">
                    Opens WhatsApp with a pre-filled template ready to send
                  </p>
                </div>

                {/* Also reachable by */}
                <div className="p-6 flex flex-col sm:flex-row items-center gap-4" style={{ background: "#FDF3DC", borderTop: "1px solid rgba(200,150,12,0.2)" }}>
                  <div className="flex-1 text-sm text-gray-600 leading-relaxed">
                    <strong style={{ color: "#0B1F3A" }}>Also reachable by phone or email</strong>
                    <br />
                    <a href="tel:+919000975046" className="text-sm font-semibold hover:underline cursor-pointer" style={{ color: "#9e7509" }}>+91 90009 75046</a>
                    &nbsp;&nbsp;·&nbsp;&nbsp;
                    <a href="mailto:Casa.Approvals@gmail.com" className="text-sm font-semibold hover:underline cursor-pointer" style={{ color: "#9e7509" }}>Casa.Approvals@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", serif', color: "#0B1F3A" }}>Contact Details</h2>
              </div>
              {[
                { icon: "ri-phone-line", label: "Phone / Call", value: "+91 90009 75046", href: "tel:+919000975046" },
                { icon: "ri-mail-line", label: "Email", value: "Casa.Approvals@gmail.com", href: "mailto:Casa.Approvals@gmail.com" },
                { icon: "ri-map-pin-line", label: "Location", value: "Road No. 01, Avenue 07, 4th Floor, Bhooma Plaza, Street 04, near GVK One Mall, Banjara Hills, Hyderabad, Telangana 500034", href: null },
                { icon: "ri-time-line", label: "Working Hours", value: "Mon–Sat: 9 AM – 7 PM", href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-5 rounded-sm" style={{ background: "#F8F9FC", border: "1px solid rgba(11,31,58,0.08)" }}>
                  <div className="w-10 h-10 flex items-center justify-center rounded-sm flex-shrink-0" style={{ background: "#FDF3DC" }}>
                    <i className={`${item.icon} text-lg`} style={{ color: "#C8960C" }}></i>
                  </div>
                  <div>
                    <div className="text-xs font-semibold tracking-wider uppercase text-gray-400 mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-semibold cursor-pointer hover:underline" style={{ color: "#0B1F3A" }}>{item.value}</a>
                    ) : (
                      <div className="text-sm font-semibold leading-relaxed" style={{ color: "#0B1F3A" }}>{item.value}</div>
                    )}
                  </div>
                </div>
              ))}

              <a
                href={WA_LINK}
                target="_blank"
                rel="nofollow noreferrer"
                className="flex items-center justify-center gap-3 py-4 bg-green-500 hover:bg-green-400 text-white font-semibold text-base rounded-sm transition-all cursor-pointer whitespace-nowrap"
              >
                <span className="w-5 h-5 flex items-center justify-center"><i className="ri-whatsapp-line text-lg"></i></span>
                Chat on WhatsApp Now
              </a>

              <div className="p-5 rounded-sm" style={{ background: "#FDF3DC", border: "1px solid rgba(200,150,12,0.3)" }}>
                <p className="text-xs text-gray-600 leading-relaxed">
                  <strong style={{ color: "#9e7509" }}>Disclaimer:</strong> We are a private consultancy and not affiliated with GHMC, HMDA, or any government body. All services are provided independently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="bg-white pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <h2 className="text-2xl font-bold" style={{ fontFamily: '"Playfair Display", serif', color: "#0B1F3A" }}>Our Location</h2>
            <a
              href="https://maps.app.goo.gl/Xgnzpcu3WbQ3maij7"
              target="_blank"
              rel="nofollow noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-sm text-sm font-semibold transition-all cursor-pointer whitespace-nowrap hover:opacity-90"
              style={{ background: "#0B1F3A", color: "white", fontFamily: '"DM Sans", sans-serif' }}
            >
              <span className="w-4 h-4 flex items-center justify-center">
                <i className="ri-navigation-line text-sm" style={{ color: "#C8960C" }}></i>
              </span>
              Get Directions
            </a>
          </div>
          <div className="rounded-sm overflow-hidden" style={{ height: "420px", border: "1px solid rgba(11,31,58,0.1)" }}>
            <iframe
              title="Casa Associates Location - CCCX+85 Hyderabad Telangana"
              src="https://maps.google.com/maps?q=CCCX%2B85+Hyderabad,+Telangana&t=m&z=17&ie=UTF8&iwloc=near&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
