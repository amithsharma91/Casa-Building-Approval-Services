const steps = [
  {
    num: "01",
    title: "Document Checking",
    desc: "Our experts review all your property documents — Sale Deed, EC, property tax receipts — to verify legal clarity and identify any gaps.",
  },
  {
    num: "02",
    title: "Building Plan Drafting",
    desc: "A licensed architect prepares the building plan in compliance with GHMC setback rules, FAR norms, and TG-BPASS guidelines.",
  },
  {
    num: "03",
    title: "TG-BPASS Submission",
    desc: "The complete application is submitted on the official TG-BPASS portal with all required documents and certifications.",
  },
  {
    num: "04",
    title: "Fee Payment",
    desc: "Applicable scrutiny fees and government charges are calculated and paid online through the TG-BPASS portal.",
  },
  {
    num: "05",
    title: "GHMC Scrutiny",
    desc: "GHMC officers scrutinize the building plan for compliance with regulations, setbacks, height restrictions, and parking norms.",
  },
  {
    num: "06",
    title: "Site Inspection",
    desc: "A GHMC inspector visits the site to verify plot dimensions and alignment with the submitted building plan.",
  },
  {
    num: "07",
    title: "Approval Certificate Issued",
    desc: "Upon successful scrutiny and inspection, the Building Permission Order (BPO) is issued digitally via TS-bPASS.",
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
            A transparent, step-by-step process — no hidden surprises. We walk you through every stage of your TG-BPASS building permission approval in Hyderabad.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {steps.slice(0, 3).map((step) => (
            <StepCard key={step.num} step={step} highlight={false} />
          ))}
        </div>
        <div className="flex justify-center mb-6">
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <StepCard step={steps[3]} highlight={true} />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.slice(4).map((step) => (
            <StepCard key={step.num} step={step} highlight={false} />
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
