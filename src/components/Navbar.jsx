import React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

const navItems = [
  { name: 'Services', href: '/services' },
  { name: 'Events', href: '/events' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Sustainability', href: '/sustainability' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const serviceItems = [
  { name: 'Large Scale Events', href: '/services/large-scale-events' },
  { name: 'Conference Management', href: '/services/conference-management' },
  { name: 'Exhibition Services', href: '/services/exhibition-services' },
  { name: 'Digital Events', href: '/services/digital-events' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Services');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-sm' : ''}`}>
      <div className="max-w-[1440px]  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 transition-all duration-300">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Trescon Events" 
                className={`transition-all duration-300 ${
                  isScrolled ? 'h-12 w-[110px] ' : 'h-[70px] w-[153px] '
                }`}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-8">
              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className={`
                  font-manrope tracking-[0.03em] uppercase flex items-center gap-1
                  hover:text-[#CDFF00] px-3 py-2 relative transition-all duration-300
                  ${isScrolled ? 'text-sm' : 'text-base lg:text-sm'}
                  ${activeItem === 'Services' 
                    ? 'text-[#00A5A3] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#CDFF00]' 
                    : 'text-white'
                  }
                `}>
                  Services
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-black/90 backdrop-blur-sm border-[#CDFF00]/20">
                  {serviceItems.map((item) => (
                    <DropdownMenuItem key={item.name} className="text-white hover:text-[#CDFF00] hover:bg-white/5">
                      <a href={item.href} className="w-full">{item.name}</a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Other nav items */}
              {navItems.filter(item => item.name !== 'Services').map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveItem(item.name)}
                  className={`
                    font-manrope tracking-[0.03em] uppercase
                    hover:text-[#CDFF00] px-3 py-2 !pb-[1rem] relative transition-all duration-300
                    ${isScrolled ? 'text-sm' : 'text-base lg:text-sm'}
                    ${activeItem === item.name 
                      ? 'text-[#00A5A3] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#CDFF00]' 
                      : 'text-white'
                    }
                  `}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#CDFF00] hover:bg-black/20 focus:outline-none transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActiveItem(item.name);
                  setIsOpen(false);
                }}
                className={`
                  font-manrope tracking-[0.03em] uppercase block px-3 py-2
                  transition-colors duration-200 text-base lg:text-sm
                  ${activeItem === item.name 
                    ? 'text-[#CDFF00] bg-black/20' 
                    : 'text-white hover:text-[#CDFF00] hover:bg-black/20'
                  }
                `}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}