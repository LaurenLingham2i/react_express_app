import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("Fetching data...")
    axios.get("http://localhost:5000/api/deck")
      // .then(response => response.json())
      .then(response => {
        console.log("Data received: ", response);
        setMessage(response.data.message);
      })
      .catch(error => console.error("Error fetching message: ", error));
  }, []);

  return (
    <>
      <div className="App">
        <header className="App=header">
          <p>Test</p>
          <p>{message}</p>
        </header>
      </div>
    </>
  );
}

export default App;
