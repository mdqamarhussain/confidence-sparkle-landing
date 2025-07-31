import { useEffect, useRef } from "react";

export const useScrollReveal = () => {
  const elementsRef = useRef<Element[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements with scroll-reveal class
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
    scrollRevealElements.forEach((el, index) => {
      el.classList.add(`stagger-${(index % 5) + 1}`);
      observer.observe(el);
    });

    elementsRef.current = Array.from(scrollRevealElements);

    return () => {
      elementsRef.current.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null;
};

export const useProgressBar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const progressBars = document.querySelectorAll('[data-progress]');
      
      progressBars.forEach((bar) => {
        const rect = bar.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          const progressValue = bar.getAttribute('data-progress');
          const progressElement = bar.querySelector('.progress-fill') as HTMLElement;
          
          if (progressElement && progressValue) {
            progressElement.style.width = `${progressValue}%`;
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
};