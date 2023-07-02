import logo_header from "../../images/logo_header.svg";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header({ isLoggedIn }) {
  return (
    <header className={`header ${isLoggedIn ? "header_black" : ""}`}>
      <Link to="/">
        <img
          src={logo_header}
          alt="логотип приложения"
          className="header__logo"
        />
      </Link>
      {isLoggedIn ? (
        <Navigation />
      ) : (
        <div className="header__entrance">
          <Link to="/signup" className="header__link">
            Регистрация
          </Link>
          <Link to="/signin" className="header__button">
            Войти
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
