import {
  LayoutDashboard,
  Building2,
  Home,
  Users,
  FileText,
  Wallet,
  Wrench,
  UserCog,
  Settings,
  Landmark
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

        <Landmark
          size={56}
          strokeWidth={1.8}
        />

      </div>

      <nav className="sidebar-menu">

        <NavLink
          to="/"
        >
          <LayoutDashboard size={20} />
          <span>
            لوحة التحكم
          </span>
        </NavLink>

        <NavLink
          to="/properties"
        >
          <Building2 size={20} />
          <span>
            العقارات
          </span>
        </NavLink>

        <NavLink
          to="/units"
        >
          <Home size={20} />
          <span>
            الوحدات
          </span>
        </NavLink>

        <NavLink
          to="/tenants"
        >
          <Users size={20} />
          <span>
            المستأجرون
          </span>
        </NavLink>

        <NavLink
          to="/contracts"
        >
          <FileText size={20} />
          <span>
            العقود
          </span>
        </NavLink>

        <NavLink
          to="/payments"
        >
          <Wallet size={20} />
          <span>
            المدفوعات
          </span>
        </NavLink>

        <NavLink
          to="/maintenance"
        >
          <Wrench size={20} />
          <span>
            الصيانة
          </span>
        </NavLink>

        <NavLink
          to="/users"
        >
          <UserCog size={20} />
          <span>
            المستخدمون
          </span>
        </NavLink>

        <NavLink
          to="/settings"
        >
          <Settings size={20} />
          <span>
            الإعدادات
          </span>
        </NavLink>

      </nav>

    </aside>

  );

}
