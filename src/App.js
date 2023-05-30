import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// importing pages
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
