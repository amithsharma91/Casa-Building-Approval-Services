import { useEffect } from "react";
import SiteNavbar from "../../components/feature/SiteNavbar";
import SiteFooter from "../../components/feature/SiteFooter";
import FloatingWhatsApp from "../../components/feature/FloatingWhatsApp";
import { useJsonLd } from "../../hooks/useJsonLd";

const documents = [
  {
    num: "01",
    title: "Sale Deed / Title Deed",
    desc: "Original registered sale deed confirming ownership of the property. Must be current and in the applicant&apos;s name.",
    icon: "ri-file-text-line",
  },
  {
    num: "02",
    title: "Property Tax Receipt",
    desc: "Latest property tax payment receipt from GHMC/HMDA for the concerned plot or property.",
    icon: "ri-receipt-line",
  },
  {
    num: "03",
    title: "Encumbrance Certificate (EC)",
    desc: "EC obtained from the Sub-Registrar&apos;s office showing the property is free of any encumbrances, loans, or legal disputes.",
    icon: "ri-file-shield-2-line",
  },
  {
    num: "04",
    title: "Link Documents",
    desc: "All previous transaction documents and chain of title deeds linking ownership history of the property.",
    icon: "ri-links-line",
  },
  {
    num: "05",
    title: "Aadhaar Card",
    desc: "Valid Aadhaar card of the property owner/applicant for identity verification.",
    icon: "ri-id-card-line",
  },
  {
    num: "06",
    title: "Plot Layout Copy",
    desc: "Approved plot layout plan showing boundaries, dimensions, and survey numbers as per revenue records.",
    icon: "ri-layout-2-line",
  },
  {
    num: "07",
    title: "Architect Building Plan",
    desc: "Certified building plan drawn and signed by a licensed architect conforming to GHMC/HMDA building regulations.",
    icon: "ri-ruler-2-line",
  },
];

export default function DocumentsPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://buildingapprovalservices.com";

  useEffect(() => {
    document.title =
      "Documents for Building Approval Services Hyderabad | GHMC Permission Checklist | Casa Associates";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc)
      metaDesc.setAttribute(
        "content",
        "Complete document checklist for building approval services in Hyderabad — GHMC building permission, HMDA layout approval & TG-BPASS. Sale deed, EC, architect plan, property tax receipt & more. Casa Associates guides you."
      );
    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) canonical.setAttribute("href", `${siteUrl}/documents`);
    window.scrollTo(0, 0);
  }, [siteUrl]);

  useJsonLd(
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": `${siteUrl}/documents#webpage`,
          url: `${siteUrl}/documents`,
          name: "Documents for GHMC Building Permission Hyderabad | Complete Checklist",
          description:
            "Complete document checklist for GHMC building permission and HMDA layout approval in Hyderabad managed by Casa Associates.",
          inLanguage: "en-IN",
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
              { "@type": "ListItem", position: 2, name: "Documents", item: `${siteUrl}/documents` },
            ],
          },
        },
        {
          "@type": "ItemList",
          "@id": `${siteUrl}/documents#checklist`,
          name: "Documents Required for GHMC Building Permission Hyderabad",
          description: "Complete checklist of documents needed for GHMC building permission and TG-BPASS / BuildNow approval in Hyderabad.",
          numberOfItems: 7,
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Sale Deed / Title Deed" },
            { "@type": "ListItem", position: 2, name: "Property Tax Receipt" },
            { "@type": "ListItem", position: 3, name: "Encumbrance Certificate (EC)" },
            { "@type": "ListItem", position: 4, name: "Link Documents" },
            { "@type": "ListItem", position: 5, name: "Aadhaar Card" },
            { "@type": "ListItem", position: 6, name: "Plot Layout Copy" },
            { "@type": "ListItem", position: 7, name: "Architect Building Plan" },
          ],
        },
      ],
    },
    "documents-jsonld"
  );

  return (
    <div style={{ fontFamily: '"DM Sans", sans-serif' }}>
      <SiteNavbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden" style={{ background: "#0B1F3A" }}>
        <div className="absolute top-0 left-0 h-full w-1" style={{ background: "linear-gradient(to bottom, transparent, #C8960C 30%, #C8960C 70%, transparent)" }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-sm" style={{ background: "rgba(200,150,12,0.15)", border: "1px solid rgba(200,150,12,0.4)" }}>
            <span className="w-4 h-4 flex items-center justify-center"><i className="ri-file-list-3-line text-sm" style={{ color: "#C8960C" }}></i></span>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C8960C", letterSpacing: "0.12em" }}>Document Checklist</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
            Documents Required for <span style={{ color: "#C8960C" }}>Building Permission</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-loose">
            A complete checklist for GHMC building permission and TG-BPASS / BuildNow approval in Hyderabad. Our team guides you if any documents are missing.
          </p>
          <a
            href="https://wa.me/919008710698"
            target="_blank"
            rel="nofollow noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-semibold text-base rounded-sm transition-all cursor-pointer whitespace-nowrap"
          >
            <span className="w-5 h-5 flex items-center justify-center"><i className="ri-whatsapp-line text-lg"></i></span>
            Send Documents on WhatsApp
          </a>
        </div>
      </section>

      {/* Document List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: '"Playfair Display", serif', color: "#0B1F3A" }}>
              Complete Document Checklist
            </h2>
            <p className="text-base text-gray-500 max-w-xl mx-auto">
              Prepare these documents before applying for GHMC building permission or HMDA layout approval in Hyderabad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {documents.map((doc) => (
              <div
                key={doc.num}
                className="flex gap-5 p-7 rounded-sm transition-all duration-300 hover:-translate-y-0.5 cursor-default"
                style={{ border: "1px solid rgba(11,31,58,0.08)", background: "#F8F9FC" }}
              >
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div
                    className="w-11 h-11 flex items-center justify-center rounded-full text-sm font-bold"
                    style={{ background: "#0B1F3A", color: "#C8960C", fontFamily: '"Playfair Display", serif' }}
                  >
                    {doc.num}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 flex items-center justify-center rounded-sm" style={{ background: "#FDF3DC" }}>
                      <i className={`${doc.icon} text-sm`} style={{ color: "#C8960C" }}></i>
                    </div>
                    <h3 className="text-base font-bold" style={{ fontFamily: '"Playfair Display", serif', color: "#0B1F3A" }}>{doc.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed pl-11">{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="p-6 rounded-sm mb-10" style={{ background: "#FDF3DC", border: "1px solid rgba(200,150,12,0.3)" }}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-sm flex-shrink-0" style={{ background: "rgba(200,150,12,0.2)" }}>
                <i className="ri-information-line text-lg" style={{ color: "#C8960C" }}></i>
              </div>
              <div>
                <h4 className="text-base font-bold mb-2" style={{ color: "#9e7509", fontFamily: '"Playfair Display", serif' }}>Don&apos;t Have All Documents?</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our team will guide you if any documents are missing or need correction. We assist in obtaining missing documents and correcting discrepancies before submission to GHMC/HMDA.
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA Box */}
          <div className="p-10 rounded-sm text-center" style={{ background: "#0B1F3A" }}>
            <div className="w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-5 bg-green-500">
              <i className="ri-whatsapp-line text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: '"Playfair Display", serif' }}>
              Send Your Documents on WhatsApp for Review
            </h3>
            <p className="text-base text-white/60 mb-8 max-w-md mx-auto">
              Share your property documents on WhatsApp and our experts will review them and guide you through the GHMC approval process.
            </p>
            <a
              href="https://wa.me/919008710698"
              target="_blank"
              rel="nofollow noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-semibold text-base rounded-sm transition-all cursor-pointer whitespace-nowrap"
            >
              <span className="w-5 h-5 flex items-center justify-center"><i className="ri-whatsapp-line text-lg"></i></span>
              Send Documents on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10" style={{ background: "#F8F9FC" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-400">
            <strong className="text-gray-500">Disclaimer:</strong> We are a private consultancy, not affiliated with GHMC, HMDA, or any government body.
            All services are provided independently to assist clients through the official approval process.
          </p>
        </div>
      </section>

      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
