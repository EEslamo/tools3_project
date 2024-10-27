import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import Welcome from './components/welcome'; // Ensure this is the correct path

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registration />} /> {/* Set registration as the default page */}
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;
