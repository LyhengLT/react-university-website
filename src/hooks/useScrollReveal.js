import { useEffect } from 'react';

export function useScrollReveal(key) {
  useEffect(() => {
    let observer;
    const timeout = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal');
      if (!elements.length) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );

      elements.forEach(el => {
        el.classList.remove('revealed');
        observer.observe(el);
      });
    }, 80);

    return () => {
      clearTimeout(timeout);
      if (observer) observer.disconnect();
    };
  }, [key]);
}
