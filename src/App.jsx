import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <>
      <Router>
        <Routes>
         
          <Route path="/" element={<Layout> <Home/> </Layout>} />
          <Route path="/dashboard" element={<Layout> <Dashboard/> </Layout>} />
          <Route path="/add-product" element={<Layout> <AddProduct/> </Layout>} />
          <Route path="/profile" element={<Layout> <Profile/> </Layout>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
