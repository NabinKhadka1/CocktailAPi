import { useContext } from "react";
import { contextApi } from "../context";

const SearchForm = () => {
  const { searchText, setSearchText } = useContext(contextApi);
  const nameChangeHandler = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <section className="search-section">
      <form className="search__form">
        <label htmlFor="searchCocktail">Search your favourite cocktail</label>
        <input
          type="text"
          id="searchCocktail"
          value={searchText}
          onChange={nameChangeHandler}
        />
      </form>
    </section>
  );
};
export default SearchForm;
