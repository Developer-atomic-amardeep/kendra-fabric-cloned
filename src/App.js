import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './Home/Home'
import withAuth from './components/withAuth';

function App() {
  const ProtectedHome = withAuth(Home);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<ProtectedHome />} />
        <Route path="/" element={<Login path="/Home"  signUpUrl="/Signup" />} />
        <Route path="/Signup" element={<Signup path="/Home" signInUrl="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
