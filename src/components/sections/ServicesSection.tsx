
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      title: "Student Visa Support",
      description:
        "Complete assistance with student visa applications and documentation for studying abroad. Our expert team guides you through every step of the process.",
      link: "/study-abroad",
    },
    {
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      title: "Tourist & Visit Visas",
      description:
        "Professional processing of tourist, visit, and settlement visa applications worldwide. We handle all documentation and requirements.",
      link: "/tourist-visa",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
      title: "Interview Coaching",
      description:
        "Expert coaching for embassy and school interviews to boost your success rate. Practice sessions with real scenarios and feedback.",
      link: "/interview-coaching",
    },
    {
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      title: "Career Counseling",
      description:
        "Personalized career guidance for youth and students planning their future abroad. Comprehensive planning and support services.",
      link: "/career-counseling",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-green-50/30 relative overflow-hidden">
      {/* Enhanced Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-100/40 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-24 h-24 bg-blue-100/50 rounded-full opacity-40 animate-bounce"></div>
        <div
          className="absolute bottom-20 left-1/4 w-16 h-16 bg-green-200/40 rotate-45 opacity-25 animate-spin"
          style={{ animationDuration: "15s" }}
        ></div>
        <div className="absolute top-1/4 left-1/2 w-8 h-8 bg-green-300/40 rounded-full opacity-30 animate-ping"></div>

        {/* Enhanced Gradient Orbs */}
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-100/30 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s" }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100/25 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s", animationDelay: "1s" }}
        ></div>

        {/* Floating lines */}
        <div className="absolute top-1/3 right-1/3 w-40 h-0.5 bg-gradient-to-r from-transparent via-green-300/30 to-transparent rotate-45 animate-pulse"></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-300/25 to-transparent -rotate-45 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Services We Provide
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600">
            Comprehensive support for your international journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
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
                    <div className="absolute inset-0 bg-green-600/80 flex items-center justify-center">
                      <h3 className="text-white font-bold text-lg md:text-lg text-center px-4">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 p-4 md:p-4 lg:p-6 flex flex-col justify-between">
                    <p className="text-gray-600 mb-4 md:mb-4 text-sm md:text-base leading-relaxed">
                      {service.description}
                    </p>
                    <Link to={service.link}>
                      <Button
                        variant="outline"
                        className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white self-start text-sm w-full md:w-auto"
                      >
                        Read More{" "}
                        <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
