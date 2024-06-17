import React, { useState } from 'react';
import axios from 'axios';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/${isSignUp ? 'signup' : 'login'}`, {
        email,
        password,
      });
      console.log(response.data);
      // Handle successful authentication
    } catch (error) {
      console.error(error);
      // Handle authentication error
    }
  };

  return (
    <div>
      <h2>{isSignUp ? 'Sign Up' : 'Log In'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{isSignUp ? 'Sign Up' : 'Log In'}</button>
      </form>
      <button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Already have an account? Log In' : 'Create a new account'}
      </button>
    </div>
  );
};

export default Auth;