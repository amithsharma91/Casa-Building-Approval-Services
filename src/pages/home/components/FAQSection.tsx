import { useState, useRef } from "react";

const faqs = [
  {
    q: "What is TG-BPASS?",
    a: "TG-BPASS stands for Telangana Government Building Permission Approval and Self-Certification System. It is the unified online portal launched by the Government of Telangana for obtaining building permissions across all urban local bodies including GHMC, HMDA, and municipal corporations. All building permissions in Hyderabad are processed through this system.",
  },
  {
    q: "How long does GHMC building permission take?",
    a: "Typically, GHMC building permissions through TG-BPASS take 30–90 days depending on the plot area, building category, and schedule of site inspections. Self-certification cases (small plots up to 75 sq yards residential) can be faster, while larger commercial projects may take longer due to additional scrutiny requirements.",
  },
  {
    q: "What is TDR (Transfer of Development Rights)?",
    a: "TDR or Transfer of Development Rights is a mechanism by which property owners who have surrendered their land for road widening, urban development, or public projects receive development rights (Floor Space Index) that can be used to construct additional floors on another eligible property. Casa Associates helps you both claim TDR for affected land and utilize TDR for building additional floors.",
  },
  {
    q: "What documents are required for GHMC building permission?",
    a: "The primary documents required include: Sale Deed / Title Deed, Latest Property Tax Receipt, Encumbrance Certificate (EC), Link Documents, Aadhaar Card of the owner, Plot Layout Copy, and an Architect-certified Building Plan. Additional documents may be required based on plot size, zone classification, and type of construction.",
  },
  {
    q: "What is a Road Widening Check and why is it important?",
    a: "A Road Widening Check verifies whether your property falls within the proposed road widening alignment as per GHMC or HMDA master plans. Properties affected by road widening have reduced buildable area and may face demolition notices. It's critical to check this before purchasing a property or starting construction. Casa Associates provides a detailed Road Widening Check report.",
  },
  {
    q: "Can I apply for GHMC building permission without an agent?",
    a: "Yes, you can apply directly through the TG-BPASS portal without an agent. However, the process requires technical knowledge of zoning regulations, FAR (Floor Area Ratio), setback rules, parking norms, and building bylaws. Errors in applications lead to rejections and delays. Professional consultants like Casa Associates ensure accuracy, faster processing, and reduce the risk of rejection significantly.",
  },
];

function FAQItem({ faq, isOpen, onClick }: { faq: { q: string; a: string }; isOpen: boolean; onClick: () => void }) {
  const bodyRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="rounded-sm overflow-hidden cursor-pointer"
      style={{ border: isOpen ? "1px solid rgba(200,150,12,0.35)" : "1px solid #EEEAE0" }}
      onClick={onClick}
    >
      <div
        className="flex items-center justify-between px-6 py-5 transition-colors duration-200"
        style={{
          background: isOpen ? "#0B1F3A" : "white",
          minHeight: "64px",
        }}
      >
        <h3
          className="text-base font-semibold pr-4 leading-snug"
          style={{
            color: isOpen ? "white" : "#0B1F3A",
            fontFamily: '"DM Sans", sans-serif',
          }}
        >
          {faq.q}
        </h3>
        <span
          className="w-8 h-8 flex items-center justify-center rounded-sm flex-shrink-0 transition-all duration-200"
          style={{
            background: isOpen ? "rgba(200,150,12,0.22)" : "rgba(11,31,58,0.07)",
          }}
        >
          <i
            className="text-base transition-transform duration-300"
            style={{
              color: isOpen ? "#C8960C" : "#0B1F3A",
              transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
              display: "inline-block",
              fontFamily: "remixicon",
            }}
          >
            {isOpen ? "\uEA13" : "\uEA12"}
          </i>
        </span>
      </div>
      <div
        ref={bodyRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? "400px" : "0",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div
          className="px-6 py-6"
          style={{ background: "#FAFAF8", borderTop: "1px solid rgba(200,150,12,0.15)" }}
        >
          <p
            className="text-base text-gray-500 leading-loose"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="text-xs font-semibold tracking-widest uppercase mb-5"
            style={{ color: "#C8960C", fontFamily: '"DM Sans", sans-serif', letterSpacing: "0.15em" }}
          >
            Got Questions?
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5"
            style={{ color: "#0B1F3A", fontFamily: '"Playfair Display", serif' }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="text-base text-gray-500 max-w-lg mx-auto leading-loose"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            Everything you need to know about GHMC building permissions, TG-BPASS / BuildNow approvals, and our services in Hyderabad.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center">
          <p
            className="text-sm text-gray-400"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            Still have questions? Reach us at{" "}
            <a
              href="tel:+919000975046"
              className="font-semibold hover:underline cursor-pointer"
              style={{ color: "#C8960C" }}
            >
              +91 90009 75046
            </a>
          </p>
        </div>
      </div>

      {/* Schema.org FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </section>
  );
}
