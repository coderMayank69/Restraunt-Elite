export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
};

export type Testimonial = {
  id: number;
  name: string;
  quote: string;
};

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Signature Pasta",
    description: "House-made pasta with roasted tomato and basil.",
    price: "$18",
  },
  {
    id: 2,
    name: "Woodfire Pizza",
    description: "Crisp base, fresh mozzarella, and seasonal toppings.",
    price: "$16",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aarav",
    quote: "Amazing flavors and excellent service.",
  },
  {
    id: 2,
    name: "Maya",
    quote: "Best dinner experience we have had in months.",
  },
];
