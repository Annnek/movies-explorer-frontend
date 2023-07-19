import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { API__URL } from "../../../utils/MainApi";
import { convertDuration } from "../../../utils/utils";

function MoviesCard({ card, savedMovies, savedMovieList, deleteMovieToList }) {
  const { pathname } = useLocation();

  const isSaved = useMemo(() => {
    return savedMovies.some((m) => m.movieId === card.id);
  }, [card, savedMovies]);

  function handleSaveMovie() {
    !isSaved ? savedMovieList(card) : deleteMovieToList(card);
  }

  function handleDeleteMovie() {
    return deleteMovieToList(card);
  }

  return (
    <li className="card">
      {pathname === "/movies" && (
        <button
          className={`card__btn ${isSaved ? "card__btn_type_saved" : ""}`}
          onClick={handleSaveMovie}>
          {isSaved ? "" : "Сохранить"}
        </button>
      )}

      {pathname === "/saved-movies" && (
        <button
          className="card__btn card__btn_type_delete"
          onClick={handleDeleteMovie}
        />
      )}

      <a
        className="card__link"
        href={card.trailerLink}
        target="_blank"
        rel="noreferrer">
        <img
          src={card.image.url ? `${API__URL}${card.image.url}` : card.image}
          alt={card.nameRU || card.nameEN}
          className="card__img"
        />
      </a>
      <div className="card__header">
        <h2 className="card__title">{card.nameRU || card.nameEN}</h2>
        <p className="card__duration">{convertDuration(card.duration)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
