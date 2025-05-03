import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const projectsRef = useRef(null);
  const projectRefs = useRef([]);

  const projects = [
    {
      id: 1,
      title: "Brand Identity Design",
      description: "Modern and innovative branding solutions with clean UI and exceptional design.",
      image: "/images/project1Img.png", // placeholder - replace with actual images
      tags: ["UI/UX", "Branding"],
      link: "https://trendmovies112.netlify.app/",
      size: "large", // large or small (for bento grid)
      color: "bg-gradient-to-br from-gray-800 to-gray-900",
      accent: "border-l-4 border-orange-500"
    },
    {
      id: 2,
      title: "Product Showcase",
      description: "Minimal product display with elegant composition and powerful messaging.",
      image: "/images/project2.jpg", // Added image path
      tags: ["Web Design", "Product"],
      link: "https://example.com/project2",
      size: "small",
      color: "bg-gradient-to-br from-orange-400/20 to-orange-500/20",
      accent: "border-l-4 border-orange-400"
    },
    {
      id: 3,
      title: "Creative Agency Site",
      description: "Bold and creative website design for agencies with attention to detail.",
      image: "/images/project3.jpg", // Added image path
      tags: ["UI/UX", "Development"],
      link: "https://example.com/project3", 
      size: "small",
      color: "bg-gradient-to-br from-gray-800 to-gray-900",
      accent: "border-l-4 border-orange-300"
    },
    {
      id: 4,
      title: "Digital Experience Platform",
      description: "Clean and modern interface for an intuitive digital experience platform.",
      image: "/images/project4.jpg", // Added image path
      tags: ["Branding", "Web Design"],
      link: "https://example.com/project4",
      size: "large",
      color: "bg-gradient-to-br from-orange-500/20 to-orange-600/20",
      accent: "border-l-4 border-orange-500"
    },
  ];

  useEffect(() => {
    // Animation for section title
    gsap.fromTo(
      ".projects-title",
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        scrollTrigger: {
          trigger: ".projects-title",
          start: "top 80%",
        } 
      }
    );

    // Animation for each project card
    projectRefs.current.forEach((project, index) => {
      if (project) {
        gsap.fromTo(
          project,
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.6, 
            delay: index * 0.2,
            scrollTrigger: {
              trigger: project,
              start: "top 85%",
            } 
          }
        );
      }
    });
  }, []);

  return (
    <section id="projects" ref={projectsRef} className="section-padding py-24">
      <div className="mb-16 max-w-3xl">
        <div className="inline-block px-4 py-1 bg-[#1c2637] rounded-full text-sm mb-4">
          <span className="text-primary">Selected Projects</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 projects-title">Design Solutions That Elevate Your Brand</h2>
        <p className="text-text-secondary text-lg">
          From strategy to execution, I provide tailored design services that help brands stand out and create meaningful connections.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(300px,auto)] gap-6">
        {projects.map((project, index) => (
          <a 
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            ref={el => projectRefs.current[index] = el}
            className={`project-card transition-all duration-300 hover:shadow-xl hover:shadow-[#4ade80]/10 hover:translate-y-[-5px] overflow-hidden ${project.accent} ${
              project.size === 'large' 
                ? 'md:col-span-2 lg:col-span-2 row-span-2' 
                : index % 3 === 0 
                  ? 'lg:col-span-1' 
                  : ''
            }`}
          >
            <div className={`h-full relative overflow-hidden group ${project.color}`}>
              {/* Background Image */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
                <div>
                  <span className="text-xs text-primary bg-[#1c2637] px-3 py-1 rounded-full inline-block mb-4">0{index + 1}</span>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-xs md:text-sm text-text-secondary mb-4 max-w-md">{project.description}</p>
                  
                  {/* Project Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs bg-[#1c2637] text-primary px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* View Project Button - Always visible on mobile, fade in on desktop */}
                <div className="md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center text-xs md:text-sm font-medium text-primary bg-[#1c2637] px-3 py-1 md:px-4 md:py-2 rounded-full">
                    View Project
                    <svg className="ml-2 w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </div>
              </div>
              
              {/* Background Pattern/Gradient */}
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-orange-500/10 to-transparent"></div>
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-orange-500/5 -mr-12 -mt-12"></div>
            </div>
          </a>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <a href="#contact" className="button-primary inline-flex items-center">
          Let's Create Something Exceptional
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
} 