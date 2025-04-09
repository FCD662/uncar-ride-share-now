
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star as StarIcon, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import FeaturedCars from "@/components/FeaturedCars";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { premiumCars } from "@/data/cars";
import { locations } from "@/data/locations";
import { testimonials } from "@/data/testimonials";

interface Car {
  id: string;
  name: string;
  image: string;
  type?: string; // Make optional since we fallback to bodyType
  price: number;
  year: number;
  seats: number;
  transmission: string;
  rating?: number; // Add this property as optional
  reviewCount?: number; // Add this property as optional
  carClass?: string; // Add this property as optional
  bodyType?: string; // Add this property as optional
}

const Index = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <FeaturedCars title="Our Premium Collection" cars={premiumCars} />

      <section className="py-20 bg-graphite text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Exclusive <span className="text-gradient">Premium</span> Collection
            </h2>
            <p className="text-lg opacity-80">
              Experience unparalleled luxury with our premium fleet of high-end vehicles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumCars.map((car) => (
              <motion.div 
                key={car.id} 
                className="featured-car glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="aspect-video bg-gray-800 rounded-t-xl overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{car.name}</h3>
                    <span className="text-xl font-bold">${car.price}<span className="text-sm opacity-70">/day</span></span>
                  </div>
                  <p className="text-sm opacity-70 mb-4">{car.bodyType || car.type} • {car.year} • {car.seats} Seats • {car.transmission}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(car.rating || 5) ? 'text-gold' : 'text-gray-500'}`}
                            fill={i < Math.floor(car.rating || 5) ? 'currentColor' : 'none'} 
                          />
                        ))}
                      </div>
                      <span className="text-sm opacity-70">({car.reviewCount || 0})</span>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="text-white hover:text-gold">
                      Reserve <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button className="premium-btn premium-btn-primary">View All Premium Cars</Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Explore <span className="text-gradient">Our Locations</span>
            </h2>
            <p className="text-lg opacity-80">
              Find us in the most popular cities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                className="location-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="aspect-video bg-gray-300 rounded-t-xl overflow-hidden">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{location.name}</h3>
                  <p className="text-gray-600">{location.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our <span className="text-gradient">Customers Say</span>
            </h2>
            <p className="text-lg opacity-80">
              Real stories from satisfied customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-400'
                          }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{testimonial.review}</p>
                <p className="font-medium">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
