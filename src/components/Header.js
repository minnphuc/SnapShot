import React, { useRef } from "react";

import searchIcon from "../images/search.svg";
import classes from "./Header.module.css";

function Header(props) {
  const inputQuery = useRef();

  const submitHandler = e => {
    e.preventDefault();

    const query = inputQuery.current.value;

    props.onSearch(query);

    inputQuery.current.value = "";
  };

  const clickHandler = e => {
    const btn = e.target.closest("button");

    if (!btn) return;

    const content = btn.textContent.toLowerCase();

    props.onSearch(content);
  };

  return (
    <header className={classes.header}>
      <h1>SnapShot</h1>

      <form className={classes["search-bar"]} onSubmit={submitHandler}>
        <input type="text" placeholder="Search..." ref={inputQuery} />
        <button type="submit">
          <img src={searchIcon} alt="search" />
        </button>
      </form>

      <div className={classes.actions} onClick={clickHandler}>
        <button>Mountain</button>
        <button>Beaches</button>
        <button>Birds</button>
        <button>Food</button>
      </div>
    </header>
  );
}
export default Header;
