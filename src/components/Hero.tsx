
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Car, Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [city, setCity] = useState<string>("");
  const [district, setDistrict] = useState<string>("");
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  const cities = ["New York", "Los Angeles", "Chicago", "Miami", "San Francisco"];
  
  const districts: Record<string, string[]> = {
    "New York": ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"],
    "Los Angeles": ["Downtown", "Hollywood", "Venice", "Santa Monica"],
    "Chicago": ["The Loop", "River North", "Wicker Park", "Lincoln Park"],
    "Miami": ["South Beach", "Wynwood", "Downtown", "Brickell"],
    "San Francisco": ["Union Square", "Mission", "SoMa", "Castro"],
  };

  const handleSearch = () => {
    console.log("Searching with criteria:", { city, district, startDate, endDate });
    // Here you would typically navigate to search results
  };

  return (
    <div className="relative bg-gradient-to-br from-uncar-50 to-white py-16 md:py-24 overflow-hidden">
      {/* Animated car background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="animate-car-move absolute top-1/4 left-1/4">
          <Car className="h-32 w-32 text-uncar-300" />
        </div>
        <div className="animate-car-move absolute bottom-1/4 right-1/4" style={{ animationDelay: "-3s" }}>
          <Car className="h-24 w-24 text-uncar-400" />
        </div>
        <div className="animate-float absolute top-1/3 right-1/3">
          <Car className="h-40 w-40 text-uncar-200" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
            Rent or Share Cars Easily with <span className="text-uncar-500">Uncar</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Find the perfect car for any occasion or share your vehicle and earn extra income
          </p>

          {/* Search form */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                  City
                </label>
                <Select value={city} onValueChange={(value) => {
                  setCity(value);
                  setDistrict("");
                }}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                  District
                </label>
                <Select value={district} onValueChange={setDistrict} disabled={!city}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select district" />
                  </SelectTrigger>
                  <SelectContent>
                    {city && districts[city]?.map((district) => (
                      <SelectItem key={district} value={district}>
                        {district}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                  Start Date
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !startDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 pointer-events-auto">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={setStartDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                  End Date
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !endDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 pointer-events-auto">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={setEndDate}
                      disabled={(date) => date < (startDate || new Date())}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <Button 
              className="mt-6 bg-uncar-500 hover:bg-uncar-600 text-white w-full md:w-auto px-8"
              onClick={handleSearch}
            >
              Search Cars
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
