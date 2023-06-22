import logo_header from "../../images/logo_header.svg";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <NavLink to="/" exact>
        <img
          src={logo_header}
          alt="логотип приложения"
          className="header__logo"
        />
      </NavLink>
      <div className="header__entrance">
        <Link to="/signup" className="header__link">
          Регистрация
        </Link>
        <Link to="/signin" className="header__button">
          Войти
        </Link>
      </div>
    </header>
  );
}

export default Header;
