import './App.css';
import SignupForm from './components/LoginCred/SignupForm';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='h-[100vh] overflow-hidden'>
      <div className='h-full overflow-y-auto no-scrollbar'> 
          <Navbar/>
          <Outlet/>
      </div>

    </div>
  );
}

export default App;
