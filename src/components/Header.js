import Nav from "./Nav";
import "../styles/header.css";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Header = ({ title }) => {
  const { width } = useContext(DataContext);
  return (
    <header>
      {/* <h3 className="header text-center text-sm-start mb-0">{title}</h3> */}
      <div className="header d-flex justify-content-between align-items-center px-2">
        <span>{title}</span>
        <i
          className={`fa-solid ${
            width < 768
              ? "fa-mobile-screen"
              : width < 992
              ? "fa-tablet-screen-button"
              : "fa-display"
          }`}
        ></i>
      </div>
      <Nav />
    </header>
  );
};
Header.defaultProps = {
  title: "Social Media App",
};
export default Header;
