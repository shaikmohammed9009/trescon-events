import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Contact() {
  const eventTypes = [
    {
      question: "Planning a large-scale conference or summit?",
      checked: true,
      useAlternateImage: true
    },
    {
      question: "Looking to create a flagship industry event?",
      checked: true
    },
    {
      question: "Need end-to-end event management support?",
      checked: true
    },
    {
      question: "Want to maximize event ROI?",
      checked: true,
      useAlternateImage: true
    }
  ];

  return (
    <section className="relative py-20" style={{
      background: "linear-gradient(115deg, #1E2124 50%, #464D53 100%)"
    }}>
      {/* Background dots image */}
      <div className="absolute bottom-0 right-0 overflow-hidden pointer-events-none z-0">
        <img
          src="/contain_dot_image.png"
          alt="Decorative dots"
          className="w-40 md:w-[30rem] "
        />
      </div>
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-[1.2fr,1fr] gap-12 items-start">
          {/* Left Column */}
          <div>
            <h2 className="text-white text-[40px] md:text-[60px] font-['Anek_Devanagari'] font-[500] mb-12">
              Let's Create Something<br /> Extraordinary
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {eventTypes.map((type, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1.5 flex-shrink-0">
                    <img 
                      src={type.useAlternateImage ? "/contain_circle_2.png" : "/contain_circle.png"}
                      alt="Decorative circle"
                      className="w-[26px] h-[26px] md:w-8 md:h-7"
                    />
                  </div>
                  <span className="text-white text-[20px] md:text-[24px] ml-6 font-['Anek_Devanagari'] font-[500]">{type.question}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column */}
          <div className="relative">
            <p className="text-[#ffffff] text-[18px] md:text-[20px] font-manrope font-[400] max-w-md mb-8 mt-4">
              Transform your next event into an unforgettable experience that drives real impact.
            </p>
            
            {/* Three cards with images - horizontal scrollable on mobile */}
            <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-2 md:gap-3 max-w-md pb-4">
              {/* Card 1 */}
              <div className="bg-[#00A5A3] flex-shrink-0 flex flex-col h-[180px] md:h-[220px] max-w-[124px] max-[400px]:w-[115px] max-[375px]:w-[90px] max-[320px]:w-[85px] md:w-auto">
                <div className="flex justify-center relative items-center flex-1">
                  <img 
                    src="/sanjiv_sing.png" 
                    alt="Sanjiv Singh"
                    width="110"
                    height="110"
                    className="object-cover absolute bottom-0 max-[400px]:w-[90px] max-[400px]:h-[90px] max-[320px]:w-[75px] max-[320px]:h-[75px] md:w-[142px] md:h-[142px]"
                  />
                </div>
                <div className="bg-[#1E2124] p-3 max-[320px]:p-2">
                  <h4 className="text-[#00A5A3] text-[14px] font-['Anek_Devanagari'] font-[600] text-center">Sanjiv Singh</h4>
                  <p className="text-white text-[12px] font-manrope font-[400] text-center">Event Solutions</p>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="bg-[#F4ED3C] flex-shrink-0 flex flex-col h-[180px] md:h-[220px] max-w-[124px] max-[400px]:w-[115px] max-[375px]:w-[90px] max-[320px]:w-[85px] md:w-auto">
                <div className="flex justify-center relative items-center flex-1">
                  <img 
                    src="/Vijay_Walter_image.png" 
                    alt="Vijay Walter"
                    width="110"
                    height="110"
                    className="object-cover absolute bottom-0 max-[400px]:w-[90px] max-[400px]:h-[90px] max-[320px]:w-[75px] max-[320px]:h-[75px] md:w-[142px] md:h-[142px]"
                  />
                </div>
                <div className="bg-[#1E2124] p-3 max-[320px]:p-2">
                  <h4 className="text-[#00A5A3] text-[14px] font-['Anek_Devanagari'] font-[600] text-center">Vijay Walter</h4>
                  <p className="text-white text-[12px] font-manrope font-[400] text-center">Event Strategy</p>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="bg-[#C0F43C] flex-shrink-0 flex flex-col h-[180px] md:h-[220px] max-w-[124px] max-[400px]:w-[115px] max-[375px]:w-[90px] max-[320px]:w-[85px] md:w-auto">
                <div className="flex justify-center relative items-center flex-1">
                  <img 
                    src="/Christine.png" 
                    alt="Christine"
                    width="90"
                    height="90"
                    className="object-cover absolute bottom-0 max-[400px]:w-[80px] max-[400px]:h-[80px] max-[320px]:w-[65px] max-[320px]:h-[65px] md:w-[114px] md:h-[114px]"
                  />
                </div>
                <div className="bg-[#1E2124] p-3 max-[320px]:p-2">
                  <h4 className="text-[#00A5A3] text-[14px] font-['Anek_Devanagari'] font-[600] text-center">Christine Lee</h4>
                  <p className="text-white text-[12px] font-manrope font-[400] text-center">Client Relations</p>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="mt-[5px] max-w-md">
              <a
                href="#contact"
                className="flex items-center justify-between gap-3 bg-[#C0F43C] text-black max-[320px]:px-4 px-8 max-[320px]:py-3 py-4 hover:bg-[#b8e600] transition-colors w-full"
              >
                <span className="font-['Anek_Devanagari'] font-[600] max-[320px]:text-[18px] text-[24px]">LET'S TALK</span>
                <ArrowRight className="max-[320px]:w-4 max-[320px]:h-4 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}