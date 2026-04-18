import ServicePageLayout, { ServiceData } from "../../../components/feature/ServicePageLayout";

const data: ServiceData = {
  metaTitle: "Land Use & Master Plan Verification Hyderabad | Casa Associates",
  metaDesc: "Land use verification and master plan check services in Hyderabad. Verify zoning, DP zones, and permitted land use before buying or building. Call +91 90009 75046.",
  badge: "Land Use Verification · Hyderabad",
  heroImage: "https://readdy.ai/api/search-image?query=professional%20architects%20urban%20planners%20reviewing%20Hyderabad%20city%20master%20plan%20zoning%20map%20documents%20corporate%20office%20clean%20minimal%20background%20detailed%20blueprint%20urban%20planning%20Telangana%20geographic%20information%20system%20modern%20desk%20professional%20team%20consultation%20warm%20neutral%20tones&width=1440&height=600&seq=landuse-hero-casa-003&orientation=landscape",
  heroImageAlt: "Land use and master plan verification Hyderabad - Casa Associates",
  heroHeading: "Land Use & Master Plan Verification",
  heroHighlight: "in Hyderabad",
  heroSubtext: "Before buying or building in Hyderabad, verify your land use and master plan status with experts. We check zoning, DP road alignments, and permitted land use to protect your investment.",
  aboutHeading: "What is Land Use & Master Plan Verification?",
  aboutParas: [
    "The Master Plan (Development Plan) for Hyderabad designates specific zones for residential, commercial, industrial, agricultural, and other land uses. Land use verification is the process of confirming what type of construction or activity is legally permitted on a specific plot as per these zoning regulations.",
    "Building on a plot with an incorrect land use classification — such as an agricultural or industrial zone — can result in your building permission being rejected. Casa Associates conducts a thorough land use and master plan check, helping you make informed decisions before investing or starting construction in Hyderabad.",
  ],
  importanceHeading: "Why Land Use Verification is Critical",
  importancePoints: [
    "Ensures the plot is legally suitable for your intended construction",
    "Prevents costly mistakes — building on wrong zone faces demolition risk",
    "Confirms DP road alignments that may reduce the effective plot area",
    "Required before applying for GHMC or HMDA building permission",
    "Essential for buyers before purchasing land or plots in Hyderabad",
  ],
  whoNeeds: [
    { icon: "ri-home-search-line", title: "Property Buyers", desc: "Verify zoning and permitted land use before purchasing any plot or land in Hyderabad." },
    { icon: "ri-funds-line", title: "Property Investors", desc: "Confirm investment viability by checking development potential and DP zone classification." },
    { icon: "ri-building-line", title: "Builders", desc: "Verify land use before purchasing for development to avoid permission rejection." },
    { icon: "ri-community-line", title: "Real Estate Developers", desc: "Master plan compliance check before planning township or commercial development." },
  ],
  servicesInclude: [
    { icon: "ri-map-2-line", title: "Master Plan Zone Check", desc: "Verify the plot's DP zone — residential, commercial, agricultural, or industrial classification." },
    { icon: "ri-file-search-line", title: "Land Use Certificate", desc: "Assistance in obtaining the official land use certificate from GHMC or HMDA." },
    { icon: "ri-road-map-line", title: "DP Road Alignment Check", desc: "Verify if the plot falls within DP road widening lines that may reduce usable area." },
    { icon: "ri-building-2-line", title: "Zoning Compliance Advice", desc: "Expert advice on what type of construction is permissible on your specific plot." },
    { icon: "ri-exchange-line", title: "Land Use Conversion Guidance", desc: "Guidance on applying for land use conversion if the current classification does not match your plans." },
    { icon: "ri-file-text-line", title: "Detailed Verification Report", desc: "Written report summarizing land use classification, road alignments, and buildability assessment." },
  ],
  process: [
    { title: "Property Details Submission", desc: "Provide survey number, plot details, and ownership documents for analysis." },
    { title: "Master Plan Map Review", desc: "We review the GHMC/HMDA Development Plan maps for the subject plot's location." },
    { title: "Zone & Road Alignment Check", desc: "Verify the DP zone, road widening lines, and any reservations affecting the plot." },
    { title: "Land Use Query Filing", desc: "File official land use query with GHMC/HMDA authorities if a certificate is needed." },
    { title: "Report & Expert Guidance", desc: "Receive a comprehensive verification report and expert recommendation." },
  ],
  documents: [
    "Sale Deed / Title Deed",
    "Survey Number / Sub-division details",
    "Encumbrance Certificate (EC)",
    "Property Tax Receipt",
    "Aadhaar Card (owner)",
    "Revenue / Pahani Records",
    "Plot Sketch / Layout Copy",
  ],
  faqs: [
    { q: "What is land use verification?", a: "Land use verification is the process of checking what type of construction or activity is legally permitted on a specific plot as per Hyderabad's Master Plan and zoning regulations." },
    { q: "What is the Hyderabad Master Plan?", a: "The Master Plan (Development Plan) is a long-term city planning document prepared by HMDA that designates zones for residential, commercial, industrial, IT, and other land uses across the Hyderabad Metropolitan Region." },
    { q: "Why is a land use check important before buying?", a: "If the land is classified for agricultural, industrial, or buffer zone use, constructing a house may not be permitted. A land use check prevents costly mistakes and ensures your investment is legally safe and buildable." },
    { q: "What is a DP zone?", a: "DP (Development Plan) zones are the land use categories in the Master Plan. Common zones include R1/R2 (residential), C1/C2 (commercial), IT corridor, industrial zone, agricultural zone, and green buffer zones." },
    { q: "How long does land use verification take?", a: "A standard land use and master plan check typically takes 3-7 working days depending on the location, plot details, and availability of official records from GHMC/HMDA." },
  ],
};

export default function LandUsePage() {
  return <ServicePageLayout data={data} />;
}
