import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import { searchMoviesQuery, filterMoviesByDuration } from "../../utils/utils";
import { useCallback, useMemo, useState } from "react";

const SavedMovies = ({
  isLoading,
  savedMovieList,
  savedMovies,
  deleteMovieToList,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const [moviesSearch, setMoviesSearch] = useState("");

  const [filterString, setFilterString] = useState("");

  const handleSearchMovies = useCallback(async () => {
    setFilterString(moviesSearch);
  }, [moviesSearch]);

  const filteredMovies = useMemo(() => {
    let movies = savedMovies;

    if (moviesSearch) {
      movies = searchMoviesQuery(movies, filterString);
    }

    if (isChecked) {
      movies = filterMoviesByDuration(movies);
    }

    return movies;
  }, [filterString, isChecked, savedMovies, moviesSearch]);

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
          filteredMovies={filteredMovies}
          savedMovieList={savedMovieList}
          savedMovies={savedMovies}
          deleteMovieToList={deleteMovieToList}
          handleSearchMovies={handleSearchMovies}
        />
      )}
    </>
  );
};

export default SavedMovies;
