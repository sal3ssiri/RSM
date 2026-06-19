import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
}
from "react-router-dom";

import Login from "./pages/Login.jsx";

import Dashboard from "./pages/Dashboard.jsx";
import Properties from "./pages/Properties.jsx";
import Tenants from "./pages/Tenants.jsx";
import Contracts from "./pages/Contracts.jsx";
import Payments from "./pages/Payments.jsx";
import Users from "./pages/Users.jsx";

import MainLayout from "./layouts/MainLayout.jsx";

export default function App() {

  const user =
    localStorage.getItem("user");

  if (!user) {

    return <Login />;

  }

  return (

    <BrowserRouter>

      <MainLayout>

        <Routes>

          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/properties"
            element={<Properties />}
          />

          <Route
            path="/tenants"
            element={<Tenants />}
          />

          <Route
            path="/contracts"
            element={<Contracts />}
          />

          <Route
            path="/payments"
            element={<Payments />}
          />

          <Route
            path="/users"
            element={<Users />}
          />

          <Route
            path="*"
            element={<Navigate to="/" />}
          />

        </Routes>

      </MainLayout>

    </BrowserRouter>

  );

}
