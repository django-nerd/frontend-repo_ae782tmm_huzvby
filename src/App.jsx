import React from 'react';
import NavBar from './components/NavBar';
import HeroMinimal from './components/HeroMinimal';
import FeatureRows from './components/FeatureRows';
import Plans from './components/Plans';
import FooterMinimal from './components/FooterMinimal';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0B0A10] text-white antialiased">
      <NavBar />
      <HeroMinimal />
      <FeatureRows />
      <Plans />
      <FooterMinimal />
    </div>
  );
}

export default App;
