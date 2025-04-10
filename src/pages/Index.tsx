
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star as StarIcon, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import FeaturedCars from "@/components/FeaturedCars";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

// Extended Car interface to include rating and reviewCount
interface Car {
  id: string;
  name: string;
  image: string;
  type?: string;
  price: number;
  year: number;
  seats: number;
  transmission?: string;
  rating?: number;
  reviewCount?: number;
  carClass?: string;
  bodyType?: string;
}

// Sample cars data with ratings
const premiumCars: Car[] = [
  {
    id: "1",
    name: "Mercedes-Benz S-Class",
    image: "/placeholder.svg",
    type: "Luxury Sedan",
    price: 299,
    year: 2023,
    seats: 5,
    transmission: "Automatic",
    rating: 4.9,
    reviewCount: 142
  },
  {
    id: "2",
    name: "BMW 7 Series",
    image: "/placeholder.svg",
    type: "Luxury Sedan",
    price: 289,
    year: 2023,
    seats: 5,
    transmission: "Automatic",
    rating: 4.8,
    reviewCount: 128
  },
  {
    id: "3",
    name: "Audi A8",
    image: "/placeholder.svg",
    type: "Luxury Sedan",
    price: 279,
    year: 2023,
    seats: 5,
    transmission: "Automatic",
    rating: 4.7,
    reviewCount: 116
  }
];

// Define sample car data for FeaturedCars component
const featuredCarsData = [
  {
    id: "4",
    name: "Toyota Camry",
    price: 65,
    city: "New York",
    year: 2022,
    carClass: "Sedan",
    bodyType: "Sedan",
    engineType: "Hybrid",
    seats: 5,
    features: [{ name: "GPS" }, { name: "Bluetooth" }, { name: "Cruise Control" }],
    image: "/placeholder.svg"
  },
  {
    id: "5",
    name: "Honda CR-V",
    price: 75,
    city: "Los Angeles",
    year: 2022,
    carClass: "SUV",
    bodyType: "SUV",
    engineType: "Gasoline",
    seats: 5,
    features: [{ name: "GPS" }, { name: "Bluetooth" }, { name: "Backup Camera" }],
    image: "/placeholder.svg"
  },
  {
    id: "6",
    name: "Ford Mustang",
    price: 120,
    city: "Miami",
    year: 2021,
    carClass: "Sports",
    bodyType: "Coupe",
    engineType: "Gasoline",
    seats: 4,
    features: [{ name: "Leather Seats" }, { name: "Premium Sound" }, { name: "Convertible" }],
    image: "/placeholder.svg",
    discountPercentage: 15
  }
];

const locationsData = [
  {
    name: "New York",
    image: "/placeholder.svg",
    description: "Explore the city that never sleeps with our premium car rentals.",
  },
  {
    name: "Los Angeles",
    image: "/placeholder.svg",
    description: "Discover sunny LA in style with our wide selection of vehicles.",
  },
  {
    name: "Miami",
    image: "/placeholder.svg",
    description: "Experience the vibrant nightlife and beaches of Miami with our luxury cars.",
  },
];

const testimonials = [
  {
    name: "Alice Johnson",
    review: "Uncar made renting a car so easy and enjoyable. The service was top-notch!",
    rating: 5,
  },
  {
    name: "Bob Smith",
    review: "I loved the variety of cars available. Found the perfect one for my weekend getaway.",
    rating: 4,
  },
  {
    name: "Charlie Brown",
    review: "Great prices and excellent customer support. Will definitely use Uncar again.",
    rating: 5,
  },
];

const Index = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <FeaturedCars title="Featured Cars" cars={featuredCarsData} locations={locationsData} />

      {/* Premium Rentals Section */}
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
                  <p className="text-sm opacity-70 mb-4">{car.type} • {car.year} • {car.seats} Seats • {car.transmission}</p>
                  
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

      {/* Locations Section */}
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
            {locationsData.map((location, index) => (
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

      {/* Testimonials Section */}
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
