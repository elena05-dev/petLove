import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import css from "./Nav.module.css";

function Nav({ mobile = false, variant }) {
  const { t } = useTranslation();

  return (
    <nav
      className={`${css.mainNav} ${
        mobile ? css.mobileNav : ""
      } ${mobile ? css[variant] : ""}`}
    >
      <NavLink to="/news">{t("common.news")}</NavLink>
      <NavLink to="/notices">{t("common.findPet")}</NavLink>
      <NavLink to="/friends">{t("common.friends")}</NavLink>
    </nav>
  );
}

export default Nav;
