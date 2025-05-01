
import React from 'react';
import { Star } from 'lucide-react';

export interface TestimonialCardProps {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  avatar,
  rating,
  comment,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={avatar} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-poppins font-semibold text-charcoal">{name}</h4>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`h-4 w-4 ${
                  index < rating ? "text-accent fill-current" : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 font-inter">"{comment}"</p>
    </div>
  );
};

export default TestimonialCard;
