import React from 'react';
import Header from './components/Header';
import Auth from './components/Auth';
import DestinationSearch from './components/DestinationSearch';
import InterestRecommendations from './components/InterestRecommendations';
import ItineraryBuilder from './components/ItineraryBuilder';
import ReviewList from './components/ReviewList';

function App() {
  const userId = 1; // Replace with the actual user ID
  const attractionId = 1; // Replace with the actual attraction ID

  return (
    <div>
      <Header />
      <Auth />
      <DestinationSearch />
      <InterestRecommendations />
      <ItineraryBuilder userId={userId} />
      <ReviewList attractionId={attractionId} />

      {/* Other components will be added here */}
    </div>
  );
}

export default App;
