import './App.css';
import './style.css';
import Home from './containers/Home';
import Nav from './containers/Nav';
import About from './containers/About';
import Services from './containers/Services';
import Contact from './containers/Contact';
import Footer from './containers/Footer';

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
