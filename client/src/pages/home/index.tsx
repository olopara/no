import { useEffect } from 'react';
import Hero from './Hero';
import Features from './Features';
import Plans from './Plans';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import CTA from './CTA';

const Home = () => {
  useEffect(() => {
    document.title = "QuantumHost: Premium Minecraft Server Hosting";
    
    // Close mobile menu if open when navigating to sections
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          e.preventDefault();
          
          // Get the target section id
          const href = target.getAttribute('href');
          if (href) {
            // Close mobile menu
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = '';
            
            // Scroll to section
            const targetSection = document.querySelector(href);
            if (targetSection) {
              setTimeout(() => {
                window.scrollTo({
                  top: (targetSection as HTMLElement).offsetTop - 80,
                  behavior: 'smooth'
                });
              }, 100);
            }
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return (
    <main>
      <Hero />
      <Features />
      <Plans />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
};

export default Home;
