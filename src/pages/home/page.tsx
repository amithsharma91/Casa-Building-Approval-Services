import { useEffect } from "react";
import SiteNavbar from "../../components/feature/SiteNavbar";
import SiteFooter from "../../components/feature/SiteFooter";
import FloatingWhatsApp from "../../components/feature/FloatingWhatsApp";
import Hero from "./components/Hero";
import WhenPermissionSection from "./components/WhenPermissionSection";
import ServicesSection from "./components/ServicesSection";
import ProcessSection from "./components/ProcessSection";
import DocumentsSection from "./components/DocumentsSection";
import StatsBar from "./components/StatsBar";
import WhyChooseSection from "./components/WhyChooseSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import { useJsonLd } from "../../hooks/useJsonLd";

export default function HomePage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://example.com";

  useEffect(() => {
    document.title = "Casa Associates Building Approval Experts";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc)
      metaDesc.setAttribute(
        "content",
        "Casa Associates \u2013 Expert GHMC building permission and TS-bPASS approval services in Hyderabad, Telangana. We offer HMDA layout permission, occupancy certificate, TDR services with transparent process and dedicated support."
      );
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) canonical.setAttribute("href", `${siteUrl}/`);
    window.scrollTo(0, 0);
  }, [siteUrl]);

  useJsonLd(
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${siteUrl}/#website`,
          url: `${siteUrl}/`,
          name: "Casa Associates",
          description:
            "Expert GHMC building permission and TS-bPASS approval services in Hyderabad",
          inLanguage: "en-IN",
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${siteUrl}/?s={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
          },
        },
        {
          "@type": "LocalBusiness",
          "@id": `${siteUrl}/#localbusiness`,
          name: "Casa Associates",
          description:
            "Expert GHMC building permission, TS-bPASS approval, and HMDA layout permission consultancy in Hyderabad",
          telephone: "+91-99803-77877",
          email: "ghmcbpservices@gmail.com",
          url: `${siteUrl}/`,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "17.4123487",
            longitude: "78.2432304",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "09:00",
              closes: "19:00",
            },
          ],
          sameAs: [],
          priceRange: "$$",
          areaServed: {
            "@type": "City",
            name: "Hyderabad",
            "@id": "https://www.wikidata.org/wiki/Q1361",
          },
        },
      ],
    },
    "home-jsonld"
  );

  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: '"DM Sans", sans-serif' }}
    >
      <SiteNavbar />
      <Hero />
      <WhenPermissionSection />
      <ServicesSection />
      <ProcessSection />
      <DocumentsSection />
      <StatsBar />
      <WhyChooseSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
