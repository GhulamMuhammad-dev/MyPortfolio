import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollToPlugin);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    // Close mobile menu if open
    if (isMenuOpen) setIsMenuOpen(false);
    
    // Smooth scroll to section
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `#${sectionId}`, offsetY: 80 },
      ease: 'power3.inOut'
    });
  };

  // Handle scroll events to update active section and navbar style
  useEffect(() => {
    const handleScroll = () => {
      // Add background when scrolled
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate navbar on mount
  useEffect(() => {
    gsap.fromTo(
      '.navbar',
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  }, []);

  return (
    <nav className={`navbar py-6 px-4 md:px-8 lg:px-32 flex justify-between items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#111827] shadow-lg' : ''}`}>
      <div className="flex items-center">
        <a href="#" onClick={() => scrollToSection('home')} className="text-xl font-bold">portfolio</a>
      </div>
      
      {/* Mobile menu button */}
      <button 
        className="md:hidden flex items-center"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          {isMenuOpen ? (
            <path d="M18 6 6 18M6 6l12 12" />
          ) : (
            <path d="M4 12h16M4 6h16M4 18h16" />
          )}
        </svg>
      </button>
      
      {/* Desktop menu */}
      <div className="hidden md:flex items-center space-x-8">
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          className={`transition-colors ${activeSection === 'home' ? 'text-primary' : 'text-text hover:text-primary'}`}
        >
          Home
        </a>
        <a 
          href="#about" 
          onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
          className={`transition-colors ${activeSection === 'about' ? 'text-primary' : 'text-text hover:text-primary'}`}
        >
          About
        </a>
        <a 
          href="#skills" 
          onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
          className={`transition-colors ${activeSection === 'skills' ? 'text-primary' : 'text-text hover:text-primary'}`}
        >
          Skills
        </a>
        <a 
          href="#projects" 
          onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
          className={`transition-colors ${activeSection === 'projects' ? 'text-primary' : 'text-text hover:text-primary'}`}
        >
          Projects
        </a>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#1c2637] md:hidden z-50 p-4">
          <div className="flex flex-col space-y-4">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
              className={`transition-colors ${activeSection === 'home' ? 'text-primary' : 'text-text hover:text-primary'}`}
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
              className={`transition-colors ${activeSection === 'about' ? 'text-primary' : 'text-text hover:text-primary'}`}
            >
              About
            </a>
            <a 
              href="#skills" 
              onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
              className={`transition-colors ${activeSection === 'skills' ? 'text-primary' : 'text-text hover:text-primary'}`}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
              className={`transition-colors ${activeSection === 'projects' ? 'text-primary' : 'text-text hover:text-primary'}`}
            >
              Projects
            </a>
          </div>
        </div>
      )}
    </nav>
  );
} 