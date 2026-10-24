import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import css from "./AuthNav.module.css";

function AuthNav({ variant = "light" }) {
  const { t } = useTranslation();

  return (
    <div className={`${css.authNav} ${css[variant]}`}>
      <Link to="/login">{t("common.login")}</Link>
      <Link to="/register">{t("common.register")}</Link>
    </div>
  );
}

export default AuthNav;
