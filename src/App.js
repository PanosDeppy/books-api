import { Banner } from "./components/Banner";
import { SearchForm } from "./components/SearchForm";
import { Results } from "./components/Results";
import { useEffect, useState } from "react";
import axios from "axios";

export const App = () => {
  const [query, setQuery] = useState();
  const [books, setBooks] = useState();

  useEffect(() => {
    if (query) {
      const fetchData = async () => {
        try {
          const { data } = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${query}`
          );
          setBooks(data.items);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }
  }, [query]);

  return (
    <div>
      <Banner />
      <SearchForm setQuery={setQuery} />
      {books && <Results books={books} />}
    </div>
  );
};
