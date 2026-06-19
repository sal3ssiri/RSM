import {
  Bell,
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

  return (

    <header className="header">

      <div className="header-right">

        <h1>
          نظام إدارة العقارات
        </h1>

      </div>

      <div className="header-left">

        <button
          className="notification-btn"
        >
          <Bell size={22} />
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

          <UserCircle size={38} />

        </div>

      </div>

    </header>

  );

}
