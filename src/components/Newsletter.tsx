
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here we would normally send the email to a backend
      console.log('Subscribing email:', email);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-charcoal mb-3">
            Get 10% Off Your First Order
          </h2>
          <p className="text-lg text-gray-600 font-inter mb-6 md:mb-8">
            Subscribe to our newsletter and stay updated with our special offers, new restaurants, and more.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6"
              >
                Subscribe
              </Button>
            </div>
            {isSubmitted && (
              <p className="mt-3 text-secondary font-medium animate-fade-in">
                Thank you! Check your email for the discount code.
              </p>
            )}
          </form>
          
          <p className="mt-4 text-sm text-gray-500 font-inter">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
