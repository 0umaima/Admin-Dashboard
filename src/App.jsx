import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <>
      <Router>
        <Routes>
         
          <Route path="/" element={<Home/>} />
          <Route path="/home/dashboard" element={<Dashboard/>} />
          <Route path="/home/dashboard/add-product" element={<AddProduct/>} />
          <Route path="/home/profile" element={<Profile/>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
