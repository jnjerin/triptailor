import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Grid, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
}));

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
    <Root>
      <Typography variant="h4" gutterBottom>
        Itinerary Builder
      </Typography>
      {itinerary && (
        <div>
          <Typography variant="h6" gutterBottom>
            Activities
          </Typography>
          <Grid container spacing={2}>
            {activities.map((activity) => (
              <Grid item xs={12} key={activity.id}>
                <TextField
                  label={`${activity.name} (${activity.start_time} - ${activity.end_time})`}
                  value={`${activity.name} (${activity.start_time} - ${activity.end_time})`}
                  fullWidth
                  disabled
                />
              </Grid>
            ))}
          </Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={() => addActivity({ name: 'New Activity', start_time: '', end_time: '' })}
          >
            Add Activity
          </Button>
        </div>
      )}
    </Root>
  );
};

export default ItineraryBuilder;
