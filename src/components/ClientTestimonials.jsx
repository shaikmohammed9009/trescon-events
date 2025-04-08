import React from 'react';

export function ClientTestimonials() {
  return (
    <section className="bg-black py-20 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative w-full max-w-[600px] justify-self-center md:justify-self-start">
            {/* Main image with centered overlay */}
            <div className="relative">
              <img
                src="/circles_images.png"
                alt="Client testimonial circles"
                width="777"
                height="765"
                style={{ width: "100%", height: "auto" }}
                className="object-contain"
              />
              
              {/* Centered circular image overlaid */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-[25rem] md:h-[25rem] rounded-full overflow-hidden  ">
                <img 
                  src="/shaik_meeting.png"
                  alt="Shaik meeting"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error("Image failed to load");
                    e.target.src = "https://via.placeholder.com/128";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full">
            <h2 className="text-white text-[40px] md:text-[60px] font-['Anek_Devanagari'] font-[500] mb-8">
              What Our<br className="md:hidden" /> Clients Say
            </h2>
            
            <blockquote className="mb-8">
              <p className="text-gray-300 text-[18px] md:text-[22px] font-manrope font-[600] leading-relaxed mb-6">
                "Dubai FinTech Summit has emerged as a global platform for driving innovation and shaping the future of finance. Trescon's expert care and seamless execution has been pivotal in transforming our vision into a world-class event."
              </p>
              <footer className="border-l-2 border-[#00A5A3] pl-8">
                <div className="text-[#ffff] mt-4 font-['Anek_Devanagari'] font-[500] text-[24px] md:text-[30px]">
                  Mohammad Alblooshi
                </div>
                <div className="text-gray-400 text-[18px] md:text-[20px] font-manrope font-[600]">
                  CEO, DIFC Innovation Hub
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}