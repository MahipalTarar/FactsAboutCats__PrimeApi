import { useState } from 'react'
import './App.css'

function App() {

  // i am using useState Hook to store current states
  const [fact, setFact] = useState('Cat Fact Generator');
  const [loading, setLoading] = useState(false);



  //using try-catch-finally
  const fetchFact = async () => {
    setLoading(true);
    try {
      //i am fetching data using fetch api 
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      setFact('Failed to fetch cat fact.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <h1>🐱FAC - Facts About Cat</h1>
      </div>
      <h1>{loading ? 'Loading...' : fact}</h1>
      <div className="card">
        <button onClick={fetchFact}>
          Get Random Cat Fact
        </button>
      </div>
      
    </>
  )
}

export default App
