
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import NavBar from './Components/NavBar';
import Auth from './Pages/Auth';
import Dashboard from './Pages/Dashboard';
import ViewBid from './Pages/ViewBid';

function App() {
    
  return (
    <div className="App">
        <NavBar />
        <Routes>
            <Route exact path='/auth' element={<Auth />} />
            <Route exact path='/' element={<Landing />} />
            <Route exact path='/overview/:prod_id' element={<ViewBid />} />
            <Route exact path='/dashboard/*' element={<Dashboard />} />
        </Routes>
    </div>
  );
}

export default App;
