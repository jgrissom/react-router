import "./App.css";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import About from "./components/About";
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  const products = [
    { id: 1, name: "Goldfish", price: 1.99 },
    { id: 2, name: "Gummy Bears", price: 2.99 },
    { id: 3, name: "Yarn", price: 3.99 },
  ];
  const style = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
  });
  return (
    <div>
      <h1>Super Cool Products for Sale!</h1>
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
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products products={products} />} />
          <Route path="product/:id" element={<Product products={products} />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
      <h5 style={{ borderTop: "solid #333 1px" }}>
        &copy; 2024 Super Cool Products, LLC
      </h5>
    </div>
  );
}

// components are not required to be placed in a separate file
const NoMatch = () => {
  return (
    <div>
      The path requested has <strong>NO MATCH</strong> page
    </div>
  );
};

export default App;
