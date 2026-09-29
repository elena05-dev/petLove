import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/slices/authSlice";
import { logoutUser } from "../../../lib/api/auth";
import avatar from "../../../assets/icons/avatar.svg";
import css from "./UserNav.module.css";

function UserNav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  async function handleLogout() {
    try {
      await logoutUser();
    } catch (error) {
      console.error(error);
    }
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <div className={css.userNav}>
      {" "}
      <button type="button" onClick={handleLogout}>
        {" "}
        Logout{" "}
      </button>{" "}
      <Link to="/profile" className={css.userProfile}>
        {" "}
        <img src={avatar} alt="User avatar" className={css.userIcon} />
        <span className={css.userName}>{user?.name}</span>{" "}
      </Link>{" "}
    </div>
  );
}
export default UserNav;
