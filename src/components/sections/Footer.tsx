import Link from "next/link";
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-green-500 mb-4">GiftySolves</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for international education and travel opportunities.
            </p>
            <div className="flex gap-3">
              <Facebook size={20} className="hover:text-green-500 cursor-pointer transition-colors" />
              <Instagram size={20} className="hover:text-green-500 cursor-pointer transition-colors" />
              <Youtube size={20} className="hover:text-green-500 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-green-500 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-green-500 transition-colors">Services</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-green-500 transition-colors">Schools</a></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-green-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {['Student Visas', 'Tourist Visas', 'Interview Coaching', 'Career Counseling'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-300 hover:text-green-500 transition-colors">{service}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span className="text-gray-300">+233554454439</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span className="text-gray-300">info@giftysolves.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span className="text-gray-300">Kumasi, Ghana</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 GiftySolves Educational Consult. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
