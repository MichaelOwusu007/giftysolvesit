import React, { useState, useEffect } from "react";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  heroImages: string[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ heroImages }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section className="relative h-[700px] overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 hero-image ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "opacity 2s ease-in-out",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* ✅ Red angled overlay (fixed only this) */}
      <div className=" lg:block absolute hidden right-0 -left-40 -bottom-6 top-72  h-full w-full pointer-events-none z-10">
        <div className="absolute -bottom-8 rounded-tl-[100px] rounded-tr-[100px] right-20 w-[13%] h-full bg-orange-500 opacity-30 rotate-45 origin-top-right translate-x-1/3"></div>
      </div>

      <div className="relative z-10 -top-8 h-full flex items-center sm:left-4 -left-5 md:px-4 ">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <span className=" bg-gray-400  border-l-8 border-green-500 px-4 py-1 font-bold md:text-lg text-md ">
                GIFTYSOLVES
              </span>
              <h1 className="sm:text-4xl text-4xl md:text-5xl lg:text-6xl font-bold my-6 arvo-bold leading-tight">
                We assist you throughout the journey
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Travel is the ultimate classroom, and education is the ticket to
                your dreams. Let us guide you to global opportunities.
              </p>
              <Button
                size="lg"
                className="relative overflow-hidden bg-green-600 text-white px-4 md:px-6 py-4 text-lg font-semibold transition-colors duration-500 group"
              >
                <span className="relative z-10">
                  Book an Appointment with us
                </span>
                <span className="absolute left-0 top-0 h-full w-0 bg-slate-800 transition-all duration-500 ease-in-out group-hover:w-full"></span>
              </Button>
            </div>

            {/*<div className="hidden lg:block">
              <div className="relative lg:left-14 xl:left-48 2xl:left-[274px]   ">
                <div className="w-96 h-96 rounded-full bg-gradient-to-br from-green-400/20 to-blue-400/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                  <div className="w-80 h-80 rounded-full bg-gradient-to-br from-green-500/30 to-blue-500/30 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <div className="text-center">
                      <Globe className="w-24 h-24 text-white mx-auto mb-4 animate-pulse" />
                      <p className="text-white text-lg font-semibold">
                        GIFTYSLOVES CONSULTANT
                      </p>
                      <p className="text-white/80">Global Opportunities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
