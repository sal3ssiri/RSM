import Header
  from "../components/Header";

import Sidebar
  from "../components/Sidebar";

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
