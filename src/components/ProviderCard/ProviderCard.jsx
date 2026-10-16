import { MapPin, CheckCircle2 } from "lucide-react";
import css from "./ProviderCard.module.css";

function ProviderCard({ provider }) {
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

        <button className={css.button} type="button">
          Подробнее о специалисте
        </button>
      </div>
    </article>
  );
}

export default ProviderCard;
