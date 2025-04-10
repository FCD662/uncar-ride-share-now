
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LuxurySearchForm from "./LuxurySearchForm";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  // Enhanced parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const heroSection = document.querySelector('.hero-background');
      const heroContent = document.querySelector('.hero-content');
      const scrollIndicator = document.querySelector('.scroll-indicator');
      
      setScrolled(scrollY > 50);
      
      if (heroSection && heroContent) {
        // Enhanced parallax effects
        heroSection.setAttribute('style', `transform: scale(${1 + scrollY * 0.0005}) translateY(${scrollY * 0.15}px)`);
        heroContent.setAttribute('style', `transform: translateY(${scrollY * -0.12}px); opacity: ${1 - scrollY * 0.002}`);
      }
      
      if (scrollIndicator) {
        scrollIndicator.setAttribute('style', `opacity: ${1 - scrollY * 0.01}`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll indicator handler
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Premium video background */}
      <div className="absolute inset-0 hero-background">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat h-full w-full"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')" }}
        >
          {/* For video implementation:
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full filter brightness-75"
          >
            <source src="/luxury-car-night.mp4" type="video/mp4" />
          </video>
          */}
        </div>
      </div>

      {/* Enhanced dark overlays for dramatic effect */}
      <div className="hero-video-overlay absolute inset-0 bg-black/50 z-10"></div>
      <div className="hero-gradient-overlay absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
      <div className="hero-vignette-overlay absolute inset-0 z-10"></div>

      {/* Hero content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center hero-content">
        <div className="max-w-4xl mx-auto md:mx-0">
          <motion.h2 
            className="text-sm sm:text-base text-white/70 uppercase tracking-[0.3em] mb-4 font-light"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Elite Automotive Experience
          </motion.h2>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-6 leading-tight tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Precision Engineering. <br />
            <span className="font-medium">Unleashed.</span>
          </motion.h1>
          
          <motion.p 
            className="text-white/70 mb-12 text-lg max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Experience the extraordinary with our curated collection of the world's most 
            exclusive vehicles, crafted for the most discerning drivers.
          </motion.p>
          
          <motion.div
            className="hero-search-container backdrop-blur-md bg-black/40 border border-white/10 rounded-sm shadow-2xl p-6 md:p-8 lg:p-10 w-full max-w-4xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <LuxurySearchForm />
          </motion.div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div 
        className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer"
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-white/70 text-sm tracking-wider mb-2">EXPLORE</span>
        <ChevronDown className="text-white/70 animate-bounce h-6 w-6" />
      </motion.div>
    </div>
  );
};

export default Hero;
