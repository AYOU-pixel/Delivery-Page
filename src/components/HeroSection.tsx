import React from 'react';
import { ArrowRight, Star, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-20 flex items-center"
      style={{
        backgroundImage: 'linear-gradient(to right, #595555, #4a4848)', // Your requested grey tone
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay gradient to enhance text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/40 to-transparent z-10"></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left content */}
          <div className="w-full md:w-1/2 text-white space-y-6 py-16">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full space-x-2 border border-white/20">
              <span className="text-yellow-400">
                <Star className="w-4 h-4 fill-yellow-400" />
              </span>
              <span className="text-sm font-medium">Top Rated Restaurant</span>
            </div>
            
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Discover the Taste of 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"> Real Food</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg text-gray-200 max-w-md">
              Experience culinary excellence with our handcrafted dishes made from the freshest ingredients. Your journey to delicious moments starts here.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 rounded-full shadow-lg shadow-purple-500/30 font-medium">
                Order Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white rounded-full">
                View Menu
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex gap-6 pt-6">
              <div className="flex items-center gap-2">
                <div className="bg-white/10 p-2 rounded-full">
                  <Clock className="h-4 w-4 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-300">Delivery Time</p>
                  <p className="font-bold">30 min</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-white/10 p-2 rounded-full">
                  <Award className="h-4 w-4 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-300">Best Quality</p>
                  <p className="font-bold">Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right content - decorative food placeholder */}
          <div className="hidden md:block w-full md:w-1/2 relative">
            {/* Decorative Circles */}
            <div className="absolute -top-10 -right-10 bg-purple-500/20 backdrop-blur-3xl rounded-full w-64 h-64"></div>
            <div className="absolute bottom-20 right-20 bg-pink-500/20 backdrop-blur-3xl rounded-full w-40 h-40"></div>
            <div className="absolute top-40 right-40 bg-yellow-500/20 backdrop-blur-3xl rounded-full w-24 h-24"></div>
            
            {/* Featured Food Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-xl max-w-md ml-auto">
              <div className="w-full h-64 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-2xl flex items-center justify-center">
                {/* Placeholder for featured dish */}
                <div className="text-white/70 font-medium text-center">
                  <div className="text-6xl mb-2">🍕</div>
                  <p>Featured Dish</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
