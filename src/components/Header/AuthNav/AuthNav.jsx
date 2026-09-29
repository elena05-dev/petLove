import { Link } from "react-router-dom";
import css from "./AuthNav.module.css";

function AuthNav({ variant = "light" }) {
  return (
    <div className={`${css.authNav} ${css[variant]}`}>
      <Link to="/login">Log in</Link>
      <Link to="/register">Registration</Link>
    </div>
  );
}

export default AuthNav;
