import css from "./Home.module.css";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header/Header";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import heroMobile1x from "../../assets/images/hero-mobile@1x.webp";
import heroMobile2x from "../../assets/images/hero-mobile@2x.webp";
import heroTablet1x from "../../assets/images/hero-tablet@1x.webp";
import heroTablet2x from "../../assets/images/hero-tablet@2x.webp";
import heroDesktop1x from "../../assets/images/hero-desktop@1x.webp";
import heroDesktop2x from "../../assets/images/hero-desktop@2x.webp";

function Home() {
  const { t } = useTranslation();

  return (
    <main>
      <Container wide>
        <div className={css.homeContent}>
          <section className={css.hero}>
            <Header variant="yellow" wide />
            <div className={css.heroText}>
              <div className={css.heroCopy}>
                <h1 className={css.heroTitle}>
                  <Trans
                    i18nKey="home.hero.title"
                    components={{ span: <span /> }}
                  />
                </h1>
                <Link className={css.heroAction} to="/find-help">
                  {t("home.actions.findHelp")}
                </Link>
              </div>
              <p className={css.heroDescription}>
                {t("home.hero.description")}
              </p>
            </div>
          </section>

          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet={`${heroDesktop1x} 1x, ${heroDesktop2x} 2x`}
            />

            <source
              media="(min-width: 768px)"
              srcSet={`${heroTablet1x} 1x, ${heroTablet2x} 2x`}
            />

            <img
              src={heroMobile1x}
              srcSet={`${heroMobile1x} 1x, ${heroMobile2x} 2x`}
              alt="Pets"
            />
          </picture>
        </div>
      </Container>
    </main>
  );
}

export default Home;
