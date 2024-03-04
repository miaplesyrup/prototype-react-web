import React from 'react';

const ConfirmEmail: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h2>Confirm Your Email</h2>
        <p className="custom-label">Please confirm your email address.</p>
        <p className="custom-label">Thank you for signing up!</p>
        <button type="button" className="btn btn-primary mb-3" onClick={() => window.location.href = '/'}>
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default ConfirmEmail;
