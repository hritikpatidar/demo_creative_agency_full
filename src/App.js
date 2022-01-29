import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Register from './page/Register';
import Login from './page/Login';
import Error from './page/Error';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> }  />
        <Route path="/Register" element={ <Register /> }  />
        <Route path="/Login" element={ <Login /> }  />
        <Route path="*" element={ <Error /> }  />
      </Routes>
    </Router>
  );
}

export default App;
