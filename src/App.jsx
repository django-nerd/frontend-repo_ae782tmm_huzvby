import React from 'react';
import HeroAI from './components/HeroAI';
import BenefitsFlow from './components/BenefitsFlow';
import SocialProof from './components/SocialProof';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#F6F7FB] to-white text-[#1E293B] antialiased selection:bg-purple-200/60 selection:text-[#1E293B]">
      <HeroAI />
      <BenefitsFlow />
      <SocialProof />
      <FinalCTA />
    </div>
  );
}

export default App;
