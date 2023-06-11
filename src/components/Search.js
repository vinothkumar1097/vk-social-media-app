import React from "react";
import "../styles/search.css";

const Search = ({ searchInput, setSearchInput }) => {
  return (
    <form className="search mt-2" onSubmit={(e) => e.preventDefault()}>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Search Post"
          role="searchbox"
          required
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
        />
        <label htmlFor="floatingInput">Search Post</label>
      </div>
    </form>
  );
};

export default Search;
