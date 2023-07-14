import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = ({
  moviesSearch,
  setMoviesSearch,
  isChecked,
  setIsChecked,
  handleSearchMovies,
}) => {
  const handleChange = (e) => {
    setMoviesSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    if (!moviesSearch) return;
    e.preventDefault();
    handleSearchMovies(isChecked);
  };

  const handleCheckbox = () => {
    handleSearchMovies(!isChecked);
    setIsChecked(!isChecked);
  };

  return (
    <section>
      <form className="form-search" onSubmit={handleSubmit}>
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
        <FilterCheckbox checked={!isChecked} onChange={handleCheckbox} />
      </form>
    </section>
  );
};

export default SearchForm;
