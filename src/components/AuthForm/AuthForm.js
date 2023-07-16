import { Link, useLocation } from "react-router-dom";
import logo_header from "../../images/logo_header.svg";
import useFormValidation from "../../hooks/useFormValidation";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthForm({
  title,
  buttonSubmitText,
  question,
  toLink,
  link,
  registr,
  loggedIn,
  onSubmit,
  isLoading,
}) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { values, handleChange, errors, isValid, resetForm } =
    useFormValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onSubmit(values);
    }
  };

  useEffect(() => {
    if (loggedIn) resetForm();
  }, [loggedIn, resetForm]);

  useEffect(() => {
    if (loggedIn) {
      navigate("/movies", { replace: true });
    }
  }, [navigate, loggedIn]);

  return (
    <section className="auth">
      <Link to="/">
        <img src={logo_header} alt="логотип приложения" className="auth-logo" />
      </Link>
      <h2 className="auth__title">{title}</h2>
      <form className="auth__form" onSubmit={handleSubmit} noValidate>
        {pathname === "/signup" && (
          <>
            <label className="auth__field">Имя</label>
            <input
              type="text"
              name="name"
              className={`auth__input ${
                isLoading ? "auth__input_disabled" : ""
              }`}
              value={values.name || ""}
              onChange={handleChange}
              placeholder="Введите ваше имя"
              required
              minLength="2"
              maxLength="30"
              autoComplete="off"
              // pattern="^[a-zA-Zа-яёА-ЯЁ -]+$"
            />

            <span
              className={`auth__error ${errors.name && "auth__error_active"}`}>
              {errors.name || ""}
            </span>
          </>
        )}
        <label className="auth__field">E-mail</label>
        <input
          type="email"
          name="email"
          className={`auth__input ${isLoading ? "auth__input_disabled" : ""}`}
          placeholder="Введите Email"
          value={values.email || ""}
          onChange={handleChange}
          autoComplete="off"
          required
          pattern="^\S+@\S+\.\S+$"
        />
        <span className={`auth__error ${errors.email && "auth__error_active"}`}>
          {errors.email || ""}
        </span>

        <label className="auth__field">Пароль</label>
        <input
          type="password"
          name="password"
          className={`auth__input ${isLoading ? "auth__input_disabled" : ""}`}
          placeholder="Введите Пароль"
          minLength="6"
          value={values.password || ""}
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <span
          className={`auth__error ${errors.password && "auth__error_active"}`}>
          {errors.password || ""}
        </span>

        <button
          className={`auth__submit ${!isValid && "auth__submit_disabled"} 
					${registr ? "" : "auth__submit_type_login"}`}
          type="submit"
          disabled={!isValid}>
          {buttonSubmitText}
        </button>
        <p className="auth__text">
          {question}
          <Link className="auth__link" to={toLink}>
            {link}
          </Link>
        </p>
      </form>
    </section>
  );
}

export default AuthForm;
