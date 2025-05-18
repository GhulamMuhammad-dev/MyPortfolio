import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function About() {
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    // Animation for the container
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 0.6,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        } 
      }
    );

    // Animation for the profile image
    gsap.fromTo(
      imageRef.current,
      { x: -50, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 0.8,
        delay: 0.3,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        } 
      }
    );

    // Animation for the content
    gsap.fromTo(
      contentRef.current,
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        delay: 0.7,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        } 
      }
    );

    // Animation for stats
    gsap.fromTo(
      statsRef.current,
      { y: 20, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6,
        delay: 0.9,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        } 
      }
    );
  }, []);

  return (
    <section id="about" className="section-padding py-24 bg-[#0f1624]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div ref={imageRef} className="relative">
          <div className="w-full aspect-square bg-[#162032] rounded-2xl overflow-hidden relative">
            {/* Replace with your profile image */}
            <div className="w-full h-full flex items-center justify-center text-center p-4 bg-[#1c2637]">
              <img src="/images/profileimg.webp" alt="Profile" className="w-full h-full object-cover rounded-2xl" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-orange-500/10"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-orange-400/20"></div>
          </div>
          
          {/* Speech Bubble / Testimonial */}
          <div className=" p-4 mt-4  bg-[#1c2637]  rounded-xl md:p-6 max-w-sm md:absolute md:top-3/5 -right-10 shadow-lg">
            <p className="text-sm text-text-secondary italic">
              "I believe interfaces that are simple + easy to use design should make tools + systems for people."
            </p>
            <div className="flex items-center mt-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-xs text-black">GM</span>
              </div>
              <div className="ml-3">
                <p className="text-xs font-medium">Ghulam Muhammad</p>
                <p className="text-xs text-text-secondary">Developer & Designer</p>
              </div>
            </div>
          </div>
        </div>
        
        <div ref={contentRef}>
          <div className="inline-block px-4 py-1 bg-[#1c2637] rounded-full text-sm mb-4">
            <span className="text-primary">About Me</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by Brands, Loved by Clients
          </h2>
          
          <div className="mb-8">
            <p className="text-text-secondary text-lg mb-4">
             I'm a versatile full stack developer and UX/UI designer who transforms complex ideas into seamless, user-focused digital experiences. With a strong foundation in both front-end aesthetics and back-end logic, I craft interactive products that are not only visually compelling but also functionally robust.
            </p>
            <p className="text-text-secondary text-lg">
              By combining design thinking with technical expertise, I bridge the gap between what users want and how systems work. From wireframes to deployment, I handle the entire development lifecycle while ensuring a consistent and delightful user experience.
            </p>
          </div>
          
          {/* Stats and expertise */}
          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-[#162032] rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary mb-2">UI/UX Design</h3>
              <p className="text-sm text-text-secondary">Crafting intuitive interfaces that are both beautiful and easy to use.</p>
            </div>
            <div className="bg-[#162032] rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary mb-2">Frontend & Backend Dev</h3>
              <p className="text-sm text-text-secondary">Building modern, scalable web apps—from dynamic UIs to secure APIs and databases.</p>
            </div>
            <div className="bg-[#162032] rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary mb-2">Brand Identity</h3>
              <p className="text-sm text-text-secondary">Creating cohesive digital branding that connects with audiences.</p>
            </div>
          </div>
          
          <a href="#contact" className="button-primary inline-flex items-center">
            Let's Bring Your Vision to Life
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 