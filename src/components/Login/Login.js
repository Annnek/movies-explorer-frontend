import AuthForm from "../AuthForm/AuthForm";

function Login({ handleSignIn, isLoading }) {
  return (
    <AuthForm
      title="Рады видеть!"
      buttonSubmitText="Войти"
      question="Ещё не зарегистрированы?"
      link="Регистрация"
      toLink="/signup"
      registr={false}
      onSubmit={handleSignIn}
      isLoading={isLoading}
    />
  );
}

export default Login;
