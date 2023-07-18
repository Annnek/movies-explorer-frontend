import { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import Preloader from "../../Preloader/Preloader";
import { BIG_SCREEN_SIZE, SMALL_SCREEN_SIZE } from "../../../utils/constants";

const MoviesCardList = ({
  movies,
  savedMovieList,
  savedMovies,
  deleteMovieToList,
  filteredMovies,
  isLoading,
  isSearchExecuted,
}) => {
  const { pathname } = useLocation();

  const [visibleMovies, setVisibleMovies] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [loadMoreCount, setLoadMoreCount] = useState(3);

  // количество показываемых карточек на странице в зависимости от ширины экрана и сколько добавляется кнопкой Еще
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= SMALL_SCREEN_SIZE) {
        setVisibleCount(5);
      } else if (screenWidth <= BIG_SCREEN_SIZE) {
        setVisibleCount(8);
      } else {
        setVisibleCount(12);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (pathname === "/movies") {
      setVisibleMovies(movies.slice(0, visibleCount));
    } else if (pathname === "/saved-movies") {
      setVisibleMovies(savedMovies.slice(0, visibleCount));
      setVisibleCount(savedMovies.length);
    }
  }, [movies, savedMovies, visibleCount, pathname]);

  const handleShowMore = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= SMALL_SCREEN_SIZE) {
      setLoadMoreCount(2);
    } else if (screenWidth <= BIG_SCREEN_SIZE) {
      setLoadMoreCount(2);
    } else {
      setLoadMoreCount(3);
    }

    setVisibleCount((prevVisibleCount) => prevVisibleCount + loadMoreCount);
  };

  return (
    <section className="cards">
      {isLoading && <Preloader />}
      {/* Надпись появляется только после поиска, сначлаа пустой экран */}
      {isSearchExecuted && visibleMovies.length === 0 ? (
        <p className="cards__not-found">Ничего не найдено</p>
      ) : (
        <ul className="cards__list">
          {visibleMovies.map((card) => (
            <MoviesCard
              card={card}
              filteredMovies={filteredMovies}
              savedMovieList={savedMovieList}
              savedMovies={savedMovies}
              deleteMovieToList={deleteMovieToList}
              key={card.id || card.movieId}
            />
          ))}
        </ul>
      )}
      {/* Рендерим кнопку "Еще" только на странице /movies */}
      {pathname === "/movies" &&
        visibleMovies.length <
          (pathname === "/movies" ? movies.length : filteredMovies.length) && (
          <div className="cards__block-more">
            <button
              className="cards__btn-more"
              type="button"
              onClick={handleShowMore}>
              Еще
            </button>
          </div>
        )}
    </section>
  );
};

export default MoviesCardList;
