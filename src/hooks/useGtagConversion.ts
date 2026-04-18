// Extend Window interface so TypeScript knows about gtag_report_conversion
declare global {
  interface Window {
    gtag_report_conversion: (url?: string) => boolean;
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

/**
 * Returns a stable conversion-tracking handler.
 * Safe to call even if gtag hasn't loaded yet (no-ops gracefully).
 */
export function useGtagConversion() {
  const trackConversion = (url?: string): boolean => {
    if (typeof window.gtag_report_conversion === 'function') {
      return window.gtag_report_conversion(url);
    }
    // Fallback: if gtag not loaded, just navigate
    if (url) {
      window.location.href = url;
    }
    return false;
  };

  return { trackConversion };
}

export default useGtagConversion;
