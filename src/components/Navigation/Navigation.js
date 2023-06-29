import React, { useState } from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

function Navigation() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleWindowResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleWindowResize);

  //   return () => {
  //     window.removeEventListener("resize", handleWindowResize);
  //   };
  // }, []);

  // if (windowWidth <= 768) {
  //   return <BurgerMenu />;
  // }

  return (
    <>
      {isBurgerMenuOpen ? (
        <BurgerMenu onClick={toggleBurgerMenu} />
      ) : (
        <button
          className="navigation__btn-burger"
          type="button"
          onClick={toggleBurgerMenu}></button>
      )}

      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to="/movies" className="navigation__link">
            Фильмы
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/saved-movies" className="navigation__link">
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
