import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import TestimonialsCTA from './components/TestimonialsCTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#1C1B29] antialiased">
      <Hero />
      <Features />
      <HowItWorks />
      <TestimonialsCTA />
    </div>
  );
}

export default App;
