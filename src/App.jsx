import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <Home />
      <About />
      <Projects />
      <Experience />
      {/* <Skills /> */}
    </div>
  );
}

export default App;
