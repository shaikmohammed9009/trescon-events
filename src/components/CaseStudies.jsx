import React, { useState, useEffect, useRef } from 'react';

export function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Define different event data sets
  const eventData = [
    {
      title: "DUBAI FINTECH SUMMIT 2024",
      description: (<>
      Trescon's flagship managed event that <br /> positioned Dubai as a global FinTech hub
      </>),
      image: "/events_image.png",
      stats: [
        { value: '8,572+', label: 'Business Leaders' },
        { value: '1,050+', label: 'Investors' },
        { value: '323+', label: 'Global Speakers' },
        { value: '281+', label: 'Exhibitors' },
      ]
    },
    {
      title: "DUBAI AI & WEB3 FESTIVAL",
      description: "A groundbreaking festival that showcased Dubai's leadership in AI and Web3.",
      image: "/dubai_meeting.png",
      stats: [
        { value: '6,800+', label: 'Attendees' },
        { value: '500+', label: 'Companies' },
        { value: '100+', label: 'Speakers' },
        { value: '100+', label: 'Exhibitors' },
      ]
    },
    {
      title: "FUTURE SUSTAINABILITY FORUM",
      description: "Bringing together sustainability leaders to drive environmental innovation",
      image: "/Rectangle_111723.png",
      stats: [
        { value: '3000+', label: 'Attendees' },
        { value: '100+', label: 'Exhibitors & Partners' },
        { value: '100+', label: 'Speakers' },
        { value: '100+', label: 'Countries' },
      ]
    },
    {
      title: "DUBAI FINTECH SUMMIT 2023",
      description: "The inaugural edition that set new benchmarks for FinTech events",
      image: "/Rectangle_111724.png",
      stats: [
        { value: '5,314+', label: 'Attendees' },
        { value: '148+', label: 'Speakers' },
        { value: '106+', label: 'Exhibitors' },
        { value: '92+', label: 'Countries' },
      ]
    },
    {
      title: "CLIMATE CHANGE FORUM",
      description: "The inaugural edition that spotlighted actions on global climate change",
      image: "/Rectangle_111725.png",
      stats: [
        { value: '1000+', label: 'Attendees' },
        { value: '250+', label: 'Investors' },
        { value: '70+', label: 'Investors' },
        { value: '20+', label: 'Exhibitors & Partners' },
      ]
    }
  ];
  
  const [counters, setCounters] = useState(eventData[activeIndex].stats.map(() => 0));
  const counterRef = useRef(null);

  // Reset counters when active index changes
  useEffect(() => {
    setCounters(eventData[activeIndex].stats.map(() => 0));
  }, [activeIndex]);

  // Auto counting effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const intervals = eventData[activeIndex].stats.map((stat, index) => {
          const targetValue = parseInt(stat.value.replace(/[^0-9]/g, ''));
          const duration = 2000; // 2 seconds
          const stepTime = Math.abs(Math.floor(duration / targetValue));

          return setInterval(() => {
            setCounters((prev) => {
              const newCounters = [...prev];
              if (newCounters[index] < targetValue) {
                newCounters[index] = Math.min(newCounters[index] + Math.ceil(targetValue / 100), targetValue);
              }
              return newCounters;
            });
          }, stepTime);
        });

        return () => intervals.forEach((interval) => clearInterval(interval));
      }
    }, { threshold: 0.1 });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [activeIndex]);

  return (
    <section className="bg-[#1E2124] py-20 !pb-0">
      <div className="max-w-[1440px] mx-auto px-8  sm:px-6 lg:px-8">
        {/* Header with logos */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-2 mb-12">
          <div>
            <h2 className="text-white text-[40px] md:text-[60px] font-['Anek_Devanagari'] font-[500] mb-2 md:mb-0">
              Featured <br className="md:hidden"/> Case Studies
            </h2>
          </div>
          <div className="text-white/80">
            <p className="text-[16px] md:text-[22px] font-manrope font-[400] leading-relaxed">
              Discover some of our most impactful managed events that drove industry transformation and innovation.
            </p>
          </div>
        </div>

        {/* Wrap with scrollable container on mobile */}
        <div className="overflow-x-auto md:overflow-visible mb-8">
          <div className="grid grid-cols-5 gap-4 border border-gray-700 rounded-lg p-1 max-w-[1080px] mx-auto min-w-[900px] md:min-w-0">
            {[0, 1, 2, 3, 4].map((index) => (
              <div 
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                }}
                className={`${index === activeIndex ? 'bg-[#C0F43C]' : 'hover:bg-[#444]'} 
                  py-4 px-8 rounded-lg transform transition-all duration-300 cursor-pointer`}
              >
                <img 
                  src={
                    index === 0 ? (activeIndex === 0 ? "/Dubai_Fintech_Summit.png" : "/Dubai_Fintech_Summit_white_full.png") :
                    index === 1 ? (activeIndex === 1 ? "/dubai_ai_web3_festival_2024_black.png" : "/dubai_ai_web3_festival_2024_white.png") :
                    index === 2 ? (activeIndex === 2 ? "/Future_Sustainability_Forum_2025_black.png" : "/Future_Sustainability_Forum_2025.png") :
                    index === 3 ? (activeIndex === 3 ? "/Dubai_Fintech_Summit.png" : "/Dubai_Fintech_Summit_white_full.png") :
                    index === 4 ? (activeIndex === 4 ? "/Future_Sustainability_Forum_2025_black.png" : "/Future_Sustainability_Forum_2025.png") :
                    "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=50"
                  }
                  alt={`Partner ${index + 1}`} 
                  className={index < 5 ? "w-[128px] h-[44px] object-contain" : "h-6 grayscale brightness-200"}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Featured Case Study Card */}
        <div className="bg-[#fff] md:rounded-tl-lg md:rounded-tr-lg rounded-tl-[1.5rem] rounded-tr-[1.5rem] overflow-hidden -mx-8 md:mx-0">
          <div className="flex flex-col md:grid md:grid-cols-[1.5fr,2fr] gap-8 p-3">
            {/* Right Column - Image Grid - will be first on mobile (top) due to order */}
            <div className="flex justify-end md:pr-4 pr-0 order-first md:order-last">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={eventData[activeIndex].image}
                  alt={eventData[activeIndex].title}
                  className="object-cover rounded-lg"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: '100%',
                    maxHeight: window.innerWidth >= 768 ? '478px' : '318px',
                    aspectRatio: window.innerWidth >= 768 ? '660/478' : '412/318'
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/events_image.png"; // Fallback to default image
                  }}
                />
              </div>
            </div>
            
            {/* Left Column - Stats - will be second on mobile (bottom) */}
            <div className="md:p-10  pr-0 order-last md:order-first">
              <h3 className="text-[#1E2124] text-[24px] md:text-[32px] font-['Anek_Devanagari'] font-[600] mb-4 uppercase pl-0">
                {eventData[activeIndex].title}
              </h3>
              <p className="text-[#1E2124] font-manrope text-[16px] md:text-[22px] font-[400] mb-8 pl-0">
                {eventData[activeIndex].description}
              </p>
              <div className="grid grid-cols-2 gap-y-8 gap-x-10 mt-[4rem] pl-0 pr-8" ref={counterRef}>
                {eventData[activeIndex].stats.map((stat, index) => (
                  <div key={index} className="border-l-[2px] border-[#00A5A3] pl-4 text-left">
                    <div className="text-[#1E2124] text-[32px] md:text-[32px] font-manrope font-[700] mb-2">
                      {stat.value.includes('+') ? 
                        counters[index].toLocaleString() + '+' : 
                        counters[index].toLocaleString()}
                    </div>
                    <div className="text-[#1E2124] text-[14px] md:text-[20px] font-manrope font-[400] mt-2 pr-4 tracking-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Add Read Case Study button */}
              <div className="mt-8">
                <button className="text-[#1E2124] py-3  rounded-md flex items-center hover:opacity-90 transition-opacity">
                  <span className="font-['Anek_Devanagari'] text-[20px] font-[500] mr-2 uppercase">Read Full Case Study</span>
                  <div className="bg-[#00A5A3] p-2 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}