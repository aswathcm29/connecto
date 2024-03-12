import './App.css';
import Navbar from './components/Navbar';
import Main from './components/HomePage/Main';

function App() {
  return (
    <div className='h-[100vh] overflow-hidden'>
      <div className='h-full overflow-y-auto no-scrollbar'> 
          <Navbar/>
          <Main/>
      </div>

    </div>
  );
}

export default App;
