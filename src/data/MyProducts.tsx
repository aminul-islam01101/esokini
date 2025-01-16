// Define interface for each Banner Promotion
interface BannerPromotion {
  id: number;
  image: string; // Banner image URL or path
  heading?: string; // Promotional heading
  subheading?: string; // Promotional subheading or description
  action?: {
    label: string; // Button text
    link: string; // URL to the product category or promotion page
  };
}

// Banner promotions data array
const bannerPromotions: BannerPromotion[] = [
  {
    id: 1,
    image: "/assets/comingSoon.jpeg",
    heading: "Shop Laptops",
    subheading: "Explore our range of high-performance laptops.",
    action: {
      label: "Shop Now",
      link: "/category/laptops",
    },
  },
  {
    id: 2,
    image: "/assets/comingSoon.jpeg",
    heading: "Smartphones Sale",
    subheading: "Get the latest smartphones at discounted prices.",
    action: {
      label: "Shop Now",
      link: "/category/smartphones",
    },
  },
  {
    id: 3,
    image: "/assets/comingSoon.jpeg",
    heading: "Accessories Collection",
    subheading: "Complete your tech setup with premium accessories.",
    action: {
      label: "Shop Now",
      link: "/category/accessories",
    },
  },
  {
    id: 4,
    image: "/assets/comingSoon.jpeg",
    heading: "Mega Sale",
    subheading: "Limited-time offers on select products.",
    action: {
      label: "View Sale",
      link: "/sale",
    },
  },
];

export default bannerPromotions;
