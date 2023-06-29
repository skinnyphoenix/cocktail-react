import React from "react";
import "./Search.css";
import { useState, useEffect } from "react";

const Search = ({ inputValue, setInputValue }) => {
  const [listData, setListData] = useState([]);

  return (
    <>
      <div className="Wrapper">
        <form action="">
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Inserisci qui il drink desiderato" />
        </form>
      </div>
    </>
  );
};

export default Search;
