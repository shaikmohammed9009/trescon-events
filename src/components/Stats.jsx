import React, { useState, useEffect, useRef } from 'react';

export function Stats() {
  const mainStats = [
    { number: '40,000+', label: 'Delegates Engaged' },
    { number: '700+', label: 'Exhibitors Onboard' },
    { number: '500+', label: 'Association Partners' },
    { number: '1,000+', label: 'Global Speakers' },
  ];

  const centeredStats = [
    { number: '500+', label: 'Media Partners' },
    { number: '100+', label: 'Countries Reached' },
  ];

  // Images for carousel
  const carouselImages = [
  
    { src: "/Rectangle_111716.png", alt: "Event showcase carousel 1" },
    { src: "/Property.png", alt: "Event showcase carousel 1" },
    { src: "/Rectangle_111720.png", alt: "Event showcase carousel 1" },
    { src: "/Rectangle_111730.png", alt: "Event showcase carousel 1" },
    { src: "/Rectangle_111718.png", alt: "Event showcase carousel 2" },
  ];

  // For auto-changing image slider
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // States for animated counters
  const [animatedMainStats, setAnimatedMainStats] = useState(mainStats.map(() => 0));
  const [animatedCenteredStats, setAnimatedCenteredStats] = useState(centeredStats.map(() => 0));
  const countersStarted = useRef(false);

  // Parse number string to get just the numeric value
  const parseNumberValue = (numStr) => {
    return parseInt(numStr.replace(/,/g, '').split('+')[0]);
  };

  // Start counter animation when component is in view
  useEffect(() => {
    if (countersStarted.current) return;

    const startCounters = () => {
      countersStarted.current = true;
      const duration = 2000; // Duration in ms
      const fps = 60;
      const frameDuration = 1000 / fps;
      const totalFrames = duration / frameDuration;
      let frame = 0;

      const mainTargets = mainStats.map(stat => parseNumberValue(stat.number));
      const centeredTargets = centeredStats.map(stat => parseNumberValue(stat.number));

      const animate = () => {
        if (frame >= totalFrames) return;

        frame++;
        const progress = frame / totalFrames;

        // Easing function for smooth animation (ease-out)
        const easeOutCubic = t => 1 - Math.pow(1 - t, 3);
        const easedProgress = easeOutCubic(progress);

        // Update all counters
        setAnimatedMainStats(mainTargets.map(target =>
          Math.round(target * easedProgress)
        ));
        setAnimatedCenteredStats(centeredTargets.map(target =>
          Math.round(target * easedProgress)
        ));

        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    };

    // Use IntersectionObserver to start animation when stats are visible
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        startCounters();
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    const statsElement = document.getElementById('stats-section');
    if (statsElement) observer.observe(statsElement);

    return () => observer.disconnect();
  }, []);

  // Effect for auto-changing images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Helper function to render number with colored plus sign with animation
  const renderAnimatedNumber = (numStr, animatedValue) => {
    const suffix = numStr.includes('+') ? '+' : '';
    const hasComma = numStr.includes(',');

    let formattedNumber = animatedValue;
    if (hasComma) {
      formattedNumber = animatedValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
      <>
        <span>{formattedNumber}</span>
        <span className="text-[#CDFF00]">{suffix}</span>
      </>
    );
  };

  return (
    <section id="stats-section" className="bg-black relative py-12 md:py-20 !pb-0 pt-[3rem] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-0 hidden md:block">
        <img src="dotRight.png" alt="Decorative dots" className="h-auto opacity-50" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats Grid - Mobile left aligned numbers */}
        <div className="flex flex-col gap-6 mb-12 md:mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:gap-x-6 justify-items-start md:justify-items-center">
            {mainStats.map((stat, index) => (
              <div key={index} className="w-full max-w-[180px] flex flex-col items-start md:items-center">
                <div className="text-white text-[40px] sm:text-[50px] md:text-[60px] font-['Anek_Devanagari'] font-[500] mb-1 md:mb-2 leading-tight flex justify-start md:justify-center">
                  {renderAnimatedNumber(stat.number, animatedMainStats[index])}
                </div>
                <div className="text-white text-sm md:text-base text-left md:text-center w-full">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Updated alignment for centered stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:gap-x-6 justify-items-start md:justify-items-center mt-4">
            <div className="col-span-1 hidden md:block"></div>
            <div className="w-full max-w-[180px] col-span-1 flex flex-col items-start md:items-center">
              <div className="text-white text-[40px] sm:text-[50px] md:text-[60px] font-['Anek_Devanagari'] font-[500] mb-1 md:mb-2 leading-tight flex justify-start md:justify-center">
                {renderAnimatedNumber(centeredStats[0].number, animatedCenteredStats[0])}
              </div>
              <div className="text-white text-sm md:text-base text-left md:text-center w-full">
                {centeredStats[0].label}
              </div>
            </div>
            <div className="w-full max-w-[180px] col-span-1 flex flex-col items-start md:items-center">
              <div className="text-white text-[40px] sm:text-[50px] md:text-[60px] font-['Anek_Devanagari'] font-[500] mb-1 md:mb-2 leading-tight flex justify-start md:justify-center">
                {renderAnimatedNumber(centeredStats[1].number, animatedCenteredStats[1])}
              </div>
              <div className="text-white text-sm md:text-base text-left md:text-center w-full">
                {centeredStats[1].label}
              </div>
            </div>
            <div className="col-span-1 hidden md:block"></div>
          </div>
        </div>

        {/* Image Gallery - Responsive layout */}
        <div className="mb-12 md:mb-16 md:mt-[-7rem]">
          <div className="flex flex-col md:flex-row gap-4 mx-auto">
            {/* Left column - row layout on mobile */}
            <div className="flex flex-row md:flex-col gap-3 md:gap-6 w-full md:w-1/4 self-end">
              <img
                src="/holod.png"
                alt="Event showcase hologram"
                className="w-1/2 md:w-full h-[110px] md:h-[220px] object-cover rounded"
              />
              <img
                src="/meet_2.png"
                alt="Event showcase meeting"
                className="w-1/2 md:w-full h-[110px] md:h-[111px] object-cover rounded"
              />
            </div>

            {/* Center column - auto-changing image slider (without bullets) */}
            <div className="flex items-end justify-center w-full md:w-2/4 md:self-end">
              <div className="relative w-full md:w-[630px] h-[240px] md:h-[260px] overflow-hidden rounded">
                {carouselImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right column - row layout on mobile */}
            <div className="flex flex-row md:flex-col gap-3 md:gap-6 w-full md:w-1/4 self-end">
              <img
                src="/Rectangle_111716.png"
                alt="Event showcase rectangle 1"
                className="w-1/2 md:w-full h-[110px] md:h-[220px] object-cover rounded"
              />
              <img
                src="/Rectangle_111718.png"
                alt="Event showcase rectangle 2"
                className="w-1/2 md:w-full h-[110px] md:h-[111px] object-cover rounded"
              />
            </div>
          </div>
        </div>

        {/* Organizations Section - Responsive */}
        <div className="text-center">
          <h2 className="text-white text-[40px] font-['Anek_Devanagari'] font-[500] mb-2 md:mb-4 leading-tight">
            Governments and organisations
          </h2>
          <p className="text-gray-400 mb-6 md:mb-8 max-w-[47rem] mx-auto md:text-[22px] text-[18px] font-manrope font-[400]">
            choose Trescon to deliver exceptional events that drive meaningful impact
          </p>
        </div>

        {/* Partner Logos - Full width edge to edge on mobile */}
        <div className="-mx-4 sm:mx-0 md:mt-14 lg:mt-14 mb-6 md:mb-0 sm:md:w-[1080px] sm:mx-auto w-[calc(100%+2rem)]">
          <div className="bg-white backdrop-blur-sm rounded-[19px] md:rounded-tr-lg md:rounded-tl-lg md:rounded-bl-[0] md:rounded-br-[0]  p-3 md:p-5">
            <div className="grid grid-cols-2 md:grid-cols-5 justify-items-center items-center gap-4 md:gap-6">
              <img 
                src="difc-logo_1.png"
                alt="DIFC" 
                className="w-[160px] h-[100px] object-contain" 
              />
              <img 
                src="g10.png"
                alt="Abu Dhabi Investment Office" 
                className="w-[160px] h-[100px] object-contain" 
              />
              <img 
                src="1200px-Coat_of_arms_of_Mauritius_1.png"
                alt="Invest Cyprus" 
                className="w-[160px] h-[100px] object-contain" 
              />
               <img 
                src="Government_of_AP.png"
                alt="Invest Cyprus" 
                className="w-[160px] h-[100px] object-contain" 
              />
              <img 
                src="g11.png"
                alt="Cocoon Ventures" 
                className="w-[160px] h-[100px] object-contain col-span-2 md:col-span-1" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
