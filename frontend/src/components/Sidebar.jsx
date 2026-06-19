import {
  NavLink
}
from "react-router-dom";

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
  Building
}
from "lucide-react";

export default function Sidebar(
  {
    isOpen,
    onClose
  }
) {

  const menuItems = [

    {
      path: "/",
      label: "لوحة التحكم",
      icon: LayoutDashboard
    },

    {
      path: "/properties",
      label: "العقارات",
      icon: Building2
    },

    {
      path: "/units",
      label: "الوحدات",
      icon: Home
    },

    {
      path: "/tenants",
      label: "المستأجرون",
      icon: Users
    },

    {
      path: "/contracts",
      label: "العقود",
      icon: FileText
    },

    {
      path: "/payments",
      label: "المدفوعات",
      icon: Wallet
    },

    {
      path: "/maintenance",
      label: "الصيانة",
      icon: Wrench
    },

    {
      path: "/users",
      label: "المستخدمون",
      icon: UserCog
    },

    {
      path: "/settings",
      label: "الإعدادات",
      icon: Settings
    }

  ];

  return (

    <aside
      className={`sidebar ${
        isOpen ? "open" : ""
      }`}
    >

      <div className="sidebar-logo">

        <Building
          size={60}
          strokeWidth={1.8}
        />

      </div>

      <nav className="sidebar-menu">

        {

          menuItems.map(
            (item) => {

              const Icon =
                item.icon;

              return (

                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                >

                  <span>

                    {item.label}

                  </span>

                  <Icon size={20} />

                </NavLink>

              );

            }
          )

        }

      </nav>

    </aside>

  );

}
