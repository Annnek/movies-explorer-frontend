import React, { useEffect, useState } from "react";
import { cardList } from "../../utils/constants";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function exampleTimeout() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const response = {
          data: cardList, // Пример данных, можно заменить на свои
          status: 200, // Пример статуса ответа
        };
        resolve(response);
      }, 2000); // Задержка в миллисекундах (в данном случае 2 секунды)
    });
  }

  useEffect(() => {
    setIsLoading(true);
    exampleTimeout()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // Проверка, авторизован ли пользователь
  useEffect(() => {
    setIsLoggedIn(true);
  }, []);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="main">
        <SearchForm />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList cardList={cardList} typeCardBtn={{ save: true }} />
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
