import css from "./Container.module.css";

function Container({ children, wide = false }) {
  return (
    <div className={`${css.container} ${wide ? css.wide : ""}`}>{children}</div>
  );
}

export default Container;
