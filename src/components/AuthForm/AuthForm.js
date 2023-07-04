import logo_header from "../../images/logo_header.svg";
import { Link } from "react-router-dom";

function AuthForm({ typeForm, title, buttonSubmitText }) {
  return (
    <section className="auth">
      <Link to="/">
        <img src={logo_header} alt="логотип приложения" className="auth-logo" />
      </Link>
      <h2 className="auth__title">{title}</h2>
      <form className="auth__form" name={typeForm}>
        {typeForm === "register" && (
          <>
            <label className="auth__field">
              Имя
              <input
                type="text"
                className="auth__input"
                placeholder="Введите ваше имя"
                required
              />
            </label>
          </>
        )}
        <label className="auth__field">
          E-mail
          <input
            type="email"
            className="auth__input"
            name="email"
            placeholder="Введите Email"
            minLength={2}
            maxLength={40}
            required={true}
          />
          <span className="auth__error"></span>
        </label>
        <label className="auth__field">
          Пароль
          <input
            type="password"
            className="auth__input"
            name="password"
            placeholder="Введите Пароль"
            minLength={2}
            maxLength={40}
            required={true}
          />
          <span className="auth__error"></span>
        </label>
        <button
          className={`auth__submit ${
            typeForm === "register" ? "auth__submit_type_register" : ""
          }`}
          type="submit">
          {buttonSubmitText}
        </button>
      </form>
    </section>
  );
}

export default AuthForm;
