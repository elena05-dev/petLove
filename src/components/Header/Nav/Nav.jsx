import { NavLink } from "react-router-dom";
import css from "./Nav.module.css";

function Nav({ mobile = false, variant }) {
  return (
    <nav
      className={`${css.mainNav} ${
        mobile ? css.mobileNav : ""
      } ${mobile ? css[variant] : ""}`}
    >
      <NavLink to="/news">News</NavLink>
      <NavLink to="/notices">Find pet</NavLink>
      <NavLink to="/friends">Our friends</NavLink>
    </nav>
  );
}

export default Nav;
