import ServicePageLayout, { ServiceData } from "../../../components/feature/ServicePageLayout";

const data: ServiceData = {
  metaTitle: "HMDA Layout Permission Services Hyderabad | Casa Associates",
  metaDesc: "Professional HMDA layout permission services in Hyderabad. Residential and commercial layout approvals handled by experts. Call +91 99803 77877.",
  badge: "HMDA Layout Approvals · Hyderabad",
  heroImage: "https://readdy.ai/api/search-image?query=Hyderabad%20suburban%20residential%20layout%20aerial%20view%20plot%20development%20HMDA%20approved%20township%20planning%20clean%20modern%20architecture%20professional%20photography%20wide%20angle%20Telangana%20metropolitan%20real%20estate%20development%20golden%20hour%20corporate%20style%20open%20plots%20residential%20colony&width=1440&height=600&seq=hmda-hero-casa-002&orientation=landscape",
  heroImageAlt: "HMDA layout permission services Hyderabad - Casa Associates",
  heroHeading: "HMDA Layout Permission Services",
  heroHighlight: "in Hyderabad",
  heroSubtext: "Complete HMDA layout approval consultancy for residential and commercial plots in the Hyderabad Metropolitan Region. We manage plan preparation, application filing, and approval tracking from start to finish.",
  aboutHeading: "What is HMDA Layout Permission?",
  aboutParas: [
    "HMDA (Hyderabad Metropolitan Development Authority) governs building approvals in areas outside GHMC limits — covering the broader Hyderabad Metropolitan Region. A layout permission from HMDA is mandatory before developing, subdividing, or selling individual plots within this jurisdiction.",
    "Without a valid HMDA layout permission, plots cannot be legally sold or registered. Buyers face difficulty in obtaining bank loans, and the layout is considered unauthorized. Casa Associates ensures your layout complies with all HMDA norms, Open Space Reservations (OSR), road widths, and development standards.",
  ],
  importanceHeading: "Why HMDA Layout Permission Matters",
  importancePoints: [
    "Legally required to develop and sell individual plots in HMDA jurisdiction",
    "Unauthorized layouts face demolition orders and heavy penalties",
    "Buyers cannot obtain home loans without a valid HMDA-approved layout",
    "Property registration requires proper HMDA layout approval documents",
    "Ensures road widths, OSR, and drainage norms meet legal standards",
  ],
  whoNeeds: [
    { icon: "ri-landscape-line", title: "Plot Developers", desc: "Individuals or companies looking to develop and sell residential or commercial plots." },
    { icon: "ri-building-4-line", title: "Real Estate Developers", desc: "Township developers and housing colony promoters requiring HMDA layout clearance." },
    { icon: "ri-home-gear-line", title: "Landowners", desc: "Agricultural or vacant landowners in HMDA limits wishing to convert and develop." },
    { icon: "ri-map-line", title: "Layout Promoters", desc: "Promoters creating new residential layouts for sale to individual buyers." },
  ],
  servicesInclude: [
    { icon: "ri-draft-line", title: "Layout Plan Preparation", desc: "Detailed layout plan with road widths, plot sizes, OSR, and drainage as per HMDA norms." },
    { icon: "ri-computer-line", title: "HMDA Online Application", desc: "Complete filing of the layout permission application on TG-BPASS/HMDA portal." },
    { icon: "ri-calculator-line", title: "Fee Calculation & Guidance", desc: "Development charges, OSR charges, and fee payment guidance throughout the process." },
    { icon: "ri-search-eye-line", title: "Scrutiny Follow-up", desc: "Active follow-up with HMDA officials during technical scrutiny and plan approval stages." },
    { icon: "ri-map-pin-2-line", title: "Site Inspection Support", desc: "Support during HMDA site inspection for layout verification and compliance check." },
    { icon: "ri-file-certificate-line", title: "Layout Permission Certificate", desc: "Obtaining the final HMDA layout permission certificate on your behalf." },
  ],
  process: [
    { title: "Document Verification", desc: "Check ownership documents — Sale Deed, EC, link documents, and survey records." },
    { title: "Layout Plan Drafting", desc: "Prepare a detailed plan with roads, plots, OSR and drainage as per HMDA bylaws." },
    { title: "HMDA Application Filing", desc: "Submit the application with all documents via the HMDA / TG-BPASS portal." },
    { title: "Fee Payment", desc: "Pay development charges and OSR contributions as determined by HMDA." },
    { title: "Layout Approval Issued", desc: "After HMDA scrutiny and site inspection, receive the layout permission certificate." },
  ],
  documents: [
    "Sale Deed / Title Deed",
    "Encumbrance Certificate (EC)",
    "Link Documents (chain of ownership)",
    "Approved Survey / Sketch",
    "Aadhaar Card (owner/promoter)",
    "Detailed Layout Plan",
    "NOC from Revenue Department (if applicable)",
  ],
  faqs: [
    { q: "What is HMDA layout permission?", a: "HMDA layout permission is the official approval needed to develop and sell individual plots within the Hyderabad Metropolitan Region. Without it, the layout is unauthorized and plots cannot be legally sold or registered." },
    { q: "What is the difference between GHMC and HMDA?", a: "GHMC governs the core city area of Greater Hyderabad, while HMDA oversees the broader Hyderabad Metropolitan Region including outer areas like Rangareddy, Medchal, and Yadadri districts. Your property's location determines which authority handles your approval." },
    { q: "How long does HMDA layout approval take?", a: "HMDA layout permissions typically take 30-60 days depending on plot size, location, and the completeness of documents submitted. The TG-BPASS system has significantly streamlined this process." },
    { q: "Can I sell plots without HMDA approval?", a: "No. Selling plots without valid HMDA layout permission is illegal. Buyers face problems obtaining bank loans, property registration is difficult, and the seller can face legal action for unauthorized development." },
    { q: "What is the minimum plot size for HMDA layout approval?", a: "For residential layouts under HMDA, the minimum plot size is typically 100 sq yards, with road widths and open space reservations (OSR) as mandated by HMDA development regulations." },
  ],
};

export default function HMDAPage() {
  return <ServicePageLayout data={data} />;
}
