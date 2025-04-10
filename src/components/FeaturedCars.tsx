
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CarCard from "./CarCard";

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
}

interface FeaturedCarsProps {
  title: string;
  cars: CarData[];
}

const FeaturedCars = ({ title, cars }: FeaturedCarsProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const cardWidth = 300; // Approximate width of each card + margin

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

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{title}</h2>
          
          {/* Navigation Arrows - Shown on larger screens */}
          <div className="hidden md:flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollLeft}
              className="h-10 w-10 rounded-full border-gray-200"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollRight}
              className="h-10 w-10 rounded-full border-gray-200"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Horizontal Scrolling Container */}
        <div 
          id="cars-container"
          className="flex overflow-x-auto gap-4 pb-4 scrollbar-none snap-x snap-mandatory"
        >
          {cars.map((car) => (
            <div 
              key={car.id} 
              className="min-w-[280px] sm:min-w-[320px] snap-start"
            >
              <CarCard {...car} />
            </div>
          ))}
        </div>
        
        {/* Mobile Navigation - Dots */}
        <div className="flex justify-center mt-6 md:hidden">
          <div className="flex space-x-2">
            {Array.from({ length: Math.min(5, cars.length) }).map((_, index) => (
              <div 
                key={index} 
                className={`h-2 w-2 rounded-full ${index === Math.floor(scrollPosition / cardWidth) ? 'bg-uncar-500' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCars;
