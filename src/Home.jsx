import portfolioImage from './assets/portfolio-image.jpg';

function Home() {
  return (
    <div className="home-container">
      <h1>Hello, I'm <span className="highlight">Herbert Adogo</span></h1>
      <h2>Graphic Designer | Video Editor | Content Creator</h2>
      <p>Crafting engaging visuals, editing epic videos, and building a vibrant online presence.</p>
      
      <img 
        src={portfolioImage} 
        alt="Herbert Adogo Portfolio" 
        className="portfolio-image"
      />
    </div>
  );
}

export default Home;
