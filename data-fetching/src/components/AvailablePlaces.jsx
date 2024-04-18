import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';

export default function AvailablePlaces({ onSelectPlace }) {

  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const response = await fetch('http://localhost:3000/placesddd');
        const resData = await response.json();

        // 응답이 에러인지 아닌지 확인
        // 만약 에러라면 (!response.ok)
        if (!response.ok) {
          throw new Error('Failed to fetch places');
        }

        setAvailablePlaces(resData.places);

      } catch (error) {
        setError({
          message: error.message || 'Could not fetch places, please try again later.'
        });
      }

      // 에러가 났든 안났든 false
      setIsFetching(false);
    }

    fetchPlaces();
  }, [])

  if (error) {
    return <Error
      title="An error occurred!"
      message={error.message}
    />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
