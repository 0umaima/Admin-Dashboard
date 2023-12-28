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
         
          <Route path="/home" element={<Layout> <Home/> </Layout>} />
          <Route path="/home/dashboard" element={<Layout> <Dashboard/> </Layout>} />
          <Route path="/home/dashboard/add-product" element={<Layout> <AddProduct/> </Layout>} />
          <Route path="/home/profile" element={<Layout> <Profile/> </Layout>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
