import {
  Bell,
  UserCircle
} from "lucide-react";

export default function Header() {

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  return (

    <header className="header">

      <div className="header-title">

        نظام إدارة العقارات

      </div>

      <div className="header-actions">

        <button
          className="notification-btn"
        >

          <Bell size={22} />

          <span className="notification-badge">
            3
          </span>

        </button>

        <div className="user-info">

          <div className="user-details">

            <div className="user-name">
              {user?.name}
            </div>

            <div className="user-role">
              {user?.role}
            </div>

          </div>

          <UserCircle
            size={42}
            strokeWidth={1.7}
          />

        </div>

      </div>

    </header>

  );

}
