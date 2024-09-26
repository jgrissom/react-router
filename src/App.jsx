import "./App.css";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  const style = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
  });
  return (
    <div>
      <h1>React Router</h1>
      <nav>
        <NavLink to="/home" style={style}>
          Home
        </NavLink>
        <NavLink to="/products" style={style}>
          Products
        </NavLink>
        <NavLink to="/about" style={style}>
          About
        </NavLink>
      </nav>
      <div className="content">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
