import ServicePageLayout, { ServiceData } from "../../../components/feature/ServicePageLayout";

const data: ServiceData = {
  metaTitle: "Road Widening Check & Master Plan Verification Hyderabad | Casa Associates",
  metaDesc: "Road widening and master plan check services in Hyderabad. Verify if your plot is affected before buying or building. Expert consultation. Call +91 99803 77877.",
  badge: "Road Widening Verification · Hyderabad",
  heroImage: "https://readdy.ai/api/search-image?query=aerial%20view%20Hyderabad%20road%20development%20infrastructure%20urban%20road%20widening%20construction%20highway%20expansion%20professional%20aerial%20photography%20wide%20angle%20architecture%20Telangana%20urban%20planning%20master%20plan%20road%20alignment%20corporate%20minimal%20style%20warm%20neutral%20tones%20clean%20background&width=1440&height=600&seq=road-hero-casa-006&orientation=landscape",
  heroImageAlt: "Road widening check and master plan verification Hyderabad - Casa Associates",
  heroHeading: "Road Widening & Master Plan Check",
  heroHighlight: "in Hyderabad",
  heroSubtext: "Before buying or building in Hyderabad, verify whether your plot is affected by road widening reservations. Casa Associates conducts detailed master plan checks to protect your investment.",
  aboutHeading: "What is a Road Widening Check?",
  aboutParas: [
    "Hyderabad's Master Plan (Development Plan) includes extensive road widening proposals where existing roads will be expanded to their planned widths. Many plots in Hyderabad — especially those along major roads — fall partly or fully within these road widening alignment areas. If a plot is affected, part of it will eventually be acquired by GHMC or HMDA for road development.",
    "A road widening check involves verifying the property's DP (Development Plan) sheet against current and proposed road alignments. Casa Associates conducts comprehensive master plan checks to identify road widening impacts, advise on setbacks and buildable area, and help you claim TDR compensation if your plot is affected.",
  ],
  importanceHeading: "Why a Road Widening Check is Essential",
  importancePoints: [
    "Prevents costly mistakes when buying plots affected by road widening",
    "Determines actual buildable area after road widening setbacks",
    "Building within road widening area leads to demolition during road works",
    "Affected property owners can claim TDR compensation from GHMC/HMDA",
    "Banks may reject loans on plots heavily affected by road widening",
  ],
  whoNeeds: [
    { icon: "ri-home-search-line", title: "Property Buyers", desc: "Verify road widening impact before purchasing any plot or property in Hyderabad." },
    { icon: "ri-building-line", title: "Builders", desc: "Check road alignment before buying land for residential or commercial development." },
    { icon: "ri-exchange-funds-line", title: "Property Sellers", desc: "Understand road widening status to price and disclose property accurately." },
    { icon: "ri-funds-line", title: "Investors", desc: "Confirm investment viability by checking how much of the plot is free from widening lines." },
  ],
  servicesInclude: [
    { icon: "ri-map-2-line", title: "DP Map Verification", desc: "Review the Development Plan maps to check road widening alignments affecting your plot." },
    { icon: "ri-road-map-line", title: "Road Alignment Analysis", desc: "Detailed analysis of proposed road widths and their impact on plot boundaries." },
    { icon: "ri-ruler-2-line", title: "Setback Calculation", desc: "Calculate exact setback requirements and net buildable area after road widening." },
    { icon: "ri-file-text-line", title: "Verification Report", desc: "Written report summarizing road widening impact, buildable area, and our recommendations." },
    { icon: "ri-exchange-funds-line", title: "TDR Eligibility Guidance", desc: "If affected, we guide you on claiming TDR from GHMC/HMDA as compensation." },
    { icon: "ri-shield-check-line", title: "Pre-Purchase Advisory", desc: "Complete advisory service for buyers to make informed decisions before purchasing." },
  ],
  process: [
    { title: "Property Details Collection", desc: "Provide survey number, plot details, location, and ownership documents." },
    { title: "DP Map & Alignment Check", desc: "We review official GHMC/HMDA Development Plan sheets and road alignment maps." },
    { title: "Impact Assessment", desc: "Calculate the extent of road widening impact on the plot boundaries and buildable area." },
    { title: "GHMC/HMDA Verification", desc: "Official query filed with GHMC/HMDA if a written road widening certificate is required." },
    { title: "Report & Guidance", desc: "Detailed written report with impact assessment, buildable area, and TDR eligibility advice." },
  ],
  documents: [
    "Sale Deed / Title Deed",
    "Survey Number / Sub-division details",
    "Revenue Records / Pahani",
    "Encumbrance Certificate (EC)",
    "Property Tax Receipt",
    "Plot Sketch / Boundaries",
    "Aadhaar Card (owner)",
  ],
  faqs: [
    { q: "What is road widening in Hyderabad?", a: "Road widening is the expansion of existing roads to their planned Master Plan widths. Hyderabad's Development Plan includes many road widening proposals — plots falling within these alignments will have portions acquired by GHMC or HMDA for road development." },
    { q: "How do I check if my plot has road widening?", a: "You need to verify the property's DP (Development Plan) sheet with GHMC or HMDA. Casa Associates can conduct this check using the survey number, plot details, and official road alignment maps for your specific location." },
    { q: "What happens if road widening affects my property?", a: "The affected portion will eventually be acquired by GHMC/HMDA for road development. You may receive TDR (Transfer of Development Rights) as compensation, and the buildable area of your remaining plot will be reduced based on new setback requirements." },
    { q: "Can I get TDR if road widening affects my plot?", a: "Yes. If your plot is affected by road widening listed in the Hyderabad Master Plan, you are typically eligible to claim TDR from GHMC or HMDA as compensation for the surrendered land area." },
    { q: "How long does a road widening verification take?", a: "A standard road widening and Master Plan verification takes 3-7 working days depending on availability of DP records and the complexity of the plot's location and road alignment." },
  ],
};

export default function RoadWideningPage() {
  return <ServicePageLayout data={data} />;
}
