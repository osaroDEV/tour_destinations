import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Destinations from './components/Destinations';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setTours(data);
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const remove = (id) => {
    let newDestinations = tours.filter((tour) => tour.id !== id)
    setTours(newDestinations);
    console.log('hello')
  }

  if (loading) {
    return <Loading />;
  }
  if (tours.length === 0) {
    return (
      <>
      <h1>No Tours Left</h1>
      <button onClick={fetchTours}>refresh</button>
      </>
    )
  }
  return (
    <div>
      <Destinations tours={tours} remove={ remove}/>
    </div>
  );
};

export default App;
