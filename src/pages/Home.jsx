import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="container">
          <h2>International Journal of Learning</h2>
          <p>Volume 37, June 2025 - Featuring cutting-edge research in education and science</p>
        </div>
      </div>
      
      <div className="container">
        <section className="featured-articles">
          <h2>Featured Articles</h2>
          <div className="article-grid">
            <div className="article-card">
              <h3>Determinants Of Technical Efficiency Of Tomato Growers In The Brong-Ahafo Region Of Ghana</h3>
              <p className="authors">DR Vijay K. Bhasin</p>
              <p>Identifies the determinants of technical efficiency of agricultural households that grow tomato in the Berekum, Dormaa, and Asutifi districts of the Brong-Ahafo Region of Ghana.</p>
              <Link to="/article/1" className="read-more">Read Article</Link>
            </div>
            
            <div className="article-card">
              <h3>Effect Of Menstration On Bicarbonate Concentration Among Ogun State Female Endurance Athletes</h3>
              <p className="authors">Okesanya Adeyemi T. (PHD), Joy N. Akameze (PHD) & Dossou Joseph Leo-Paul</p>
              <p>Examines the effects of menstruation on aerobic power among Ogun State female endurance athletes. </p>
              <Link to="/article/2" className="read-more">Read Article</Link>
            </div>
            
            <div className="article-card">
              <h3>Assessing Transaction Costs In Micro And Small Enterprises (MSEs) Credit Schemes: A Case Study Of Schemes In Arusha And Mwanza Districts</h3>
              <p className="authors">Rweyemanu, D.C., Mwakalobo, B. And Kajuna, J.</p>
              <p>Investigates the transaction costs in Micro and Small Enterprise (MSEs) credit schemes in Mwanza and Arusha districts. </p>
              <Link to="/article/3" className="read-more">Read Article</Link>
            </div>
          </div>
          
          <div className="view-all">
            <Link to="/articles" className="button">View All Articles</Link>
          </div>
        </section>
        
        <section className="journal-info">
          <h2>About the Journal</h2>
          <p>International Journal of Learning is a peer-reviewed journal, published two times a year (January and November) by Montclaire State University New Jersey U.S.A., on behalf of the Learning Society.</p>
          <Link to="/about" className="button">Learn More</Link>
        </section>
      </div>
    </div>
  );
};

export default Home;