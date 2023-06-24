import { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  const [searchValue, setSearchValue] = useState("");
  const [isShortsChecked, setIsShortsChecked] = useState(false);

  const handleChange = ({ target }) => {
    setSearchValue(target.value);
  };

  const handleShortsCheck = () => {
    setIsShortsChecked(!isShortsChecked);
  };

  return (
    <form className="form-search">
      <label className="form-search__wrapper">
        <input
          type="text"
          placeholder="Фильм"
          className="form-search__input"
          onChange={handleChange}
          value={searchValue}
          required
        />
        <button className="form-search__submit-btn"></button>
      </label>
      <FilterCheckbox
        checkHandler={handleShortsCheck}
        isChecked={isShortsChecked}
      />
    </form>
  );
}

export default SearchForm;
