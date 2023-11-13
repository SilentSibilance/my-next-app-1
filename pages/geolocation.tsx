// pages/geolocation.tsx
import { useState, useEffect } from 'react';

const GeolocationPage: React.FC = () => {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if geolocation is supported
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (err) => {
          setError(`Error getting location: ${err.message}`);
        }
      );
    } else {
      setError('Geolocation is not supported');
    }
  }, []);

  return (
    <div>
      <h1>Geolocation</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <p>
          Your current location is: {location.latitude}, {location.longitude}
        </p>
      )}
    </div>
  );
};

export default GeolocationPage;
