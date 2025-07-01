"use client";



import React, { useState, useEffect } from "react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Mail,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Counselor {
  name: string;
  expertise: string;
  image: string;
  email: string;
  facebook: string;
  linkedin: string;
  twitter: string;
}

interface CounselorsSectionProps {
  counselors: Counselor[];
}

const CounselorsSection: React.FC<CounselorsSectionProps> = ({
  counselors,
}) => {
  const [currentCounselor, setCurrentCounselor] = useState(0);
  const [hoveredCounselor, setHoveredCounselor] = useState<number | null>(null);
  const [cardsToShow, setCardsToShow] = useState(4);

  useEffect(() => {
    const updateCardsToShow = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // mobile
        setCardsToShow(1);
      } else if (width < 1024) {
        // tablet
        setCardsToShow(2);
      } else {
        // desktop
        setCardsToShow(4);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCounselor(
        (prev) => (prev + 1) % (counselors.length - cardsToShow + 1)
      );
    }, 4000);
    return () => clearInterval(timer);
  }, [counselors.length, cardsToShow]);

  const nextCounselor = () => {
    setCurrentCounselor(
      (prev) => (prev + 1) % (counselors.length - cardsToShow + 1)
    );
  };

  const prevCounselor = () => {
    setCurrentCounselor(
      (prev) =>
        (prev - 1 + (counselors.length - cardsToShow + 1)) %
        (counselors.length - cardsToShow + 1)
    );
  };

  const getCardWidth = () => {
    if (cardsToShow === 1) return "100%";
    if (cardsToShow === 2) return "50%";
    return "25%";
  };

  const getTranslateX = () => {
    const percentage = (100 / cardsToShow) * currentCounselor;
    return `-${percentage}%`;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">
            Our Expert Counselors
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Meet our dedicated team of professionals
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(${getTranslateX()})` }}
            >
              {counselors.map((counselor, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-2 md:px-3"
                  style={{ width: getCardWidth() }}
                >
                  <Card
                    className="bg-white hover:shadow-xl transition-all duration-300 overflow-hidden h-full "
                    onMouseEnter={() => setHoveredCounselor(index)}
                    onMouseLeave={() => setHoveredCounselor(null)}
                  >
                    <CardContent className="p-0">
                      {/* Image Section */}
                      <div className="relative cursor-pointer 48 h-96 sm:h-72 overflow-hidden">
                        <img
                          src={counselor.image}
                          alt={counselor.name}
                          className={`w-full h-full lg:object-cover transition-transform duration-300 ${
                            hoveredCounselor === index
                              ? "scale-95"
                              : "scale-100"
                          }`}
                        />
                      </div>

                      {/* Content Section */}
                      <div className="p-4 md:p-6">
                        <h3 className="text-lg md:text-xl font-bold mb-1 text-blue-600">
                          {counselor.name}
                        </h3>
                        <p className="text-green-600 font-medium mb-3 md:mb-4 text-sm md:text-base">
                          {counselor.expertise}
                        </p>

                        <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
                          {index === 0 &&
                            "The administrative secretary of GiftySolves Educational Consult. She assists with all the administrative work of the agency and doubles up as the assistant of the general manager."}
                          {index === 1 &&
                            "The CEO of Osborns Legal Services. He is an astute legal practitioner with over a decade experience in law practice. He has been with GiftySolves Educational Consult since its inception and is currently the legal advisor."}
                          {index === 2 &&
                            "The founder of JEAP Foundation. He is a passionate young man who through his foundation offers support to the needy in the rural areas of Ghana. He is currently the digital marketer of GiftySolves Educational Consult."}
                          {index === 3 &&
                            "The founder and manager of GiftySolves Educational Consult. In addition to managing the consult, she is a full time educational counsellor. Her passion is to guide youths in their future career paths."}
                          {index == 4 &&
                            "Expert counselor dedicated to providing personalized guidance and support for students pursuing international education opportunities."}
                          {index == 5 &&
                            " lorem i am Micahel Owusu And i come rom Kwahu Mpreaso i stay.Expert counselor dedicated to providing personalized guidance for students pursuing international education opportunities. "}
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex justify-center gap-3 md:gap-4 transition-all  duration-300">
                          <a
                            href={`mailto:${counselor.email}`}
                            className="text-green-600 hover:text-green-700 transition-colors"
                          >
                            <Mail size={18} className="md:w-5 md:h-5" />
                          </a>
                          <a
                            href={counselor.facebook}
                            className="text-green-600 hover:text-green-700 transition-colors"
                          >
                            <Facebook size={18} className="md:w-5 md:h-5" />
                          </a>
                          <a
                            href={counselor.linkedin}
                            className="text-green-600 hover:text-green-700 transition-colors"
                          >
                            <Linkedin size={18} className="md:w-5 md:h-5" />
                          </a>
                          <a
                            href={counselor.twitter}
                            className="text-green-600 hover:text-green-700 transition-colors"
                          >
                            <Twitter size={18} className="md:w-5 md:h-5" />
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevCounselor}
            className="absolute left-2 md:left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 z-10"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextCounselor}
            className="absolute right-2 md:right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 z-10"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CounselorsSection;
