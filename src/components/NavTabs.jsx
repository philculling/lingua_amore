import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => props.handlePageChange("Home")}
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#French"
          onClick={() => props.handlePageChange("French")}
          className={props.currentPage === "French" ? "nav-link active" : "nav-link"}
        >
          French
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Spanish"
          onClick={() => props.handlePageChange("Spanish")}
          className={props.currentPage === "Spanish" ? "nav-link active" : "nav-link"}
        >
          Spanish
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Italian"
          onClick={() => props.handlePageChange("Italian")}
          className={props.currentPage === "Italian" ? "nav-link active" : "nav-link"}
        >
          Italian
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
