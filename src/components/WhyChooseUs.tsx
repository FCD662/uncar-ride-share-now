
import { useState, useEffect } from "react";
import { Car, Shield, Calendar, ConceirgeBell } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector('.why-choose-us');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  const features = [
    {
      icon: <Car className="h-12 w-12" strokeWidth={1.5} />,
      title: "Premium Fleet",
      description: "Hand-selected luxury cars, always in perfect condition for an unparalleled driving experience."
    },
    {
      icon: <Shield className="h-12 w-12" strokeWidth={1.5} />,
      title: "Fully Insured",
      description: "Comprehensive coverage for every trip, ensuring peace of mind throughout your journey."
    },
    {
      icon: <Calendar className="h-12 w-12" strokeWidth={1.5} />,
      title: "Flexible Booking",
      description: "Hourly, daily, or long-term rentals tailored to your schedule with seamless reservation process."
    },
    {
      icon: <ConceirgeBell className="h-12 w-12" strokeWidth={1.5} />,
      title: "Concierge Support",
      description: "24/7 customer service just a message away, ready to assist with any request or inquiry."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="why-choose-us py-24 bg-gradient-to-b from-graphite to-black relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: "radial-gradient(circle at 25px 25px, white 1px, transparent 0)", 
          backgroundSize: "50px 50px" 
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Us</h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="feature-card bg-black/30 backdrop-blur-sm border border-white/5 rounded-lg p-8 transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_25px_rgba(255,255,255,0.05)]"
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3 } 
              }}
            >
              <div className="flex justify-center mb-6 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gold/20 rounded-full blur-lg transform transition-all duration-300 group-hover:scale-125 group-hover:bg-gold/30"></div>
                  <div className="relative text-gold transition-all duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">{feature.title}</h3>
              <p className="text-white/70 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
