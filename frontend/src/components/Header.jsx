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
      localStorage.getItem("user")
    );

  function logout() {

    localStorage.clear();

    window.location.reload();

  }

  return (

    <header className="header">

      <div className="header-actions">

        <button
          className="icon-btn"
          onClick={logout}
        >
          <LogOut size={20} />
        </button>

        <button className="icon-btn">
          <Settings size={20} />
        </button>

        <button
          className="icon-btn notification-btn"
        >
          <Bell size={20} />

          <span className="badge">
            3
          </span>

        </button>

      </div>

      <div className="header-title">

        نظام إدارة العقارات

      </div>

      <div className="user-info">

        <UserCircle size={48} />

        <div>

          <div className="user-name">
            {user?.name}
          </div>

          <div className="user-role">
            {user?.role}
          </div>

        </div>

      </div>

    </header>

  );

}
