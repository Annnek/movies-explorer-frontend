import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { moviesApi } from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";
import { filterMoviesByDuration } from "../../utils/utils";

function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isShortsChecked, setIsShortsChecked] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    moviesApi
      .getAllMovies()
      .then((res) => {
        setMovies(res);
        setFilteredMovies(res); // Начальное значение filteredMovies - все фильмы
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

  const handleDeleteMovie = (movie) => {
    mainApi
      .deleteMovie(movie)
      .then((res) => {
        console.log("Фильм удален:", res);
        setMovies(movies.filter((m) => m.movieId !== movie.movieId));
        setFilteredMovies(
          filteredMovies.filter((m) => m.movieId !== movie.movieId),
        );
      })
      .catch((err) => {
        console.error("Ошибка при удалении фильма:", err);
      });
  };

  const handleFilterChange = (isShortsChecked) => {
    setIsShortsChecked(isShortsChecked);
    if (isShortsChecked) {
      const filtered = filterMoviesByDuration(movies); // Фильтрация фильмов по длительности
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies(movies); // Вернуть все фильмы
    }
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="main">
        <SearchForm handleFilterChange={handleFilterChange} />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            movies={movies}
            typeCardBtn={{ save: true }}
            handleDeleteMovie={handleDeleteMovie}
            isShortsChecked={isShortsChecked}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
