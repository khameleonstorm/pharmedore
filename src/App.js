import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// importing pages
import Home from './pages/home/Home';
import About from './pages/about/About';
import Expertise from './pages/expertise/Expertise';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/expertise" element={<Expertise />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
