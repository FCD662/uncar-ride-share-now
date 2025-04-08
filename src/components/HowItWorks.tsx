
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Choose",
      description: "Browse our wide selection of cars and find the perfect match for your needs.",
      icon: "🔎"
    },
    {
      number: "2",
      title: "Book",
      description: "Select your dates, complete the booking process, and receive instant confirmation.",
      icon: "📅"
    },
    {
      number: "3",
      title: "Drive",
      description: "Pick up the car from the owner and enjoy your journey with peace of mind.",
      icon: "🚗"
    }
  ];

  return (
    <div className="py-16 bg-uncar-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Renting a car with Uncar is fast and hassle-free. Follow these simple steps to get on the road.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-xl p-6 text-center shadow-md transition-transform duration-300 hover:scale-105 ${
                index < steps.length - 1 ? "after:hidden md:after:block after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-16 after:h-0.5 after:bg-uncar-200 after:translate-x-1/2" : ""
              }`}
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-uncar-100 rounded-full flex items-center justify-center text-2xl">
                  {step.icon}
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-uncar-500 rounded-full flex items-center justify-center text-white font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600 mb-4">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-uncar-500 hover:bg-uncar-600 text-white px-8">
            Get Started
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
