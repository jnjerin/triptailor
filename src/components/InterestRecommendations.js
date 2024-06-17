// src/components/InterestRecommendations.js
import React, { useState } from 'react';
import axios from 'axios';

const InterestRecommendations = () => {
  const [interests, setInterests] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  const handleInterestChange = (e) => {
    const interest = e.target.value;
    setInterests((prevInterests) =>
      prevInterests.includes(interest)
        ? prevInterests.filter((i) => i !== interest)
        : [...prevInterests, interest]
    );
  };

  const fetchRecommendations = async () => {
    try {
      const response = await axios.post('/api/recommendations', { interests });
      setRecommendations(response.data);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <div>
      <h2>Select Your Interests</h2>
      <div>
        <label>
          <input
            type="checkbox"
            value="history"
            onChange={handleInterestChange}
          />
          History
        </label>
        <label>
          <input
            type="checkbox"
            value="art"
            onChange={handleInterestChange}
          />
          Art
        </label>
        {/* Add more interest options */}
      </div>
      <button onClick={fetchRecommendations}>Get Recommendations</button>
      {recommendations.length > 0 && (
        <div>
          <h3>Recommendations</h3>
          <ul>
            {recommendations.map((recommendation) => (
              <li key={recommendation.id}>{recommendation.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InterestRecommendations;
