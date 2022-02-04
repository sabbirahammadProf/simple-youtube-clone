import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from './pages/Home.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
