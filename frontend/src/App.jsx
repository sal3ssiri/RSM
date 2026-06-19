import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
}
from "react-router-dom";

import Login
from "./pages/Login.jsx";

import Dashboard
from "./pages/Dashboard.jsx";

import Properties
from "./pages/Properties.jsx";

import Units
from "./pages/Units.jsx";

import Tenants
from "./pages/Tenants.jsx";

import Contracts
from "./pages/Contracts.jsx";

import Payments
from "./pages/Payments.jsx";

import Maintenance
from "./pages/Maintenance.jsx";

import Users
from "./pages/Users.jsx";

import Settings
from "./pages/Settings.jsx";

import MainLayout
from "./layouts/MainLayout.jsx";

export default function App() {

  const user =
    localStorage.getItem(
      "user"
    );

  if (!user) {

    return <Login />;

  }

  return (

    <BrowserRouter>

      <MainLayout>

        <Routes>

          <Route
            path="/"
            element={
              <Dashboard />
            }
          />

          <Route
            path="/properties"
            element={
              <Properties />
            }
          />

          <Route
            path="/units"
            element={
              <Units />
            }
          />

          <Route
            path="/tenants"
            element={
              <Tenants />
            }
          />

          <Route
            path="/contracts"
            element={
              <Contracts />
            }
          />

          <Route
            path="/payments"
            element={
              <Payments />
            }
          />

          <Route
            path="/maintenance"
            element={
              <Maintenance />
            }
          />

          <Route
            path="/users"
            element={
              <Users />
            }
          />

          <Route
            path="/settings"
            element={
              <Settings />
            }
          />

          <Route
            path="*"
            element={
              <Navigate
                to="/"
              />
            }
          />

        </Routes>

      </MainLayout>

    </BrowserRouter>

  );

}
