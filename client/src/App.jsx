import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import "./App.css";
import { useState } from "react";

function App() {
  const [auth, setAuth] = useState({});
  return (
    <main>
      <Toaster />
      <Outlet context={{ auth, setAuth }} />
    </main>
  );
}

export default App;
