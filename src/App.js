import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Destinations from './components/Destinations';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTours(data);
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Destinations tours={tours} />
    </div>
  );
};

export default App;
