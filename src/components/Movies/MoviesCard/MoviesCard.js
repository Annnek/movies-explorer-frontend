import React, { useState } from "react";
import { moviesApi } from "../../../utils/MoviesApi";
import { mainApi } from "../../../utils/MainApi";
import { convertDuration } from "../../../utils/utils";

function MoviesCard({ movie }) {
  // const isSavedMovieCard = savedCardList.some(
  //   (i) => i.movieId === movie.movieId,
  // );

  const { duration, image, trailerLink, nameRU } = movie;
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveClick = () => {
    setIsSaved(!isSaved);
    if (!isSaved) {
      // Отправить запрос на сохранение фильма
      mainApi
        .saveMovie(movie)
        .then((res) => {
          console.log("Фильм сохранен:", res);
        })
        .catch((err) => {
          console.error("Ошибка при сохранении фильма:", err);
        });
    } else {
      // Отправить запрос на удаление фильма
      mainApi
        .deleteMovie(movie)
        .then((res) => {
          console.log("Фильм удален:", res);
        })
        .catch((err) => {
          console.error("Ошибка при удалении фильма:", err);
        });
    }
  };

  return (
    <li className="card">
      <button
        className={`card__btn ${
          isSaved ? "card__btn_type_saved" : "card__btn_type_save"
        }`}
        onClick={handleSaveClick}>
        {isSaved ? "" : "Сохранить"}
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
        <p className="card__duration">{convertDuration(+duration)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
