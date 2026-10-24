import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Dog,
  Cat,
  House,
  Footprints,
  Scissors,
  GraduationCap,
  Heart,
} from "lucide-react";
import { providers } from "../../data/providers";
import ProviderCard from "../../components/ProviderCard/ProviderCard";
import { cities } from "../../data/cities";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header/Header";
import catPhoto from "../../assets/images/cat.webp";
import dogPhoto from "../../assets/images/dog.webp";
import secondDogPhoto from "../../assets/images/image_dog_dect.webp";
import secondCatPhoto from "../../assets/images/image-dog_big_tab.webp";
import css from "./FindHelp.module.css";

function FindHelp() {
  const { t } = useTranslation();
  const [petType, setPetType] = useState("");
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petSize, setPetSize] = useState("");
  const [petSocial, setPetSocial] = useState("");
  const [city, setCity] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [notes, setNotes] = useState("");
  const [showResults, setShowResults] = useState(false);

  const filteredCities = cities.filter((cityItem) =>
    cityItem.aliases.some((alias) =>
      alias.toLowerCase().includes(city.trim().toLowerCase()),
    ),
  );

  function handlePetTypeChange(newPetType) {
    if (petType !== newPetType) {
      setPetAge("");
      setPetSize("");
      setPetSocial("");
      setShowResults(false);
      setPetType(newPetType);
    }
  }

  function handleReset() {
    setPetType("");
    setStep(1);
    setServiceType("");
    setPetAge("");
    setPetSize("");
    setPetSocial("");
    setCity("");
    setSelectedCity("");
    setNotes("");
    setShowResults(false);
  }

  const matchingProviders = providers.filter((provider) => {
    const matchesPet = provider.petType === petType;
    const matchesService = provider.serviceType === serviceType;
    const matchesCity = provider.city === selectedCity;

    return matchesPet && matchesService && matchesCity;
  });

  return (
    <main>
      <Header variant="light" />
      <Container>
        <div className={css.pageLayout}>
          <div className={css.sidePhotoLeft}>
            <img src={catPhoto} alt="" aria-hidden="true" />
            <img src={secondDogPhoto} alt="" aria-hidden="true" />
          </div>
          <div className={css.container}>
            {showResults ? (
              <section className={css.section}>
                <h1 className={css.title}>{t("findHelp.resultsTitle")}</h1>

                <p className={css.description}>
                  {t("findHelp.resultsDescription", { city })}
                </p>

                <h2 className={css.sectionTitle}>
                  {t("findHelp.yourRequest")}
                </h2>

                <p className={css.resultItem}>
                  <span className={css.resultLabel}>
                    {t("findHelp.petLabel")}
                  </span>
                  <span className={css.resultValue}>
                    {t(`findHelp.${petType}`)}
                  </span>
                </p>

                <p className={css.resultItem}>
                  <span className={css.resultLabel}>
                    {t("findHelp.serviceLabel")}
                  </span>
                  <span className={css.resultValue}>
                    {t(
                      `findHelp.services.${serviceType === "special-care" ? "specialCare" : serviceType}`,
                    )}
                  </span>
                </p>

                <p className={css.resultItem}>
                  <span className={css.resultLabel}>
                    {t("findHelp.ageLabel")}
                  </span>
                  <span className={css.resultValue}>
                    {petAge} {t("findHelp.ageUnit")}
                  </span>
                </p>

                <p className={css.resultItem}>
                  <span className={css.resultLabel}>
                    {t("findHelp.sizeLabel")}
                  </span>
                  <span className={css.resultValue}>
                    {t(`findHelp.sizes.${petSize}`)}
                  </span>
                </p>

                <p className={css.resultItem}>
                  <span className={css.resultLabel}>
                    {t("findHelp.socialLabel")}
                  </span>
                  <span className={css.resultValue}>
                    {t(`findHelp.socialOptions.${petSocial}`)}
                  </span>
                </p>

                <p className={css.resultItem}>
                  <span className={css.resultLabel}>{t("findHelp.notes")}</span>
                  <span className={css.resultValue}>
                    {notes || t("findHelp.notesEmpty")}
                  </span>
                </p>

                <h2 className={css.sectionTitle}>
                  {t("findHelp.providersTitle")}
                </h2>

                {matchingProviders.length > 0 ? (
                  <div className={css.providersList}>
                    {matchingProviders.map((provider) => (
                      <ProviderCard key={provider.id} provider={provider} />
                    ))}
                  </div>
                ) : (
                  <p className={css.description}>{t("findHelp.noResults")}</p>
                )}
                <div className={css.actions}>
                  <button
                    type="button"
                    onClick={() => {
                      setShowResults(false);
                      setStep(1);
                    }}
                  >
                    {t("findHelp.backToForm")}
                  </button>
                </div>
              </section>
            ) : (
              <>
                <div className={css.progress}>
                  <div className={css.progressInfo}>
                    <span>{t("findHelp.progressTitle")}</span>
                    <span>{t("findHelp.stepProgress", { step })}</span>
                  </div>

                  <div
                    className={css.progressTrack}
                    role="progressbar"
                    aria-label={t("findHelp.progressLabel")}
                    aria-valuemin={1}
                    aria-valuemax={4}
                    aria-valuenow={step}
                  >
                    <div
                      className={css.progressBar}
                      style={{ width: `${(step / 4) * 100}%` }}
                    />
                  </div>
                </div>
                {step === 1 && (
                  <>
                    <h1 className={css.title}>{t("findHelp.step1Title")}</h1>
                    <p className={css.description}>
                      {t("findHelp.step1Description")}
                    </p>
                    <section className={css.section}>
                      <h2 className={css.sectionTitle}>
                        {t("findHelp.petQuestion")}
                      </h2>

                      <div className={css.options}>
                        <button
                          type="button"
                          className={petType === "dog" ? css.selected : ""}
                          onClick={() => handlePetTypeChange("dog")}
                        >
                          <Dog size={22} strokeWidth={1.7} aria-hidden="true" />
                          <span>{t("findHelp.dog")}</span>
                        </button>
                        <button
                          type="button"
                          className={petType === "cat" ? css.selected : ""}
                          onClick={() => handlePetTypeChange("cat")}
                        >
                          <Cat size={22} strokeWidth={1.7} aria-hidden="true" />
                          <span>{t("findHelp.cat")}</span>
                        </button>
                      </div>
                    </section>
                    <div className={css.actions}>
                      <button type="button" onClick={handleReset}>
                        {t("findHelp.reset")}
                      </button>

                      <button
                        type="button"
                        disabled={!petType}
                        onClick={() => setStep(2)}
                      >
                        {t("findHelp.continue")}
                      </button>
                    </div>
                  </>
                )}
                {step === 2 && (
                  <section className={css.section}>
                    <h1 className={css.title}>{t("findHelp.step2Title")}</h1>
                    <p className={css.description}>
                      {t("findHelp.step2Description")}
                    </p>

                    <div className={css.options}>
                      <button
                        type="button"
                        className={
                          serviceType === "boarding" ? css.selected : ""
                        }
                        onClick={() => setServiceType("boarding")}
                      >
                        <House size={20} strokeWidth={1.7} aria-hidden="true" />
                        {t("findHelp.services.boarding")}
                      </button>

                      <button
                        type="button"
                        className={
                          serviceType === "walking" ? css.selected : ""
                        }
                        onClick={() => setServiceType("walking")}
                      >
                        <Footprints
                          size={20}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                        {t("findHelp.services.walking")}
                      </button>

                      <button
                        type="button"
                        className={
                          serviceType === "grooming" ? css.selected : ""
                        }
                        onClick={() => setServiceType("grooming")}
                      >
                        <Scissors
                          size={20}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                        {t("findHelp.services.grooming")}
                      </button>

                      <button
                        type="button"
                        className={
                          serviceType === "training" ? css.selected : ""
                        }
                        onClick={() => setServiceType("training")}
                      >
                        <GraduationCap
                          size={20}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                        {t("findHelp.services.training")}
                      </button>

                      <button
                        type="button"
                        className={
                          serviceType === "special-care" ? css.selected : ""
                        }
                        onClick={() => setServiceType("special-care")}
                      >
                        <Heart size={20} strokeWidth={1.7} aria-hidden="true" />
                        {t("findHelp.services.specialCare")}
                      </button>
                    </div>
                    <div className={css.actions}>
                      <button type="button" onClick={() => setStep(1)}>
                        {t("findHelp.backButton")}
                      </button>

                      <button
                        type="button"
                        disabled={!serviceType}
                        onClick={() => setStep(3)}
                      >
                        {t("findHelp.continue")}
                      </button>
                    </div>
                  </section>
                )}
                {step === 3 && (
                  <section className={css.section}>
                    <h1 className={css.title}>{t("findHelp.step3Title")}</h1>
                    <p className={css.description}>
                      {t("findHelp.step3Description")}
                    </p>

                    <label htmlFor="petAge">{t("findHelp.petAge")}</label>
                    <input
                      id="petAge"
                      type="number"
                      min="0"
                      max="100"
                      value={petAge}
                      onChange={(event) => setPetAge(event.target.value)}
                      placeholder={t("findHelp.agePlaceholder")}
                    />

                    <h2 className={css.sectionTitle}>
                      {t("findHelp.petSize")}
                    </h2>

                    <div className={css.options}>
                      <button
                        type="button"
                        className={petSize === "small" ? css.selected : ""}
                        onClick={() => setPetSize("small")}
                      >
                        {t("findHelp.sizes.small")}
                      </button>

                      <button
                        type="button"
                        className={petSize === "medium" ? css.selected : ""}
                        onClick={() => setPetSize("medium")}
                      >
                        {t("findHelp.sizes.medium")}
                      </button>

                      <button
                        type="button"
                        className={petSize === "large" ? css.selected : ""}
                        onClick={() => setPetSize("large")}
                      >
                        {t("findHelp.sizes.large")}
                      </button>
                    </div>

                    <h2 className={css.sectionTitle}>
                      {t("findHelp.petSocial")}
                    </h2>

                    <div className={css.options}>
                      <button
                        type="button"
                        className={petSocial === "friendly" ? css.selected : ""}
                        onClick={() => setPetSocial("friendly")}
                      >
                        {t("findHelp.socialOptions.friendly")}
                      </button>

                      <button
                        type="button"
                        className={petSocial === "cautious" ? css.selected : ""}
                        onClick={() => setPetSocial("cautious")}
                      >
                        {t("findHelp.socialOptions.cautious")}
                      </button>

                      <button
                        type="button"
                        className={
                          petSocial === "unfriendly" ? css.selected : ""
                        }
                        onClick={() => setPetSocial("unfriendly")}
                      >
                        {t("findHelp.socialOptions.unfriendly")}
                      </button>

                      <button
                        type="button"
                        className={petSocial === "unknown" ? css.selected : ""}
                        onClick={() => setPetSocial("unknown")}
                      >
                        {t("findHelp.socialOptions.unknown")}
                      </button>
                    </div>

                    <div className={css.actions}>
                      <button type="button" onClick={() => setStep(2)}>
                        {t("findHelp.backButton")}
                      </button>

                      <button
                        type="button"
                        disabled={petAge === "" || !petSize || !petSocial}
                        onClick={() => setStep(4)}
                      >
                        {t("findHelp.continue")}
                      </button>
                    </div>
                  </section>
                )}
                {step === 4 && (
                  <section className={css.section}>
                    <h1 className={css.title}>{t("findHelp.title")}</h1>
                    <p className={css.description}>
                      {t("findHelp.description")}
                    </p>

                    <label htmlFor="city">{t("findHelp.city")}</label>

                    <input
                      id="city"
                      type="text"
                      value={city}
                      onChange={(event) => {
                        setCity(event.target.value);
                        setSelectedCity("");
                      }}
                      placeholder={t("findHelp.cityPlaceholder")}
                    />

                    {city.trim() &&
                      !selectedCity &&
                      filteredCities.length > 0 && (
                        <ul className={css.citySuggestions}>
                          {filteredCities.map((cityItem) => {
                            const matchingAlias = cityItem.aliases.find(
                              (alias) =>
                                alias
                                  .toLowerCase()
                                  .includes(city.trim().toLowerCase()),
                            );

                            return (
                              <li key={cityItem.name}>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setCity(matchingAlias);
                                    setSelectedCity(
                                      cityItem.code ??
                                        cityItem.name
                                          .trim()
                                          .toLowerCase()
                                          .replace(/\s+/g, "-"),
                                    );
                                  }}
                                >
                                  {matchingAlias}
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      )}

                    <label htmlFor="notes">{t("findHelp.notes")}</label>
                    <textarea
                      id="notes"
                      value={notes}
                      onChange={(event) => setNotes(event.target.value)}
                      placeholder={t("findHelp.notesPlaceholder")}
                      rows={4}
                    />

                    <div className={css.actions}>
                      <button type="button" onClick={() => setStep(3)}>
                        {t("findHelp.back")}
                      </button>

                      <button
                        type="button"
                        disabled={!selectedCity}
                        onClick={() => setShowResults(true)}
                      >
                        {t("findHelp.search")}
                      </button>
                    </div>
                  </section>
                )}
              </>
            )}
          </div>
          <div className={css.sidePhotoRight}>
            <img src={dogPhoto} alt="" aria-hidden="true" />
            <img src={secondCatPhoto} alt="" aria-hidden="true" />
          </div>
        </div>
      </Container>
    </main>
  );
}

export default FindHelp;
