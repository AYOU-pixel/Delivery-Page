
import React from 'react';

const steps = [
  {
    id: 1,
    title: "Choose",
    description: "Browse our menu and select your favorite dishes from top restaurants.",
    icon: (
      <svg className="w-12 h-12 mx-auto text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Pay",
    description: "Quick, secure payment with multiple options to suit your preference.",
    icon: (
      <svg className="w-12 h-12 mx-auto text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 10H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Track",
    description: "Follow your order in real-time as it makes its way to your location.",
    icon: (
      <svg className="w-12 h-12 mx-auto text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L19.5 9.5V21H4.5V9.5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 14.5L11.5 17L15 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Enjoy",
    description: "Receive your delicious meal and enjoy a restaurant-quality dining experience at home.",
    icon: (
      <svg className="w-12 h-12 mx-auto text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 20.5H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18.75 14C18.75 13.5858 18.4142 13.25 18 13.25H6C5.58579 13.25 5.25 13.5858 5.25 14C5.25 14.4142 5.58579 14.75 6 14.75H18C18.4142 14.75 18.75 14.4142 18.75 14Z" fill="currentColor"/>
        <path d="M16 4.75C15.3096 4.75 14.75 5.30964 14.75 6V8C14.75 8.69036 15.3096 9.25 16 9.25C16.6904 9.25 17.25 8.69036 17.25 8V6C17.25 5.30964 16.6904 4.75 16 4.75Z" fill="currentColor"/>
        <path d="M8 4.75C7.30964 4.75 6.75 5.30964 6.75 6V8C6.75 8.69036 7.30964 9.25 8 9.25C8.69036 9.25 9.25 8.69036 9.25 8V6C9.25 5.30964 8.69036 4.75 8 4.75Z" fill="currentColor"/>
        <path d="M12 2.75C11.3096 2.75 10.75 3.30964 10.75 4V8C10.75 8.69036 11.3096 9.25 12 9.25C12.6904 9.25 13.25 8.69036 13.25 8V4C13.25 3.30964 12.6904 2.75 12 2.75Z" fill="currentColor"/>
      </svg>
    ),
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-offwhite">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-charcoal mb-3">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
            Getting your favorite food delivered has never been easier
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-poppins font-bold text-charcoal mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 font-inter">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
