import { Link } from "react-router-dom";
import css from "../Header/Header";
import logoMob from "../../../assets/logo/logo-mob.svg";
import logoDesk from "../../../assets/logo/logo-desk.svg";

function Logo() {
  return (
    <Link to="/" className={css.logo}>
      <picture>
        <source media="(min-width: 768px)" srcSet={logoDesk} />
        <img src={logoMob} alt="PetLove" />
      </picture>
    </Link>
  );
}

export default Logo;
