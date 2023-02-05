import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Customer from './views/Customer';
import Management
  from './views/Management';
function App() {
  return (
    <Router>
      <div className='flex flex-col bg-black text-white'>
        <nav >
          <ul className='flex flex-row gap-40 justify-center mt-5'>
            <li>
              <Link className='block py-2 pl-3 pr-4 text-black rounded bg-gray-300 hover:bg-gray-100' to="/management">Management</Link>
            </li>
            <li>
              <Link className='block py-2 pl-3 pr-4 text-black rounded bg-gray-300 hover:bg-gray-100' to="/customer">Customer</Link>
            </li>
            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/customer" element={<Customer/>} />
          <Route path="/management" element={<Management/>} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
