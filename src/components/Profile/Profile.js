import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Проверка, авторизован ли пользователь
  useEffect(() => {
    setIsLoggedIn(true);
  }, []);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="main">
        <section className="profile">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <form id="profile__form" className="profile__form">
            <label className="profile__form-inputs">
              <span className="profile__label">Имя</span>
              <input
                type="text"
                name="profile-input-name"
                id="profile-input-name"
                className="profile__input"
                placeholder="Имя"
                value={"Виталий"}
                minLength={2}
                maxLength={30}
                required={true}
              />
            </label>
            <label className="profile__form-inputs">
              <span className="profile__label">E-mail</span>
              <input
                type="email"
                name="profile-input-name"
                id="profile-input-name"
                className="profile__input"
                placeholder="Имя"
                value={"pochta@yandex.ru"}
                required={true}
              />
            </label>
          </form>
          <div className="profile__links">
            <Link to="/" className="profile__link profile__link_type_edit">
              Редактировать
            </Link>
            <Link
              to="/signin"
              className="profile__link profile__link_type_exit">
              Выйти из аккаунта
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;
