import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    console.log("Fetching data...");
    axios.get("http://localhost:5000/")
      .then((response) => {
        console.log(response.data);
        setArticles(response.data.message);
      })
      .catch(error => console.error(`Error fetching message: ${error}`)); 
  }, []);

  return (
    <div className="App">
      <p>Test</p>
      {articles.map((article, index) => (
        <div key={index}>
          <p>{article.fields.headline}</p>
          <img src={article.fields.thumbnail} alt="" />
        </div>
      ))}
    </div>
  );
}


export default App;
