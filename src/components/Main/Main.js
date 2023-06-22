import "./Main.css";
import AboutProject from "./AboutProject/AboutProject";
import NavTab from "./NavTab/NavTab";
import Promo from "./Promo/Promo";
import Techs from "./Techs/Techs";
import Student from "./Student/Student";
import Portfolio from "./Portfolio/Portfolio";

function Main() {
  return (
    <section className="main">
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <Student />
      <Portfolio />
    </section>
  );
}

export default Main;
