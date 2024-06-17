// src/components/ReviewList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReviewList = ({ attractionId }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    rating: 0,
    comment: '',
  });

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/attractions/${attractionId}/reviews`);
        setReviews(response.data);
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };

    fetchReviews();
  }, [attractionId]);

  const handleReviewChange = (e) => {
    setNewReview({
      ...newReview,
      [e.target.name]: e.target.value,
    });
  };

  const submitReview = async () => {
    try {
      await axios.post(`/api/attractions/${attractionId}/reviews`, newReview);
      setReviews([...reviews, newReview]);
      setNewReview({
        rating: 0,
        comment: '',
      });
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>Rating: {review.rating}</p>
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
      <div>
        <h3>Write a Review</h3>
        <div>
          <label>
            Rating:
            <input
              type="number"
              name="rating"
              value={newReview.rating}
              onChange={handleReviewChange}
              min="1"
              max="5"
            />
          </label>
        </div>
        <div>
          <label>
            Comment:
            <textarea
              name="comment"
              value={newReview.comment}
              onChange={handleReviewChange}
            />
          </label>
        </div>
        <button onClick={submitReview}>Submit Review</button>
      </div>
    </div>
  );
};

export default ReviewList;