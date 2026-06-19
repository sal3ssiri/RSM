import {
  useEffect,
  useState
}
from "react";

import {
  getDashboard
}
from "../services/dashboard";

export default function Dashboard() {

  const [
    dashboard,
    setDashboard
  ] =
  useState(null);

  useEffect(() => {

    loadDashboard();

  }, []);

  async function loadDashboard() {

    try {

      const response =
        await getDashboard();

      if (
        response.success
      ) {

        setDashboard(
          response.dashboard
        );

      }

    }
    catch(error) {

      console.error(
        error
      );

    }

  }

  if (!dashboard) {

    return (
      <div>
        Loading...
      </div>
    );

  }

  return (

    <div>

      <h1>
        Dashboard
      </h1>

      <p>
        Properties:
        {" "}
        {
          dashboard.totalProperties
        }
      </p>

      <p>
        Units:
        {" "}
        {
          dashboard.totalUnits
        }
      </p>

      <p>
        Tenants:
        {" "}
        {
          dashboard.totalTenants
        }
      </p>

    </div>

  );

}
