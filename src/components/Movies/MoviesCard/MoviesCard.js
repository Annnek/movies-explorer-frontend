import { savedCardList } from "../../../utils/constants";
import { moviesApi } from "../../../utils/MoviesApi";

function MoviesCard({ movie, typeCardBtn }) {
  const isSavedMovieCard = savedCardList.some(
    (i) => i.movieId === movie.movieId,
  );

  const { duration, image, trailerLink, nameRU } = movie;

  return (
    <li className="card">
      <button
        className={`card__btn ${
          !typeCardBtn.save
            ? "card__btn_type_delete"
            : isSavedMovieCard
            ? "card__btn_saved"
            : ""
        }`}>
        {!typeCardBtn.save || isSavedMovieCard ? "" : "Сохранить"}
      </button>
      <a
        className="card__link"
        href={trailerLink}
        target="_blank"
        rel="noreferrer">
        <img
          src={image.url ? `${moviesApi._baseUrl}${image.url}` : image}
          alt={nameRU}
          className="card__img"
        />
      </a>
      <div className="card__header">
        <h2 className="card__title">{nameRU}</h2>
        <p className="card__duration">{duration}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
