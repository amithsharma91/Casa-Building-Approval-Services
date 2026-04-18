import ServicePageLayout, { ServiceData } from "../../../components/feature/ServicePageLayout";

const data: ServiceData = {
  metaTitle: "GHMC Building Permission Services Hyderabad | Casa Associates",
  metaDesc: "Expert GHMC building permission services in Hyderabad. We handle TG-BPASS applications, plan drafting, and approval tracking. Call +91 90009 75046.",
  badge: "GHMC Approved Services · Hyderabad",
  heroImage: "https://readdy.ai/api/search-image?query=modern%20Hyderabad%20cityscape%20aerial%20photography%20Greater%20Hyderabad%20Municipal%20Corporation%20urban%20development%20residential%20buildings%20GHMC%20approved%20construction%20professional%20corporate%20style%20navy%20blue%20golden%20hour%20lighting%20clean%20minimalist%20background%20wide%20angle%20architecture%20real%20estate%20Telangana%20skyline&width=1440&height=600&seq=ghmc-hero-casa-001&orientation=landscape",
  heroImageAlt: "GHMC building permission services Hyderabad - Casa Associates",
  heroHeading: "GHMC Building Permission Services",
  heroHighlight: "in Hyderabad",
  heroSubtext: "Expert GHMC building permission consultancy in Hyderabad. We handle TG-BPASS applications, building plan drafting, and end-to-end approval tracking for your new construction or additional floors.",
  aboutHeading: "What is GHMC Building Permission?",
  aboutParas: [
    "GHMC (Greater Hyderabad Municipal Corporation) building permission is the legal approval required before starting any construction activity within Greater Hyderabad city limits. Under the TG-BPASS (Telangana State Building Permission Approval & Self Certification System), all applications are processed through a unified online portal ensuring speed and transparency.",
    "A valid GHMC building permission ensures your construction follows approved building plans, setback requirements, and local bylaws. It protects you from legal complications, enables home loans, and is essential for property registration and future resale.",
  ],
  importanceHeading: "Why GHMC Permission is Required",
  importancePoints: [
    "Mandatory for all new construction within Greater Hyderabad limits",
    "Required for adding additional floors to an existing building",
    "Needed for commercial building construction and major renovations",
    "Banks require valid GHMC permission for home loan approvals",
    "Protects property value and ensures legal compliance for resale",
  ],
  whoNeeds: [
    { icon: "ri-home-4-line", title: "Homeowners", desc: "Planning new residential construction or extending an existing house within GHMC limits." },
    { icon: "ri-building-line", title: "Builders & Contractors", desc: "Constructing apartment complexes, independent houses, or row houses within Hyderabad." },
    { icon: "ri-store-2-line", title: "Commercial Developers", desc: "Constructing offices, showrooms, commercial complexes requiring GHMC clearance." },
    { icon: "ri-user-line", title: "Property Owners", desc: "Adding floors, making structural changes, or regularizing an existing building." },
  ],
  servicesInclude: [
    { icon: "ri-draft-line", title: "Building Plan Drafting", desc: "Preparation of architectural plans by qualified architects as per GHMC bylaws and setback requirements." },
    { icon: "ri-computer-line", title: "TG-BPASS Online Submission", desc: "Complete filing of building permission application on the TG-BPASS portal with all required documents." },
    { icon: "ri-calculator-line", title: "Fee Calculation & Payment", desc: "Accurate calculation of GHMC development charges and guidance for fee payment procedures." },
    { icon: "ri-search-eye-line", title: "GHMC Scrutiny Follow-up", desc: "Proactive follow-up with GHMC officials during the scrutiny and technical verification stage." },
    { icon: "ri-map-pin-2-line", title: "Site Inspection Support", desc: "Coordination and support during GHMC site inspection visits for faster clearance." },
    { icon: "ri-file-certificate-line", title: "Approval Certificate", desc: "Collection of the final approved building permission certificate on your behalf." },
  ],
  process: [
    { title: "Document Submission", desc: "Submit all property documents — Sale Deed, EC, Tax receipts, and identity proof." },
    { title: "Building Plan Drafting", desc: "Our architects prepare plans per GHMC bylaws and setback norms." },
    { title: "TG-BPASS Application Filing", desc: "Complete online submission of your building permission application on TG-BPASS portal." },
    { title: "Fee Payment", desc: "We calculate and guide you through GHMC development charges and fee payment." },
    { title: "Approval & Certificate", desc: "After scrutiny and site inspection, GHMC issues your building permission certificate." },
  ],
  documents: [
    "Sale Deed / Title Deed",
    "Property Tax Receipt (latest)",
    "Encumbrance Certificate (EC)",
    "Link Documents",
    "Aadhaar Card (owner)",
    "Plot Layout / Survey Copy",
    "Architect Building Plan",
  ],
  faqs: [
    { q: "What is GHMC building permission?", a: "GHMC building permission is a legal approval issued by Greater Hyderabad Municipal Corporation before starting any construction within its jurisdiction. It ensures the proposed building complies with local bylaws, approved plans, and setback requirements." },
    { q: "How long does GHMC building permission take?", a: "Under TG-BPASS, plots up to 75 sq yards with G+1 floor receive instant self-certification approval. For larger projects, approval typically takes 15-30 working days after proper document submission and scrutiny." },
    { q: "What is TG-BPASS?", a: "TG-BPASS (Telangana State Building Permission Approval & Self Certification System) is the official online portal for processing all building permissions in Telangana. It ensures transparency, speed, and easy tracking of your application." },
    { q: "Is GHMC permission mandatory for small constructions?", a: "Yes. Any new construction or structural alteration within GHMC limits requires prior permission. However, plots up to 75 sq yards with Ground+1 floor qualify for the simplified self-certification route under TG-BPASS." },
    { q: "Can Casa Associates handle my complete GHMC application?", a: "Absolutely. We handle everything from document verification and plan drafting to TG-BPASS submission, fee payment, GHMC scrutiny follow-up, and final approval certificate collection — fully end-to-end." },
  ],
};

export default function GHMCPage() {
  return <ServicePageLayout data={data} />;
}
