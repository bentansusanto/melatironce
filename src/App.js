
import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import OurService from './components/OurService';
import './index.css';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <HeroSection/>
        <AboutSection/>
        <OurService/>
    </div>
  );
}

export default App;
