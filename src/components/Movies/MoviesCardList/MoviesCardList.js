import React, { useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard.js";

function MoviesCardList({ cardList, typeCardBtn }) {
  const [showAll, setShowAll] = useState(false);

  const visibleCards = showAll ? cardList : cardList.slice(0, 12); // Отображать все карточки или только первые 12

  const handleShowMore = () => {
    setShowAll(true);
  };

  return (
    <section className="cards">
      <ul className="cards__list">
        {visibleCards.map((card) => (
          <MoviesCard
            key={card.movieId}
            movieId={card.movieId}
            duration={card.duration}
            image={card.image}
            name={card.nameRU}
            typeCardBtn={typeCardBtn}
          />
        ))}
      </ul>
      {!showAll && cardList.length > 12 && (
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
