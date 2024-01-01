import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Redirect from / to /home */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/dashboard" element={<Dashboard />} />
          <Route path="/home/dashboard/add-product" element={<AddProduct />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
