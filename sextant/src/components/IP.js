import React, { useState, useEffect } from 'react';
import { ipifyURL } from '../shared/ipifyURL';

// eslint-disable-next-line
function IPAddress() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [userIP, setIP] = useState([]);

  useEffect(() => {
    fetch(ipifyURL)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setIP(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <p class="card-text">{userIP.ip}</p>  
    );
  }
}

export default IPAddress;