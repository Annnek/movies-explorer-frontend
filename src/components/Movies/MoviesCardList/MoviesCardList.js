import React, { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard.js";

function MoviesCardList({ movies, typeCardBtn, handleDeleteMovie }) {
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

  const handleShowMore = () => {
    setVisibleCount((prevVisibleCount) => prevVisibleCount + loadMoreCount);
  };

  // const visibleMovies = showAll ? movies : movies.slice(0, 12); // Отображать все карточки или только первые 12

  // const handleShowMore = () => {
  //   setShowAll(true);
  // };

  return (
    <section className="cards">
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
