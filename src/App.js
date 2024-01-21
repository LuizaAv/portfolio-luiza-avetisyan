
import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/navbar';
import About from "./components/aboutme/about";
import Portfolio from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Allpages from "./Allpages";
import Experiance from "./components/experiance/experiance";
import Skills from "./components/skills/skills";
import ScrollToTop from "./ScrollToTop";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ScrollToTop />
      <Routes>
          <Route path = "/" exact element = {<Allpages />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/experiance" element = {<Experiance /> } />
          <Route path = "/skills" element = {<Skills /> } />
          <Route path = "/portfolio" element = {<Portfolio />} />
          <Route path = "/contact" element = {<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
