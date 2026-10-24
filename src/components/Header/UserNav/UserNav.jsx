import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/slices/authSlice";
import { logoutUser } from "../../../lib/api/auth";
import avatar from "../../../assets/icons/avatar.svg";
import css from "./UserNav.module.css";

function UserNav({ inMenu = false }) {
  const { t } = useTranslation();
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
    <div className={`${css.userNav} ${inMenu ? css.menuUserNav : ""}`}>
      <button type="button" onClick={handleLogout}>
        {t("common.logout")}
      </button>
      <Link to="/profile" className={css.userProfile}>
        <img
          src={avatar}
          alt={t("common.userAvatar")}
          className={css.userIcon}
        />
        <span className={css.userName}>{user?.name}</span>
      </Link>
    </div>
  );
}
export default UserNav;
