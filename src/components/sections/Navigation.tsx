"use client";


import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-green-600 hidden md:block text-white py-2 px-5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex flex-col md:flex-row gap-4 mb-2 md:mb-0">
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <span>+233554454439</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} />
              <span>info@giftysolves.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>Kumasi</span>
            </div>
          </div>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/giftysolves/" target="_blank" rel="noopener noreferrer">
              <Facebook size={20} className="hover:text-green-400 cursor-pointer transition-colors" />
            </a>
            <a href="https://www.instagram.com/giftysolves/" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} className="hover:text-green-400 cursor-pointer transition-colors" />
            </a>
            <a href="https://www.youtube.com/channel/UC4OsMH29NqAZDf8GDnJYE1A/videos" target="_blank" rel="noopener noreferrer">
              <Youtube size={20} className="hover:text-green-400 cursor-pointer transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`${isScrolled ? 'fixed top-0 bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'} w-full z-50 transition-all duration-300 sticky-nav`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold text-green-600">
                <img className="w-14 h-11" src="/images/logo.png" alt="logo" />
              </div>
            </Link>

            <div className="hidden lg:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-600 xl:text-lg transition-colors font-medium">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-green-600 xl:text-lg transition-colors font-medium">About Us</Link>
              <Link href="/services" className="text-gray-700 xl:text-lg hover:text-green-600 transition-colors font-medium">Services</Link>
              <Link href="/schools" className="text-gray-700 hover:text-green-600 xl:text-lg transition-colors font-medium">Schools</Link>
              <Link href="/blogs" className="text-gray-700 xl:text-lg hover:text-green-600 transition-colors font-medium">Blogs</Link>
              <Link href="/gallery" className="text-gray-700 hover:text-green-600 xl:text-lg transition-colors font-medium">Gallery</Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-600 xl:text-lg transition-colors font-medium">Contact</Link>
            </div>

            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu with animation */}
          <div
            className={`lg:hidden  overflow-hidden transition-all duration-700 ease-in-out ${
              isMenuOpen ? 'max-h-[600px] opacity-100 mt-4 pb-4 border-t animate-slide-down' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="flex flex-col animate-fade-in">
              <Link href="/" className="block py-2 text-gray-700 hover:text-green-600 transition-colors">Home</Link>
              <Link href="/about" className="block py-2 text-gray-700 hover:text-green-600 transition-colors">About Us</Link>
              <Link href="/services" className="block py-2 text-gray-700 hover:text-green-600 transition-colors">Services</Link>
              <Link href="/schools" className="block py-2 text-gray-700 hover:text-green-600 transition-colors">Schools</Link>
              <Link href="/blogs" className="block py-2 text-gray-700 hover:text-green-600 transition-colors">Blogs</Link>
              <Link href="/gallery" className="block py-2 text-gray-700 hover:text-green-600 transition-colors">Gallery</Link>
              <Link href="/contact" className="block py-2 text-gray-700 hover:text-green-600 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

