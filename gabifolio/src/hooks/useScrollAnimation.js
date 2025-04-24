import { useEffect } from 'react';

export default function useScrollAnimation(className = 'fade-in-up') {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${className}`);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, [className]);
}
