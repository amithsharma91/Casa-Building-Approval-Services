import { useState, useEffect } from "react";
import SiteNavbar from "../../components/feature/SiteNavbar";
import SiteFooter from "../../components/feature/SiteFooter";
import FloatingWhatsApp from "../../components/feature/FloatingWhatsApp";
import { useJsonLd } from "../../hooks/useJsonLd";

const faqs = [
  {
    q: "What is TG-BPASS?",
    a: "TG-BPASS stands for Telangana State Building Permission Approval and Self-Certification System. It is an online platform launched by the Government of Telangana to streamline and simplify building permission approvals across GHMC, HMDA, and all municipal corporations in the state. It allows applicants to submit plans digitally and receive approvals faster.",
  },
  {
    q: "How long does GHMC building approval take?",
    a: "Typically, GHMC building permission takes between 30 to 90 days depending on the plot size, type of construction, and completeness of documents. With the TG-BPASS system and Casa Associates handling your case, timelines are significantly reduced. We ensure your application is complete and error-free to avoid delays.",
  },
  {
    q: "What documents are required for building permission?",
    a: "The key documents required are: Sale Deed / Title Deed, Property Tax Receipt, Encumbrance Certificate (EC), Link Documents, Aadhaar Card, Plot Layout Copy, and an Architect-certified Building Plan. Casa Associates will verify your documents and guide you if anything is missing or needs correction.",
  },
  {
    q: "Can I apply for GHMC building permission without an agent?",
    a: "Yes, you can apply directly through the TG-BPASS portal. However, the process involves complex document verification, technical scrutiny, plan compliance checks, and follow-ups with GHMC officers. A professional consultant like Casa Associates significantly reduces the risk of rejection and speeds up the approval timeline.",
  },
  {
    q: "What is TDR (Transfer of Development Rights)?",
    a: "TDR is a scheme by GHMC/HMDA to compensate landowners whose property is affected by road widening or public projects. In exchange for surrendering land, the owner receives TDR certificates which can be used to construct additional floors (beyond normal limits) on another eligible property. Casa Associates handles both obtaining and claiming TDR certificates.",
  },
  {
    q: "How to check if my property is under road widening?",
    a: "You can check road widening status through the GHMC Master Plan or the Telangana State Planning Authority website. Casa Associates provides a professional Road Widening & Master Plan Check service — we verify your plot against current and proposed road alignments, master plan zoning, and development regulations to ensure your building plan is compliant.",
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://buildingapprovalservices.com";

  useEffect(() => {
    document.title =
      "FAQ \u2013 Building Approval Services Hyderabad | GHMC Permission & TG-BPASS | Casa Associates";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc)
      metaDesc.setAttribute(
        "content",
        "Frequently asked questions about building approval services in Hyderabad — GHMC building permission, TG-BPASS / BuildNow approval & HMDA layout permission. Expert answers from Casa Associates. 500+ approvals, 98% success rate."
      );
    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) canonical.setAttribute("href", `${siteUrl}/faq`);
    window.scrollTo(0, 0);
  }, [siteUrl]);

  useJsonLd(
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": `${siteUrl}/faq#webpage`,
          url: `${siteUrl}/faq`,
          name: "FAQ – GHMC Building Permission & TG-BPASS Hyderabad | Casa Associates",
          description:
            "Frequently asked questions about GHMC building permission, TG-BPASS / BuildNow approval, and HMDA layout permission in Hyderabad.",
          inLanguage: "en-IN",
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
              { "@type": "ListItem", position: 2, name: "FAQ", item: `${siteUrl}/faq` },
            ],
          },
        },
        {
          "@type": "FAQPage",
          "@id": `${siteUrl}/faq#faqpage`,
          mainEntity: [
            {
              "@type": "Question",
              name: "What is TG-BPASS?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "TG-BPASS stands for Telangana State Building Permission Approval and Self-Certification System. It is an online platform launched by the Government of Telangana to streamline and simplify building permission approvals across GHMC, HMDA, and all municipal corporations in the state.",
              },
            },
            {
              "@type": "Question",
              name: "How long does GHMC building approval take?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Typically, GHMC building permission takes between 30 to 90 days depending on the plot size, type of construction, and completeness of documents. With the TG-BPASS system and Casa Associates handling your case, timelines are significantly reduced.",
              },
            },
            {
              "@type": "Question",
              name: "What documents are required for building permission?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The key documents required are: Sale Deed / Title Deed, Property Tax Receipt, Encumbrance Certificate (EC), Link Documents, Aadhaar Card, Plot Layout Copy, and an Architect-certified Building Plan.",
              },
            },
            {
              "@type": "Question",
              name: "Can I apply for GHMC building permission without an agent?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, you can apply directly through the TG-BPASS portal. However, the process involves complex document verification, technical scrutiny, plan compliance checks, and follow-ups with GHMC officers. A professional consultant like Casa Associates significantly reduces the risk of rejection and speeds up the approval timeline.",
              },
            },
            {
              "@type": "Question",
              name: "What is TDR (Transfer of Development Rights)?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "TDR is a scheme by GHMC/HMDA to compensate landowners whose property is affected by road widening or public projects. In exchange for surrendering land, the owner receives TDR certificates which can be used to construct additional floors beyond normal limits or sold to other developers.",
              },
            },
            {
              "@type": "Question",
              name: "How to check if my property is under road widening?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You can check road widening status through the GHMC Master Plan or the Telangana State Planning Authority website. Casa Associates provides a professional Road Widening and Master Plan Check service — we verify your plot against current and proposed road alignments, master plan zoning, and development regulations.",
              },
            },
          ],
        },
      ],
    },
    "faq-jsonld"
  );

  return (
    <div style={{ fontFamily: '"DM Sans", sans-serif' }}>
      <SiteNavbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden" style={{ background: "#0B1F3A" }}>
        <div className="absolute top-0 left-0 h-full w-1" style={{ background: "linear-gradient(to bottom, transparent, #C8960C 30%, #C8960C 70%, transparent)" }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-sm" style={{ background: "rgba(200,150,12,0.15)", border: "1px solid rgba(200,150,12,0.4)" }}>
            <span className="w-4 h-4 flex items-center justify-center"><i className="ri-question-answer-line text-sm" style={{ color: "#C8960C" }}></i></span>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C8960C", letterSpacing: "0.12em" }}>Got Questions?</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
            Frequently Asked <span style={{ color: "#C8960C" }}>Questions</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-loose">
            Everything you need to know about GHMC building permissions, TG-BPASS / BuildNow approvals, and HMDA layout applications in Hyderabad.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: '"Playfair Display", serif', color: "#0B1F3A" }}>
              Common Questions About Building Permissions
            </h2>
            <p className="text-base text-gray-500">Clear answers to your most common questions about GHMC approvals and TG-BPASS in Hyderabad.</p>
          </div>

          <div className="flex flex-col gap-4" itemScope itemType="https://schema.org/FAQPage">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-sm overflow-hidden transition-all duration-300"
                style={{ border: `1px solid ${open === i ? "rgba(200,150,12,0.5)" : "rgba(11,31,58,0.1)"}` }}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left cursor-pointer transition-colors"
                  style={{ background: open === i ? "#0B1F3A" : "white", minHeight: "70px" }}
                  aria-expanded={open === i}
                >
                  <span
                    className="text-base font-semibold leading-snug"
                    style={{ fontFamily: '"Playfair Display", serif', color: open === i ? "white" : "#0B1F3A" }}
                    itemProp="name"
                  >
                    {faq.q}
                  </span>
                  <span
                    className="w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0 transition-transform duration-300"
                    style={{
                      background: open === i ? "rgba(200,150,12,0.2)" : "#F8F9FC",
                      transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <i className="ri-add-line text-base" style={{ color: "#C8960C" }}></i>
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: open === i ? "400px" : "0" }}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div className="px-7 py-6" style={{ borderTop: "1px solid rgba(200,150,12,0.2)" }} itemProp="text">
                    <p className="text-base text-gray-600 leading-loose">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "#0B1F3A" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6 bg-green-500">
            <i className="ri-whatsapp-line text-white text-2xl"></i>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
            Still Have Questions?
          </h2>
          <p className="text-base text-white/60 mb-8">
            Contact us on WhatsApp for free, personalized guidance on your GHMC building permission or TG-BPASS / BuildNow approval in Hyderabad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919008710698"
              target="_blank"
              rel="nofollow noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-semibold text-base rounded-sm transition-all cursor-pointer whitespace-nowrap"
            >
              <span className="w-5 h-5 flex items-center justify-center"><i className="ri-whatsapp-line text-lg"></i></span>
              Contact Us on WhatsApp
            </a>
            <a
              href="tel:+919008710698"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold text-base rounded-sm transition-all cursor-pointer whitespace-nowrap hover:bg-white/10"
              style={{ border: "1px solid rgba(200,150,12,0.5)", color: "#C8960C" }}
            >
              <span className="w-5 h-5 flex items-center justify-center"><i className="ri-phone-line text-lg"></i></span>
              Call +91 90087 10698
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
