import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const AuthSuccess: React.FC = () => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if (token) {
      localStorage.setItem('token', token);
      history.push('/game');
    }
  }, [location, history]);

  return <div>Authentication successful. Redirecting...</div>;
};

export default AuthSuccess;
