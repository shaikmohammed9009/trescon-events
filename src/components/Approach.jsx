import React from 'react';
import { Target, Award, Tv } from 'lucide-react';

export function Approach() {
  return (
    <section className="bg-[#1E2124] py-20 !pb-[13rem]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center mb-20">
          <div className="md:col-span-2  self-end">
            <h2 className="text-white text-[40px] md:text-[75px] font-['Anek_Devanagari'] font-[500]">
              Our Approach
            </h2>
          </div>
          
          <div className="text-gray-400 leading-relaxed md:col-span-3">
            <p className="text-[16px] md:text-[22px] !font-[400] font-['Manrope']">
              At Trescon, we believe successful events are built on three fundamental pillars: Strategic Vision Operational Excellence, and Measurable Impact. Each event we manage is approached with meticulous attention to detail and a commitment to exceeding stakeholder expectations.
            </p>
          </div>
        </div>

        <div className="md:space-y-[15rem] space-y-[3rem]">
          {/* Section 1 - STRATEGIC VISION */}
          <div className="relative">
            <div className="grid md:grid-cols-[1.5fr,1fr] gap-8 items-center">
              <div className="relative flex md:justify-center pb-20 md:sticky md:top-20 md:z-30">
                {/* Green circle - hidden on mobile */}
                <div className="absolute left-0 top-0 w-[32px] h-[32px] rounded-full bg-[#C0F43C] z-10 hidden md:block"></div>
                
                {/* Vertical line extending from circle - hidden on mobile */}
                <div className="absolute left-[14px] top-[80px] w-[2px] h-[500px] bg-white/20 z-10 hidden md:block"></div>
                
                <div className="relative">
                  <img
                    src="hall_1.png"
                    alt="Strategic Vision"
                    className="w-full h-[382px] md:w-[410px] md:h-[460px] aspect-video object-cover mx-auto"
                  />
                  
                  {/* Eye GIF */}
                  <div className="absolute bottom-[-5rem] sm:bottom-[-6rem] md:bottom-[-8rem] right-[0] sm:right-[-6rem] md:right-[-8rem] w-[10rem] sm:w-[14rem] md:w-[18rem] h-[10rem] sm:h-[14rem] md:h-[18rem] rounded-full border-[1px] border-[#C0F43C] flex items-center justify-center z-20">
                    <div className="w-[8rem] sm:w-[12rem] md:w-[15rem] h-[8rem] sm:h-[12rem] md:h-[15rem] rounded-full border-[1px] border-[#C0F43C] flex items-center justify-center">
                      <div className="w-[100px] sm:w-[140px] md:w-[171px] h-[100px] sm:h-[140px] md:h-[171px] rounded-full bg-[#E6FFA6] flex items-center justify-center">
                        <img
                          src="/eye.gif"
                          alt="Eye animation"
                          className="w-[50px] sm:w-[60px] md:w-[76px] h-auto object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='md:p-4'>
                <h3 className="text-[#FFFB9E] text-[24px] md:text-[36px] font-['Anek_Devanagari'] font-[600] mb-4">
                  STRATEGIC VISION
                </h3>
                <p className="text-gray-400 text-[16px] md:text-[23px] font-manrope font-[400] leading-relaxed">
                  We help you chart the path to your business objectives and create a solid game plan. Our strategic team works with you to define clear goals and create a roadmap to achieve them.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 - OPERATIONAL EXCELLENCE */}
          <div className="relative">
            <div className="grid md:grid-cols-[1.5fr,1fr] gap-8 items-center">
              <div className="relative flex md:justify-center pb-20 md:sticky md:top-20 md:z-30">
                {/* Green circle - hidden on mobile */}
                <div className="absolute left-0 top-0 w-[32px] h-[32px] rounded-full bg-[#C0F43C] z-10 hidden md:block"></div>
                
                {/* Vertical line extending from circle - hidden on mobile */}
                <div className="absolute left-[14px] top-[80px] w-[2px] h-[500px] bg-white/20 z-10 hidden md:block"></div>
                
                <div className="relative">
                  <img
                    src="/mans.png"
                    alt="Operational Excellence"
                    className="w-full h-[382px] md:w-[410px] md:h-[460px] aspect-video object-cover mx-auto"
                  />
                  
                  {/* Setting GIF */}
                  <div className="absolute bottom-[-5rem] sm:bottom-[-6rem] md:bottom-[-8rem] right-[0] sm:right-[-6rem] md:right-[-8rem] w-[10rem] sm:w-[14rem] md:w-[18rem] h-[10rem] sm:h-[14rem] md:h-[18rem] rounded-full border-[1px] border-[#C0F43C] flex items-center justify-center z-20">
                    <div className="w-[8rem] sm:w-[12rem] md:w-[15rem] h-[8rem] sm:h-[12rem] md:h-[15rem] rounded-full border-[1px] border-[#C0F43C] flex items-center justify-center">
                      <div className="w-[100px] sm:w-[140px] md:w-[171px] h-[100px] sm:h-[140px] md:h-[171px] rounded-full bg-[#FFFB9E] flex items-center justify-center">
                        <img
                          src="/setting.gif"
                          alt="Settings animation"
                          className="w-[50px] sm:w-[60px] md:w-[76px] h-auto object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='md:p-4'>
                <h3 className="text-[#FFFB9E] text-[24px] md:text-[36px] font-['Anek_Devanagari'] font-[600] mb-4">
                  OPERATIONAL EXCELLENCE
                </h3>
                <p className="text-gray-400 text-[16px] md:text-[23px] font-manrope font-[400] leading-relaxed">
                  Our 360° approach to event management ensures flawless execution. From venue selection to technical production to attendee experience, we handle every detail with precision.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 - MEASURABLE IMPACT */}
          <div className="relative">
            <div className="grid md:grid-cols-[1.5fr,1fr] gap-8 items-center">
              <div className="relative flex md:justify-center pb-20 md:sticky md:top-20 md:z-30">
                {/* Green circle - hidden on mobile */}
                <div className="absolute left-0 top-0 w-[32px] h-[32px] rounded-full bg-[#C0F43C] z-10 hidden md:block"></div>
                
                {/* Vertical line extending from circle - hidden on mobile */}
                <div className="absolute left-[14px] top-[80px] w-[2px] h-[500px] bg-white/20 z-10 hidden md:block"></div>
                
                <div className="relative">
                  <img
                    src="/meet_3.png"
                    alt="Measurable Impact"
                    className="w-full h-[382px] md:w-[410px] md:h-[460px] aspect-video object-cover mx-auto"
                  />
                  
                  {/* Chart GIF */}
                  <div className="absolute bottom-[-5rem] sm:bottom-[-6rem] md:bottom-[-8rem] right-[0] sm:right-[-6rem] md:right-[-8rem] w-[10rem] sm:w-[14rem] md:w-[18rem] h-[10rem] sm:h-[14rem] md:h-[18rem] rounded-full border-[1px] border-[#C0F43C] flex items-center justify-center z-20">
                    <div className="w-[8rem] sm:w-[12rem] md:w-[15rem] h-[8rem] sm:h-[12rem] md:h-[15rem] rounded-full border-[1px] border-[#C0F43C] flex items-center justify-center">
                      <div className="w-[100px] sm:w-[140px] md:w-[171px] h-[100px] sm:h-[140px] md:h-[171px] rounded-full bg-[#E6FFA6] flex items-center justify-center">
                        <img
                          src="/chart.gif"
                          alt="Chart animation"
                          className="w-[50px] sm:w-[60px] md:w-[76px] h-auto object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='md:p-4'>
                <h3 className="text-[#FFFB9E] text-[24px] md:text-[36px] font-['Anek_Devanagari'] font-[600] mb-4">
                  MEASURABLE IMPACT
                </h3>
                <p className="text-gray-400 text-[16px] md:text-[23px] font-manrope font-[400] leading-relaxed">
                  We focus on creating tangible business value that extends beyond the event itself. Through data-driven insights and technical innovation, we help take the ROI of your events to a whole new level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}