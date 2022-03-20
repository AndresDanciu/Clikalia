import React from 'react';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div>
      <h2>Page not found.</h2>
      <p>Please check the URL again or let us take you </p>
      <p>back to the the blog homepage.</p>
      <Link to="/">Go to the home page of the app</Link>
    </div>
  );
}
