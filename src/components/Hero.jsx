import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-[140vh] sm:h-[130vh] md:h-[120vh] w-full overflow-hidden -mt-24">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-[140vh] sm:h-[130vh] md:h-[120vh] object-cover"
      >
        <source src="/Managed-events-hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative h-full flex items-end ">
        <div className="max-w-[1440px] w-full px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end">
            {/* Main content */}
            <div className="max-w-full md:max-w-[48rem] lg:max-w-[35rem] xl:max-w-[48rem] lg:mb-[5rem] xl:mb-[5rem] mb-0" >
              <h1 className=" md:text-[70px] lg:text-[50px] xl:text-[70px] leading-[2.5rem] lg:leading-[4rem] xl:leading-[5rem] font-manrope font-semibold text-white lg:mb-6 xl:mb-6 mb-4">
                <span className="font-['Anek_Devanagari'] font-[400] text-[48px] md:!text-[70px] lg:text-[50px] xl:text-[70px]">Transforming Visions into</span>
                <span className="block text-[#CDFF00] text-[34px] sm:text-[70px] lg:text-[50px] xl:text-[70px] font-['Anek_Devanagari'] !font-[700]">World-Class Events</span>
              </h1>
              <p className="text-[16px] font-[500] font-['Manrope'] md:text-[17px] lg:text-[17px] xl:text-[17px] text-gray-300 mb-6 max-w-[38rem]">
                From concept to execution, we deliver large-scale events that drive industry 
                evolution and create lasting impact. Our end-to-end managed services 
                transform ambitious vision into exceptional experiences.
              </p>
            </div>

            {/* Card - full width edge to edge on mobile */}
            <div className="w-[calc(100%+2rem)] md:w-[380px] -mx-4 md:mx-0 mt-4 md:mt-0 md:mb-[-1rem]">
              <div className="bg-black py-6 md:py-10 px-4 md:px-4 rounded-none md:rounded-lg rounded-tl-[1rem] rounded-tr-[1rem] ">
                <div className="flex flex-col gap-3">
                  <a
                    href="#services"
                    className="inline-flex items-center justify-between px-5 py-2.5 text-white font-['Anek_Devanagari'] font-[600] text-[16px] lg:text:[18px] xl:text-[24px] uppercase rounded-md hover:bg-white/10 transition-colors"
                  >
                    Explore Our Services
                    <ArrowRight className="h-6 w-6 xl:h-[1.2rem] lg:w-[1.2rem] text-[#C0F43C]" />
                  </a>
                  <a
                    href="#case-studies"
                    className="inline-flex items-center justify-between px-5 py-2.5 text-white font-['Anek_Devanagari'] font-[600] text-[16px] lg:text:[18px] xl:text-[24px] uppercase rounded-md hover:bg-white/10 transition-colors"
                  >
                    View Case Studies
                    <ArrowRight className="h-6 w-6 xl:h-[1.2rem] xl:w-[1.2rem] text-[#C0F43C]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}