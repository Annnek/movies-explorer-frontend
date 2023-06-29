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

  function exampleTimeout() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const response = {
          data: savedCardList, // Пример данных, можно заменить на свои
          status: 200, // Пример статуса ответа
        };
        resolve(response);
      }, 2000); // Задержка в миллисекундах (в данном случае 2 секунды)
    });
  }

  // Эмилируем загрузку фильмов
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

  // const [savedMovies, setSavedMovies] = useState([]);

  // useEffect(() => {
  //   loadSavedMovies(); // Загрузка сохраненных фильмов при монтировании компонента
  // }, []);

  // const loadSavedMovies = () => {
  //   // Здесь используем функцию для получения списка сохраненных фильмов из API или файла
  //   getSavedMovies()
  //     .then((movies) => {
  //       setSavedMovies(movies); // Устанавливаем полученный список фильмов в состояние savedMovies
  //     })
  //     .catch((error) => {
  //       console.error("Ошибка при загрузке сохраненных фильмов:", error);
  //     });
  // };

  return (
    <>
      <Header />
      <SearchForm />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          cardList={savedCardList}
          typeCardBtn={{ save: false }}
        />
      )}
      <Footer />
    </>
  );
}

export default SavedMovies;
