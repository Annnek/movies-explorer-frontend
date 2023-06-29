import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to="" className="navigation__link">
            Фильмы
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="" className="navigation__link">
            Сохраненные фильмы
          </Link>
        </li>
      </ul>
      <Link to="/profile" className="navigation__profile">
        Аккаунт
      </Link>
    </>
  );
}

export default Navigation;
