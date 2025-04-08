
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCars from "@/components/FeaturedCars";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import { popularCars, specialDeals } from "@/data/cars";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedCars title="Popular Cars" cars={popularCars} />
        <Features />
        <HowItWorks />
        <FeaturedCars title="Special Deals" cars={specialDeals} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
