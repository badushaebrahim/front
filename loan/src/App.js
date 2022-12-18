
import './App.css';
import {BrowserRouter as Router, Route ,Link, Routes } from "react-router-dom";
import Home from './components/Home';
import Submited from './components/Submited';
function App() {
  return (
    <div className="App">
    <center>
        <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submited" element={<Submited />} />
      </Routes>
    </Router>
    </center>
    </div>
  );
}

export default App;
