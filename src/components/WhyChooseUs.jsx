import React, { useState, useRef, useEffect } from 'react';
import { Award, Users, Globe } from 'lucide-react';

// Add Shadcn carousel imports
import { Carousel, CarouselContent, CarouselItem } from "../components/ui/carousel";
import { cn } from "../lib/utils";

export function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const [api, setApi] = useState(null);

  const reasons = [
    {
      icon: Users,
      title: "End-to-End Excellence",
      description: "Our comprehensive event management approach ensures seamless execution from initial concept to final delivery, handling every detail with precision and care."
    },
    {
      icon: Award,
      title: "Experience & Industry Trust",
      description: "With years of proven expertise and a track record of successful events, we've earned the trust of leading organizations and industry pioneers."
    },
    {
      icon: Globe,
      title: "Global Reach & Local Expertise",
      description: "Our worldwide network combined with deep local market knowledge enables us to deliver impactful events across diverse regions and cultures."
    },
    {
      icon: Users,
      title: "Technical Innovation",
      description: "We integrate cutting-edge technology into every event, from AI-powered networking platforms to advanced registration systems, enhancing the attendee experience."
    },
    {
      icon: Users,
      title: "Proven Track Record",
      description: "Our portfolio of successful events, engaging 40,000+ delegates and facilitating countless business connections, speaks to our ability to deliver impactful outcomes."
    },
    {
      icon: Users,
      title: "Commercial Success",
      description: "Our strategic approach to sponsorships, exhibitions, and delegate acquisition consistently delivers exceptional results, ensuring strong ROI for all stakeholders."
    }
  ];

  useEffect(() => {
    let autoPlayInterval;
    if (api) {
      autoPlayInterval = setInterval(() => {
        api.scrollNext();
      }, 3000); // Change slide every 3 seconds
    }
    return () => {
      if (autoPlayInterval) clearInterval(autoPlayInterval);
    };
  }, [api]);

  return (
    <section className="bg-[#323538] py-20 relative overflow-hidden">
      {/* Separated background image in its own div */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-1/2 lg:w-[100%] z-0 hidden sm:block"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(50, 53, 56, 1)1%, rgba(50, 53, 56, 0.6) 20%, rgba(50, 53, 56, 0.3) 70%), url('/bg_images.png')",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minWidth: "500px",
          maxWidth: "800px"
        }}
      ></div>
      
      {/* Mobile-specific background image */}
      <div 
        className="absolute right-0 top-0 h-[400px] w-[390px] sm:hidden z-0"
        style={{
          backgroundImage: "url('/full_confernce.jfif')",
          backgroundPosition: "right top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain"
        }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-tr from-[#323538] from-30% via-[#323538]/80 to-transparent z-0"></div>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative">
          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-white text-[40px] sm:text-[60px] font-['Anek_Devanagari'] font-[500] mb-16 text-left mt-[13rem] md:mt-20">
              Why Choose Trescon's<br />
              Managed Events
            </h2>

            {/* Shadcn Carousel */}
            <Carousel
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
                containScroll: false,
                slidesToScroll: 1,
              }}
              className="w-full"
              setApi={(apiInstance) => {
                if (apiInstance) {
                  apiInstance.on("select", () => {
                    const selected = apiInstance.selectedScrollSnap();
                    setActiveIndex(selected);
                  });
                  setApi(apiInstance);
                }
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {reasons.map((reason, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] sm:basis-[70%] md:basis-1/3 lg:basis-[32%]">
                    <div className="group bg-transparent border-[1.5px] sm:border-[2px] border-[rgba(255,255,255,0.5)] p-4 sm:p-6 transition-colors duration-300 relative overflow-hidden h-full">
                      {/* Display different image based on index */}
                      <img
                        src={
                          index === 0 ? "/shooting_png.gif" : 
                          index === 1 ? "/mahal-unscreen.gif" : 
                          index === 2 ? "/Map-unscreen.gif" :
                          index === 3 ? "/brain-unscreen.gif" :
                          index === 4 ? "/graph-unscreen.gif" :
                          "/money-unscreen.gif"
                        }
                        alt={
                          index === 0 ? "Shooting star" : 
                          index === 1 ? "Mahal animation" : 
                          index === 2 ? "Map animation" : 
                          index === 3 ? "Brain animation" :
                          index === 4 ? "Graph animation" :
                          "Money animation"
                        }
                        className="h-[60px] w-[60px] sm:h-[80px] sm:w-[80px] mr-3 inline-block mix-blend-screen mb-10 sm:mb-20"
                      />
                      <h3 className="text-white text-[20px] sm:text-[26px] font-['Anek_Devanagari'] font-[600] mb-3 sm:mb-4 text-left relative z-10">
                        {reason.title}
                      </h3>
                      <p className="text-gray-400 text-[16px] sm:text-[18px] font-manrope font-[400] leading-relaxed text-left relative z-10 mb-10">
                        {reason.description}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}