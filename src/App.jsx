import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import About from './components/About';

function App() {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <Home />
      <About />
      {/* <Skills /> */}
    </div>
  );
}

export default App;
