import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';

function App() {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <Home />
      <Skills />
    </div>
  );
}

export default App;
