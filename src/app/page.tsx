import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { Work } from '@/components/sections/Work';
import { About } from '@/components/sections/About';
import { Background } from '@/components/sections/Background';
import { Toolbox } from '@/components/sections/Toolbox';
import { Writing } from '@/components/sections/Writing';
import { Contact } from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1} className="focus:outline-none">
      <Hero />
      <Work />
      <About />
      <Background />
      <Toolbox />
      <Writing />
      <Contact />
    </main>
  );
}
