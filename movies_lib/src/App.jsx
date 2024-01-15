import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
