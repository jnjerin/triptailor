import React from 'react';
import Header from './components/Header';
import Auth from './components/Auth';
import DestinationSearch from './components/DestinationSearch';
import InterestRecommendations from './components/InterestRecommendations';

function App() {
  return (
    <div>
      <Header />
      <Auth />
      <DestinationSearch />
      <InterestRecommendations />

      {/* Other components will be added here */}
    </div>
  );
}

export default App;
