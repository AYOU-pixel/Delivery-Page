
import React, { useRef } from 'react';
import TestimonialCard, { TestimonialCardProps } from './TestimonialCard';

const testimonialsData: TestimonialCardProps[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974",
    rating: 5,
    comment: "The food arrived hot and fresh. The delivery was faster than expected. Definitely ordering again!",
  },
  {
    id: 2,
    name: "Michael Brown",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
    rating: 4,
    comment: "Great selection of restaurants. The app is easy to use and the delivery tracking feature is fantastic.",
  },
  {
    id: 3,
    name: "Emily Davis",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964",
    rating: 5,
    comment: "I love that I can order from my favorite local restaurants. The customer service is excellent too!",
  },
  {
    id: 4,
    name: "James Wilson",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974",
    rating: 4,
    comment: "The variety of cuisines available is impressive. I've discovered so many new favorite dishes!",
  },
];

const Testimonials = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === 'left' ? -320 : 320;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-charcoal mb-3">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
            Don't just take our word for it — see what our satisfied customers have to say
          </p>
        </div>
        
        <div className="relative">
          {/* Desktop Navigation Arrows */}
          <div className="hidden md:block">
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-100"
            >
              <svg className="w-6 h-6 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-100"
            >
              <svg className="w-6 h-6 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Testimonials Scroll Area */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-6 pb-6 snap-x scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonialsData.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="min-w-[300px] md:min-w-[350px] snap-start"
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
