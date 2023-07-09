import React, { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard.js";
import { filterMoviesByDuration } from "../../../utils/utils.js";

function MoviesCardList({
  movies,
  typeCardBtn,
  handleDeleteMovie,
  isShortsChecked,
  // isResultSearch,
}) {
  const [visibleMovies, setVisibleMovies] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12); // Количество отображаемых карточек
  const [loadMoreCount, setLoadMoreCount] = useState(3); // Количество подгружаемых карточек при нажатии на кнопку "Ещё"

  useEffect(() => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 500) {
      setVisibleCount(5);
      setLoadMoreCount(2);
    } else if (screenWidth <= 1000) {
      setVisibleCount(8);
      setLoadMoreCount(2);
    } else {
      setVisibleCount(12);
      setLoadMoreCount(3);
    }
  }, []);

  useEffect(() => {
    setVisibleMovies(movies.slice(0, visibleCount));
  }, [movies, visibleCount]);

  useEffect(() => {
    if (isShortsChecked) {
      const filteredMovies = filterMoviesByDuration(movies);
      setVisibleMovies(filteredMovies.slice(0, visibleCount));
    } else {
      setVisibleMovies(movies.slice(0, visibleCount));
    }
  }, [movies, visibleCount, isShortsChecked]);

  const handleShowMore = () => {
    setVisibleCount((prevVisibleCount) => prevVisibleCount + loadMoreCount);
  };

  return (
    <section className="cards">
      {/* {isResultSearch ? ( */}
      <ul className="cards__list">
        {visibleMovies.map((movie) => (
          <MoviesCard
            key={movie.movieId}
            movie={movie}
            typeCardBtn={typeCardBtn}
            handleDeleteMovie={handleDeleteMovie}
          />
        ))}
      </ul>
      {/* ) : (
        <p className="cards__no-results">Ничего не найдено</p>
      )} */}
      {/* {movies.length > visibleCount && isResultSearch && ( */}
      {movies.length > visibleCount && (
        <div className="cards__block-more">
          <button className="cards__btn-more" onClick={handleShowMore}>
            Ещё
          </button>
        </div>
      )}
    </section>
  );
}

export default MoviesCardList;
