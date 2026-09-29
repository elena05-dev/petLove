import Nav from "../Nav/Nav";
import AuthNav from "../AuthNav/AuthNav";
import closeIcon from "../../../assets/icons/menu-x.svg";
import css from "./MobileMenu.module.css";

function MobileMenu({ onClose, variant }) {
  return (
    <div className={`${css.mobileMenu} ${css[variant]}`}>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close menu"
        className={`${css.closeButton} ${css[variant]}`}
      >
        <img src={closeIcon} alt="" />
      </button>
      <Nav mobile variant={variant} />
      <AuthNav variant="mobile" />
    </div>
  );
}

export default MobileMenu;
