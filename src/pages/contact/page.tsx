import { useEffect, useState, FormEvent } from "react";
import SiteNavbar from "../../components/feature/SiteNavbar";
import SiteFooter from "../../components/feature/SiteFooter";
import FloatingWhatsApp from "../../components/feature/FloatingWhatsApp";
import { useJsonLd } from "../../hooks/useJsonLd";
import { useGtagConversion } from "../../hooks/useGtagConversion";

const WA_NUMBER = "919000975046";
const WA_LINK = `https://wa.me/${WA_NUMBER}`;

const SERVICE_OPTIONS = [
  "Residential Architecture",
  "Interior Design",
  "Renovation",
  "Convention Hall",
  "Commercial",
  "Consultation Only",
];

const BUDGET_OPTIONS = [
  "Below 25 Lakhs",
  "25 Lakhs to 50 Lakhs",
  "50 Lakhs to 1 Crore",
  "1 Crore to 3 Crores",
  "3 Crores to 5 Crores",
  "Above 5 Crores",
  "Prefer to Discuss",
];

export default function ContactPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://buildingapprovalservices.com";
  const { trackConversion } = useGtagConversion();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    location: "",
    budget: "",
    brief: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleWhatsAppEnquiry = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    const { name, phone, email, service, location, budget, brief } = formData;

    // Build WhatsApp message
    const message = `Hello Casa Associates!\n\nI am interested in building approval services.\n\nHere are my details:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\nLocation: ${location}\nBudget: ${budget}\n\nProject Brief:\n${brief}\n\nI found you through your website.`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `${WA_LINK}?text=${encodedMessage}`;

    // Fire Google Ads conversion
    trackConversion(WA_LINK);

    // Also submit to form backend (background)
    setSubmitting(true);
    try {
      const body = new URLSearchParams({
        name,
        phone,
        email,
        service,
        location,
        budget,
        brief,
      });
      await fetch("https://readdy.ai/api/form/d7hnetmhdlg6dog9d300", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
    } catch {
      // silent — WA still opens
    }

    setSubmitted(true);
    setSubmitting(false);

    // Open WhatsApp in new tab
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

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
              onClick={() => trackConversion(WA_LINK)}
              className="flex items-center gap-2 px-7 py-3.5 bg-green-500 hover:bg-green-400 text-white font-semibold text-sm rounded-sm transition-all cursor-pointer whitespace-nowrap flex-shrink-0"
            >
              <span className="w-4 h-4 flex items-center justify-center"><i className="ri-whatsapp-line text-sm"></i></span>
              Use Enquiry Form Below
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Contact + Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-14">
            {/* WhatsApp Enquiry Form */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: '"Playfair Display", serif', color: "#0B1F3A" }}>
                  WhatsApp Enquiry Form
                </h2>
                <p className="text-base text-gray-500">Fill in your details and we&apos;ll connect with you on WhatsApp instantly.</p>
              </div>

              <div className="rounded-sm overflow-hidden" style={{ border: "1px solid rgba(11,31,58,0.1)" }}>
                {/* Form header */}
                <div className="px-8 py-5 flex items-center gap-3" style={{ background: "#0B1F3A" }}>
                  <span className="w-8 h-8 flex items-center justify-center">
                    <i className="ri-whatsapp-line text-2xl text-green-400"></i>
                  </span>
                  <span className="text-base font-semibold text-white" style={{ fontFamily: '"Playfair Display", serif' }}>
                    Send Enquiry on WhatsApp
                  </span>
                  <span className="ml-auto text-xs text-white/40">Free · No upfront charges</span>
                </div>

                {submitted ? (
                  <div className="p-10 flex flex-col items-center justify-center gap-4 text-center" style={{ background: "#F8F9FC" }}>
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100">
                      <i className="ri-whatsapp-line text-4xl text-green-500"></i>
                    </div>
                    <h3 className="text-xl font-bold" style={{ fontFamily: '"Playfair Display", serif', color: "#0B1F3A" }}>
                      WhatsApp Opened!
                    </h3>
                    <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
                      Your enquiry has been prepared. Just hit <strong>Send</strong> in WhatsApp and our team will respond within 2 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 px-6 py-2.5 text-sm font-semibold rounded-sm cursor-pointer transition-all hover:opacity-80"
                      style={{ background: "#0B1F3A", color: "#C8960C" }}
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form
                    data-readdy-form
                    id="whatsapp-enquiry-form"
                    onSubmit={handleWhatsAppEnquiry}
                    className="p-8 flex flex-col gap-5"
                    style={{ background: "#F8F9FC" }}
                  >
                    {/* Row 1: Name + Phone */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold tracking-wider uppercase" style={{ color: "#0B1F3A" }}>
                          Full Name <span style={{ color: "#C8960C" }}>*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 text-sm rounded-sm outline-none transition-all"
                          style={{
                            background: "white",
                            border: "1px solid rgba(11,31,58,0.15)",
                            color: "#0B1F3A",
                            fontFamily: '"DM Sans", sans-serif',
                          }}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold tracking-wider uppercase" style={{ color: "#0B1F3A" }}>
                          Phone Number <span style={{ color: "#C8960C" }}>*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                          className="w-full px-4 py-3 text-sm rounded-sm outline-none transition-all"
                          style={{
                            background: "white",
                            border: "1px solid rgba(11,31,58,0.15)",
                            color: "#0B1F3A",
                            fontFamily: '"DM Sans", sans-serif',
                          }}
                        />
                      </div>
                    </div>

                    {/* Row 2: Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold tracking-wider uppercase" style={{ color: "#0B1F3A" }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 text-sm rounded-sm outline-none transition-all"
                        style={{
                          background: "white",
                          border: "1px solid rgba(11,31,58,0.15)",
                          color: "#0B1F3A",
                          fontFamily: '"DM Sans", sans-serif',
                        }}
                      />
                    </div>

                    {/* Row 3: Service + Budget */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold tracking-wider uppercase" style={{ color: "#0B1F3A" }}>
                          Service Required <span style={{ color: "#C8960C" }}>*</span>
                        </label>
                        <select
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm rounded-sm outline-none transition-all cursor-pointer appearance-none"
                          style={{
                            background: "white",
                            border: "1px solid rgba(11,31,58,0.15)",
                            color: formData.service ? "#0B1F3A" : "#9ca3af",
                            fontFamily: '"DM Sans", sans-serif',
                          }}
                        >
                          <option value="" disabled>Select a service</option>
                          {SERVICE_OPTIONS.map((opt) => (
                            <option key={opt} value={opt} style={{ color: "#0B1F3A" }}>{opt}</option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold tracking-wider uppercase" style={{ color: "#0B1F3A" }}>
                          Budget Range <span style={{ color: "#C8960C" }}>*</span>
                        </label>
                        <select
                          name="budget"
                          required
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm rounded-sm outline-none transition-all cursor-pointer appearance-none"
                          style={{
                            background: "white",
                            border: "1px solid rgba(11,31,58,0.15)",
                            color: formData.budget ? "#0B1F3A" : "#9ca3af",
                            fontFamily: '"DM Sans", sans-serif',
                          }}
                        >
                          <option value="" disabled>Select budget range</option>
                          {BUDGET_OPTIONS.map((opt) => (
                            <option key={opt} value={opt} style={{ color: "#0B1F3A" }}>{opt}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Project Location */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold tracking-wider uppercase" style={{ color: "#0B1F3A" }}>
                        Project Location <span style={{ color: "#C8960C" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Area and city"
                        className="w-full px-4 py-3 text-sm rounded-sm outline-none transition-all"
                        style={{
                          background: "white",
                          border: "1px solid rgba(11,31,58,0.15)",
                          color: "#0B1F3A",
                          fontFamily: '"DM Sans", sans-serif',
                        }}
                      />
                    </div>

                    {/* Row 5: Project Brief */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold tracking-wider uppercase" style={{ color: "#0B1F3A" }}>
                        Project Brief
                      </label>
                      <textarea
                        name="brief"
                        value={formData.brief}
                        onChange={(e) => {
                          if (e.target.value.length <= 500) handleChange(e);
                        }}
                        placeholder="Tell us about your project"
                        rows={4}
                        maxLength={500}
                        className="w-full px-4 py-3 text-sm rounded-sm outline-none transition-all resize-none"
                        style={{
                          background: "white",
                          border: "1px solid rgba(11,31,58,0.15)",
                          color: "#0B1F3A",
                          fontFamily: '"DM Sans", sans-serif',
                        }}
                      />
                      <div className="text-right text-xs text-gray-400">{formData.brief.length}/500</div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={submitting || formData.brief.length > 500}
                      className="w-full flex items-center justify-center gap-3 py-4 text-white font-bold text-base rounded-sm transition-all cursor-pointer whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{
                        background: submitting ? "#1ebe57" : "#25D366",
                        fontFamily: '"DM Sans", sans-serif',
                      }}
                      onMouseEnter={(e) => { if (!submitting) (e.currentTarget as HTMLButtonElement).style.background = "#1ebe57"; }}
                      onMouseLeave={(e) => { if (!submitting) (e.currentTarget as HTMLButtonElement).style.background = "#25D366"; }}
                    >
                      <span className="w-6 h-6 flex items-center justify-center">
                        <i className="ri-whatsapp-line text-xl"></i>
                      </span>
                      {submitting ? "Opening WhatsApp..." : "Send Enquiry on WhatsApp"}
                    </button>

                    {/* Note below button */}
                    <p className="text-xs text-center text-gray-500 leading-relaxed -mt-1">
                      Your details will be sent directly to our WhatsApp. We respond within 2 hours.
                    </p>
                  </form>
                )}
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
                      <a
                        href={item.href}
                        onClick={item.href.startsWith("tel:") ? () => trackConversion() : undefined}
                        className="text-sm font-semibold cursor-pointer hover:underline"
                        style={{ color: "#0B1F3A" }}
                      >
                        {item.value}
                      </a>
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
                onClick={() => trackConversion(WA_LINK)}
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
