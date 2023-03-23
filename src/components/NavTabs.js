import React from "react";
import"../App.css"

import { NavLink } from 'react-router-dom';

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
        }
      >
        Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="french"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          French
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="spanish"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Spanish
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="italian"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Italian
        </NavLink>
      </li>
    </ul>
  );
}


export default NavTabs;



