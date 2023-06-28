import React from "react";
import "./Error404.css";

const Error404 = () => {
  return (
    <main className="Error404">
      <h1 className="Error404__title">404</h1>
      <p className="Error404__subtitle">Страница не найдена</p>
      <a href="/" className="Error404__link">
        Назад
      </a>
    </main>
  );
};

export default Error404;
