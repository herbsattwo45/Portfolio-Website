import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="services-container">
      <h1>My Services</h1>

      <div className="service-section">
        <h2> Graphic Design Services</h2>
        <ul>
          <li>Logo Design</li>
          <li>Branding & Visual Identity</li>
          <li>Social Media Graphics (Instagram, YouTube, TikTok)</li>
          <li>Thumbnails for YouTube & Twitch</li>
          <li>Flyer, Poster, and Banner Design</li>
        </ul>
      </div>

      <div className="service-section">
        <h2> Video Editing Services</h2>
        <ul>
          <li>YouTube Video Editing</li>
          <li>Short-form Video Editing (TikTok, Reels, Shorts)</li>
          <li>Gaming Highlight Montages</li>
          <li>Cinematic Trailers & Promos</li>
          <li>Color Correction & Grading</li>
          <li>Motion Graphics & Basic Animations</li>
        </ul>
      </div>

      <div className="service-section">
        <h2>Gaming & Content Creation Services</h2>
        <ul>
          <li>Gameplay Recording & Editing</li>
          <li>Game Walkthroughs</li>
          <li>Stream Overlay & Thumbnail Design</li>
          <li>Commentary & Voice-over Editing</li>
          <li>YouTube SEO Optimization (Titles, Tags, Thumbnails)</li>
        </ul>
      </div>

      <div className="service-section">
        <h2> YouTube & Online Presence Services</h2>
        <ul>
          <li>YouTube Channel Branding (Banners, Thumbnails, Logo)</li>
          <li>Content Strategy & Video Planning</li>
        </ul>
      </div>

      {/* "Hire Me" Button */}
      <div className="hire-me-container">
        <Link to="/contact" className="hire-me-button">Hire Me</Link>
      </div>
    </div>
  );
}

export default Services;
