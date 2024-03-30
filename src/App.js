import './App.css';
import NavigationBar from './components/molecules/NavigationBar/NavigationBar.js';
import Welcome from './components/organisms/Welcome/Welcome.js';
import About from './components/organisms/About/About.js';
import Studies from './components/organisms/Studies/Studies.js';
import Experience from './components/organisms/Experience/Experience.js';
import Contact from './components/organisms/Contact/Contact.js';
import Footer from './components/molecules/Footer/Footer.js';


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Welcome />
      <About />
      <Studies />
      <Experience/>
      <Contact/>
      <Footer/>
    </div>

  );
}

export default App;
