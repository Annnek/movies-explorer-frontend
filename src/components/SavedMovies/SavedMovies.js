import React from "react";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { savedCardList } from "../../utils/constants";
// import { getSavedMovies } from "../../utils/api"; // импортируем функцию удаления

function SavedMovies() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // function exampleTimeout() {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const response = {
  //         data: savedCardList, // Пример данных, можно заменить на свои
  //         status: 200, // Пример статуса ответа
  //       };
  //       resolve(response);
  //     }, 1000); // Задержка в миллисекундах (в данном случае 2 секунды)
  //   });
  // }

  // Эмилируем загрузку фильмов
  useEffect(() => {
    setIsLoading(true)
      // exampleTimeout()
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
          <MoviesCardList
            cardList={savedCardList}
            typeCardBtn={{ save: false }}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
