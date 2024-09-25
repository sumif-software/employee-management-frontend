import { useState, useEffect } from 'react';


const getToken = () => {
  useEffect(() => {
    return () => window.localStorage.getItem('token')
  }, []);
};


export default function useToken() {
  const [token, setToken] = useState(getToken());
  
  const saveToken = user_string => {
    window.localStorage.setItem('token', user_string);
    setToken(user_string)
  }
  useEffect(() => {
    saveToken(token);
  }, []);

  return {
    token: token,
    setToken: saveToken
  }
}
