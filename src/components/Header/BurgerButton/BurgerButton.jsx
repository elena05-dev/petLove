import css from "./BurgerButton.module.css";
import sprite from "../../../assets/icons/symbol-defs.svg";

function BurgerButton({ onClick }) {
  return (
    <button
      type="button"
      className={css.burgerButton}
      aria-label="Open menu"
      onClick={onClick}
    >
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor">
        <use href={`${sprite}#icon-menu-01`} />
      </svg>
    </button>
  );
}

export default BurgerButton;
