import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import Navbar from './Navbar/Navbar.jsx';
import Hero from './Hero/Hero.jsx';
import About from './About/About.jsx';
import Portfolio from './Portfolio/Portfolio.jsx';
import Skills from './Skill/Skills.jsx';
import Contact from './Contact/Contact.jsx';
import Footer from './Footer/Footer.jsx';




function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
   
  );
}

export default App;
