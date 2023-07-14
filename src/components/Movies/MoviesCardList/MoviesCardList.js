import { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { useLocation } from "react-router-dom";
import Preloader from "../../Preloader/Preloader";

const MoviesCardList = ({
  movies,
  savedMovieList,
  savedMovies,
  deleteMovieToList,
  filtredMovies,
  isLoading,
}) => {
  const { pathname } = useLocation();

  const cards = pathname === "/movies" ? movies : filtredMovies;

  const [paginate, setPaginate] = useState(0);
  const [paginateButton, setPaginateButton] = useState(false);

  useEffect(() => {
    changePaginate();
  }, []);

  useEffect(() => {
    if (cards.length === 0) {
      setPaginateButton(false);
    }
    if (paginate >= cards.length) setPaginateButton(false);
    else return setPaginateButton(true);
  }, [cards, paginate]);

  function changePaginate() {
    if (window.innerWidth >= 1100) return setPaginate(12);
    else if (window.innerWidth < 1100 && window.innerWidth <= 750)
      return setPaginate(8);
    else if (window.innerWidth < 750) return setPaginate(5);
  }

  function handlePaginate() {
    if (window.innerWidth >= 1100) return setPaginate(paginate + 12);
    else if (window.innerWidth < 1100) return setPaginate(paginate + 5);
  }

  return (
    <section className="cards">
      {isLoading && <Preloader />}
      {cards.length === 0 ? (
        <p className="not-found">Ничего не найдено</p>
      ) : (
        <ul className="cards__list">
          {cards.slice(0, paginate).map((card) => (
            <MoviesCard
              card={card}
              filtredMovies={filtredMovies}
              savedMovieList={savedMovieList}
              savedMovies={savedMovies}
              deleteMovieToList={deleteMovieToList}
              key={card.id || card.movieId}
            />
          ))}
        </ul>
      )}
      {paginateButton && (
        <div className="cards__block-more">
          <button
            className="cards__btn-more"
            type="button"
            onClick={handlePaginate}>
            Еще
          </button>
        </div>
      )}
    </section>
  );
};

export default MoviesCardList;
