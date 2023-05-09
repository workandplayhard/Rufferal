import React, { useState } from "react";

function SearchInput({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="searchInput">
      <input
        style={{ width: "90%", height: "30px", marginTop: "5px",textAlign:"left",borderRadius:8 }}
        className="SearchInput"
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search, items, collections, and accounts"
      />
      {/* <button type="submit">Search</button> */}
    </form>
  );
}

export default SearchInput;
