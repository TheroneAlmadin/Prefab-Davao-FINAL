//import logo from './logo.svg';
import './App.css';
import './index.css'
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import { Routes, Route} from 'react-router-dom';
import Projects from './pages/Projects'
import Employees from './pages/Employees'
import Kanban from './pages/Kanban'
import Calendar from './pages/Calendar'

function App() {
  return (
      <Routes>
        <Route path="/" element ={<Login />}/>
        <Route path="/Homepage" element={<Homepage />}/>
                 {/* pages  */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/employees" element={<Employees />} />

                {/* apps  */}
        <Route path="/Kanban" element={<Kanban />} />
        <Route path="/calendar" element={<Calendar />} />       
      </Routes>
  );
}


export default App;
