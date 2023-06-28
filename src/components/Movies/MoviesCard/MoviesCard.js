import { savedCardList } from "../../../utils/constants";

function MoviesCard({ movieId, image, name, typeCardBtn }) {
  const isSavedMovieCard = savedCardList.some((i) => i.movieId === movieId);

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
      <img src={image} alt={name} className="card__img" />
      <div className="card__header">
        <h2 className="card__title">{name}</h2>
        <p className="card__duration">1ч 17м</p>
      </div>
    </li>
  );
}

export default MoviesCard;
