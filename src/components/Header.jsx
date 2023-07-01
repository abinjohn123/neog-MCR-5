const Header = ({ filterSearch, setFilterSearch, setFilterType }) => {
  return (
    <div className="header">
      <div className="filters">
        <input
          className="search-input"
          type="text"
          placeholder="type your filter here..."
          value={filterSearch}
          onChange={(e) => setFilterSearch(e.target.value.toLowerCase())}
        />
        <div
          className="radio-containers"
          onChange={(e) => setFilterType(e.target.value)}
        >
          <label htmlFor="name">
            <input type="radio" id="name" name="filter" value="name" /> Name
          </label>
          <label htmlFor="cuisine">
            <input type="radio" id="cuisine" name="filter" value="cuisine" />{' '}
            Cuisine
          </label>
          <label htmlFor="ingredients">
            <input
              type="radio"
              id="ingredients"
              name="filter"
              value="ingredients"
            />{' '}
            Ingredients
          </label>
        </div>
      </div>
    </div>
  );
};
export default Header;
