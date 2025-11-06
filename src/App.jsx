import React from 'react';
import NavBar from './components/NavBar';
import HeroMinimal from './components/HeroMinimal';
import FeatureRows from './components/FeatureRows';
import FooterMinimal from './components/FooterMinimal';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#1C1B29] text-white antialiased">
      <NavBar />
      <HeroMinimal />
      <FeatureRows />
      <FooterMinimal />
    </div>
  );
}

export default App;
