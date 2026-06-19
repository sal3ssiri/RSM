import {
  Bell,
  Settings,
  LogOut,
  UserCircle
}
from "lucide-react";

export default function Header() {

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  function handleLogout() {

    localStorage.removeItem(
      "user"
    );

    localStorage.removeItem(
      "token"
    );

    window.location.reload();

  }

  return (

    <header className="header">

      <div className="header-title">

        نظام إدارة العقارات

      </div>

      <div className="header-actions">

        <button className="icon-button">

          <Bell size={20} />

          <span className="notification-badge">
            3
          </span>

        </button>

        <button className="icon-button">

          <Settings size={20} />

        </button>

        <button
          className="icon-button logout-btn"
          onClick={handleLogout}
        >

          <LogOut size={20} />

        </button>

        <div className="user-info">

          <div>

            <div className="user-name">
              {user?.name}
            </div>

            <div className="user-role">
              {user?.role}
            </div>

          </div>

          <UserCircle size={42} />

        </div>

      </div>

    </header>

  );

}
