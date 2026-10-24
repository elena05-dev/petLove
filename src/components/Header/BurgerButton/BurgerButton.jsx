import css from "./BurgerButton.module.css";
import { useTranslation } from "react-i18next";
import sprite from "../../../assets/icons/symbol-defs.svg";

function BurgerButton({ onClick, variant }) {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      className={`${css.burgerButton} ${css[variant]}`}
      aria-label={t("common.openMenu")}
      onClick={onClick}
    >
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor">
        <use href={`${sprite}#icon-menu-01`} />
      </svg>
    </button>
  );
}

export default BurgerButton;
