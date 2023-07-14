import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useFormValidation from "../../hooks/useFormValidation";
import { useContext, useEffect, useState } from "react";

const Profile = ({ signOut, handleUserUpdate, isLoading }) => {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isSimilarValues, setIsSimilarValues] = useState(true);

  const { values, handleChange, errors, isValid, resetForm } =
    useFormValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isSimilarValues) {
      handleUserUpdate({
        name: name,
        email: email,
      });
      resetForm();
    }
    setIsDisabled(true);
  };

  useEffect(() => {
    let name = true;
    let email = true;
    if (values.name) {
      name = values.name === currentUser.name;
    }
    if (values.email) {
      email = values.email === currentUser.email;
    }
    setIsSimilarValues(name && email);
  }, [values.name, values.email, currentUser.name, currentUser.email]);

  useEffect(() => {
    if (!isLoading) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  }, [currentUser.name, currentUser.email, isLoading]);

  useEffect(() => {
    if (values.name) {
      setName(values.name);
    }
    if (values.email) {
      setEmail(values.email);
    }
  }, [values.name, values.email]);

  useEffect(() => {
    if (currentUser) {
      resetForm();
    }
  }, [currentUser, resetForm]);

  const handleEditButton = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <section className="profile">
      <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
      <form
        id="profile__form"
        className="profile__form"
        onSubmit={handleSubmit}>
        <div className="profile__form-inputs">
          <label className="profile__label">Имя</label>
          <input
            type="text"
            name="name"
            id="profile-input-name"
            className={`profile__input ${
              isDisabled || isLoading ? "profile__input_disabled" : ""
            }`}
            value={`${values.name ? values.name : name}`}
            onChange={handleChange}
            placeholder="Имя"
            required
            minLength="2"
            maxLength="30"
            pattern="^[a-zA-Zа-яёА-ЯЁ -]+$"
          />
        </div>
        <span className={`auth__error ${errors.name && "auth__error_active"}`}>
          {errors.name || ""}
        </span>
        <div className="profile__form-inputs">
          <label className="profile__label">E-mail</label>
          <input
            type="email"
            name="email"
            id="profile-input-name"
            className={`profile__input ${
              isDisabled || isLoading ? "profile__input_disabled" : ""
            }`}
            value={`${values.email ? values.email : email}`}
            onChange={handleChange}
            placeholder="Email"
            required
            pattern="^\S+@\S+\.\S+$"
          />
        </div>
        <span className={`auth__error ${errors.email && "auth__error_active"}`}>
          {errors.email || ""}
        </span>
        <>
          <div className="profile__wrapper">
            <button
              className={`profile__btn-submit links ${
                isDisabled ? "profile__btn-submit_disabled" : ""
              } ${
                !isValid || isLoading || isSimilarValues
                  ? "profile__submit-button_inactive"
                  : ""
              }`}
              type="submit"
              disabled={
                !isValid || isLoading || isSimilarValues ? true : false
              }>
              Сохранить
            </button>
            <button
              type="submit"
              onClick={handleEditButton}
              className="profile__btn-submit">
              {isDisabled ? "Редактировать" : "Отменить"}
            </button>
            <button
              type="button"
              onClick={signOut}
              className="profile__btn-exit">
              Выйти из аккаунта
            </button>
          </div>
        </>
      </form>
    </section>
  );
};

export default Profile;
