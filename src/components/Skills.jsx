import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Skills() {
  const skillsRef = useRef(null);
  const skillCardsRef = useRef([]);

  useEffect(() => {
    // Animation for each skill card
    skillCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.6, 
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            } 
          }
        );
      }
    });

    // Add hover animations
    const handleMouseEnter = (card) => {
      gsap.to(card, { y: -10, duration: 0.3, ease: 'power2.out' });
    };
    
    const handleMouseLeave = (card) => {
      gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
    };

    // Add event listeners to each card
    skillCardsRef.current.forEach((card) => {
      if (card) {
        card.addEventListener('mouseenter', () => handleMouseEnter(card));
        card.addEventListener('mouseleave', () => handleMouseLeave(card));
      }
    });

    // Cleanup event listeners on unmount
    return () => {
      skillCardsRef.current.forEach((card) => {
        if (card) {
          card.removeEventListener('mouseenter', () => handleMouseEnter(card));
          card.removeEventListener('mouseleave', () => handleMouseLeave(card));
        }
      });
    };
  }, []);

  const skills = [
    {
      id: 1,
      title: "Brand Identity & Strategy",
      description: "From logo design to full branding, I create distinctive visual identities that resonate with your vision and resonate with your audience.",
      icon: "01",
      color: "border-l-4 border-orange-500"
    },
    {
      id: 2,
      title: "UX/UI Design & Digital Experiences",
      description: "I create intuitive and beautiful digital experiences that enhance engagement and bring products to life.",
      icon: "02",
      color: "border-l-4 border-orange-400"
    },
    {
      id: 3,
      title: "Fast Integration",
      description: "Seamless implementation of designs into functional, responsive websites and applications.",
      icon: "03",
      color: "border-l-4 border-orange-300"
    }
  ];

  return (
    <section id="skills" ref={skillsRef} className="section-padding py-24 bg-[#111827]">
      <div className="mb-16 max-w-3xl">
        <div className="inline-block px-4 py-1 bg-[#1c2637] rounded-full text-sm mb-4">
          <span className="text-primary">Trusted Expertise</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Crafting Meaningful Brands & Intuitive Digital Experiences</h2>
        <p className="text-text-secondary text-lg">
          I'm a London-based Brand and UI/UX Designer with a background in digital experiences. With a strategic approach and a keen eye for detail, I connect with brands to deliver effective results.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {skills.map((skill, index) => (
          <div 
            key={skill.id}
            ref={el => skillCardsRef.current[index] = el}
            className={`bg-[#162032] rounded-xl overflow-hidden transition-all duration-300 ${skill.color}`}
          >
            <div className="p-8 h-full flex flex-col">
              <span className="text-4xl font-bold text-orange-500/30 mb-6">{skill.icon}</span>
              <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
              <p className="text-text-secondary text-sm mb-6 flex-grow">{skill.description}</p>
              
              <a href="#contact" className="text-primary text-sm font-medium flex items-center">
                Learn more
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#162032] rounded-xl p-6 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-4">
            <span className="text-orange-500 font-bold text-xl">20+</span>
          </div>
          <p className="text-text-secondary text-center">Years Experience</p>
        </div>
        
        <div className="bg-[#162032] rounded-xl p-6 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-orange-400/10 flex items-center justify-center mb-4">
            <span className="text-orange-400 font-bold text-xl">200+</span>
          </div>
          <p className="text-text-secondary text-center">Happy Clients</p>
        </div>
        
        <div className="bg-[#162032] rounded-xl p-6 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-orange-300/10 flex items-center justify-center mb-4">
            <span className="text-orange-300 font-bold text-xl">500+</span>
          </div>
          <p className="text-text-secondary text-center">Projects Done</p>
        </div>
      </div>
    </section>
  );
} 