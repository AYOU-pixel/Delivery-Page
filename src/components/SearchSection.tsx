
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SearchSection = () => {
  const [address, setAddress] = useState('');
  const [cuisine, setCuisine] = useState('');

  const cuisines = [
    'All Cuisines',
    'Italian',
    'Japanese',
    'Chinese',
    'Mexican',
    'Indian',
    'American',
    'Thai',
    'Mediterranean'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic
    console.log('Searching for:', { address, cuisine });
  };

  return (
    <section className="bg-offwhite py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8 -mt-20 relative z-20">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="address" className="block text-sm font-medium text-charcoal mb-1 font-inter">
                  Delivery Address
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="address"
                    placeholder="Enter your delivery address"
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <button 
                    type="button" 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-primary font-semibold"
                    onClick={() => setAddress('Current Location')}
                  >
                    DETECT
                  </button>
                </div>
              </div>
              
              <div className="md:w-1/3">
                <label htmlFor="cuisine" className="block text-sm font-medium text-charcoal mb-1 font-inter">
                  Cuisine (Optional)
                </label>
                <select
                  id="cuisine"
                  className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
                  value={cuisine}
                  onChange={(e) => setCuisine(e.target.value)}
                >
                  {cuisines.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="md:self-end">
                <Button type="submit" className="w-full md:w-auto h-12 px-6 bg-primary hover:bg-primary/90 text-white font-medium">
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
