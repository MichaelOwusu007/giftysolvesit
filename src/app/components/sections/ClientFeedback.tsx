import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const ClientFeedbackSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const testimonials = [
    {
      id: 1,
      name: "Atta fynn Senior",
      location: "Kumasi, Ghana",
      university: "University of Toronto, Canada",
      rating: 5,
      feedback:
        "I received a one year study permit to Canada through the help of GiftySolves Educational Consult. They facilitated the whole process for me",
      image:
        "/images/testimony1.png",
      initials: "AS",
    },
    {
      id: 2,
      name: "Atta Fynn Junior",
      location: "Kumasi, Ghana",
      university: "University of Manchester, UK",
      rating: 5,
      feedback:
        "The process seemed too cumbersome for me to handle on my own but GiftySolves assisted and made it easier.",
      image:
        "/images/testimony2.png",
      initials: "AJ",
    },
    {
      id: 3,
      name: "Queenstar Animah Ababio",
      location: "Accra, Ghana",
      university: "Australian National University",
      rating: 5,
      feedback:
        "I received a four-year student visa and a work permit to study a Bachelor’s degree program at University of Ottawa with the help of GiftySolves Educational Consult",
      image:
        "/images/testimony3.png",
      initials: "QA",
    },
    {
      id: 4,
      name: "David",
      location: "Cape Coast, Ghana",
      university: "Harvard University, USA",
      rating: 5,
      feedback:
        "The settlement consultation services were outstanding. GiftySolves helped me understand everything about living abroad. Their guidance was invaluable in my journey to the United States.",
      image:
        "/images/testimony4.png",
      initials: "D",
    },

  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-3 h-3 sm:w-4 sm:h-4 ${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-green-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Enhanced Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 h-16 sm:w-24 sm:h-24 bg-green-100/40 rounded-full opacity-30 animate-pulse"></div>
        <div
          className="absolute top-1/3 right-8 sm:right-16 w-20 h-20 sm:w-32 sm:h-32 bg-blue-100/30 rounded-full opacity-40 animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute bottom-20 sm:bottom-32 left-1/4 sm:left-1/3 w-12 h-12 sm:w-20 sm:h-20 bg-green-200/40 rotate-45 opacity-25 animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
        <div className="absolute top-1/4 right-1/4 w-8 h-8 sm:w-12 sm:h-12 bg-green-300/40 rounded-full opacity-30 animate-ping"></div>

        {/* Enhanced Gradient Orbs */}
        <div
          className="absolute top-0 left-0 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-green-100/30 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-tl from-blue-100/25 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        ></div>

        {/* Quote decorative elements */}
        <div className="absolute top-1/2 left-10 sm:left-20 opacity-10">
          <Quote
            size={24}
            className="sm:w-12 sm:h-12 text-green-600 rotate-12"
          />
        </div>
        <div className="absolute bottom-1/4 right-16 sm:right-32 opacity-10">
          <Quote
            size={20}
            className="sm:w-10 sm:h-10 text-blue-600 -rotate-12"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl arvo-bold sm:text-3xl md:text-5xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
            What Our <span className="text-green-500" >Clients</span> Say
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
            Success stories from students who achieved their dreams
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Client Feedback Carousel */}
          <div className="order-2 lg:order-1 w-full">
            <Carousel
              className="w-full max-w-2xl mx-auto lg:mx-0"
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id}>
                    <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
                      <CardContent className="p-4 sm:p-6 md:p-8">
                        <div className="flex items-center mb-3 sm:mb-4">
                          <Avatar className="w-10 h-10 sm:w-12 sm:h-12 mr-3 sm:mr-4 flex-shrink-0">
                            <AvatarImage
                              src={testimonial.image}
                              alt={testimonial.name}
                            />
                            <AvatarFallback className="bg-green-100 text-green-700 font-semibold text-xs sm:text-sm">
                              {testimonial.initials}
                            </AvatarFallback>
                          </Avatar>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-semibold text-sm sm:text-lg text-gray-900 truncate">
                              {testimonial.name}
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-600 truncate">
                              {testimonial.location}
                            </p>
                            <p className="text-xs sm:text-sm text-green-600 font-medium truncate">
                              {testimonial.university}
                            </p>
                          </div>
                        </div>

                        <div className="flex mb-3 sm:mb-4">
                          {renderStars(testimonial.rating)}
                        </div>

                        <div className="relative">
                          <Quote className="absolute -top-1 sm:-top-2 -left-1 sm:-left-2 w-4 h-4 sm:w-6 sm:h-6 text-green-200" />
                          <p className="text-gray-700 leading-relaxed italic pl-3 sm:pl-4 text-xs sm:text-sm md:text-base">
                            "{testimonial.feedback}"
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 sm:-left-12 w-8 h-8 sm:w-10 sm:h-10 border-green-600 text-green-600 hover:bg-green-600 hover:text-white" />
              <CarouselNext className="right-2 sm:-right-12 w-8 h-8 sm:w-10 sm:h-10 border-green-600 text-green-600 hover:bg-green-600 hover:text-white" />
            </Carousel>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2 w-full">
            <div className="relative max-w-md sm:max-w-lg lg:max-w-none mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-2xl sm:rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-xl">
                <img
                  src="/images/slider-image1.jpg"
                  alt="Happy students celebrating success"
                  className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl sm:rounded-2xl"></div>
              </div>

              {/* Floating success badge */}
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-green-600 text-white rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-lg float-animation">
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold">50+</div>
                  <div className="text-xs">Success Stories</div>
                </div>
              </div>

              {/* Floating rating badge */}
              <div
                className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-lg float-animation"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="font-bold text-gray-900 text-sm sm:text-base">
                    4.9
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientFeedbackSection;
