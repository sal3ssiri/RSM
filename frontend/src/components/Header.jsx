import {
  Bell,
  Settings,
  LogOut,
  UserCircle,
  Menu
}
from "lucide-react";

export default function Header(
  { onToggleSidebar }
) {

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  function logout() {

    localStorage.clear();

    window.location.reload();

  }

  return (

    <header className="header">

      <div className="header-left">

        <button
          className="mobile-menu-btn"
          onClick={onToggleSidebar}
        >
          <Menu size={22} />
        </button>

        <div className="user-info">

          <UserCircle size={46} />

          <div>

            <div className="user-name">

              {user?.name}

            </div>

            <div className="user-role">

              {user?.role}

            </div>

          </div>

        </div>

      </div>

      <div className="header-title">

        نظام إدارة العقارات

      </div>

      <div className="header-actions">

        <button
          className="icon-btn notification-btn"
        >

          <Bell size={20} />

          <span className="badge">

            3

          </span>

        </button>

        <button
          className="icon-btn"
        >

          <Settings size={20} />

        </button>

        <button
          className="icon-btn"
          onClick={logout}
        >

          <LogOut size={20} />

        </button>

      </div>

    </header>

  );

}
