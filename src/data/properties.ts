export interface Property {
  id: string;
  address: string;
  location: string;
  price: number;
  priceDisplay: string;
  bedrooms: number;
  bathrooms?: number;
  propertyType: string;
  description: string;
  images: string[];
  available: boolean;
  featured?: boolean;
  details?: {
    features: string[];
    furnishing?: string;
    availableDate?: string;
    deposit?: string;
    councilTaxBand?: string;
  };
}

export const properties: Property[] = [
  {
    id: "1",
    address: "Woodin's Way",
    location: "Oxford",
    price: 1900,
    priceDisplay: "£1,900 pcm",
    bedrooms: 1,
    bathrooms: 1,
    propertyType: "Apartment",
    description: "Modern one bedroom apartment in Oxford with high specification finish and excellent transport links.",
    images: ["/assets/properties/woodins-way.jpg"],
    available: true,
    featured: true,
    details: {
      features: [
        "Open plan kitchen/living room",
        "Modern fitted kitchen with integrated appliances",
        "Double bedroom with built-in storage",
        "Contemporary bathroom suite",
        "Gas central heating",
        "Double glazing throughout",
        "Secure entry system",
        "Allocated parking space",
        "Close to Oxford Parkway station",
        "Excellent transport links to city centre"
      ],
      furnishing: "Unfurnished",
      availableDate: "1st November 2025",
      deposit: "£2,192 (5 weeks rent)",
      councilTaxBand: "B"
    }
  },
  {
    id: "2",
    address: "Franklin Road",
    location: "Headington, Oxford",
    price: 1750,
    priceDisplay: "£1,750 pcm",
    bedrooms: 2,
    bathrooms: 1,
    propertyType: "House",
    description: "Well-presented two bedroom house in Headington with private garden and off-street parking.",
    images: ["/assets/properties/franklin-road.jpg"],
    available: true,
    featured: true,
    details: {
      features: [
        "Two reception rooms",
        "Fitted kitchen with dining area",
        "Two double bedrooms",
        "Family bathroom",
        "Private rear garden",
        "Off-street parking",
        "Gas central heating",
        "Double glazing",
        "Close to local amenities",
        "Good transport links"
      ],
      furnishing: "Unfurnished",
      availableDate: "Immediately",
      deposit: "£2,019 (5 weeks rent)",
      councilTaxBand: "C"
    }
  },
  {
    id: "3",
    address: "Herschel Crescent",
    location: "Oxford",
    price: 1700,
    priceDisplay: "£1,700 pcm",
    bedrooms: 3,
    bathrooms: 2,
    propertyType: "House",
    description: "Spacious three bedroom family house with two bathrooms and generous garden.",
    images: ["/assets/properties/herschel-crescent.jpg"],
    available: true,
    featured: true,
    details: {
      features: [
        "Three good sized bedrooms",
        "Master bedroom with en-suite",
        "Family bathroom",
        "Spacious living room",
        "Modern kitchen/diner",
        "Downstairs cloakroom",
        "Private rear garden",
        "Driveway parking",
        "Gas central heating",
        "Close to schools and shops"
      ],
      furnishing: "Unfurnished",
      availableDate: "15th November 2025",
      deposit: "£1,961 (5 weeks rent)",
      councilTaxBand: "D"
    }
  },
  {
    id: "4",
    address: "Hyacinth Walk",
    location: "Oxford",
    price: 1550,
    priceDisplay: "£1,550 pcm",
    bedrooms: 2,
    bathrooms: 1,
    propertyType: "Apartment",
    description: "Modern two bedroom apartment with contemporary fittings throughout. Located in a well-maintained development with easy access to Oxford city centre and local amenities.",
    images: ["/assets/properties/hyacinth-walk.jpg"],
    available: true,
    details: {
      features: [
        "Well-sized lounge/diner with patio and stairs to garden",
        "Modern fitted kitchen with integrated appliances",
        "Two double bedrooms with built-in wardrobes",
        "Modern bathroom with shower over bath",
        "Gas central heating throughout",
        "Double glazed windows",
        "Private garden",
        "Allocated parking for one vehicle",
        "Close to local shops and bus routes",
        "Available furnished or unfurnished"
      ],
      furnishing: "Unfurnished",
      availableDate: "Immediately",
      deposit: "£1,788.46 (5 weeks rent)",
      councilTaxBand: "C"
    }
  },
  {
    id: "5",
    address: "Cumnor Hill",
    location: "Oxford",
    price: 1500,
    priceDisplay: "£1,500 pcm",
    bedrooms: 2,
    bathrooms: 1,
    propertyType: "House",
    description: "Charming two bedroom house with garden",
    images: ["/assets/properties/cumnor-hill.jpg"],
    available: true,
    featured: true
  },
  {
    id: "6",
    address: "The Ridings",
    location: "Kidlington",
    price: 1400,
    priceDisplay: "£1,400 pcm",
    bedrooms: 2,
    bathrooms: 1,
    propertyType: "House",
    description: "Two bedroom house in popular Kidlington location",
    images: ["/assets/properties/the-ridings.jpg"],
    available: true,
    featured: true
  },
  {
    id: "7",
    address: "Courtland Road",
    location: "Oxford",
    price: 1350,
    priceDisplay: "£1,350 pcm",
    bedrooms: 1,
    bathrooms: 1,
    propertyType: "Apartment",
    description: "One bedroom apartment in convenient location",
    images: ["/assets/properties/courtland-road.jpg"],
    available: true
  },
  {
    id: "8",
    address: "St. Martins Street",
    location: "Wallingford",
    price: 725,
    priceDisplay: "£725 pcm",
    bedrooms: 5,
    bathrooms: 2,
    propertyType: "Shared Room",
    description: "Room in five bedroom shared house",
    images: ["/assets/properties/st-martins.jpg"],
    available: true,
    featured: true
  }
];
