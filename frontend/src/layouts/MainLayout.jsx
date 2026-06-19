import Sidebar
from "../components/Sidebar.jsx";

import Header
from "../components/Header.jsx";

export default function MainLayout(
{ children }
) {

return (


<div className="app-layout">

  <Sidebar />

  <div className="main-content">

    <Header />

    <main>

      {children}

    </main>

  </div>

</div>


);

}
