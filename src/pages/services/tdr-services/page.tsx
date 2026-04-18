import ServicePageLayout, { ServiceData } from "../../../components/feature/ServicePageLayout";

const data: ServiceData = {
  metaTitle: "TDR Transfer of Development Rights Services Hyderabad | Casa Associates",
  metaDesc: "Expert TDR services in Hyderabad. Claim your Transfer of Development Rights for road widening, additional floors and compensation. Call +91 90009 75046.",
  badge: "TDR Services · Hyderabad",
  heroImage: "https://readdy.ai/api/search-image?query=Hyderabad%20urban%20development%20rights%20transfer%20concept%20modern%20high%20rise%20building%20construction%20additional%20floors%20architecture%20professional%20corporate%20background%20neutral%20tones%20clean%20modern%20style%20Telangana%20real%20estate%20development%20rights%20compensation%20aerial%20view%20city%20skyline&width=1440&height=600&seq=tdr-hero-casa-005&orientation=landscape",
  heroImageAlt: "TDR Transfer of Development Rights services Hyderabad - Casa Associates",
  heroHeading: "TDR (Transfer of Development Rights)",
  heroHighlight: "Services in Hyderabad",
  heroSubtext: "Expert TDR consultancy in Hyderabad. We help property owners claim Transfer of Development Rights for land affected by NALA, FTL, MFL, or Buffer zones, use TDR for additional construction, and navigate the complete GHMC/HMDA approval process.",
  aboutHeading: "What is TDR (Transfer of Development Rights)?",
  aboutParas: [
    "Transfer of Development Rights (TDR) is a system under which property owners who surrender land for public purposes — such as road widening, parks, or government reservations — receive development rights as compensation. These rights, documented through a TDR certificate issued by GHMC or HMDA, can be used to construct additional floors beyond normal limits or sold to other developers.",
    "TDR is especially valuable in Hyderabad where properties may be affected by NALA, FTL, MFL, or Buffer zones. If your land is affected by NALA, FTL, MFL, or Buffer zones, you may be eligible for TDR compensation. Casa Associates helps you understand your eligibility, apply for TDR certificates, and effectively utilize or sell these rights.",
  ],
  importanceHeading: "Why TDR Matters for Property Owners",
  importancePoints: [
    "Provides fair compensation for land acquired through road widening",
    "Allows construction of additional floors beyond normal FSI limits",
    "TDR certificates have market value and can be sold to developers",
    "Helps maximize the development potential of your remaining plot",
    "Essential for property owners in road widening affected areas of Hyderabad",
  ],
  whoNeeds: [
    { icon: "ri-road-map-line", title: "Road Widening Affected", desc: "Property owners whose plots are partially or fully affected by DP road widening reservations." },
    { icon: "ri-building-2-line", title: "Builders & Developers", desc: "Builders wanting to purchase TDR to construct additional floors on their projects." },
    { icon: "ri-home-4-line", title: "Property Owners", desc: "Owners wanting to claim entitled TDR compensation from GHMC or HMDA." },
    { icon: "ri-exchange-funds-line", title: "TDR Sellers/Buyers", desc: "Individuals looking to sell their TDR certificates or purchase TDR for additional construction rights." },
  ],
  servicesInclude: [
    { icon: "ri-search-eye-line", title: "TDR Eligibility Check", desc: "Verify if your property qualifies for TDR based on road widening or public reservations in the Master Plan." },
    { icon: "ri-file-list-3-line", title: "TDR Application Filing", desc: "Complete filing of TDR claim application with GHMC or HMDA with all required documents." },
    { icon: "ri-file-certificate-line", title: "TDR Certificate Assistance", desc: "Follow-up with GHMC/HMDA for issuance of your TDR certificate." },
    { icon: "ri-building-4-line", title: "Additional Floors Approval", desc: "Use TDR rights to get building permission for additional floors beyond normal FSI." },
    { icon: "ri-funds-line", title: "TDR Utilization Advice", desc: "Expert guidance on how to use or sell your TDR for maximum benefit." },
    { icon: "ri-map-2-line", title: "Road Widening Verification", desc: "Verify the extent of road widening affecting your plot to determine TDR entitlement." },
  ],
  process: [
    { title: "Eligibility Check", desc: "Check if your property is affected by road widening or public reservations in the Master Plan." },
    { title: "Document Preparation", desc: "Gather title documents, survey records, and road widening notification details." },
    { title: "TDR Application Filing", desc: "File TDR claim application with GHMC or HMDA including all required documents and plans." },
    { title: "TDR Certificate Issuance", desc: "Follow up with authorities; GHMC/HMDA issues the TDR certificate after verification." },
    { title: "Utilization or Transfer", desc: "Use TDR for additional construction floors or transfer/sell the certificate to another developer." },
  ],
  documents: [
    "Sale Deed / Title Deed",
    "Encumbrance Certificate (EC)",
    "Road widening notification documents",
    "Survey Number / Revenue Records",
    "Aadhaar Card (owner)",
    "Plot Sketch / Layout Copy",
    "Property Tax Receipts (latest)",
  ],
  faqs: [
    { q: "What is TDR (Transfer of Development Rights)?", a: "TDR is a system where government compensates property owners whose land is acquired for public purposes (road widening, parks, etc.) by granting additional building development rights that can be used to construct extra floors or sold to other developers." },
    { q: "Who is eligible for TDR in Hyderabad?", a: "Property owners in Hyderabad whose land is affected by NALA, FTL, MFL, or Buffer zones as per the GHMC/HMDA Master Plan are eligible to claim TDR as compensation." },
    { q: "How can I use my TDR certificate?", a: "TDR can be used to construct additional floors beyond the permissible FSI on your own property, or it can be transferred and sold to another property owner or developer who needs extra construction rights in Hyderabad." },
    { q: "Can I sell my TDR certificate?", a: "Yes. TDR certificates can be sold to other property owners or developers who wish to utilize additional construction rights. The market value varies based on the location and TDR area involved." },
    { q: "How long does the TDR approval process take?", a: "The TDR application and certificate issuance process typically takes 30-60 days depending on documentation completeness, the extent of road widening involved, and GHMC/HMDA processing timelines." },
  ],
};

export default function TDRPage() {
  return <ServicePageLayout data={data} />;
}
