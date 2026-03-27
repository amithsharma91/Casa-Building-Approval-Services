const stats = [
  { value: "500+", label: "Approvals Delivered", icon: "ri-award-line" },
  { value: "15+", label: "Years Experience", icon: "ri-time-line" },
  { value: "98%", label: "Success Rate", icon: "ri-bar-chart-grouped-line" },
  { value: "7+", label: "Services Offered", icon: "ri-service-line" },
];

export default function StatsBar() {
  return (
    <section className="py-14" style={{ background: "#C8960C" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(11,31,58,0.18)" }}>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center flex flex-col items-center py-8 px-4 lg:px-8 xl:px-10"
              style={{ background: "#C8960C" }}
            >
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-3 rounded-full"
                style={{ background: "rgba(11,31,58,0.12)" }}
              >
                <i
                  className={`${stat.icon} text-xl sm:text-2xl`}
                  style={{ color: "rgba(11,31,58,0.65)" }}
                ></i>
              </div>
              <span
                className="text-4xl sm:text-5xl font-bold leading-none mb-2"
                style={{ color: "#0B1F3A", fontFamily: '"Playfair Display", serif' }}
              >
                {stat.value}
              </span>
              <span
                className="text-xs sm:text-sm font-medium leading-snug"
                style={{ color: "rgba(11,31,58,0.75)", fontFamily: '"DM Sans", sans-serif' }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
