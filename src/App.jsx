import "./App.css";
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
    </div>
  );
}

export default App;
