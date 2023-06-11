import React, { useContext } from "react";
import Search from "./Search";
import NavLinks from "./NavLinks";
import "../styles/nav.css";
import DataContext from "../context/DataContext";

const Nav = () => {
  const { searchInput, setSearchInput } = useContext(DataContext);
  return (
    <nav className="w-100 justify-content-center justify-content-sm-between">
      <div className="row w-100">
        <div className="col-12 col-sm-5">
          <Search searchInput={searchInput} setSearchInput={setSearchInput} />
        </div>
        <div className="col-12 col-sm-7 d-sm-flex">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
