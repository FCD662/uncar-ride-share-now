
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Calendar as CalendarIcon, ChevronRight, MapPin, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LuxurySearchForm = () => {
  const [location, setLocation] = useState<string>("");
  const [district, setDistrict] = useState<string>("");
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  const handleSearch = () => {
    console.log("Searching with criteria:", { location, district, startDate, endDate });
    // Here you would typically navigate to search results
  };

  // Animation variants
  const formVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-end"
      variants={formVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="lg:col-span-3" variants={itemVariants}>
        <label htmlFor="location" className="block text-xs uppercase tracking-wider text-white/70 mb-2">
          Location
        </label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger 
              className="luxury-select-trigger w-full pl-10 border-white/20 bg-transparent hover:border-white/40 transition-colors"
            >
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent className="luxury-select-content">
              <SelectItem value="new-york">New York</SelectItem>
              <SelectItem value="los-angeles">Los Angeles</SelectItem>
              <SelectItem value="miami">Miami</SelectItem>
              <SelectItem value="chicago">Chicago</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </motion.div>

      <motion.div className="lg:col-span-3" variants={itemVariants}>
        <label htmlFor="district" className="block text-xs uppercase tracking-wider text-white/70 mb-2">
          District
        </label>
        <Select value={district} onValueChange={setDistrict}>
          <SelectTrigger 
            className="luxury-select-trigger w-full border-white/20 bg-transparent hover:border-white/40 transition-colors"
          >
            <SelectValue placeholder="Select district" />
          </SelectTrigger>
          <SelectContent className="luxury-select-content">
            <SelectItem value="downtown">Downtown</SelectItem>
            <SelectItem value="uptown">Uptown</SelectItem>
            <SelectItem value="west-side">West Side</SelectItem>
            <SelectItem value="east-side">East Side</SelectItem>
          </SelectContent>
        </Select>
      </motion.div>

      <motion.div className="lg:col-span-2" variants={itemVariants}>
        <label className="block text-xs uppercase tracking-wider text-white/70 mb-2">
          From
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="luxury-date-button w-full justify-start text-left"
            >
              {startDate ? (
                <span className="text-white">{format(startDate, "MMM dd, yyyy")}</span>
              ) : (
                <span className="text-white/50">Select date</span>
              )}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="luxury-calendar-content w-auto p-0">
            <Calendar
              mode="single"
              selected={startDate}
              onSelect={setStartDate}
              initialFocus
              className="bg-black border border-white/10 text-white pointer-events-auto"
            />
          </PopoverContent>
        </Popover>
      </motion.div>

      <motion.div className="lg:col-span-2" variants={itemVariants}>
        <label className="block text-xs uppercase tracking-wider text-white/70 mb-2">
          To
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="luxury-date-button w-full justify-start text-left"
            >
              {endDate ? (
                <span className="text-white">{format(endDate, "MMM dd, yyyy")}</span>
              ) : (
                <span className="text-white/50">Select date</span>
              )}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="luxury-calendar-content w-auto p-0">
            <Calendar
              mode="single"
              selected={endDate}
              onSelect={setEndDate}
              disabled={(date) => date < (startDate || new Date())}
              initialFocus
              className="bg-black border border-white/10 text-white pointer-events-auto"
            />
          </PopoverContent>
        </Popover>
      </motion.div>

      <motion.div className="lg:col-span-2" variants={itemVariants}>
        <Button
          onClick={handleSearch}
          className="luxury-search-btn w-full group"
        >
          <span className="mr-2">Discover Fleet</span>
          <Search className="h-4 w-4 duration-300 group-hover:rotate-3 group-hover:scale-110" />
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default LuxurySearchForm;
