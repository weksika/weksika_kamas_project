import React from "react"
import { NavLink } from "react-router-dom";
import c from './nav.module.css';

const Nav = () => {
    return(
        <nav className={c.nav}>
          <div className={c.item}> 
            <NavLink to="/profile" className={isActive => (isActive.isActive ? `${c.active}` : "")}>Profile</NavLink>
          </div>
          <div className={c.item}>           
            <NavLink to="/dialogs" className={isActive => (isActive.isActive  ? `${c.active}` : "")}>Messages</NavLink>
          </div>
          <div className={c.item}>
          <NavLink to="/users" className={isActive => (isActive.isActive  ? `${c.active}` : "")}>Users</NavLink>
          </div>
          <div className={c.item}>
            <a>News</a>
          </div>
          <div className={c.item}>
            <a>Music</a>
          </div>
          <div className={c.item}>
            <a>Settings</a>
          </div>
  </nav>
        
    )
}

export default Nav;