
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import OurGalery from './components/OurGalery';
import OurService from './components/OurService';
import './index.css';

function App() {
  const social = [
    {link : 'https://instagram.com', icon: 'https://img.icons8.com/fluency/35/000000/instagram-new.png'},
    {link : 'https://facebook.com', icon: 'https://img.icons8.com/fluency/35/000000/facebook.png'},
    {link : 'https://youtobe.com', icon: 'https://img.icons8.com/fluency/35/000000/youtube-play.png'},
  ]


  return (
    <div className="App">
        <Navbar/>
        <HeroSection/>
        <AboutSection/>
        <OurService/>
        <OurGalery/>
        <Footer social={social}/>
    </div>
  );
}

export default App;
