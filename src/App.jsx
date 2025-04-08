import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Approach } from './components/Approach';
import { Services } from './components/Services';
import { CaseStudies } from './components/CaseStudies';
import { ClientTestimonials } from './components/ClientTestimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      
      <Approach />
      <Services />
      <CaseStudies />
      
      <WhyChooseUs />
      <ClientTestimonials />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;