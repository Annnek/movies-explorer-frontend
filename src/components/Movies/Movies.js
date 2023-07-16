import { useEffect, useState } from "react";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import { searchMoviesQuery, filterMoviesByDuration } from "../../utils/utils";

const Movies = ({
  isLoading,
  savedMovieList,
  deleteMovieToList,
  savedMovies,
  allMovies,
}) => {
  const [isChecked, setIsChecked] = useState(
    localStorage.getItem("isShort") === "true",
  );

  const [moviesSearch, setMoviesSearch] = useState(
    localStorage.getItem("moviesSearch") || "",
  );

  const [filteredMovies, setFilteredMovies] = useState(
    localStorage.getItem("filteredMovies")
      ? JSON.parse(localStorage.getItem("filteredMovies"))
      : [],
  );

  function handleSearchMovies(isChecked) {
    const filteredMovies = searchMoviesQuery(allMovies, moviesSearch);

    let movies = filteredMovies;
    if (isChecked) {
      movies = filterMoviesByDuration(filteredMovies);
    }

    setFilteredMovies(movies);
    localStorage.setItem("isShort", isChecked.toString());
    localStorage.setItem("filteredMovies", JSON.stringify(movies));
    localStorage.setItem("moviesSearch", moviesSearch);
  }

  useEffect(() => {
    localStorage.setItem("isShort", isChecked.toString());
  }, [isChecked]);

  return (
    <>
      <SearchForm
        moviesSearch={moviesSearch}
        setMoviesSearch={setMoviesSearch}
        handleSearchMovies={handleSearchMovies}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          isLoading={isLoading}
          savedMovieList={savedMovieList}
          savedMovies={savedMovies}
          deleteMovieToList={deleteMovieToList}
          movies={filteredMovies}
          filteredMovies={filteredMovies}
        />
      )}
    </>
  );
};

export default Movies;
