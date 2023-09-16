import React, { useState, useEffect } from 'react';

// auth
import useAsync from './useAsync';
import { authReq, refreshReq } from '../utils/authAPIs/authAPIs';

// router
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const [isAuthed, setIsAuthed] = useState(false);

  const navigate = useNavigate();

  const [state, refetch] = useAsync(authReq, []);
  const { loading, data, error } = state;

  useEffect(() => {
    const fetch = async () => {
      if (data) {
        console.log(data.data.snsId);
        console.log('auth successful');
        localStorage.setItem('snsId', data.data.snsId);
        setIsAuthed(true);
      }

      if (error) {
        if (
          error.response.status === 401 &&
          error.response.headers['www-authenticate'] ===
            `Bearer error="invalid_token"`
        ) {
          const res = await refreshReq();
          if (res) {
            console.log('refresh successful');
            localStorage.setItem('snsId', data.snsId);
            setIsAuthed(true);
          } else {
            console.log('refresh failed');

            localStorage.removeItem('accessToken');
            localStorage.removeItem('snsId');
            navigate('/login');
          }
        } else {
          console.log('auth failed');
          navigate('/login');
        }
      }
    };

    fetch();
  }, [loading]);

  return [isAuthed, setIsAuthed];
};

export default useAuth;
