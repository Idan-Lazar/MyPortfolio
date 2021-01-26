import './App.css';
import './style.css';
import Home from './containers/Home';
import Nav from './containers/Nav';
import About from './containers/About';
import Services from './containers/Services';
import Contact from './containers/Contact';
import Footer from './containers/Footer';
import Portfolio from './containers/Portfolio';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import en from './languages/en'
import he from './languages/he'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en
      },
      he: {
        translation: he
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });
  
function App() {
  const { i18n } = useTranslation();

  return (
    <div className="App" style={{direction: i18n.language === 'he' ? 'rtl' : 'ltr'}}>
      <Nav/>
      <Home/>
      <About/>
      <Services/>
      {/* <Portfolio/> */}
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
