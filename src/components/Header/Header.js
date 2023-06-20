import logo_header from "../../images/logo_header.svg";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="header">
      <img
        src={logo_header}
        alt="логотип приложения"
        className="header__logo"
      />
      <Navigation isLoggedIn={true} />
    </header>
  );
}

export default Header;
