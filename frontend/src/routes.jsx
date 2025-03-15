import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Profile from "./pages/Profile";


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/home" element={<Home />} /> 
        <Route path="/profile" element={<Profile />} /> 
        
      </Routes>
    </Router>
  );
}

export default AppRoutes;
