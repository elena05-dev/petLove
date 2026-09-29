import mobile1x from "../../assets/loader/loader-mobile@1x.webp";
import mobile2x from "../../assets/loader/loader-mobile@2x.webp";
import tablet1x from "../../assets/loader/loader-tablet@1x.webp";
import tablet2x from "../../assets/loader/loader-tablet@2x.webp";
import desktop1x from "../../assets/loader/loader-desktop@1x.webp";
import desktop2x from "../../assets/loader/loader-desktop@2x.webp";

function Loader() {
  return (
    <div className="loader">
      <picture>
        <source
          media="(min-width: 1280px)"
          srcSet={`${desktop1x} 1x, ${desktop2x} 2x`}
        />

        <source
          media="(min-width: 768px)"
          srcSet={`${tablet1x} 1x, ${tablet2x} 2x`}
        />

        <img src={mobile1x} srcSet={`${mobile1x} 1x, ${mobile2x} 2x`} alt="" />
      </picture>

      <div className="loader-progress">
        <div className="loader-circle"></div>
        <span>85%</span>
      </div>
    </div>
  );
}

export default Loader;
