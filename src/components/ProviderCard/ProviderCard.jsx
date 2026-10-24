import { useRef, useState } from "react";
import { MapPin, CheckCircle2, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import css from "./ProviderCard.module.css";

function ProviderCard({ provider }) {
  const { t } = useTranslation();
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const dialogRef = useRef(null);

  const serviceKey =
    provider.serviceType === "special-care" ? "specialCare" : provider.serviceType;

  function handleOpenDetails() {
    const dialog = dialogRef.current;

    if (dialog && !dialog.open) {
      dialog.showModal();
      setIsDetailsOpen(true);
    }
  }

  return (
    <article className={css.card}>
      <div className={css.imageWrapper}>
        <img className={css.image} src={provider.image} alt={provider.name} />
      </div>

      <div className={css.content}>
        <h2 className={css.name}>{provider.name}</h2>

        <p className={css.location}>
          <MapPin size={16} aria-hidden="true" />
          <span>{provider.city}</span>
        </p>

        <p className={css.description}>{provider.description}</p>

        {provider.verified && (
          <p className={css.verified}>
            <CheckCircle2 size={16} aria-hidden="true" />
            <span>Проверенный специалист</span>
          </p>
        )}

        <button
          className={css.button}
          type="button"
          onClick={handleOpenDetails}
          aria-haspopup="dialog"
          aria-expanded={isDetailsOpen}
        >
          Подробнее о специалисте
        </button>
      </div>

      <dialog
        ref={dialogRef}
        className={css.dialog}
        aria-labelledby={`provider-title-${provider.id}`}
        onClose={() => setIsDetailsOpen(false)}
      >
        <div className={css.dialogContent}>
          <button
            className={css.closeButton}
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Закрыть подробную информацию"
          >
            <X size={20} aria-hidden="true" />
          </button>

          <img
            className={css.dialogImage}
            src={provider.image}
            alt={provider.name}
          />
          <h2 className={css.dialogTitle} id={`provider-title-${provider.id}`}>
            {provider.name}
          </h2>
          <p className={css.dialogLocation}>
            <MapPin size={16} aria-hidden="true" />
            <span>{provider.city}</span>
          </p>
          <dl className={css.detailsList}>
            <div>
              <dt>{t("findHelp.serviceLabel")}</dt>
              <dd>{t(`findHelp.services.${serviceKey}`)}</dd>
            </div>
            <div>
              <dt>{t("findHelp.petLabel")}</dt>
              <dd>{t(`findHelp.${provider.petType}`)}</dd>
            </div>
          </dl>
          <p className={css.dialogDescription}>{provider.description}</p>
        </div>
      </dialog>
    </article>
  );
}

export default ProviderCard;
