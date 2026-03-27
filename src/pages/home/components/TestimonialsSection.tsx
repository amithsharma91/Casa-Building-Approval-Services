import { useInView, animStyles } from "../../../hooks/useInView";

const testimonials = [
  {
    name: "Ravi Shankar Reddy",
    location: "Bachupally, Hyderabad",
    role: "Residential Owner",
    text: "Casa Associates made the GHMC building permission process completely stress-free. They handled all documents, plan drafting, and follow-ups professionally. Got my TG-BPASS / BuildNow approval within 60 days!",
    rating: 5,
  },
  {
    name: "Sunita Narayana",
    location: "Kondapur, Hyderabad",
    role: "Commercial Builder",
    text: "I had tried getting HMDA layout permission on my own for months without success. Casa Associates stepped in and got it cleared within 8 weeks. Transparent pricing and excellent communication throughout.",
    rating: 5,
  },
  {
    name: "Mohammed Akhtar",
    location: "Miyapur, Hyderabad",
    role: "Property Investor",
    text: "Used their Road Widening Check service before purchasing a plot. Turned out a portion was affected by master plan road. Saved me from a huge mistake. Highly recommend their services to all property buyers.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const { ref: headerRef, inView: headerInView } = useInView(0.15);
  const { ref: cardsRef, inView: cardsInView } = useInView(0.05);

  return (
    <section id="testimonials" className="py-24 lg:py-32" style={{ background: "#0B1F3A" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div
            className="text-xs font-semibold tracking-widest uppercase mb-5"
            style={{ color: "#C8960C", fontFamily: '"DM Sans", sans-serif', letterSpacing: "0.15em", ...animStyles(headerInView, 0) }}
          >
            Client Stories
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: '"Playfair Display", serif', ...animStyles(headerInView, 0.1) }}
          >
            What Our Clients Say
          </h2>
          <p
            className="text-base text-white/50 max-w-lg mx-auto leading-loose"
            style={{ fontFamily: '"DM Sans", sans-serif', ...animStyles(headerInView, 0.2) }}
          >
            Over 500 families and businesses across Hyderabad have trusted Casa Associates for their building approval services.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="flex flex-col p-8 rounded-sm transition-all duration-300 hover:-translate-y-1"
              style={{
                background: i === 1 ? "rgba(200,150,12,0.1)" : "rgba(255,255,255,0.06)",
                border: i === 1 ? "1px solid rgba(200,150,12,0.4)" : "1px solid rgba(255,255,255,0.1)",
                ...animStyles(cardsInView, i * 0.12),
              }}
            >
              {/* Rating */}
              <div className="flex items-center gap-1.5 mb-6">
                {Array.from({ length: t.rating }).map((_, ri) => (
                  <span key={ri} className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-star-fill text-base" style={{ color: "#C8960C" }}></i>
                  </span>
                ))}
              </div>

              {/* Quote mark */}
              <div
                className="text-5xl mb-4 leading-none"
                style={{ color: "rgba(200,150,12,0.5)", fontFamily: '"Playfair Display", serif' }}
              >
                &ldquo;
              </div>

              {/* Text */}
              <p
                className="text-base text-white/75 leading-loose flex-1 mb-8"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                {t.text}
              </p>

              {/* Author */}
              <div
                className="pt-6 flex items-center gap-4"
                style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-base font-bold flex-shrink-0"
                  style={{ background: "#C8960C", color: "#0B1F3A", fontFamily: '"Playfair Display", serif' }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div
                    className="text-base font-semibold text-white mb-0.5"
                    style={{ fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-xs text-white/45"
                    style={{ fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {t.role} &bull; {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
