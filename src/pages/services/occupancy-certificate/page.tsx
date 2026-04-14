import ServicePageLayout, { ServiceData } from "../../../components/feature/ServicePageLayout";

const data: ServiceData = {
  metaTitle: "Occupancy Certificate Services Hyderabad | Casa Associates",
  metaDesc: "Get your Occupancy Certificate (OC) in Hyderabad with expert help. We handle GHMC and HMDA OC applications end-to-end. Call +91 90087 10698.",
  badge: "Occupancy Certificate Services · Hyderabad",
  heroImage: "https://readdy.ai/api/search-image?query=newly%20completed%20modern%20residential%20building%20construction%20Hyderabad%20India%20certificate%20completion%20clean%20contemporary%20architecture%20professional%20photography%20exterior%20elevation%20warm%20neutral%20background%20clear%20sky%20Telangana%20GHMC%20completed%20building%20approval%20corporate%20minimal%20style&width=1440&height=600&seq=oc-hero-casa-004&orientation=landscape",
  heroImageAlt: "Occupancy Certificate services Hyderabad - Casa Associates",
  heroHeading: "Occupancy Certificate Services",
  heroHighlight: "in Hyderabad",
  heroSubtext: "Expert Occupancy Certificate (OC) consultancy for completed buildings in Hyderabad. We handle GHMC and HMDA OC applications, inspection coordination, and certificate issuance end-to-end.",
  aboutHeading: "What is an Occupancy Certificate?",
  aboutParas: [
    "An Occupancy Certificate (OC) is an official document issued by GHMC or HMDA after inspecting a completed building and confirming it was constructed strictly according to the approved building plan, with all safety and regulatory requirements met. Without OC, a building is technically considered unauthorized in Hyderabad.",
    "OC is mandatory for legally occupying, selling, or obtaining utility connections for your building. Banks require OC for home loans on resale properties. Casa Associates handles the complete OC application process — from documentation and architect certification to inspection coordination and certificate collection.",
  ],
  importanceHeading: "Why Occupancy Certificate is Essential",
  importancePoints: [
    "Legally mandatory to occupy or use a completed building in Hyderabad",
    "Required by banks for home loans on properties — no OC means no loan",
    "Essential for selling the property — buyers demand OC for legal safety",
    "Without OC, GHMC can issue notices for unauthorized occupation",
    "Utility connections (electricity, water) may be denied without OC",
  ],
  whoNeeds: [
    { icon: "ri-home-4-line", title: "Homeowners", desc: "Owners of newly completed residential buildings needing OC for legal occupation and utilities." },
    { icon: "ri-building-line", title: "Builders", desc: "Apartment developers and construction companies needing OC before handing over units." },
    { icon: "ri-bank-line", title: "Loan Applicants", desc: "Buyers seeking home loans on properties where OC is mandatory for bank approval." },
    { icon: "ri-exchange-funds-line", title: "Property Sellers", desc: "Sellers needing OC to ensure a clean title transfer and legal property sale." },
  ],
  servicesInclude: [
    { icon: "ri-file-certificate-line", title: "OC Application Filing", desc: "Complete filing of Occupancy Certificate application with GHMC/HMDA on your behalf." },
    { icon: "ri-building-line", title: "Architect Completion Certificate", desc: "Coordination with the architect for the mandatory completion and structural stability certificate." },
    { icon: "ri-search-eye-line", title: "Compliance Verification", desc: "Pre-inspection compliance check to ensure the building matches the approved plan." },
    { icon: "ri-map-pin-2-line", title: "Inspection Coordination", desc: "Schedule and coordinate the GHMC/HMDA site inspection visit for smooth approval." },
    { icon: "ri-file-list-3-line", title: "NOC Assistance", desc: "Assistance in obtaining NOCs from fire, electricity, and other departments if required." },
    { icon: "ri-checkbox-circle-line", title: "OC Certificate Collection", desc: "Collection of the final Occupancy Certificate from GHMC/HMDA on your behalf." },
  ],
  process: [
    { title: "Completion Inspection", desc: "We check the building against the approved plan to ensure full compliance before applying." },
    { title: "Document Preparation", desc: "Gather completion certificate, structural stability certificate, photographs, and tax receipts." },
    { title: "OC Application Filing", desc: "Submit the Occupancy Certificate application with all documents to GHMC/HMDA." },
    { title: "Inspection Scheduling", desc: "GHMC/HMDA schedules a site inspection — we coordinate and accompany the officer." },
    { title: "OC Certificate Issued", desc: "After successful inspection, GHMC/HMDA issues your Occupancy Certificate." },
  ],
  documents: [
    "Original Building Permission Certificate",
    "Architect Completion Certificate",
    "Structural Stability Certificate",
    "Property Tax Receipt (latest)",
    "Photographs of completed building",
    "Aadhaar Card (owner)",
    "Electricity / Water connection receipts",
  ],
  faqs: [
    { q: "What is an Occupancy Certificate (OC)?", a: "An Occupancy Certificate is an official document from GHMC or HMDA confirming a building was constructed per the approved plan and meets all safety standards. It legally allows the building to be occupied, sold, or used." },
    { q: "Is OC mandatory for all buildings in Hyderabad?", a: "Yes. An Occupancy Certificate is mandatory for all buildings constructed under GHMC and HMDA jurisdiction. Without OC, the building is considered unauthorized and occupying it can lead to legal notices." },
    { q: "What happens if I don't have an OC?", a: "Without OC, home loans on the property will be rejected by banks, property sale becomes difficult, utility connections may be denied, and GHMC can issue notices for unauthorized occupation or construction." },
    { q: "How long does it take to get an OC in Hyderabad?", a: "After submitting the complete OC application, the process typically takes 15-30 working days subject to GHMC/HMDA site inspection and document verification." },
    { q: "What documents are required for an Occupancy Certificate?", a: "Key documents include the original building permission, architect's completion certificate, structural stability certificate, latest property tax receipts, and photographs of the completed building along with owner's Aadhaar card." },
  ],
};

export default function OccupancyPage() {
  return <ServicePageLayout data={data} />;
}
