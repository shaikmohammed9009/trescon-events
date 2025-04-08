import React from 'react';

export function Footer() {
  const menuLinks = [
    { text: 'Services', href: '/services' },
    { text: 'Events', href: '/events' },
    { text: 'Case Studies', href: '/case-studies' },
    { text: 'Sustainability', href: '/sustainability' },
    { text: 'About', href: '/about' },
    { text: 'Careers', href: '/careers' },
  ];

  const legalLinks = [
    { text: 'Privacy Policy', href: '/privacy' },
    { text: 'Terms & Conditions', href: '/terms' },
    { text: 'Cookie Preferences', href: '/cookies' },
  ];

  return (
    <footer className="bg-[#003333] text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-[1.5fr,1fr] lg:grid-cols-[1.5fr,1fr,1fr] gap-12">
            {/* Logo and Social Links */}
            <div>
              <img 
                src="/logo.png"
                alt="Trescon Events"
                className="w-[92px] h-[48px] md:w-[136px] md:h-[70px] mb-6"
              />
              <p className="text-gray-300 font-manrope font-[500] text-[15px] md:text-[15.88px] mb-6">
                For Managed, Hosted events, follow us on
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
                  <img src="/item-4.png" alt="Social Media" className="w-8 h-8 md:w-10 md:h-10" />
                </a>
                <a href="#" className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
                  <img src="/item.png" alt="Social Media" className="w-8 h-8 md:w-10 md:h-10" />
                </a>
                <a href="#" className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
                  <img src="/item-1.png" alt="Social Media" className="w-8 h-8 md:w-10 md:h-10" />
                </a>
                <a href="#" className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
                  <img src="/item-2.png" alt="Social Media" className="w-8 h-8 md:w-10 md:h-10" />
                </a>
                <a href="#" className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
                  <img src="/item-3.png" alt="Social Media" className="w-8 h-8 md:w-10 md:h-10" />
                </a>
              </div>
            </div>

            {/* Container for menu items with flex layout on mobile */}
            <div className="flex justify-between md:block">
              {/* Left Menu Links */}
              <div className="w-1/2 md:w-full">
                <h3 className="text-white font-manrope font-semibold md:mb-6 mb-4">Menu</h3>
                <ul className="space-y-3">
                  {menuLinks.slice(0, 4).map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-[#CDFF00] transition-colors duration-300 font-manrope font-[500] text-[16px]"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Links - for mobile only */}
              <div className="w-1/2 md:hidden pl-8">  {/* Added pl-8 to align with Menu heading */}
                 {/* Make visible */}
                <ul className="space-y-3">
                  {menuLinks.slice(4).map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-[#CDFF00] transition-colors duration-300 font-manrope font-[500] text-[16px]"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Links for tablet and desktop */}
            <div className="hidden md:block md:pl-12 lg:pl-0">
              <h3 className="text-white font-manrope font-semibold mb-6 opacity-0">Menu</h3>
              <ul className="space-y-3">
                {menuLinks.slice(4).map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-[#CDFF00] transition-colors duration-300 font-manrope font-[500] text-[16px]"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-wrap flex-col  md:flex-row md:justify-between md:items-center w-full">
            <span className="text-white font-manrope font-[400] text-[15px] mb-4 md:text-[16px]  md:mb-0">© 2025 TRESCON</span>
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white font-manrope font-[400] text-[15px] mb-4 md:mb-0 md:text-[16px] hover:text-[#CDFF00] transition-colors duration-300 mr-6 last:mr-0"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}