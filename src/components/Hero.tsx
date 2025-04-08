import { useEffect } from "react";
import { motion } from "framer-motion";
import LuxurySearchForm from "./LuxurySearchForm";

const Hero = () => {
  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const heroSection = document.querySelector('.hero-section');
      const heroContent = document.querySelector('.hero-content');
      
      if (heroSection && heroContent) {
        // Subtle parallax effect
        heroSection.setAttribute('style', `transform: translateY(${scrollY * 0.15}px)`);
        // Content stays in place
        heroContent.setAttribute('style', `transform: translateY(${scrollY * -0.08}px)`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Hero background - video or image */}
      <div className="absolute inset-0 hero-section">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat h-full w-full"
            style={{ backgroundImage: "url('/placeholder.svg')" }}>
          {/* Could be replaced with a real video:
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
          >
            <source src="/luxury-car.mp4" type="video/mp4" />
          </video> 
          */}
        </div>
      </div>

      {/* Dark overlay for better text contrast */}
      <div className="hero-video-overlay"></div>
      <div className="hero-gradient-overlay"></div>

      {/* Hero content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center hero-content">
        <div className="max-w-4xl">
          <motion.h2 
            className="text-sm sm:text-base text-white/80 uppercase tracking-[0.2em] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Luxury Car Experience
          </motion.h2>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Drive Luxury. <br />
            <span className="font-medium">Rent Power.</span>
          </motion.h1>
          
          <motion.p 
            className="text-white/70 mb-12 text-lg max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Experience the extraordinary with our premium fleet of luxury vehicles, 
            crafted for those who demand nothing but excellence.
          </motion.p>
          
          <div className="bg-black/30 backdrop-blur-sm p-6 md:p-8 rounded-sm border border-white/10">
            <LuxurySearchForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
