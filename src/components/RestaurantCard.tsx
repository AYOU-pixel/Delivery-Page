
import React from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface RestaurantCardProps {
  id: number;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  cuisineType: string;
  priceRange: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  name,
  image,
  rating,
  deliveryTime,
  cuisineType,
  priceRange,
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-poppins font-semibold text-lg text-charcoal">{name}</h3>
          <div className="flex items-center bg-primary/10 px-2 py-1 rounded">
            <Star className="h-4 w-4 text-primary fill-current" />
            <span className="text-sm font-semibold ml-1">{rating}</span>
          </div>
        </div>
        <div className="flex items-center text-gray-600 text-sm mb-3">
          <span>{cuisineType}</span>
          <span className="mx-2">•</span>
          <span>{priceRange}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">
            <span className="text-secondary">{deliveryTime}</span> delivery
          </span>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
