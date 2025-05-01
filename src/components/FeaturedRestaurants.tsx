
import React from 'react';
import RestaurantCard, { RestaurantCardProps } from './RestaurantCard';

const restaurantsData: RestaurantCardProps[] = [
  {
    id: 1,
    name: "Pasta Paradise",
    image: "https://images.unsplash.com/photo-1579684947550-22e945225d9a?q=80&w=1974",
    rating: 4.8,
    deliveryTime: "20-30 min",
    cuisineType: "Italian",
    priceRange: "$$",
  },
  {
    id: 2,
    name: "Sushi Haven",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070",
    rating: 4.9,
    deliveryTime: "25-35 min",
    cuisineType: "Japanese",
    priceRange: "$$$",
  },
  {
    id: 3,
    name: "Burger Joint",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965",
    rating: 4.5,
    deliveryTime: "15-25 min",
    cuisineType: "American",
    priceRange: "$$",
  },
  {
    id: 4,
    name: "Taco Fiesta",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070",
    rating: 4.7,
    deliveryTime: "20-30 min",
    cuisineType: "Mexican",
    priceRange: "$$",
  },
  {
    id: 5,
    name: "Green Bowl",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=1974",
    rating: 4.6,
    deliveryTime: "15-25 min",
    cuisineType: "Healthy",
    priceRange: "$$",
  },
  {
    id: 6,
    name: "Pizza Palace",
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=2025",
    rating: 4.7,
    deliveryTime: "20-35 min",
    cuisineType: "Italian",
    priceRange: "$$",
  },
];

const FeaturedRestaurants = () => {
  return (
    <section id="restaurants" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-charcoal mb-3">
            Featured Restaurants
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
            Discover the best food from our partner restaurants, with quick delivery to your doorstep.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurantsData.map((restaurant) => (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;
