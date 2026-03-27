import { useInView, animStyles } from "../../../hooks/useInView";

const reasons = [
  {
    icon: "ri-eye-line",
    title: "Transparency",
    desc: "We provide complete visibility at every step — from document review to final approval. No hidden charges, no surprises.",
  },
  {
    icon: "ri-flashlight-line",
    title: "Fast Turnaround",
    desc: "Our experience with GHMC and HMDA processes means faster application processing compared to self-submissions.",
  },
  {
    icon: "ri-government-line",
    title: "GHMC & HMDA Experts",
    desc: "Specialized knowledge of GHMC building permission rules, TG-BPASS system, and HMDA layout norms across Hyderabad.",
  },
  {
    icon: "ri-customer-service-2-line",
    title: "Dedicated Support",
    desc: "A dedicated relationship manager keeps you informed about status updates, inspection schedules, and approval milestones.",
  },
  {
    icon: "ri-shield-check-line",
    title: "End-to-End Handling",
    desc: "From document verification to approval certificate delivery — we manage the complete process so you don't have to.",
  },
  {
    icon: "ri-group-line",
    title: "Trusted by Hundreds",
    desc: "Over 500 successful building approvals in Hyderabad have earned us the trust of homeowners, builders, and investors.",
  },
];

export default function WhyChooseSection() {
  const { ref: headerRef, inView: headerInView } = useInView(0.15);
  const { ref: cardsRef, inView: cardsInView } = useInView(0.05);

  return (
    <section id="why-choose" className="py-24 lg:py-32" style={{ background: "#F8F6F0" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div
            className="text-xs font-semibold tracking-widest uppercase mb-5"
            style={{ color: "#C8960C", fontFamily: '"DM Sans", sans-serif', letterSpacing: "0.15em", ...animStyles(headerInView, 0) }}
          >
            Our Advantage
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5"
            style={{ color: "#0B1F3A", fontFamily: '"Playfair Display", serif', ...animStyles(headerInView, 0.1) }}
          >
            Why Choose Casa Associates?
          </h2>
          <p
            className="text-base text-gray-500 max-w-lg mx-auto leading-loose"
            style={{ fontFamily: '"DM Sans", sans-serif', ...animStyles(headerInView, 0.2) }}
          >
            With 500+ building approvals delivered across Hyderabad, we bring unmatched expertise in GHMC building permissions and TG-BPASS processes.
          </p>
        </div>

        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="flex flex-col p-8 rounded-sm bg-white group cursor-default transition-all duration-300 relative overflow-hidden"
              style={{
                border: "1px solid #EEEAE0",
                ...animStyles(cardsInView, i * 0.08),
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* Top gold accent line on hover */}
              <div
                className="absolute top-0 left-0 w-0 h-0.5 transition-all duration-500 group-hover:w-full"
                style={{ background: "#C8960C" }}
              ></div>
              <div
                className="w-12 h-12 flex items-center justify-center rounded-sm mb-6"
                style={{ background: "rgba(11,31,58,0.06)" }}
              >
                <i className={`${r.icon} text-xl`} style={{ color: "#0B1F3A" }}></i>
              </div>
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#0B1F3A", fontFamily: '"Playfair Display", serif' }}
              >
                {r.title}
              </h3>
              <p
                className="text-sm text-gray-500 leading-loose flex-1"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
