import React from 'react';

const Home: React.FC = () => {
  const handleLogout = () => {
    console.log('Logout button clicked');
    window.location.href = '/';
  };

  return (
    <div className="d-flex flex-column vh-100">
      <div className="d-flex justify-content-end p-3">
        <button onClick={handleLogout} className="btn btn-primary">
          Logout
        </button>
      </div>
      <div className="d-flex justify-content-center align-items-center flex-grow-1">
        <h1>Welcome!</h1>
      </div>
    </div>
  );
};

export default Home;
