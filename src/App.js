import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Clients from "./components/Clients/clients";
import Contact from "./components/Contact/contact";
import ContactIcons from "./components/ContactIcons/contactIcons";
import Footer from "./components/Footer/footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Clients/>
      <Contact/>
      <ContactIcons/>
      <Footer/>
    </div>
  );
}

export default App;
