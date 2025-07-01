"use client";


import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import CounselorsSection from '@/components/sections/CounselorsSection';
import Footer from '@/components/sections/Footer';
import FloatingWidgets from '@/components/ui/floating-widgets';
import ClientFeedback from '@/components/sections/ClientFeedback';
import Link from "next/link";

const Index = () => {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    purpose: '',
    message: ''
  });

  // Hero images
  const heroImages = [
    'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop'
  ];

  // Services data
  const services = [
    {
      image: "/images/service1.png",
      title: "Study Abroad",
      description:
        "There are different study locations available for our cherished clients to choose from. Students have the opportunity to pursue their desired Undergraduate, Postgraduate, or Summer School programs at their preferred study location.",
        link: "/study-abroad"
    },
    {
      image: "/images/service3.png",
      title: "Tourist & Visit Visas",
      description:
        "There are different study locations available for our cherished clients to choose from. Students have the opportunity to pursue their desired Undergraduate, Postgraduate, or Summer School programs at their preferred study location.",
      link: "/tourist-visa"
    },
    {
      image: "/images/service2.png",
      title: "Interview Coaching",
      description:
        "There are different study locations available for our cherished clients to choose from. Students have the opportunity to pursue their desired Undergraduate, Postgraduate, or Summer School programs at their preferred study location.",
      link: "/interview-coaching"
    },
    {
      image: "/images/service4.png",
      title: "Visa And Study Permit",
      description:
        "There are different study locations available for our cherished clients to choose from. Students have the opportunity to pursue their desired Undergraduate, Postgraduate, or Summer School programs at their preferred study location.",
      link: "/career-counseling"
    },
  ];

  // Counselors data
  const counselors = [
    { 
      name: "Sarah Johnson", 
      expertise: "Student Visa Specialist", 
      image: "images/edward.png",
      email: "sarah@giftysolves.com",
      facebook: "#",
      linkedin: "#",
      twitter: "#"
    },
    { 
      name: "Michael Chen", 
      expertise: "Career Counselor", 
      image: "/images/frank.png",
      email: "michael@giftysolves.com",
      facebook: "#",
      linkedin: "#",
      twitter: "#"
    },
    { 
      name: "Emily Rodriguez", 
      expertise: "Immigration Expert", 
      image: "/images/cornnelia.png",
      email: "emily@giftysolves.com",
      facebook: "#",
      linkedin: "#",
      twitter: "#"
    },
    { 
      name: "David Thompson", 
      expertise: "Interview Coach", 
      image: "/images/gifty.png",
      email: "david@giftysolves.com",
      facebook: "#",
      linkedin: "#",
      twitter: "#"
    },
    { 
      name: "Lisa Zhang", 
      expertise: "Academic Advisor", 
      image: "/images/osborn.png",
      email: "lisa@giftysolves.com",
      facebook: "#",
      linkedin: "#",
      twitter: "#"
    },
    { 
      name: "James Wilson", 
      expertise: "Settlement Consultant", 
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      email: "james@giftysolves.com",
      facebook: "#",
      linkedin: "#",
      twitter: "#"
    },
  
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Contact Form - ${contactForm.purpose}`;
    const body = `
Name: ${contactForm.name}
Email: ${contactForm.email}
Purpose: ${contactForm.purpose}

Message:
${contactForm.message}
    `;
    
    const mailtoLink = `mailto:nanayawwiafe007@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Message Prepared",
      description: "Your email client should open with the message ready to send.",
    });
    
    setContactForm({ name: '', email: '', purpose: '', message: '' });
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen relative bg-white">
      <Navigation />
      <HeroSection heroImages={heroImages} />

      {/* Partners Section */}
      <section className="relative -mt-20 z-20">
        <div className="container mx-auto px-4">
          <Card className="bg-white shadow-xl">
            <CardContent className="py-8">
              <h3 className="text-xl md:text-2xl font-bold arvo-bold text-center mb-8">
                Our Trusted Partners
              </h3>
              <div className="flex flex-wrap  justify-center items-center gap-6 md:gap-6 lg:gap-8 lg:max-w-none max-w-lg mx-auto md:max-w-none md:flex-nowrap lg:justify-center">
                {[
                  "/partner1.png",
                  "/partner2.png",
                  "/partner3.png",
                  "/partner4.png",
                ].map((src, i) => (
                  <div
                    key={i}
                    className=" w-1/2 sm:w-52 h-32 sm:h-56 bg-gray-100 rounded-xl shadow-sm flex flex-wrap items-center justify-center transition hover:scale-105"
                  >
                    <img
                      src={src}
                      alt={`Partner ${i + 1}`}
                      className="h-20 w-20 lg:h-36 lg:w-36 object-contain"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl arvo-bold font-bold mb-4">
              Services We Provide
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive support for your international journey
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3 relative h-48 md:h-auto">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <h3 className="text-white font-bold text-lg md:text-lg text-center px-4">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <div className="w-full md:w-2/3 p-4 md:p-4 lg:p-6 flex flex-col justify-between">
                      <p className="text-gray-600 mb-4 md:mb-4 text-sm md:text-base leading-relaxed">
                        {service.description}
                      </p>
                      <Link href={service.link}>
                        <Button
                          variant="outline"
                          className="border-green-600 relative overflow-hidden text-black px-8 py-4 text-lg font-semibold transition-colors duration-500 group hover:text-white self-start"
                        >
                          <span className="relative z-10">Read More</span>
                          <ArrowRight className="ml-2 w-4 h-4" />
                          <span className="absolute left-0 top-0 h-full w-0 bg-slate-800 transition-all duration-500 ease-in-out group-hover:w-full"></span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>

                {/*<Button
                        variant="outline"
                        className="border-green-600 relative overflow-hidden text-black px-8 py-4 text-lg font-semibold transition-colors duration-500 group hover:text-white self-start"
                      >
                        <span className="relative z-10">
                          Read More
                        </span>
                        <ArrowRight className="ml-2 w-4 h-4" />
                        <span className="absolute left-0 top-0 h-full w-0 bg-slate-800 transition-all duration-500 ease-in-out group-hover:w-full"></span>
                      </Button>*/}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src="/images/about.png"
                alt="What we do"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl arvo-bold font-bold mb-6">
                What <span className=" text-green-500">We</span> Do
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                At GiftySolves Educational Consult, we are committed to
                transforming dreams into reality. Our mission is to guide
                individuals through life's challenges by offering personalized
                support and creating pathways to global opportunities.
              </p>
              <div className="space-y-4">
                {[
                  "Personalized consultation for every client",
                  "Expert guidance through complex visa processes",
                  "Strong partnerships with international institutions",
                  "Comprehensive support from application to arrival",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-20 text-white bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12">
            <div className="lg:w-1/2 w-full">
              <h2 className="text-3xl arvo-bold md:text-4xl font-bold mb-6">
                Get  <span className=' text-green-500' >In Touch</span> With Us
              </h2>
              <p className="text-base md:text-lg text-white mb-8">
                Ready to start your journey? Contact our expert team for
                personalized guidance and support throughout your application
                process.
              </p>
              <div className="hidden lg:block">
                <img
                  src="/images/getintouch.jpg"
                  alt="Contact us"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <Card className="w-full">
                <CardContent className="p-6 md:p-8">
                  <form
                    onSubmit={handleContactSubmit}
                    className="space-y-4 md:space-y-6"
                  >
                    <div>
                      <Input
                        name="name"
                        value={contactForm.name}
                        onChange={handleContactChange}
                        placeholder="Your Full Name"
                        className="w-full h-12"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleContactChange}
                        placeholder="Your Email Address"
                        className="w-full h-12"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="purpose"
                        value={contactForm.purpose}
                        onChange={handleContactChange}
                        placeholder="Purpose of Inquiry (e.g., Student Visa, Tourist Visa)"
                        className="w-full h-12"
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        value={contactForm.message}
                        onChange={handleContactChange}
                        placeholder="Tell us more about your goals and how we can help..."
                        className="w-full h-24 resize-none md:h-32"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 h-12"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <div className="lg:hidden mt-8">
                <img
                  src="/images/getintouch.jpg"
                  alt="Contact us"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl arvo-bold font-bold mb-6">
                How <span className="text-green-500">We</span> Work
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our streamlined process ensures you get the best support every
                step of the way.
              </p>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Initial Consultation",
                    desc: "We assess your goals and create a personalized plan",
                  },
                  {
                    step: "02",
                    title: "Documentation",
                    desc: "Our team helps gather and prepare all required documents",
                  },
                  {
                    step: "03",
                    title: "Application Process",
                    desc: "We guide you through every step of the application",
                  },
                  {
                    step: "04",
                    title: "Success & Support",
                    desc: "Continued support until you reach your destination",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="/images/how.png"
                alt="How it works"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <CounselorsSection counselors={counselors} />
      <ClientFeedback />
      <Footer />
      <FloatingWidgets />
    </div>
  );
};

export default Index;
