import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const description = descriptionRef.current;
    const buttons = buttonsRef.current;

    // Create a timeline for the hero section
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animate elements in sequence
    tl.fromTo(
      title,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 }
    )
    .fromTo(
      description,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 },
      '-=0.6' // Start a bit before the previous animation ends
    )
    .fromTo(
      buttons.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 },
      '-=0.6'
    );
  }, []);

  return (
    <section id="home" ref={heroRef} className="section-padding mt-20 md:mt-20 min-h-[90vh] flex items-center">
      <div className="max-w-3xl">
        <div className="inline-block px-4 py-1 bg-[#1c2637] rounded-full text-sm mb-4">
          <span className="text-primary">UI/UX Designer & Developer</span>
        </div>
        
        <h1 ref={titleRef} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Building <span className="gradient-text">Digital Experiences</span> That Work — and Wow.
        </h1>
        
        <p ref={descriptionRef} className="text-lg md:text-xl mb-10 text-text-secondary max-w-2xl">
          I'm a Developer and UX/UI Designer who crafts seamless, user-first web solutions
          with clean code and intentional design. Let's create something extraordinary.
        </p>
        
        <div ref={buttonsRef} className="flex flex-wrap gap-4">
          <a 
            href="#contact" 
            className="button-primary"
          >
            Contact
          </a>
          <a 
            href="#projects" 
            className="button-secondary"
          >
            My Work
          </a>
        </div>
      </div>
    </section>
  );
} 