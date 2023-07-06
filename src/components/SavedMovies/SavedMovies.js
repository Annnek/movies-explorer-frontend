import React from "react";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { mainApi } from "../../utils/MainApi";

function SavedMovies() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    mainApi
      .getSavedMovies()
      .then((res) => {
        setSavedMovies(res);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setSavedMovies]);

  // Проверка, авторизован ли пользователь
  useEffect(() => {
    setIsLoggedIn(true);
  }, []);

  const handleDeleteMovie = (movie) => {
    mainApi
      .deleteMovie(movie)
      .then((res) => {
        console.log("Фильм удален:", res);
        // Обновить список сохраненных фильмов
        setSavedMovies(savedMovies.filter((m) => m.movieId !== movie.movieId));
      })
      .catch((err) => {
        console.error("Ошибка при удалении фильма:", err);
      });
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="main">
        <SearchForm />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            movies={savedMovies}
            typeCardBtn={{ save: false }}
            handleDeleteMovie={handleDeleteMovie}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
