
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Car } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="text-center px-4 py-12">
          <div className="flex justify-center mb-6">
            <div className="bg-uncar-100 rounded-full p-6">
              <Car className="h-16 w-16 text-uncar-500" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4 text-gray-800">404</h1>
          <p className="text-xl text-gray-600 mb-8">
            Oops! The page you're looking for is not available.
          </p>
          <Button asChild className="bg-uncar-500 hover:bg-uncar-600 text-white">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
