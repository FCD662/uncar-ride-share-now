
import { Clock, Shield, Coins } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Clock className="h-10 w-10 text-uncar-500" />,
      title: "Fast Booking",
      description: "Book your perfect car in minutes with our simplified process. No paperwork, no hassle."
    },
    {
      icon: <Shield className="h-10 w-10 text-uncar-500" />,
      title: "Secure Payments",
      description: "All transactions are protected with end-to-end encryption and multiple payment options."
    },
    {
      icon: <Coins className="h-10 w-10 text-uncar-500" />,
      title: "Great Value",
      description: "Find competitive prices and special deals that make car sharing affordable for everyone."
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
