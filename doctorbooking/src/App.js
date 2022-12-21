import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route ,Link, Routes } from "react-router-dom";
import AvailabilityCheck from './page/AvailabilityCheck';

function App() {
  return (
    <center>
        <Router>
      <Routes>
        <Route path="/" element={<AvailabilityCheck />} />
        {/* <Route path="/submited" element={<Submited />} /> */}
      </Routes>
    </Router>
    </center>
  );
}

export default App;
