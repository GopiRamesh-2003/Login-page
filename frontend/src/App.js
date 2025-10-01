import './App.css';
import Login from './login';
import Signup from './Signup';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
     <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </Router>
  );
}

export default App;
