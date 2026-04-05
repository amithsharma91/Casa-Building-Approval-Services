const steps = [
  {
    num: "01",
    title: "Verifying the Documents",
    desc: "Our experts thoroughly verify all your property documents — Sale Deed, EC, property tax receipts, and title documents — to ensure legal clarity before proceeding.",
  },
  {
    num: "02",
    title: "Building Plan Drafting",
    desc: "A licensed architect prepares the building plan in full compliance with GHMC setback rules, FAR norms, and applicable building regulations.",
  },
  {
    num: "03",
    title: "Initial Fee Payment",
    desc: "The initial processing and drafting fees are collected before file preparation begins, ensuring a smooth and uninterrupted workflow.",
  },
  {
    num: "04",
    title: "BuildNow File Submission",
    desc: "The complete application is submitted through the BuildNow portal with all required documents, certifications, and architectural drawings.",
  },
  {
    num: "05",
    title: "Site Inspection",
    desc: "A GHMC inspector visits the site to verify plot dimensions, boundaries, and alignment with the submitted building plan.",
  },
  {
    num: "06",
    title: "File Scrutiny",
    desc: "GHMC officers scrutinize the building plan for compliance with regulations, setbacks, height restrictions, parking norms, and FAR calculations.",
  },
  {
    num: "07",
    title: "Fee Letter Issued",
    desc: "After scrutiny, the authorities issue an official fee letter detailing the applicable government charges and mortgage amounts to be paid.",
  },
  {
    num: "08",
    title: "Mortgage & Fee Payment",
    desc: "The mortgage amount and all government fees as per the fee letter are paid to the concerned authorities to proceed with final approval.",
  },
  {
    num: "09",
    title: "Building Approval Issued",
    desc: "Upon successful completion of all steps, the Building Permission Order (BPO) is officially issued — your project is cleared to begin construction.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 lg:py-32" style={{ background: "#0B1F3A" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="text-xs font-semibold tracking-widest uppercase mb-5"
            style={{ color: "#C8960C", fontFamily: '"DM Sans", sans-serif', letterSpacing: "0.15em" }}
          >
            Step by Step
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            GHMC Approval Process
          </h2>
          <p
            className="text-base text-white/55 max-w-xl mx-auto leading-loose"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            A transparent, step-by-step process — no hidden surprises. We walk you through every stage of your BuildNow building permission approval in Hyderabad.
          </p>
        </div>

        {/* Steps Grid — 3 rows × 3 columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <StepCard key={step.num} step={step} highlight={step.num === "04"} />
          ))}
        </div>

        {/* Timeline note */}
        <div className="mt-12 text-center">
          <p
            className="text-sm text-white/45"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            Approval timeline varies from 30–90 days depending on the category and site inspection schedule.
          </p>
        </div>
      </div>
    </section>
  );
}

interface StepProps {
  step: { num: string; title: string; desc: string };
  highlight?: boolean;
}

function StepCard({ step, highlight }: StepProps) {
  return (
    <div
      className="relative p-7 rounded-sm group hover:scale-[1.02] transition-transform duration-300"
      style={{
        background: highlight ? "rgba(200,150,12,0.12)" : "rgba(255,255,255,0.05)",
        border: highlight ? "1px solid rgba(200,150,12,0.45)" : "1px solid rgba(255,255,255,0.09)",
      }}
    >
      {/* Step number badge */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
          style={{
            background: highlight ? "#C8960C" : "rgba(200,150,12,0.18)",
            color: highlight ? "#0B1F3A" : "#C8960C",
            fontFamily: '"Playfair Display", serif',
          }}
        >
          {step.num}
        </div>
      </div>
      <h3
        className="text-base font-bold text-white mb-3"
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        {step.title}
      </h3>
      <p
        className="text-sm text-white/55 leading-loose"
        style={{ fontFamily: '"DM Sans", sans-serif' }}
      >
        {step.desc}
      </p>
    </div>
  );
}
