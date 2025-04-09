
export interface Testimonial {
  name: string;
  rating: number;
  review: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Alexander Johnson",
    rating: 5,
    review: "The BMW 7 Series was impeccable. Service was outstanding from booking to drop-off. Will definitely use again for my business trips."
  },
  {
    name: "Sophia Williams",
    rating: 5,
    review: "I rented the Mercedes S-Class for my wedding day. The car arrived spotless with a professional chauffeur. Couldn't have asked for better."
  },
  {
    name: "Michael Chen",
    rating: 4,
    review: "The Porsche Cayenne was a dream to drive around wine country. Pickup process was smooth and the concierge was very helpful."
  }
];
