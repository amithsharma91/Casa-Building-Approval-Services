import { useState, useEffect } from "react";
import { useGtagConversion } from "@/hooks/useGtagConversion";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [visible, setVisible] = useState(false);
  const { trackConversion } = useGtagConversion();

  // ... existing code ...

  if (!visible) return null;

  const WA_URL = "https://wa.me/919000975046?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.%0A%0AFull%20Name%3A%20%0APhone%20Number%3A%20%0AEmail%20Address%3A%20%0AService%20Required%3A%20%0AMessage%3A%20";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {showTooltip && (
        <div
          className="relative px-4 py-2.5 rounded-sm text-xs font-medium text-white whitespace-nowrap"
          style={{ background: "#0B1F3A", fontFamily: '"DM Sans", sans-serif', border: "1px solid rgba(200,150,12,0.3)" }}
        >
          Send documents for free guidance
          <div className="absolute -bottom-1.5 right-5 w-3 h-3 rotate-45" style={{ background: "#0B1F3A", border: "1px solid rgba(200,150,12,0.3)", borderTop: "none", borderLeft: "none" }}></div>
        </div>
      )}
      <a
        href={WA_URL}
        target="_blank"
        rel="nofollow noreferrer"
        onClick={() => trackConversion(WA_URL)}
        className="relative w-14 h-14 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-400 text-white transition-all duration-300 cursor-pointer hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <i className="ri-whatsapp-line text-2xl"></i>
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-25"></span>
      </a>
    </div>
  );
}
