import "./Main.css";
import Header from "../Header/Header";
import AboutProject from "./AboutProject/AboutProject";
import NavTab from "./NavTab/NavTab";
import Promo from "./Promo/Promo";
import Techs from "./Techs/Techs";
import Student from "./Student/Student";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <section className="main">
      <Header />
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <Student />
      <Portfolio />
      <Footer />
    </section>
  );
}

export default Main;
