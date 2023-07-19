import AuthForm from "../AuthForm/AuthForm";

function Register({ handleSignUp, isLoading }) {
  return (
    <AuthForm
      title="Добро пожаловать!"
      buttonSubmitText="Зарегистрироваться"
      question="Уже зарегистрированы?"
      link="Войти"
      toLink="/signin"
      registr={true}
      onSubmit={handleSignUp}
      isLoading={isLoading}
    />
  );
}

export default Register;
