import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import LanguageSwitcher from "../../../components/Header/LanguageSwitcher/LanguageSwitcher";
import AuthNav from "../AuthNav/AuthNav";
import UserNav from "../UserNav/UserNav";
import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
import Container from "../../Container/Container";
import BurgerButton from "../BurgerButton/BurgerButton";
import MobileMenu from "../MobileMenu/MobileMenu";
import css from "./Header.module.css";

function Header({ variant, wide = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { pathname } = useLocation();

  const headerVariant = variant || (pathname === "/" ? "light" : "yellow");
  const menuVariant = pathname === "/" ? "light" : "yellow";

  return (
    <header className={css[headerVariant]}>
      <Container wide={wide}>
        <div className={css.headerContainer}>
          <Logo variant={headerVariant} />
          <Nav />

          <div className={css.headerActions}>
            <LanguageSwitcher />
            {!isMenuOpen &&
              (isLoggedIn ? <UserNav /> : <AuthNav variant={headerVariant} />)}
            <BurgerButton
              onClick={() => setIsMenuOpen(true)}
              variant={headerVariant}
            />
          </div>
        </div>
      </Container>

      {isMenuOpen && (
        <MobileMenu
          onClose={() => setIsMenuOpen(false)}
          variant={menuVariant}
          isLoggedIn={isLoggedIn}
        />
      )}
    </header>
  );
}

export default Header;
