import { useState } from "react";

export const SearchForm = ({ setQuery }) => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    const getValue = event.target.value;

    setSearch(getValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(search);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={search}
        onChange={handleChange}
        placeholder="Please enter the book's name"
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};
