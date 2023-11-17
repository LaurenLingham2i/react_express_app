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
      <h2>Current Top 10 News Articles</h2>
      <div className="article-gird">
      {articles.map((article, index) => (
        <div key={index} className="article-card">
          <h3>
            {index + 1}.&nbsp; 
            <a href={article.webUrl}>{article.fields.headline}</a>
          </h3>
          <img src={article.fields.thumbnail} alt=""/>
        </div>
      ))}
    </div>
    </div>
  );
}

export default App;
