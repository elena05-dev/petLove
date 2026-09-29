import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import AuthNav from "../AuthNav/AuthNav";
import UserNav from "../UserNav/UserNav";
import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
import Container from "../../Container/Container";
import BurgerButton from "../BurgerButton/BurgerButton";
import MobileMenu from "../MobileMenu/MobileMenu";
import css from "./Header.module.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { pathname } = useLocation();

  const headerVariant = pathname === "/" ? "light" : "yellow";
  console.log("pathname:", pathname);
  console.log("headerVariant:", headerVariant);

  return (
    <header className={css[headerVariant]}>
      <Container>
        <div className={css.headerContainer}>
          <Logo />
          <Nav />

          <div className={css.headerActions}>
            {!isMenuOpen &&
              (isLoggedIn ? <UserNav /> : <AuthNav variant={headerVariant} />)}

            <BurgerButton onClick={() => setIsMenuOpen(true)} />
          </div>
        </div>
      </Container>
      {isMenuOpen && (
        <MobileMenu
          onClose={() => setIsMenuOpen(false)}
          variant={headerVariant}
        />
      )}
    </header>
  );
}

export default Header;
