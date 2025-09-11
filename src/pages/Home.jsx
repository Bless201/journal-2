import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="container">
          <h2>African International Journal of Educational Learning</h2>
          <p>Volume 12, June 2025 - Featuring cutting-edge research in education and sports science</p>
        </div>
      </div>
      
      <div className="container">
        <section className="featured-articles">
          <h2>Featured Articles</h2>
          <div className="article-grid">
            <div className="article-card">
              <h3>Recovery Following an Ironman Triathlon: A Case Study</h3>
              <p className="authors">Kazunori Nosaka, Chris R. Abbiss, Greig Watson, Bradley Wall, Katushiko Suzuk, and Paul Laursen</p>
              <p>Examines the time course of recovery from muscle damage following an Ironman event in a trained triathlete.</p>
              <Link to="/article/1" className="read-more">Read Article</Link>
            </div>
            
            <div className="article-card">
              <h3>Putting the 'E' into 'QA'</h3>
              <p className="authors">Haydn Mathias</p>
              <p>Analysis of challenges in engaging staff and institutions in quality enhancement within Quality Assurance processes.</p>
              <Link to="/article/2" className="read-more">Read Article</Link>
            </div>
            
            <div className="article-card">
              <h3>Problems Arising from the 2001 Education Act with Inclusive Primary Schools</h3>
              <p className="authors">Christine Howes</p>
              <p>Examines difficulties with support teaching allocation in inclusive primary schools and proposes an alternative system.</p>
              <Link to="/article/3" className="read-more">Read Article</Link>
            </div>
          </div>
          
          <div className="view-all">
            <Link to="/articles" className="button">View All Articles</Link>
          </div>
        </section>
        
        <section className="journal-info">
          <h2>About the Journal</h2>
          <p>The African International Journal of Educational Learning is a peer-reviewed academic journal publishing research in education, learning methodologies, sports science, and related interdisciplinary studies. Based in Nairobi, Kenya, the journal serves as a platform for African and international scholars to share innovative research.</p>
          <Link to="/about" className="button">Learn More</Link>
        </section>
      </div>
    </div>
  );
};

export default Home;