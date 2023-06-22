import "./Main.css";
import AboutProject from "./AboutProject/AboutProject";
import NavTab from "./NavTab/NavTab";
import Promo from "./Promo/Promo";

function Main() {
  return (
    <section className="main">
      <Promo />
      <NavTab />
      <AboutProject />
    </section>
  );
}

export default Main;
