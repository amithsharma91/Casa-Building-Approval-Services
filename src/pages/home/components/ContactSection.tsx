import { useGtagConversion } from '@/hooks/useGtagConversion';

const WA_LINK =
  "https://wa.me/919008710698?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.%0A%0AFull%20Name%3A%20%0APhone%20Number%3A%20%0AEmail%20Address%3A%20%0AService%20Required%3A%20%0AMessage%3A%20";

const contactDetails = [
  {
    icon: "ri-phone-line",
    label: "Call Us",
    value: "+91 90087 10698",
    href: "tel:+919008710698",
  },
  {
    icon: "ri-mail-line",
    label: "Email",
    value: "Casa.Approvals@gmail.com",
    href: "mailto:Casa.Approvals@gmail.com",
  },
  {
    icon: "ri-map-pin-line",
    label: "Location",
    value: "Road No. 01, Avenue 07, 4th Floor, Bhooma Plaza, near GVK One Mall, Banjara Hills, Hyderabad 500034",
    href: "https://maps.app.goo.gl/Xgnzpcu3WbQ3maij7",
  },
  {
    icon: "ri-time-line",
    label: "Working Hours",
    value: "Mon – Sat: 9:00 AM – 7:00 PM",
    href: null,
  },
];

const steps = [
  { num: "1", text: "Click the button below to open WhatsApp", icon: "ri-whatsapp-line" },
  { num: "2", text: "Fill in your name, phone, email, and service required in the pre-filled message", icon: "ri-edit-line" },
  { num: "3", text: "Hit send — our team will reply promptly with free expert guidance", icon: "ri-reply-line" },
];

export default function ContactSection() {
  const { trackConversion } = useGtagConversion();

  return (
    <section id="contact" className="py-20 lg:py-28" style={{ background: "#F8F6F0" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="text-center mb-12">
          <div
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#C8960C", fontFamily: '"DM Sans", sans-serif', letterSpacing: "0.15em" }}
          >
            Get In Touch
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#0B1F3A", fontFamily: '"Playfair Display", serif' }}
          >
            Contact Casa Associates
          </h2>
          <p
            className="text-base text-gray-500 max-w-lg mx-auto leading-loose"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            Reach out for a free consultation on GHMC building permission, TG-BPASS / BuildNow approval, or any property-related queries in Hyderabad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 items-start">

          {/* LEFT — WhatsApp CTA Panel */}
          <div className="rounded-sm overflow-hidden" style={{ border: "1px solid #EEEAE0" }}>

            {/* Steps */}
            <div className="p-7 lg:p-9" style={{ background: "#FFFFFF" }}>
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: "#0B1F3A", fontFamily: '"Playfair Display", serif' }}
              >
                Get Free Consultation on WhatsApp
              </h3>
              <p
                className="text-sm text-gray-500 mb-7 leading-relaxed"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                Send your details on WhatsApp and our team will assist you quickly.
              </p>
              <div className="flex flex-col gap-5">
                {steps.map((step) => (
                  <div key={step.num} className="flex items-start gap-4">
                    <div
                      className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full font-bold text-sm"
                      style={{ background: "#0B1F3A", color: "#C8960C" }}
                    >
                      {step.num}
                    </div>
                    <div className="flex items-center gap-3 pt-0.5">
                      <span className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                        <i className={`${step.icon} text-base`} style={{ color: "#C8960C" }}></i>
                      </span>
                      <span
                        className="text-sm text-gray-600 leading-snug"
                        style={{ fontFamily: '"DM Sans", sans-serif' }}
                      >
                        {step.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button Block */}
            <div className="p-7 lg:p-9" style={{ background: "#0B1F3A" }}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="nofollow noreferrer"
                onClick={() => trackConversion(WA_LINK)}
                className="w-full flex items-center justify-center gap-3 py-4 bg-green-500 hover:bg-green-400 rounded-sm text-white font-semibold text-base cursor-pointer transition-all whitespace-nowrap"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                <span className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-whatsapp-line text-xl"></i>
                </span>
                Get Free Consultation on WhatsApp
              </a>
              <p
                className="text-xs text-white/40 text-center mt-3"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                Opens WhatsApp with a pre-filled template — free consultation, no upfront charges
              </p>
            </div>

            {/* Also reachable strip */}
            <div
              className="px-7 py-4 flex flex-wrap items-center gap-2"
              style={{ background: "#FDF3DC", borderTop: "1px solid rgba(200,150,12,0.2)" }}
            >
              <span
                className="text-xs font-semibold text-gray-600"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                Also:
              </span>
              <a
                href="tel:+919008710698"
                onClick={() => trackConversion()}
                className="text-xs font-semibold hover:underline cursor-pointer"
                style={{ color: "#9e7509", fontFamily: '"DM Sans", sans-serif' }}
              >
                +91 90087 10698
              </a>
              <span className="text-gray-400 text-xs">·</span>
              <a
                href="mailto:Casa.Approvals@gmail.com"
                className="text-xs font-semibold hover:underline cursor-pointer"
                style={{ color: "#9e7509", fontFamily: '"DM Sans", sans-serif' }}
              >
                Casa.Approvals@gmail.com
              </a>
            </div>
          </div>

          {/* RIGHT — Contact Details + Map */}
          <div className="flex flex-col gap-4">

            {/* Contact Cards */}
            {contactDetails.map((c) => (
              <div
                key={c.label}
                className="flex items-start gap-4 p-5 rounded-sm bg-white"
                style={{ border: "1px solid #EEEAE0" }}
              >
                <span
                  className="w-11 h-11 flex items-center justify-center rounded-sm flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(200,150,12,0.1)" }}
                >
                  <i className={`${c.icon} text-lg`} style={{ color: "#C8960C" }}></i>
                </span>
                <div className="min-w-0">
                  <div
                    className="text-xs text-gray-400 mb-1 font-medium"
                    style={{ fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {c.label}
                  </div>
                  {c.href ? (
                    <a
                      href={c.href}
                      onClick={c.href.startsWith("tel:") ? () => trackConversion() : undefined}
                      className="text-sm font-semibold leading-snug hover:underline cursor-pointer"
                      style={{ color: "#0B1F3A", fontFamily: '"DM Sans", sans-serif' }}
                      {...(c.href.startsWith("http") ? { target: "_blank", rel: "nofollow noreferrer" } : {})}
                    >
                      {c.value}
                    </a>
                  ) : (
                    <span
                      className="text-sm font-semibold leading-snug"
                      style={{ color: "#0B1F3A", fontFamily: '"DM Sans", sans-serif' }}
                    >
                      {c.value}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Map */}
            <div
              className="rounded-sm overflow-hidden"
              style={{ height: "220px", border: "1px solid #EEEAE0" }}
            >
              <iframe
                title="Casa Associates Hyderabad Location"
                src="https://maps.google.com/maps?q=CCCX%2B85+Hyderabad,+Telangana&t=m&z=17&ie=UTF8&iwloc=near&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                className="border-0"
                allowFullScreen
              ></iframe>
            </div>

            {/* Directions button */}
            <a
              href="https://maps.app.goo.gl/Xgnzpcu3WbQ3maij7"
              target="_blank"
              rel="nofollow noreferrer"
              className="flex items-center justify-center gap-2 py-3.5 rounded-sm text-sm font-semibold cursor-pointer transition-all hover:opacity-90 whitespace-nowrap"
              style={{ background: "#0B1F3A", color: "white", fontFamily: '"DM Sans", sans-serif' }}
            >
              <span className="w-4 h-4 flex items-center justify-center">
                <i className="ri-navigation-line text-sm" style={{ color: "#C8960C" }}></i>
              </span>
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
