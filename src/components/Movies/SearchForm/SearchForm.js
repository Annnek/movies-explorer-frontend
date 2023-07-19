import { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = ({
  moviesSearch,
  setMoviesSearch,
  isChecked,
  setIsChecked,
  handleSearchMovies,
}) => {
  const [isEmptyQuery, setIsEmptyQuery] = useState(false);

  const handleChange = (e) => {
    setMoviesSearch(e.target.value);
    setIsEmptyQuery(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!moviesSearch) {
      setIsEmptyQuery(true); // Установить флаг пустого запроса, если поле пустое
      return;
    }

    handleSearchMovies(isChecked);
  };

  const handleCheckbox = () => {
    handleSearchMovies(!isChecked);
    setIsChecked(!isChecked);
  };

  return (
    <section>
      <form className="form-search" onSubmit={handleSubmit} noValidate>
        <label className="form-search__wrapper">
          <input
            type="text"
            placeholder="Фильм"
            name="search-movies"
            className="form-search__input"
            onChange={handleChange}
            value={moviesSearch}
          />
          <button className="form-search__submit-btn" type="submit"></button>
        </label>
        {isEmptyQuery && (
          <span className="form-search__error-message">
            Нужно ввести ключевое слово
          </span>
        )}
        <FilterCheckbox isChecked={isChecked} checkHandler={handleCheckbox} />
      </form>
    </section>
  );
};

export default SearchForm;
