import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import About from './components/About';
import Experience from './components/Experience';

function App() {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <Home />
      <About />
      <Experience />
      {/* <Skills /> */}
    </div>
  );
}

export default App;
