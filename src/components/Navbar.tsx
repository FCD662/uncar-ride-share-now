
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Car, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn] = useState(false); // This would come from auth context in real app

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-uncar-500" />
            <span className="text-2xl font-bold text-uncar-500">Uncar</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-uncar-500 transition-colors font-medium">
              Home
            </Link>
            <Link to="/cars" className="text-gray-700 hover:text-uncar-500 transition-colors font-medium">
              Cars
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-uncar-500 transition-colors font-medium">
              About Us
            </Link>
            
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <div className="bg-uncar-50 text-uncar-700 px-3 py-1 rounded-lg flex items-center">
                  <span className="font-medium">$250</span>
                </div>
                <Link to="/dashboard" className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-uncar-200 flex items-center justify-center text-white font-medium">
                    JD
                  </div>
                  <span className="text-gray-700">John</span>
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Button variant="outline" className="border-uncar-500 text-uncar-500 hover:bg-uncar-50">
                  Sign In
                </Button>
                <Button className="bg-uncar-500 text-white hover:bg-uncar-600">
                  Sign Up
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden text-gray-500 hover:text-gray-700"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              to="/"
              className="block text-gray-700 hover:text-uncar-500 transition-colors font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/cars"
              className="block text-gray-700 hover:text-uncar-500 transition-colors font-medium"
              onClick={toggleMenu}
            >
              Cars
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-uncar-500 transition-colors font-medium"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            
            {isLoggedIn ? (
              <div className="flex items-center justify-between">
                <Link to="/dashboard" className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-uncar-200 flex items-center justify-center text-white font-medium">
                    JD
                  </div>
                  <span className="text-gray-700">John Doe</span>
                </Link>
                <div className="bg-uncar-50 text-uncar-700 px-3 py-1 rounded-lg">
                  <span className="font-medium">$250</span>
                </div>
              </div>
            ) : (
              <div className="flex flex-col space-y-2">
                <Button variant="outline" className="border-uncar-500 text-uncar-500 hover:bg-uncar-50 w-full">
                  Sign In
                </Button>
                <Button className="bg-uncar-500 text-white hover:bg-uncar-600 w-full">
                  Sign Up
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
