import { useState, useEffect } from "react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 800);
    const t2 = setTimeout(() => setShowTooltip(true), 2500);
    const t3 = setTimeout(() => setShowTooltip(false), 6000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {showTooltip && (
        <div
          className="px-4 py-2.5 rounded-sm text-xs font-medium text-white shadow-lg whitespace-nowrap animate-fade-in"
          style={{ background: "#0B1F3A", fontFamily: '"DM Sans", sans-serif', border: "1px solid rgba(200,150,12,0.3)" }}
        >
          Send documents for free guidance
          <div
            className="absolute -bottom-1.5 right-5 w-3 h-3 rotate-45"
            style={{ background: "#0B1F3A", border: "1px solid rgba(200,150,12,0.3)", borderTop: "none", borderLeft: "none" }}
          ></div>
        </div>
      )}
      <a
        href="https://wa.me/919008710698?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.%0A%0AFull%20Name%3A%20%0APhone%20Number%3A%20%0AEmail%20Address%3A%20%0AService%20Required%3A%20%0AMessage%3A%20"
        target="_blank"
        rel="nofollow noreferrer"
        className="relative w-14 h-14 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-400 text-white shadow-xl transition-all duration-300 cursor-pointer hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <i className="ri-whatsapp-line text-2xl"></i>
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-25"></span>
      </a>
    </div>
  );
}
