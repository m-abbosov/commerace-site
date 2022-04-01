import { Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import ProductDescripton from "./pages/ProductDescripton";
import Bags from "./pages/Bags";
import Home from "./pages/Home";
import Admin from './pages/Login';
import PrivateRoute from "./components/PrivateRoute";
import AdminProduct from "./pages/AdminProducts";
import CreateProduct from "./pages/createProduct";
import AdminDetail from "./pages/AdminDetail";
// import { useEffect } from "react";

function App() {
  const location = useLocation()
  // const navigate = useNavigate()
  return (
    <AppContainer>
      {
        location.pathname === "/product" || location.pathname === "/bags" || location.pathname === "/product/:id" ? <Navbar /> : ""
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "/product" element = {<Home />} />
        <Route path = "/product/:id" element = {<ProductDescripton />} />
        <Route path = "/bags" element={<Bags />} />
        
        <Route path = "/login" element={<Admin />} />
        <Route path = "/admin" element={<PrivateRoute><AdminProduct /></PrivateRoute>} />
        <Route path = "/admin/create" element={<PrivateRoute><CreateProduct /></PrivateRoute>} />
        <Route path = "/admin/product/:detail" element={<PrivateRoute><AdminDetail /></PrivateRoute>} />
      </Routes>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  padding: 16px;
  background-color: #EDEDED;
  min-height: 100vh;
`