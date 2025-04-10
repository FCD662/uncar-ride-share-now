
export interface Car {
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

export const popularCars: Car[] = [
  {
    id: "1",
    name: "Tesla Model 3",
    price: 89,
    city: "San Francisco",
    year: 2022,
    carClass: "Comfort",
    bodyType: "Sedan",
    engineType: "Electric",
    seats: 5,
    features: [
      { name: "Autopilot" },
      { name: "Premium Audio" },
      { name: "Bluetooth" },
      { name: "Keyless Start" },
      { name: "360° Camera" },
    ],
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    name: "Toyota Corolla",
    price: 45,
    city: "New York",
    year: 2021,
    carClass: "Economy",
    bodyType: "Sedan",
    engineType: "Petrol",
    seats: 5,
    features: [
      { name: "Automatic" },
      { name: "A/C" },
      { name: "Bluetooth" },
      { name: "Cruise Control" },
    ],
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    name: "BMW X5",
    price: 120,
    city: "Miami",
    year: 2022,
    carClass: "Business",
    bodyType: "SUV",
    engineType: "Diesel",
    seats: 7,
    features: [
      { name: "Leather Seats" },
      { name: "Panoramic Roof" },
      { name: "Navigation" },
      { name: "Heated Seats" },
      { name: "Apple CarPlay" },
    ],
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    name: "Honda Civic",
    price: 42,
    city: "Chicago",
    year: 2020,
    carClass: "Economy",
    bodyType: "Sedan",
    engineType: "Petrol",
    seats: 5,
    features: [
      { name: "Automatic" },
      { name: "A/C" },
      { name: "Bluetooth" },
      { name: "Backup Camera" },
    ],
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "5",
    name: "Jeep Wrangler",
    price: 95,
    city: "Los Angeles",
    year: 2021,
    carClass: "Comfort",
    bodyType: "SUV",
    engineType: "Petrol",
    seats: 4,
    features: [
      { name: "4x4" },
      { name: "Removable Top" },
      { name: "Bluetooth" },
      { name: "Off-Road" },
    ],
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "6",
    name: "Mercedes-Benz E-Class",
    price: 110,
    city: "New York",
    year: 2022,
    carClass: "Business",
    bodyType: "Sedan",
    engineType: "Hybrid",
    seats: 5,
    features: [
      { name: "Leather Seats" },
      { name: "Driver Assist" },
      { name: "Premium Audio" },
      { name: "Massage Seats" },
      { name: "Ambient Lighting" },
    ],
    image: "https://images.unsplash.com/photo-1549925862-990918686c85?auto=format&fit=crop&w=800&q=80",
  },
];

export const specialDeals: Car[] = [
  {
    id: "7",
    name: "Volkswagen Golf",
    price: 50,
    city: "Chicago",
    year: 2020,
    carClass: "Economy",
    bodyType: "Hatchback",
    engineType: "Petrol",
    seats: 5,
    features: [
      { name: "Automatic" },
      { name: "A/C" },
      { name: "Bluetooth" },
    ],
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80",
    discountPercentage: 15,
  },
  {
    id: "8",
    name: "Audi Q5",
    price: 100,
    city: "Los Angeles",
    year: 2021,
    carClass: "Business",
    bodyType: "SUV",
    engineType: "Hybrid",
    seats: 5,
    features: [
      { name: "Quattro AWD" },
      { name: "Panoramic Roof" },
      { name: "Premium Audio" },
      { name: "Leather Seats" },
    ],
    image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&w=800&q=80",
    discountPercentage: 20,
  },
  {
    id: "9",
    name: "Ford Mustang",
    price: 85,
    city: "Miami",
    year: 2021,
    carClass: "Sport",
    bodyType: "Coupe",
    engineType: "Petrol",
    seats: 4,
    features: [
      { name: "Convertible" },
      { name: "Premium Sound" },
      { name: "Leather Seats" },
      { name: "Sport Mode" },
    ],
    image: "https://images.unsplash.com/photo-1584345604476-8ec5f452d1ca?auto=format&fit=crop&w=800&q=80",
    discountPercentage: 10,
  },
  {
    id: "10",
    name: "Toyota Prius",
    price: 48,
    city: "San Francisco",
    year: 2020,
    carClass: "Economy",
    bodyType: "Hatchback",
    engineType: "Hybrid",
    seats: 5,
    features: [
      { name: "Eco Mode" },
      { name: "Backup Camera" },
      { name: "Bluetooth" },
      { name: "Keyless Entry" },
    ],
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
    discountPercentage: 25,
  },
];
