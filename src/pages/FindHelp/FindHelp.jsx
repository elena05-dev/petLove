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
  const [notes, setNotes] = useState("");
  const [showResults, setShowResults] = useState(false);
  function handlePetTypeChange(newPetType) {
    if (petType !== newPetType) {
      setPetAge("");
      setPetSize("");
      setPetSocial("");
      setPetType(newPetType);
    }
  }

  const matchingProviders = providers.filter((provider) => {
    const matchesPet = provider.petType === petType;
    const matchesService = provider.serviceType === serviceType;
    const matchesCity =
      provider.city.trim().toLowerCase() === city.trim().toLowerCase();

    return matchesPet && matchesService && matchesCity;
  });
  console.log("Ответы анкеты:", {
    petType,
    serviceType,
    city,
  });

  console.log("Найденные специалисты:", matchingProviders);
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
                <h1 className={css.title}>
                  Подбираем помощь для вашего питомца
                </h1>

                <p className={css.description}>
                  Мы ищем подходящие варианты в городе {city}.
                </p>

                <h2 className={css.sectionTitle}>Ваш запрос</h2>

                <p className={css.resultItem}>
                  <span className={css.resultLabel}>Питомец:</span>
                  <span className={css.resultValue}>
                    {petType === "dog" ? "Собака" : "Кошка"}
                  </span>
                </p>

                <p className={css.resultItem}>
                  <span className={css.resultLabel}>Услуга:</span>
                  <span className={css.resultValue}>
                    {
                      {
                        boarding: "Передержка",
                        walking: "Выгул",
                        grooming: "Груминг",
                        training: "Дрессировка и поведение",
                        "special-care": "Особый уход",
                      }[serviceType]
                    }
                  </span>
                </p>

                <p className={css.resultItem}>
                  <span className={css.resultLabel}>Возраст:</span>
                  <span className={css.resultValue}>{petAge} г.</span>
                </p>

                <p className={css.resultItem}>
                  <span className={css.resultLabel}>Размер:</span>
                  <span className={css.resultValue}>
                    {
                      {
                        small: "Маленький",
                        medium: "Средний",
                        large: "Большой",
                      }[petSize]
                    }
                  </span>
                </p>

                <p className={css.resultItem}>
                  <span className={css.resultLabel}>Отношение к животным:</span>
                  <span className={css.resultValue}>
                    {
                      {
                        friendly: "Хорошо",
                        cautious: "Нужна осторожность",
                        unfriendly: "Не принимает других животных",
                        unknown: "Неизвестно",
                      }[petSocial]
                    }
                  </span>
                </p>

                <p className={css.resultItem}>
                  <span className={css.resultLabel}>
                    Дополнительные пожелания:
                  </span>
                  <span className={css.resultValue}>
                    {notes || "Не указаны"}
                  </span>
                </p>

                <h2 className={css.sectionTitle}>Подходящие специалисты</h2>

                {matchingProviders.length > 0 ? (
                  <div className={css.providersList}>
                    {matchingProviders.map((provider) => (
                      <ProviderCard key={provider.id} provider={provider} />
                    ))}
                  </div>
                ) : (
                  <p className={css.description}>
                    Пока мы не нашли совпадений по всем параметрам. Попробуйте
                    изменить город или выбрать другую услугу.
                  </p>
                )}
                <div className={css.actions}>
                  <button
                    type="button"
                    onClick={() => {
                      setShowResults(false);
                      setStep(1);
                    }}
                  >
                    Назад к анкете
                  </button>
                </div>
              </section>
            ) : (
              <>
                <div className={css.progress}>
                  <div className={css.progressInfo}>
                    <span>Поиск помощи</span>
                    <span>Шаг {step} из 4</span>
                  </div>

                  <div
                    className={css.progressTrack}
                    role="progressbar"
                    aria-label="Прогресс заполнения анкеты"
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
                    <h1 className={css.title}>
                      Найдём подходящую помощь для вашего питомца
                    </h1>
                    <p className={css.description}>
                      Расскажите немного о питомце, и мы поможем найти
                      подходящие варианты.
                    </p>
                    <section className={css.section}>
                      <h2 className={css.sectionTitle}>Кому нужна помощь?</h2>

                      <div className={css.options}>
                        <button
                          type="button"
                          className={petType === "dog" ? css.selected : ""}
                          onClick={() => handlePetTypeChange("dog")}
                        >
                          <Dog size={22} strokeWidth={1.7} aria-hidden="true" />
                          <span>Собака</span>
                        </button>
                        <button
                          type="button"
                          className={petType === "cat" ? css.selected : ""}
                          onClick={() => handlePetTypeChange("cat")}
                        >
                          <Cat size={22} strokeWidth={1.7} aria-hidden="true" />
                          <span>Кошка</span>
                        </button>
                      </div>
                    </section>
                    <div className={css.actions}>
                      <button
                        type="button"
                        disabled={!petType}
                        onClick={() => setStep(2)}
                      >
                        Продолжить
                      </button>
                    </div>
                  </>
                )}
                {step === 2 && (
                  <section className={css.section}>
                    <h1 className={css.title}>
                      Какая помощь нужна вашему питомцу?
                    </h1>
                    <p className={css.description}>
                      Выберите услугу, которую вы ищете.
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
                        Передержка
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
                        Выгул
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
                        Груминг
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
                        Дрессировка и поведение
                      </button>

                      <button
                        type="button"
                        className={
                          serviceType === "special-care" ? css.selected : ""
                        }
                        onClick={() => setServiceType("special-care")}
                      >
                        <Heart size={20} strokeWidth={1.7} aria-hidden="true" />
                        Особый уход
                      </button>
                    </div>
                    <div className={css.actions}>
                      <button type="button" onClick={() => setStep(1)}>
                        Назад
                      </button>

                      <button
                        type="button"
                        disabled={!serviceType}
                        onClick={() => setStep(3)}
                      >
                        Продолжить
                      </button>
                    </div>
                  </section>
                )}
                {step === 3 && (
                  <section className={css.section}>
                    <h1 className={css.title}>Расскажите о питомце</h1>
                    <p className={css.description}>
                      Это поможет подобрать более подходящие варианты.
                    </p>

                    <label htmlFor="petAge">Сколько лет питомцу?</label>
                    <input
                      id="petAge"
                      type="number"
                      min="0"
                      max="100"
                      value={petAge}
                      onChange={(event) => setPetAge(event.target.value)}
                      placeholder="Возраст в годах"
                    />

                    <h2 className={css.sectionTitle}>Какого он размера?</h2>

                    <div className={css.options}>
                      <button
                        type="button"
                        className={petSize === "small" ? css.selected : ""}
                        onClick={() => setPetSize("small")}
                      >
                        Маленький
                      </button>

                      <button
                        type="button"
                        className={petSize === "medium" ? css.selected : ""}
                        onClick={() => setPetSize("medium")}
                      >
                        Средний
                      </button>

                      <button
                        type="button"
                        className={petSize === "large" ? css.selected : ""}
                        onClick={() => setPetSize("large")}
                      >
                        Большой
                      </button>
                    </div>

                    <h2 className={css.sectionTitle}>
                      Как питомец относится к другим животным?
                    </h2>

                    <div className={css.options}>
                      <button
                        type="button"
                        className={petSocial === "friendly" ? css.selected : ""}
                        onClick={() => setPetSocial("friendly")}
                      >
                        Хорошо
                      </button>

                      <button
                        type="button"
                        className={petSocial === "cautious" ? css.selected : ""}
                        onClick={() => setPetSocial("cautious")}
                      >
                        Нужна осторожность
                      </button>

                      <button
                        type="button"
                        className={
                          petSocial === "unfriendly" ? css.selected : ""
                        }
                        onClick={() => setPetSocial("unfriendly")}
                      >
                        Не принимает других животных
                      </button>

                      <button
                        type="button"
                        className={petSocial === "unknown" ? css.selected : ""}
                        onClick={() => setPetSocial("unknown")}
                      >
                        Не знаю
                      </button>
                    </div>

                    <div className={css.actions}>
                      <button type="button" onClick={() => setStep(2)}>
                        Назад
                      </button>

                      <button
                        type="button"
                        disabled={petAge === "" || !petSize || !petSocial}
                        onClick={() => setStep(4)}
                      >
                        Продолжить
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
                      onChange={(event) => setCity(event.target.value)}
                      placeholder="Например, Афула"
                    />

                    <label htmlFor="notes">{t("findHelp.city")}</label>
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
                        disabled={!city.trim()}
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
            {" "}
            <img src={dogPhoto} alt="" aria-hidden="true" />
            <img src={secondCatPhoto} alt="" aria-hidden="true" />
          </div>
        </div>
      </Container>
    </main>
  );
}

export default FindHelp;
