import {
  useState
} from "react";

import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";

export default function MainLayout(
  { children }
) {

  const [
    isSidebarOpen,
    setIsSidebarOpen
  ] =
  useState(false);

  function toggleSidebar() {

    setIsSidebarOpen(
      !isSidebarOpen
    );

  }

  function closeSidebar() {

    setIsSidebarOpen(false);

  }

  return (

    <div className="app-layout">

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
      />

      {
        isSidebarOpen &&
        <div
          className="sidebar-overlay"
          onClick={closeSidebar}
        />
      }

      <div className="main-content">

        <Header
          onToggleSidebar={toggleSidebar}
        />

        <main>

          {children}

        </main>

      </div>

    </div>

  );

}
