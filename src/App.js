import './App.css';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Stats from './components/Stats/Stats';
import Testimonials from './components/Testimonials/Testimonials';
import Work from './components/Work/Work';
import WorkProcess from './components/WorkProcess/WorkProcess';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <AboutUs />
      <Skills />
      <Stats />
      <Work />
      <WorkProcess />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
