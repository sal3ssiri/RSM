import Login
from "./pages/Login.jsx";

import Dashboard
from "./pages/Dashboard.jsx";

import MainLayout
from "./layouts/MainLayout.jsx";

export default function App() {

const user =
localStorage.getItem(
"user"
);

if (!user) {

```
return <Login />;
```

}

return (

```
<MainLayout>

  <Dashboard />

</MainLayout>
```

);

}
