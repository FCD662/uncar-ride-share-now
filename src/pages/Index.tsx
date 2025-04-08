import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { StarIcon, MapPinIcon, Clock, ShieldCheck, Award, ChevronRight } from "lucide-react";
import { popularCars, specialDeals } from "@/data/cars";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-white overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div 
          className="parallax-bg"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundPosition: 'center 80%'
          }}
        />
        <div className="gradient-overlay" />
        
        <div className="container mx-auto h-full relative z-10 flex flex-col justify-center px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              Experience Luxury on <span className="text-gradient">Every Road</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl">
              Premium vehicles for those who appreciate exceptional quality and performance
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="premium-btn premium-btn-primary" size="lg">
                Reserve Now
              </Button>
              <Button variant="outline" className="premium-btn premium-btn-outline" size="lg">
                Explore Fleet
              </Button>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#111111" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        
        <div className="absolute bottom-16 right-10 md:right-20 z-10 animated-car">
          <motion.img 
            src="https://www.pngmart.com/files/22/Mercedes-Benz-CLS-PNG-Photos.png" 
            alt="Luxury Car" 
            className="h-16 md:h-24 lg:h-32"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
        </div>
      </section>
      
      {/* Featured Vehicles Section */}
      <section className="content-block bg-[#111111]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Signature Collection
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Button variant="ghost" className="text-gold flex items-center gap-2">
                View All <ChevronRight size={16} />
              </Button>
            </motion.div>
          </div>
          
          <Carousel
            opts={{ loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {popularCars.map((car, index) => (
                <CarouselItem key={car.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div 
                    className="featured-car glass-card h-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="aspect-[16/9] relative overflow-hidden rounded-t-xl">
                      <img 
                        src={car.image} 
                        alt={car.name}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute top-3 right-3 bg-gold text-black font-bold px-3 py-1 rounded-full text-sm">
                        ${car.price}/day
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{car.name}</h3>
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(car.rating || 5)} ? 'text-gold' : 'text-gray-500'`} 
                            fill={i < Math.floor(car.rating || 5) ? 'currentColor' : 'none'} 
                          />
                        ))}
                        <span className="text-sm text-gray-400 ml-1">({car.reviewCount || 0})</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {car.features.slice(0, 3).map((feature, idx) => (
                          <span key={idx} className="bg-white/10 px-2 py-1 rounded-md text-xs">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-sm text-gray-400 mb-4">
                        <MapPinIcon className="h-4 w-4 mr-1" />
                        <span>{car.city}</span>
                      </div>
                      <Button className="w-full bg-midnight-blue hover:bg-midnight-blue/80">
                        Reserve Now
                      </Button>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="bg-black/50 hover:bg-black border-none text-white" />
              <CarouselNext className="bg-black/50 hover:bg-black border-none text-white" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="content-block bg-[#080808] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The Premium <span className="text-gradient">Experience</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="h-10 w-10 text-gold" />,
                title: "Seamless Reservations",
                description: "Book your premium vehicle in less than 2 minutes with our streamlined process"
              },
              {
                icon: <ShieldCheck className="h-10 w-10 text-midnight-blue" />,
                title: "100% Secure Payments",
                description: "Your transactions are protected with military-grade encryption"
              },
              {
                icon: <Award className="h-10 w-10 text-burgundy" />,
                title: "Excellence Guaranteed",
                description: "Every vehicle is meticulously inspected and detailed before delivery"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="glass-card p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="mx-auto mb-4 rounded-full bg-white/5 p-3 w-16 h-16 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 relative">
            <motion.div
              className="bg-[#111] p-6 md:p-10 rounded-xl md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Experience The Difference</h3>
              <p className="text-gray-400 mb-6">
                Our curated collection features the finest vehicles from prestigious manufacturers, 
                offering unparalleled comfort and performance for your journey.
              </p>
              <ul className="space-y-3 mb-6">
                {["24/7 Concierge Service", "Doorstep Delivery & Pickup", "Flexible Rental Periods"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mr-2 mt-1">
                      <svg className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="premium-btn premium-btn-primary">Discover More</Button>
            </motion.div>
            
            <motion.div 
              className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-5/12 h-[400px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/_PVjyY9-tJw?autoplay=0&mute=1&controls=0&loop=1&playlist=_PVjyY9-tJw"
                  title="Luxury Car Experience"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="dotPattern" patternUnits="userSpaceOnUse" width="20" height="20">
                <circle cx="10" cy="10" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
          </svg>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="content-block bg-[#111111]">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our Clients Say
          </motion.h2>
          
          <div className="asymmetric-grid">
            {[
              {
                name: "Michael Chen",
                position: "Tech Executive",
                photo: "https://randomuser.me/api/portraits/men/32.jpg",
                quote: "The Porsche Panamera was immaculate and performed flawlessly during my business trip. The concierge service was exceptional.",
                rating: 5
              },
              {
                name: "Sarah Johnson",
                position: "Lifestyle Blogger",
                photo: "https://randomuser.me/api/portraits/women/44.jpg",
                quote: "I rented the Mercedes for a photo shoot and was blown away by the attention to detail. My followers loved the content!",
                rating: 5
              },
              {
                name: "Robert Martinez",
                position: "Finance Director",
                photo: "https://randomuser.me/api/portraits/men/64.jpg",
                quote: "Seamless experience from booking to return. The vehicle was delivered precisely on time and exactly as advertised.",
                rating: 4
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-4 w-4 ${i < testimonial.rating ? 'text-gold' : 'text-gray-500'}`}
                      fill={i < testimonial.rating ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="content-block bg-[#080808]">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Available in Premium Locations</h2>
            <p className="text-gray-400">
              Our fleet is available in major metropolitan areas, with convenient pickup and delivery options.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                city: "New York",
                image: "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
                cars: 24
              },
              {
                city: "Los Angeles",
                image: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                cars: 18
              },
              {
                city: "Miami",
                image: "https://images.unsplash.com/photo-1535498730771-e735b91db4b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                cars: 15
              }
            ].map((location, index) => (
              <motion.div
                key={index}
                className="location-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="aspect-video relative">
                  <img
                    src={location.image}
                    alt={location.city}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold">{location.city}</h3>
                    <p className="text-sm">{location.cars} premium vehicles available</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="content-block bg-[#111111] relative overflow-hidden">
        <div className="parallax-bg opacity-20" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1283&q=80')`,
          backgroundPosition: '50% 30%'
        }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready for an Exceptional Journey?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Reserve your premium vehicle today and experience luxury on the road.
            </p>
            <Button className="premium-btn premium-btn-primary" size="lg">
              Reserve Your Experience
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
