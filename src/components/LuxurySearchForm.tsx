
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Calendar as CalendarIcon, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const LuxurySearchForm = () => {
  const [city, setCity] = useState<string>("");
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  const handleSearch = () => {
    console.log("Searching with criteria:", { city, startDate, endDate });
    // Here you would typically navigate to search results
  };

  return (
    <motion.div 
      className="flex flex-col gap-8 md:flex-row md:items-end"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.8 }}
    >
      <div className="flex-1">
        <label htmlFor="city" className="block text-sm uppercase tracking-wider text-white/70 mb-2">
          Location
        </label>
        <input
          type="text"
          id="city"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="luxury-input w-full"
        />
      </div>

      <div className="flex-1">
        <label className="block text-sm uppercase tracking-wider text-white/70 mb-2">
          From
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="luxury-btn-outline w-full justify-start text-left"
            >
              {startDate ? format(startDate, "MMM dd, yyyy") : (
                <span className="text-white/50">Select date</span>
              )}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={startDate}
              onSelect={setStartDate}
              initialFocus
              className="bg-black border border-white/10 text-white"
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex-1">
        <label className="block text-sm uppercase tracking-wider text-white/70 mb-2">
          To
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="luxury-btn-outline w-full justify-start text-left"
            >
              {endDate ? format(endDate, "MMM dd, yyyy") : (
                <span className="text-white/50">Select date</span>
              )}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={endDate}
              onSelect={setEndDate}
              disabled={(date) => date < (startDate || new Date())}
              initialFocus
              className="bg-black border border-white/10 text-white"
            />
          </PopoverContent>
        </Popover>
      </div>

      <Button
        onClick={handleSearch}
        className="luxury-btn group"
      >
        Explore Fleet
        <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </motion.div>
  );
};

export default LuxurySearchForm;
