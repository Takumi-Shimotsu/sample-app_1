import { useState } from "react";
import { GridTile } from "./GridTile";
import HomeIcon from "@mui/icons-material/Search";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect } from "react";

export function StateForm() {
  const [search, setSearch] = useState("");

  const handleForm = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const unlisten = () => {
      window.scrollTo({ top: 0 });
    };

    unlisten();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center mt-5">
          <label htmlFor="search" className="w-12 text-xl">
            <SearchIcon fontSize="large" />
          </label>
          <br />
          <input
            className="w-48 h-8 p-2 mr-10 border-2 border-blue-300"
            id="search"
            name="search"
            type="text"
            autoComplete="off"
            onChange={handleForm}
            value={search}
          />
        </div>

        {/*<p>お探しの商品は，「{search}」ですか？</p>*/}
      </form>

      <GridTile word={search} />
    </div>
  );
}
