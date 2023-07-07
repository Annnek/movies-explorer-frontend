import { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ handleFilterChange }) {
  const [searchValue, setSearchValue] = useState("");
  const [isShortsChecked, setIsShortsChecked] = useState(false);

  const handleChange = ({ event }) => {
    setSearchValue(event.target.value);
  };

  const handleShortsCheck = () => {
    setIsShortsChecked(!isShortsChecked);
    handleFilterChange(!isShortsChecked);
  };

  // useEffect(() => {
  //   handleFilterChange(isShortsChecked);
  // }, [isShortsChecked, handleFilterChange]);

  return (
    <section>
      <form className="form-search">
        <label className="form-search__wrapper">
          <input
            type="text"
            placeholder="Фильм"
            className="form-search__input"
            onChange={handleChange}
            value={searchValue}
            minLength="2"
            required
          />
          <button className="form-search__submit-btn"></button>
        </label>
        <FilterCheckbox
          checkHandler={handleShortsCheck}
          isChecked={isShortsChecked}
        />
      </form>
    </section>
  );
}

export default SearchForm;
