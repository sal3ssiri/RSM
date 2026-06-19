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

  <div className="header-title">

    Real Estate Management System

  </div>

  <div className="header-actions">

    <button
      className="icon-button"
    >

      <Bell size={20} />

    </button>

    <div className="user-info">

      <UserCircle
        size={32}
      />

      <div>

        <div>
          {user?.name}
        </div>

        <small>
          {user?.role}
        </small>

      </div>

    </div>

  </div>

</header>


);

}
