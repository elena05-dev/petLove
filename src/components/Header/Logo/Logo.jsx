import { Link } from "react-router-dom";
import css from "../Header/Header.module.css";
import logoMob from "../../../assets/Logo/logo-mob.svg";
import logoDesk from "../../../assets/Logo/logo-desk.svg";
import logoMobWhite from "../../../assets/Logo/logo-mob-white.svg";
import logoDeskWhite from "../../../assets/Logo/logo-desk-white.svg";

function Logo({ variant }) {
  const isYellow = variant === "yellow";

  const mobileLogo = isYellow ? logoMobWhite : logoMob;
  const desktopLogo = isYellow ? logoDeskWhite : logoDesk;

  return (
    <Link to="/" className={css.logo}>
      <picture>
        <source media="(min-width: 768px)" srcSet={desktopLogo} />
        <img src={mobileLogo} alt="PetLove" />
      </picture>
    </Link>
  );
}

export default Logo;
