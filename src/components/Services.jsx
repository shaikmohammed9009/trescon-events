import React from 'react';

export function Services() {
  const [activeServiceIndex, setActiveServiceIndex] = React.useState(0);

  const mainServices = [
    'STRATEGIC PLANNING & DEVELOPMENT',
    'CONTENT & SPEAKER MANAGEMENT',
    'COMMERCIAL SALES',
    'EVENT MARKETING & COMMUNICATIONS',
    'TECHNICAL PRODUCTION',
    'ON-SITE OPERATIONS',
  ];

  const serviceImages = [
    "/meeting.png",
    "/members.png", // Fixed spelling from "confernce.png" to "conference.png"
    "/visa.png",
    "/shaik.png",
    "/computer_room.png",
    "/twoMan.png"
  ];

  const serviceDetailsGroups = [
    [
      { title: (<>Event conceptualization and theme <br /> development</>), icon: '/calendar.png' },
      { title: (<>Budget planning and commercial <br /> strategy</>), icon: '/dollar.png' },
      { title: 'Program structure and format design', icon: '/SquareBox.png' },
      { title: 'Timeline and milestones planning', icon: '/time.png' },
      { title: (<>Stakeholder management and <br/> alignment</>), icon: '/user.png' },
      { title: <>Risk assessment and mitigation <br /> planning</>, icon: '/security.png' },
    ],
    // Content & Speaker Management details
    [
      { title: (<>Global speaker acquisition and <br /> management</>), icon: '/mic.png' },
      { title: 'Speaker liaison and coordination', icon: '/zikzak.png' },
      { title: 'Agenda development and curation', icon: '/correct.png' },
      { title: 'Content quality assurance', icon: '/letter.png' },
      { title: 'Session format design and optimization', icon: '/tv.png' },
      { title: 'VIP speaker protocol management', icon: '/diamond.png' },
    ],
    // Commercial Sales details
    [
      { title: 'Strategic partnership development', icon: '/handshak.png' },
      { title: 'Targeted delegate acquisition', icon: '/round_circle.png' },
      { title: 'Sponsorship package design and sales', icon: '/box.png' },
      { title: 'Revenue optimization strategies', icon: '/coin.png' },
      { title: (<>Exhibition space planning and <br /> management</>), icon: '/white_home.png' },
      { title: 'Exhibitor and sponsor support services', icon: '/headPhone.png' },
    ],
    // Event Marketing & Communications details
    [
      { title: 'Comprehensive marketing strategy', icon: '/marketing.png' },
      { title: 'Social media management', icon: '/insta.png' },
      { title: 'Brand development and management', icon: '/multi_box.png' },
      { title: 'Email marketing campaigns', icon: '/message.png' },
      { title: 'Digital marketing campaigns', icon: '/camera.png' },
      { title: 'Stakeholder communications', icon: '/notifiction.png' },
      { title: 'PR and media relations', icon: '/hotspot.png' },
    ],
    // Technical Production details
    [
      { title: 'Venue selection and transformation', icon: '/mask.png' },
      { title: 'Conference layout planning', icon: '/book.png' },
      { title: 'Multi-stage setup and management', icon: '/stage.png' },
      { title: 'Event app development', icon: '/browser.png' },
      { title: 'Advanced AV solutions', icon: '/projecter.png' },
      { title: 'Networking platforms', icon: '/network.png' },
      { title: 'Live streaming capabilities', icon: '/live_tv.png' },
      { title: 'On-site technical support', icon: '/headPhone.png' },
    ],
    // On-Site Operations details
    [
      { title: 'Registration management', icon: '/book.png' },
      { title: 'Security arrangements', icon: '/security.png' },
      { title: 'VIP protocol services', icon: '/diamond.png' },
      { title: 'Transportation management', icon: '/bus.png' },
      { title: 'Exhibition management', icon: '/white_home.png' },
      { title: 'Emergency response planning', icon: '/ambulens.png' },
      { title: 'F&B coordination', icon: '/dinnar.png' },
      { title: 'On-site staff management', icon: '/user.png' },
    ]
  ];

  return (
    <section className="py-20 !pt-0 relative overflow-hidden" style={{
      background: 'linear-gradient(315deg, #464D53 10%, #010103 90%)'
    }}>
      <img 
        src="/dot_4.png" 
        alt="background pattern" 
        className="absolute right-0 bottom-0 z-0"
        style={{
          width: '400px',
          height: '400px'
        }}
      />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-[1fr,1.8fr] gap-12 items-start">
          {/* Left Column - Service List */}
          <div className='pt-20'>
            <h2 className="text-white text-[40px] md:text-[60px] font-['Anek_Devanagari'] font-[500] mb-8">
              Comprehensive<br />Service Portfolio
            </h2>
            {/* Desktop view - vertical list */}
            <div className="hidden md:block space-y-4 text-left">
              {mainServices.map((service, index) => (
                <div 
                  key={index}
                  onClick={() => setActiveServiceIndex(index)}
                  className={`text-[16px] font-manrope font-[700] py-2 w-[24rem] cursor-pointer transition-colors  ${
                    index === activeServiceIndex
                      ? 'text-[#C0F43C] bg-[#464D53] border-l-4 border-[#C0F43C] pl-6 ' 
                      : 'text-white/80 hover:text-white pl-7'
                  }`}
                >
                  {service}
                </div>
              ))}
            </div>
            
            {/* Mobile view - horizontal scrollable list */}
            <div className="md:hidden w-full overflow-x-auto mobile-menu-container" style={{
              overflowY: 'hidden',
              WebkitOverflowScrolling: 'touch',
              scrollPadding: '1rem',
              paddingBottom: '0.5rem',
              width: '100%',
              maxWidth: '390px',
              scrollBehavior: 'smooth'
            }}>
              <div className="flex pb-4 gap-4" style={{ 
                width: 'fit-content', 
                minWidth: 'max-content'
              }}>
                {mainServices.map((service, index) => (
                  <div 
                    key={index}
                    onClick={() => {
                      setActiveServiceIndex(index);
                      // On mobile, scroll into view and center the selected item
                      if (window.innerWidth < 768) {
                        const container = document.querySelector('.mobile-menu-container');
                        const element = document.getElementById(`service-item-${index}`);
                        if (container && element) {
                          container.scrollLeft = element.offsetLeft - (container.clientWidth / 2) + (element.clientWidth / 2);
                        }
                      }
                    }}
                    id={`service-item-${index}`}
                    className={`text-[14px] font-manrope font-[700] py-2 px-4 cursor-pointer whitespace-nowrap flex-none ${
                      index === activeServiceIndex
                        ? 'text-[#C0F43C] bg-[#464D53] border-l-2 border-[#C0F43C]' 
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image and Service Details */}
          <div className="space-y-8">
            <div className="relative overflow-hidden md:mx-0 -mx-4 md:w-auto">
              <img
                src={serviceImages[activeServiceIndex]}
                alt="Service Portfolio"
                className="w-full md:aspect-[16/9] aspect-[14/12] object-cover"
                style={{ 
                  width: '100%',
                  height: 'auto',
                  maxHeight: window.innerWidth >= 768 ? '100%' : '342px',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/fallback-image.png"; // Fallback image if main one fails
                }}
              />
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 transition-opacity duration-300 ease-in-out">
              {serviceDetailsGroups[activeServiceIndex]?.map((detail, index) => (
                <div key={index} className="flex items-center gap-2 transition-all duration-300 ease-in-out mt-2">
                  <span className="lg:w-[60px] lg:h-[60px] w-[50px]  h-[50px]  bg-[#F4ED3C] ml-2 rounded-full flex items-center justify-center">
                    {detail.icon && <img src={detail.icon} alt="Icon" className="lg:w-1/2 lg:h-1/2 w-[20px] h-[20px]" />}
                  </span>
                  <span className="text-white/80 lg:text-[16px] text-[15px] font-manrope font-[500]">{detail.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}