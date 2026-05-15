import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center text-center' style={{ minHeight: '100vh' }}>
      <h1 className='display-1 fw-bold text-danger'>404</h1>
      <h2 className='mb-4'>Page Not Found</h2>
      <p className='mb-4'>The page you're looking for doesn't exist.</p>
      <Link to="/">
        <button type='button' className='btn btn-danger btn-lg'>Back to Home</button>
      </Link>
    </div>
  );
}

export default NotFound;
