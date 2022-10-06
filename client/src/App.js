import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ProjectsTwo from './components/ProjectsTwo';
import Form from "./components/Form.js";
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Projects />
      <ProjectsTwo />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
