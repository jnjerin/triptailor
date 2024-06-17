import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItineraryBuilder = ({ userId }) => {
  const [itinerary, setItinerary] = useState(null);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchItinerary = async () => {
      try {
        const response = await axios.post('/api/itineraries', { user_id: userId });
        const itineraryId = response.data.id;
        const itineraryResponse = await axios.get(`/api/itineraries/${itineraryId}`);
        setItinerary(itineraryResponse.data);
        setActivities(itineraryResponse.data.activities);
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };

    fetchItinerary();
  }, [userId]);

  const addActivity = async (activity) => {
    try {
      await axios.post(`/api/itineraries/${itinerary.id}/activities`, activity);
      setActivities([...activities, activity]);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  // ... other handlers for updating and deleting activities

  return (
    <div>
      <h2>Itinerary Builder</h2>
      {itinerary && (
        <div>
          <h3>Activities</h3>
          <ul>
            {activities.map((activity) => (
              <li key={activity.id}>
                {activity.name} ({activity.start_time} - {activity.end_time})
              </li>
            ))}
          </ul>
          <button onClick={() => addActivity({ name: 'New Activity', start_time: '', end_time: '' })}>
            Add Activity
          </button>
        </div>
      )}
    </div>
  );
};

export default ItineraryBuilder;