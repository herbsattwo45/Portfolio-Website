import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Resume from "./Resume";
import Services from "./Services";
import Skills from "./Skills";
import Contacts from "./Contacts";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/about"> About</Link> |
        <Link to="/resume"> Resume</Link> |
        <Link to="/services"> Services</Link> |
        <Link to="/skills"> Skills</Link> |
        <Link to="/contacts"> Contacts</Link>
      </nav>

      {/* Page Content */}
      <div className="page-container">
        <Routes>
          <Route path="/" element={<h2>Welcome to My Portfolio</h2>} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/services" element={<Services />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
