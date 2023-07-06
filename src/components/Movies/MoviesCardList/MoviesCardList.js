import React, { useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard.js";

function MoviesCardList({ movies, typeCardBtn, handleDeleteMovie }) {
  const [showAll, setShowAll] = useState(false);

  const visibleMovies = showAll ? movies : movies.slice(0, 12); // Отображать все карточки или только первые 12

  const handleShowMore = () => {
    setShowAll(true);
  };

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
      {!showAll && movies.length > 12 && (
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
