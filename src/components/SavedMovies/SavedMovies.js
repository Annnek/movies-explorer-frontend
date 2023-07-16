import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import { useCallback, useMemo, useState } from "react";

const SavedMovies = ({
  isLoading,
  savedMovieList,
  savedMovies,
  deleteMovieToList,
}) => {
  const [isChecked, setIsChecked] = useState(true);

  const [moviesSearch, setMoviesSearch] = useState("");

  const [filterString, setFilterString] = useState("");

  const handleSearchMovies = useCallback(async () => {
    setFilterString(moviesSearch);
  }, [moviesSearch]);

  const filteredMovies = useMemo(() => {
    return savedMovies.filter((movie) => {
      const filtredMovieInclude =
        movie.nameRU.toLowerCase().includes(filterString.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(filterString.toLowerCase());
      return isChecked
        ? filtredMovieInclude
        : movie.duration < 40 && filtredMovieInclude;
    });
  }, [filterString, isChecked, savedMovies]);

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
