import {
LayoutDashboard,
Building2,
Users,
FileText,
Wallet,
UserCog,
LogOut
}
from "lucide-react";

import {
NavLink
}
from "react-router-dom";

export default function Sidebar() {

return (


<aside className="sidebar">

  <div className="sidebar-logo">

    RSM

  </div>

  <nav>

    <NavLink
      to="/"
    >
      <LayoutDashboard size={18} />
      Dashboard
    </NavLink>

    <NavLink
      to="/properties"
    >
      <Building2 size={18} />
      Properties
    </NavLink>

    <NavLink
      to="/tenants"
    >
      <Users size={18} />
      Tenants
    </NavLink>

    <NavLink
      to="/contracts"
    >
      <FileText size={18} />
      Contracts
    </NavLink>

    <NavLink
      to="/payments"
    >
      <Wallet size={18} />
      Payments
    </NavLink>

    <NavLink
      to="/users"
    >
      <UserCog size={18} />
      Users
    </NavLink>

  </nav>

  <button
    onClick={() => {

      localStorage.clear();

      window.location.reload();

    }}
  >

    <LogOut size={18} />

    Logout

  </button>

</aside>


);

}
