
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import CarCard from "./CarCard";
import { Badge } from "./ui/badge";

interface CarData {
  id: string;
  name: string;
  price: number;
  city: string;
  year: number;
  carClass: string;
  bodyType: string;
  engineType: string;
  seats: number;
  features: { name: string }[];
  image: string;
  discountPercentage?: number;
  isPopular?: boolean;
  isNew?: boolean;
  horsepower?: number;
  acceleration?: string;
  transmission?: string;
}

interface FeaturedCarsProps {
  title: string;
  cars: CarData[];
}

const FeaturedCars = ({ title, cars }: FeaturedCarsProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardWidth = 360; // Slightly wider card for premium look
  
  // Intersection Observer to trigger animations when section is in view
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

    const section = document.getElementById('featured-cars-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  const scrollLeft = () => {
    const newPosition = Math.max(0, scrollPosition - cardWidth);
    setScrollPosition(newPosition);
    document.getElementById('cars-container')!.scrollTo({ left: newPosition, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const container = document.getElementById('cars-container')!;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const newPosition = Math.min(maxScroll, scrollPosition + cardWidth);
    setScrollPosition(newPosition);
    container.scrollTo({ left: newPosition, behavior: 'smooth' });
  };

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="featured-cars-section" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{title}</h2>
            <div className="w-20 h-0.5 bg-gold"></div>
          </div>
          
          {/* Navigation Arrows - Shown on larger screens */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollLeft}
              className="h-12 w-12 rounded-full border-gray-300 hover:border-gold hover:bg-gold/5 transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollRight}
              className="h-12 w-12 rounded-full border-gray-300 hover:border-gold hover:bg-gold/5 transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </Button>
          </div>
        </motion.div>
        
        {/* Horizontal Scrolling Container */}
        <div 
          id="cars-container"
          className="flex overflow-x-auto gap-6 pb-8 scrollbar-none snap-x snap-mandatory"
          style={{ scrollBehavior: 'smooth' }}
        >
          {cars.map((car, index) => (
            <motion.div 
              key={car.id} 
              className="min-w-[320px] md:min-w-[360px] snap-start"
              variants={cardVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                {/* Car Image */}
                <div className="relative h-48 md:h-56 overflow-hidden bg-gray-100">
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {car.isNew && (
                      <Badge className="bg-blue-500 text-white px-2 py-1 text-xs">NEW ARRIVAL</Badge>
                    )}
                    {car.isPopular && (
                      <Badge className="bg-gold text-black px-2 py-1 text-xs">POPULAR</Badge>
                    )}
                    {car.discountPercentage && (
                      <Badge className="bg-red-500 text-white px-2 py-1 text-xs">{car.discountPercentage}% OFF</Badge>
                    )}
                  </div>
                </div>
                
                {/* Car Details */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-xl text-gray-900">{car.name}</h3>
                      <Badge variant="outline" className="mt-1 text-xs bg-gray-50">
                        {car.bodyType} {car.carClass}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">From</p>
                      <p className="text-xl font-bold text-gold">${car.price}<span className="text-sm text-gray-500">/day</span></p>
                    </div>
                  </div>
                  
                  {/* Car Specifications */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-gray-100 mb-4">
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Engine</p>
                      <p className="font-semibold text-gray-800">{car.engineType}</p>
                    </div>
                    <div className="text-center border-x border-gray-100">
                      <p className="text-xs text-gray-500">Seats</p>
                      <p className="font-semibold text-gray-800">{car.seats}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Year</p>
                      <p className="font-semibold text-gray-800">{car.year}</p>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <Button className="w-full bg-black hover:bg-gray-800 text-white transition-all">
                    Reserve Now
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile Navigation - Dots */}
        <div className="flex justify-center mt-8 md:hidden">
          <div className="flex space-x-2">
            {Array.from({ length: Math.min(5, cars.length) }).map((_, index) => (
              <button 
                key={index} 
                className={`h-2 w-2 rounded-full transition-all ${
                  index === Math.floor(scrollPosition / cardWidth) 
                    ? 'bg-gold w-6' 
                    : 'bg-gray-300'
                }`}
                onClick={() => {
                  const newPosition = index * cardWidth;
                  setScrollPosition(newPosition);
                  document.getElementById('cars-container')!.scrollTo({ 
                    left: newPosition, 
                    behavior: 'smooth' 
                  });
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
