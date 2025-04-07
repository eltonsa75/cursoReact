import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      {/* <p><Link to="/">Home</Link></p>
      <p><Link to="/contact">Contatos</Link></p> */}
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Contatos
      </NavLink>
    </div>
  );
};

export default Navbar;
