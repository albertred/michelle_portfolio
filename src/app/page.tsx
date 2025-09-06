'use client';

import { useState } from 'react';
import LandingCanvas from '@/components/LandingCanvas';
import MainPortfolio from '@/components/MainPortfolio';

export default function Home() {
  const [showLanding, setShowLanding] = useState(true);

  const handleAnimationComplete = () => {
    setShowLanding(false);
  };

  return (
    <div className="min-h-screen bg-bg">
      {showLanding && <LandingCanvas onAnimationComplete={handleAnimationComplete} />}
      {!showLanding && <MainPortfolio />}
    </div>
  );
}