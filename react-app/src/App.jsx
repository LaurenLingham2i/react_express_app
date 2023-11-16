import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/")
      .then((response) => {
        setArticles(response.data.message);
      })
      .catch(error => console.error(`Error fetching message: ${error}`)); 
  }, []);

  return (
    <div className="App">
      {articles.map((article, index) => (
        <ul key={index}>
          <h3>
            <a href={article.webUrl}>{article.fields.headline}</a>
          </h3>
          <img src={article.fields.thumbnail} alt=""/>
        </ul>
      ))}
    </div>
  );
}


export default App;
