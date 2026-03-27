import { useEffect } from 'react';

/**
 * Injects a Schema.org JSON-LD <script> tag into <head>.
 * Automatically cleans up on unmount so schemas don't bleed between routes.
 */
export function useJsonLd(schema: object | object[], scriptId = 'page-jsonld') {
  useEffect(() => {
    const remove = () => {
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();
    };
    remove();
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = scriptId;
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return remove;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
