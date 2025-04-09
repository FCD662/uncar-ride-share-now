
export interface Location {
  name: string;
  image: string;
  description: string;
}

export const locations: Location[] = [
  {
    name: "New York City",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80",
    description: "Luxury cars available in Manhattan, Brooklyn, and Queens"
  },
  {
    name: "Los Angeles",
    image: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&fit=crop&w=800&q=80",
    description: "Premium fleet in Beverly Hills, Downtown, and Hollywood"
  },
  {
    name: "Miami",
    image: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=800&q=80",
    description: "Exclusive vehicles in South Beach, Brickell, and Design District"
  }
];
