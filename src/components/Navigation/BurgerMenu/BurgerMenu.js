import { Link } from "react-router-dom";
import accountIcon from "../../../images/ico_account.svg";

function BurgerMenu({ onClick }) {
  return (
    <div className="burger">
      <button className="burger__btn-close" type="button" onClick={onClick} />
      <ul className="burger__list">
        <li className="burger__item">
          <Link to="/" className="burger__link">
            Главная
          </Link>
        </li>
        <li className="burger__item">
          <Link to="/movies" className="burger__link">
            Фильмы
          </Link>
        </li>
        <li className="burger__item">
          <Link to="/saved-movies" className="burger__link">
            Сохраненные фильмы
          </Link>
        </li>
      </ul>
      <Link to="/profile" className="burger__profile">
        Аккаунт
        <img
          src={accountIcon}
          alt="Account Icon"
          className="burger__profile-icon"
        />
      </Link>
    </div>
  );
}

export default BurgerMenu;
