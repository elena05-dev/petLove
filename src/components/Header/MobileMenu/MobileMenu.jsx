import Nav from "../Nav/Nav";
import AuthNav from "../AuthNav/AuthNav";
import UserNav from "../UserNav/UserNav";
import { useTranslation } from "react-i18next";
import closeIcon from "../../../assets/icons/menu-x.svg";
import css from "./MobileMenu.module.css";

function MobileMenu({ onClose, variant, isLoggedIn }) {
  const { t } = useTranslation();

  return (
    <div className={css.menuOverlay} onClick={onClose}>
      <div
        className={`${css.mobileMenu} ${css[variant]}`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t("common.closeMenu")}
          className={`${css.closeButton} ${css[variant]}`}
        >
          <img src={closeIcon} alt="" />
        </button>

        <Nav mobile variant={variant} />
        {isLoggedIn ? (
          <div className={css.mobileUserNav}>
            <UserNav inMenu />
          </div>
        ) : (
          <AuthNav variant="mobile" />
        )}
      </div>
    </div>
  );
}

export default MobileMenu;
