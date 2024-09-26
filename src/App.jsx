import "./App.css";
import Home from "./components/Home";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
