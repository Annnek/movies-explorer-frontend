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
}) => {
  const { pathname } = useLocation();

  const [visibleMovies, setVisibleMovies] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [loadMoreCount, setLoadMoreCount] = useState(3);

  // количество показываемых карточек на странице в зависимости от ширины экрана и сколько добавляется кнопкой Еще
  useEffect(() => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= SMALL_SCREEN_SIZE) {
      setVisibleCount(5);
      setLoadMoreCount(2);
    } else if (screenWidth <= BIG_SCREEN_SIZE) {
      setVisibleCount(8);
      setLoadMoreCount(2);
    } else {
      setVisibleCount(12);
      setLoadMoreCount(3);
    }
  }, []);

  useEffect(() => {
    if (pathname === "/movies") {
      setVisibleMovies(movies.slice(0, visibleCount));
    } else if (pathname === "/saved-movies") {
      setVisibleMovies(filteredMovies.slice(0, visibleCount));
    }
  }, [movies, filteredMovies, visibleCount, pathname]);

  const handleShowMore = () => {
    setVisibleCount((prevVisibleCount) => prevVisibleCount + loadMoreCount);
  };

  return (
    <section className="cards">
      {isLoading && <Preloader />}
      {visibleMovies.length === 0 ? (
        <p className="not-found">Ничего не найдено</p>
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
      {visibleMovies.length <
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
