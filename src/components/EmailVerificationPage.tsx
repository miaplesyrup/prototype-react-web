import React, { useEffect, useState } from 'react';

const EmailVerificationPage: React.FC = () => {
  const [verificationStatus, setVerificationStatus] = useState<'pending' | 'success' | 'error'>('pending');

  useEffect(() => {
    // Extract user ID and token from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id');
    const token = urlParams.get('token');

    if (userId && token) {
      // Perform email verification logic
      fetch(`https://1398-158-62-54-40.ngrok-free.app/api/verify-email/${userId}/${token}`)
        .then(response => response.json())
        .then(data => {
          if (data.status === 'success') {
            setVerificationStatus('success');
            window.location.href = '/';

          } else {
            setVerificationStatus('error');
          }
        })
        .catch(error => {
          console.error('An error occurred:', error);
          setVerificationStatus('error');
        });
    } else {
      // Handle missing parameters
      setVerificationStatus('error');
    }
  }, []);

  return (
    <div>
      <h1>Email Verification</h1>
      {verificationStatus === 'pending' && <p>Verifying email...</p>}
      {verificationStatus === 'success' && (
        <div>
          <p>Your email has been successfully verified!</p>
          <p>Redirecting to login page...</p>
        </div>
      )}
      {verificationStatus === 'error' && (
        <div>
          <p>Error verifying email. Please try again.</p>
          <p>Redirecting to login page...</p>
        </div>
      )}
    </div>
  );
};

export default EmailVerificationPage;
