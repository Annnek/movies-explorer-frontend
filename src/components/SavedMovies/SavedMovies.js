import React from "react";
// import { useState, useEffect } from "react";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { savedCardList } from "../../utils/constants";
// import { getSavedMovies } from "../../utils/api"; // импортируем функцию удаления

function SavedMovies() {
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
      <MoviesCardList cardList={savedCardList} typeCardBtn={{ save: false }} />
      <Footer />
    </>
  );
}

export default SavedMovies;
