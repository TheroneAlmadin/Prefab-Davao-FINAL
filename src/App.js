//import logo from './logo.svg';
import './App.css';
import './index.css'
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path="/" element ={<Login />}/>
        <Route path="/Homepage" element={<Homepage />}/>
      </Routes>
  );
}


export default App;
