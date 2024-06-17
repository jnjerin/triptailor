import React from 'react';
import Header from './components/Header';
import Auth from './components/Auth';
import DestinationSearch from './components/DestinationSearch';
import InterestRecommendations from './components/InterestRecommendations';
import ItineraryBuilder from './components/ItineraryBuilder';

function App() {
  const userId = 1; // Replace with the actual user ID
  
  return (
    <div>
      <Header />
      <Auth />
      <DestinationSearch />
      <InterestRecommendations />
      <ItineraryBuilder userId={userId} />

      {/* Other components will be added here */}
    </div>
  );
}

export default App;
