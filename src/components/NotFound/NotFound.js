import React from "react";

const NotFound = () => {
  return (
    <main className="main">
      <div className="not-found">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__subtitle">Страница не найдена</p>
        <a href="/" className="not-found__link">
          Назад
        </a>
      </div>
    </main>
  );
};

export default NotFound;
