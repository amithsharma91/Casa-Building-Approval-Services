import { useEffect } from "react";
import SiteNavbar from "../../components/feature/SiteNavbar";
import SiteFooter from "../../components/feature/SiteFooter";
import FloatingWhatsApp from "../../components/feature/FloatingWhatsApp";
import { useJsonLd } from "../../hooks/useJsonLd";

const steps = [
  {
    num: "01",
    title: "Verifying the Documents",
    desc: "Our experts thoroughly verify all your property documents — Sale Deed, EC, property tax receipts, and title documents — to ensure legal clarity before proceeding.",
    icon: "ri-file-search-line",
  },
  {
    num: "02",
    title: "Building Plan Drafting",
    desc: "A licensed architect prepares the building plan in full compliance with GHMC setback rules, FAR norms, and applicable building regulations.",
    icon: "ri-draft-line",
  },
  {
    num: "03",
    title: "Initial Fee Payment",
    desc: "The initial processing and drafting fees are collected before file preparation begins, ensuring a smooth and uninterrupted workflow.",
    icon: "ri-bank-card-line",
  },
  {
    num: "04",
    title: "BuildNow File Submission",
    desc: "The complete application is submitted through the BuildNow portal with all required documents, certifications, and architectural drawings.",
    icon: "ri-upload-cloud-2-line",
  },
  {
    num: "05",
    title: "Site Inspection",
    desc: "A GHMC inspector visits the site to verify plot dimensions, boundaries, and alignment with the submitted building plan.",
    icon: "ri-map-pin-user-line",
  },
  {
    num: "06",
    title: "File Scrutiny",
    desc: "GHMC officers scrutinize the building plan for compliance with regulations, setbacks, height restrictions, parking norms, and FAR calculations.",
    icon: "ri-search-eye-line",
  },
  {
    num: "07",
    title: "Fee Letter Issued",
    desc: "After scrutiny, the authorities issue an official fee letter detailing the applicable government charges and mortgage amounts to be paid.",
    icon: "ri-mail-send-line",
  },
  {
    num: "08",
    title: "Mortgage & Fee Payment",
    desc: "The mortgage amount and all government fees as per the fee letter are paid to the concerned authorities to proceed with final approval.",
    icon: "ri-secure-payment-line",
  },
  {
    num: "09",
    title: "Building Approval Issued",
    desc: "Upon successful completion of all steps, the Building Permission Order (BPO) is officially issued — your project is cleared to begin construction.",
    icon: "ri-award-line",
  },
];

export default function ProcessPage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://buildingapprovalservices.com";

  useEffect(() => {
    document.title =
      "Building Approval Process Hyderabad | GHMC Permission & TG-BPASS Steps | Casa Associates";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc)
      metaDesc.setAttribute(
        "content",
        "Step-by-step building approval services process in Hyderabad — GHMC building permission & TG-BPASS / BuildNow approval. Casa Associates handles all 7 steps from document checking to approval certificate issuance."
      );
    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) canonical.setAttribute("href", `${siteUrl}/process`);
    window.scrollTo(0, 0);
  }, [siteUrl]);

  useJsonLd(
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": `${siteUrl}/process#webpage`,
          url: `${siteUrl}/process`,
          name: "GHMC Building Permission Process Hyderabad | BuildNow Steps | Casa Associates",
          description:
            "Complete 9-step GHMC building permission and BuildNow approval process in Hyderabad managed by Casa Associates.",
          inLanguage: "en-IN",
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
              { "@type": "ListItem", position: 2, name: "Process", item: `${siteUrl}/process` },
            ],
          },
        },
        {
          "@type": "HowTo",
          "@id": `${siteUrl}/process#howto`,
          name: "GHMC Building Permission Approval Process in Hyderabad",
          description:
            "Complete step-by-step guide for obtaining GHMC building permission and BuildNow approval in Hyderabad, Telangana.",
          totalTime: "P90D",
          estimatedCost: { "@type": "MonetaryAmount", currency: "INR" },
          step: [
            {
              "@type": "HowToStep",
              position: 1,
              name: "Verifying the Documents",
              text: "Our experts thoroughly verify all your property documents — Sale Deed, EC, property tax receipts, and title documents — to ensure legal clarity before proceeding.",
            },
            {
              "@type": "HowToStep",
              position: 2,
              name: "Building Plan Drafting",
              text: "A licensed architect prepares the building plan in full compliance with GHMC setback rules, FAR norms, and applicable building regulations.",
            },
            {
              "@type": "HowToStep",
              position: 3,
              name: "Initial Fee Payment",
              text: "The initial processing and drafting fees are collected before file preparation begins, ensuring a smooth and uninterrupted workflow.",
            },
            {
              "@type": "HowToStep",
              position: 4,
              name: "BuildNow File Submission",
              text: "The complete application is submitted through the BuildNow portal with all required documents, certifications, and architectural drawings.",
            },
            {
              "@type": "HowToStep",
              position: 5,
              name: "Site Inspection",
              text: "A GHMC inspector visits the site to verify plot dimensions, boundaries, and alignment with the submitted building plan.",
            },
            {
              "@type": "HowToStep",
              position: 6,
              name: "File Scrutiny",
              text: "GHMC officers scrutinize the building plan for compliance with regulations, setbacks, height restrictions, parking norms, and FAR calculations.",
            },
            {
              "@type": "HowToStep",
              position: 7,
              name: "Fee Letter Issued",
              text: "After scrutiny, the authorities issue an official fee letter detailing the applicable government charges and mortgage amounts to be paid.",
            },
            {
              "@type": "HowToStep",
              position: 8,
              name: "Mortgage & Fee Payment",
              text: "The mortgage amount and all government fees as per the fee letter are paid to the concerned authorities to proceed with final approval.",
            },
            {
              "@type": "HowToStep",
              position: 9,
              name: "Building Approval Issued",
              text: "Upon successful completion of all steps, the Building Permission Order (BPO) is officially issued — your project is cleared to begin construction.",
            },
          ],
        },
      ],
    },
    "process-jsonld"
  );

  return (
    <div style={{ fontFamily: '"DM Sans", sans-serif' }}>
      <SiteNavbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden" style={{ background: "#0B1F3A" }}>
        <div className="absolute top-0 left-0 h-full w-1" style={{ background: "linear-gradient(to bottom, transparent, #C8960C 30%, #C8960C 70%, transparent)" }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-sm" style={{ background: "rgba(200,150,12,0.15)", border: "1px solid rgba(200,150,12,0.4)" }}>
            <span className="w-4 h-4 flex items-center justify-center"><i className="ri-route-line text-sm" style={{ color: "#C8960C" }}></i></span>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C8960C", letterSpacing: "0.12em" }}>9 Simple Steps</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
            GHMC Building <span style={{ color: "#C8960C" }}>Approval Process</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-loose">
            Step-by-step guidance for BuildNow and HMDA approvals in Hyderabad. Casa Associates handles the entire process from start to finish.
          </p>
          <a
            href="https://wa.me/919008710698"
            target="_blank"
            rel="nofollow noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-semibold text-base rounded-sm transition-all cursor-pointer whitespace-nowrap"
          >
            <span className="w-5 h-5 flex items-center justify-center"><i className="ri-whatsapp-line text-lg"></i></span>
            Start Your Process on WhatsApp
          </a>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: '"Playfair Display", serif', color: "#0B1F3A" }}>
              Complete GHMC Approval Workflow
            </h2>
            <p className="text-base text-gray-500 max-w-xl mx-auto">
              Casa Associates handles the entire GHMC building permission process — start to finish — for a smooth and fast BuildNow approval in Hyderabad.
            </p>
          </div>

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <div key={step.num} className="relative flex gap-6 sm:gap-10">
                {/* Connector line */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-14 h-14 flex items-center justify-center rounded-full flex-shrink-0 z-10"
                    style={{ background: "#0B1F3A", border: "2px solid #C8960C" }}
                  >
                    <span className="text-sm font-bold" style={{ color: "#C8960C", fontFamily: '"Playfair Display", serif' }}>{step.num}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 flex-1 my-2" style={{ background: "rgba(200,150,12,0.25)", minHeight: "40px" }}></div>
                  )}
                </div>

                {/* Content */}
                <div
                  className="flex-1 mb-8 p-7 rounded-sm transition-all duration-300 hover:-translate-y-0.5 cursor-default"
                  style={{ background: i % 2 === 0 ? "#F8F9FC" : "white", border: "1px solid rgba(11,31,58,0.08)" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-sm flex-shrink-0" style={{ background: "#FDF3DC" }}>
                      <i className={`${step.icon} text-lg`} style={{ color: "#C8960C" }}></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2" style={{ fontFamily: '"Playfair Display", serif', color: "#0B1F3A" }}>{step.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description + Timeline */}
      <section className="py-20" style={{ background: "#0B1F3A" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-sm" style={{ background: "rgba(200,150,12,0.15)", border: "1px solid rgba(200,150,12,0.4)" }}>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C8960C", letterSpacing: "0.1em" }}>Our Commitment</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
                We Handle Everything <span style={{ color: "#C8960C" }}>Start to Finish</span>
              </h2>
              <p className="text-base text-white/65 leading-loose mb-8">
                Casa Associates manages the entire GHMC building permission approval process from start to finish, ensuring smooth and fast approvals in Hyderabad. You focus on your project — we handle the paperwork and follow-ups.
              </p>
              <div className="flex flex-col gap-4">
                {["No running to government offices", "Fast-tracked submissions", "Real-time status updates", "Expert handling of rejections & corrections"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-5 h-5 flex items-center justify-center rounded-full flex-shrink-0" style={{ background: "rgba(200,150,12,0.2)" }}>
                      <i className="ri-check-line text-xs" style={{ color: "#C8960C" }}></i>
                    </span>
                    <span className="text-sm text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: "ri-time-line", val: "30-90 Days", lbl: "Typical Approval Timeline" },
                { icon: "ri-trophy-line", val: "98%", lbl: "Success Rate" },
                { icon: "ri-file-list-3-line", val: "500+", lbl: "Approvals Completed" },
                { icon: "ri-team-line", val: "10+", lbl: "Years of Experience" },
              ].map((stat) => (
                <div key={stat.lbl} className="p-6 rounded-sm text-center" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(200,150,12,0.2)" }}>
                  <div className="w-10 h-10 flex items-center justify-center rounded-sm mx-auto mb-3" style={{ background: "rgba(200,150,12,0.15)" }}>
                    <i className={`${stat.icon} text-lg`} style={{ color: "#C8960C" }}></i>
                  </div>
                  <div className="text-2xl font-bold mb-1" style={{ color: "#C8960C", fontFamily: '"Playfair Display", serif' }}>{stat.val}</div>
                  <div className="text-xs text-white/50">{stat.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4" style={{ fontFamily: '"Playfair Display", serif', color: "#0B1F3A" }}>
            Start Your Approval Process Today
          </h2>
          <p className="text-base text-gray-500 mb-8">Chat with us on WhatsApp and get your GHMC building permission started right away. Fast, transparent, and reliable.</p>
          <a
            href="https://wa.me/919008710698"
            target="_blank"
            rel="nofollow noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-semibold text-base rounded-sm transition-all cursor-pointer whitespace-nowrap"
          >
            <span className="w-5 h-5 flex items-center justify-center"><i className="ri-whatsapp-line text-lg"></i></span>
            Start Your Approval Process via WhatsApp
          </a>
        </div>
      </section>

      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
