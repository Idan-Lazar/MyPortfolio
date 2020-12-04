import './App.css';
import './style.css';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
