import { Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Bags from "./pages/Bags";
import Home from "./pages/Home";
import Admin from './pages/Login';
import PrivateRoute from "./components/PrivateRoute";
import AdminProduct from "./pages/AdminProducts";
import CreateProduct from "./pages/createProduct";

function App() {
  const location = useLocation()
  return (
    <AppContainer>
      {location.pathname === "/product" ||
      location.pathname === "/bags" ||
      location.pathname === "/admin" ||
      location.pathname === "/product/:id" ? (
        <Navbar />
      ) : (
        ""
      )}
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/product"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/bags"
          element={
            <PrivateRoute>
              <Bags />
            </PrivateRoute>
          }
        />

        <Route path="/login" element={<Admin />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/create"
          element={
            <PrivateRoute>
              <CreateProduct />
            </PrivateRoute>
          }
        />
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