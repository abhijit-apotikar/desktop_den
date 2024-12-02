import { useEffect, useState } from 'react';
import axios from 'axios';

export default function LandingPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Fetch data from the Node.js API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/');
        setData(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
    
  }, []);

  return (
    
    <div>
      <h1>Data from Node.js API</h1>
      {console.log(`This is my data ${data}`)}
      {error && <p>Error: {error}</p>}
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}
