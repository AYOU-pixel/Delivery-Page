import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Resize handler to close mobile menu
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (link) => {
    setActiveLink(link);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gradient-to-r from-[#595555]/90 via-[#595555]/80 to-[#595555]/70 backdrop-blur-lg shadow-lg py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-extrabold text-white relative group">
          Bite<span className="text-gray-300 font-black">Bliss</span>
          <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300"></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className={`font-medium text-sm text-gray-200 relative group ${activeLink === 'home' ? 'text-purple-300' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            Home
            {activeLink === 'home' && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></span>
            )}
          </a>
          <a
            href="#menu"
            className={`font-medium text-sm text-gray-200 relative group ${activeLink === 'menu' ? 'text-purple-300' : ''}`}
            onClick={() => handleNavClick('menu')}
          >
            Menu
            {activeLink === 'menu' && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></span>
            )}
          </a>
          <a
            href="#offers"
            className={`font-medium text-sm text-gray-200 relative group ${activeLink === 'offers' ? 'text-purple-300' : ''}`}
            onClick={() => handleNavClick('offers')}
          >
            Offers
            {activeLink === 'offers' && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></span>
            )}
          </a>
          <a
            href="#contact"
            className={`font-medium text-sm text-gray-200 relative group ${activeLink === 'contact' ? 'text-purple-300' : ''}`}
            onClick={() => handleNavClick('contact')}
          >
            Contact
            {activeLink === 'contact' && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></span>
            )}
          </a>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-300 hover:text-purple-400 transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-400 rounded-full"></span>
            </button>
            <button className="p-2 text-gray-300 hover:text-purple-400 transition-colors">
              <User className="h-5 w-5" />
            </button>
            <Button variant="ghost" className="hover:bg-transparent p-2">
              <ShoppingCart className="h-5 w-5 text-gray-300 hover:text-purple-400 transition-colors" />
              <span className="ml-1 text-sm text-gray-300">2</span>
            </Button>
          </div>

          {/* Call to Action */}
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-5 py-2 text-sm font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300">
            Order Now
          </Button>
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="hover:bg-transparent p-2">
            <ShoppingCart className="h-5 w-5 text-gray-300" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-400 rounded-full"></span>
          </Button>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full">
            Order Now
          </Button>
          <button
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-full hover:bg-purple-500/20 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav id="mobile-menu" className="md:hidden bg-[#595555]/90 backdrop-blur-md shadow-xl border-t border-gray-700 transition-all duration-300 ease-in-out">
          <div className="container mx-auto py-4 px-4 space-y-3">
            <a
              href="#home"
              className={`block font-medium text-gray-200 py-2 px-3 rounded-lg hover:bg-purple-500/10 hover:text-purple-300 transition-colors ${activeLink === 'home' ? 'bg-purple-500/20 text-purple-300' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              Home
            </a>
            <a
              href="#menu"
              className={`block font-medium text-gray-200 py-2 px-3 rounded-lg hover:bg-purple-500/10 hover:text-purple-300 transition-colors ${activeLink === 'menu' ? 'bg-purple-500/20 text-purple-300' : ''}`}
              onClick={() => handleNavClick('menu')}
            >
              Menu
            </a>
            <a
              href="#offers"
              className={`block font-medium text-gray-200 py-2 px-3 rounded-lg hover:bg-purple-500/10 hover:text-purple-300 transition-colors ${activeLink === 'offers' ? 'bg-purple-500/20 text-purple-300' : ''}`}
              onClick={() => handleNavClick('offers')}
            >
              Offers
            </a>
            <a
              href="#contact"
              className={`block font-medium text-gray-200 py-2 px-3 rounded-lg hover:bg-purple-500/10 hover:text-purple-300 transition-colors ${activeLink === 'contact' ? 'bg-purple-500/20 text-purple-300' : ''}`}
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </a>

            <div className="pt-2 pb-1 border-t border-gray-700 space-y-2">
              <a href="#notifications" className="block text-sm font-medium text-gray-300 py-2 px-3 hover:bg-purple-500/10 hover:text-purple-300 rounded-lg transition-colors">
                Notifications
              </a>
              <a href="#account" className="block text-sm font-medium text-gray-300 py-2 px-3 hover:bg-purple-500/10 hover:text-purple-300 rounded-lg transition-colors">
                My Account
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;