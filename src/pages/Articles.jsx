import { Link } from 'react-router-dom';
import '../styles/Articles.css';
import { articles } from '../lib/mock_data';

const Articles = () => {

  return (
    <div className="articles">
      <div className="container">
        <h1>Journal Articles</h1>
        <p className="page-description">Volume 12, June 2025 - All Published Articles</p>
        
        <div className="articles-list">
          {articles.map(article => (
            <div key={article.id} className="article-item">
              <h2>{article.title}</h2>
              <p className="authors">{article.authors}</p>
              <p className="abstract">{article.abstract}</p>
              <div className="keywords">
                {article.keywords.map((keyword, index) => (
                  <span key={index} className="keyword">{keyword}</span>
                ))}
              </div>
              <Link to={`/article/${article.id}`} className="read-more">Read Full Article</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;