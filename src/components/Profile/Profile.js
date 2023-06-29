import { useState, useEffect } from "react";
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
      <main className="profile">
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
        <div className="profile__buttons">
          <button
            className="profile__button profile__button_type_edit"
            type="button">
            Редактировать
          </button>
          <button
            className="profile__button profile__button_type_exit"
            type="button">
            Выйти из аккаунта
          </button>
        </div>
      </main>
    </>
  );
}

export default Profile;
