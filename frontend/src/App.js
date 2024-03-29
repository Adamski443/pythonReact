import React, { useState, useEffect } from 'react';

const App = () => {
  // Define state to store fetched data
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from backend when component mounts
    fetchData();
  }, []); // Empty dependency array means this effect runs only once when component mounts

  const fetchData = async () => {
    try {
      // Fetch data from backend API
      const response = await fetch('http://127.0.0.1:5000/api/data');

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      // Parse JSON response
      const responseData = await response.json();

      // Update state with fetched data
      setData(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>My React App</h1>
      {/* Render fetched data */}
      {data && (
        <div>
          <h2>Fetched Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
