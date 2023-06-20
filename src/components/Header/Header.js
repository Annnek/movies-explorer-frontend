import logo_header from "../../images/logo_header.svg";

function Header() {
  return (
    <header className="header">
      <img
        src={logo_header}
        alt="логотип приложения"
        className="header__logo"
      />
    </header>
  );
}

export default Header;
