import Header
  from "../components/Header.jsx";

import Sidebar
  from "../components/Sidebar.jsx";

export default function MainLayout(
  { children }
) {

  return (

    <div>

      <Sidebar />

      <div>

        <Header />

        {children}

      </div>

    </div>

  );

}
