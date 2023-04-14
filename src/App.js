import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Participation from "./Components/Participation";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Participation />
      <Contact />
    </div>
  );
}

export default App;
