import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DestinationSearch = () => {
  const [destination, setDestination] = useState('');
  const [destinationInfo, setDestinationInfo] = useState(null);

  useEffect(() => {
    const fetchDestinationInfo = async () => {
      if (destination) {
        try {
          const response = await axios.get(`/api/destinations/${destination}`);
          setDestinationInfo(response.data);
        } catch (error) {
          console.error(error);
          // Handle error
        }
      }
    };

    fetchDestinationInfo();
  }, [destination]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      {destinationInfo && (
        <div>
          <h2>{destinationInfo.name}</h2>
          <p>Country: {destinationInfo.country}</p>
          {/* Display other destination information */}
        </div>
      )}
    </div>
  );
};

export default DestinationSearch;