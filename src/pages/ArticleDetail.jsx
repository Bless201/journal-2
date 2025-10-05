import { useParams } from 'react-router-dom';
import '../styles/ArticleDetail.css';

import Article1 from '../articles/Article1';
import Article2 from '../articles/Article2';
import Article3 from '../articles/Article3';
import Article4 from '../articles/Article4';
import Article5 from '../articles/Article5';
import Article6 from '../articles/Article6';
import Article7 from '../articles/Article7';
import Article8 from '../articles/Article8';
import Article9 from '../articles/Article9';
import Article10 from '../articles/Article10';
import Article11 from '../articles/Article11';
import Article12 from '../articles/Article12';
import Article13 from '../articles/Article13';
import Article14 from '../articles/Article14';
import Article15 from '../articles/Article15';  
const ArticleDetail = () => {
  const { id } = useParams();
  
  const renderArticleContent = () => {
    switch(id) {
      case '1':
        return <Article1 />;
      case '2':
        return <Article2 />;
      case '3':
        return <Article3 />;
      case '4':
        return <Article4 />;
      case '5':
        return <Article5 />;
      case '6':
        return <Article6 />;
      case '7':
        return <Article7 />;
      case '8':
        return <Article8 />;
      case '9':
        return <Article9 />;
      case '10': 
        return <Article10 />;
      case '11':
        return <Article11 />; 
      case '12':
        return <Article12 />;
      case '13':
        return <Article13 />;
      case '14':
        return <Article14 />;
      case '15':
        return <Article15 />;
      default:
        return (
          <div>
            <h2>Article {id}</h2>
            {/* <p>Full article content would be displayed here based on the article ID.</p>
            <p>In a complete implementation, this would fetch and display the full content of the selected article from a database or API.</p> */}
            <p>More to come...</p>
          </div>
        );
    }
  };

  return (
    <div className="article-detail">
      <div className="container">
        {renderArticleContent()}
        <div className="navigation">
          <a href={`/article/${parseInt(id) - 1}`} className={parseInt(id) <= 1 ? 'disabled' : ''}>Previous Article</a>
          <a href="/articles">Back to Articles</a>
          <a href={`/article/${parseInt(id) + 1}`} className={parseInt(id) >= 15 ? 'disabled' : ''}>Next Article</a>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;