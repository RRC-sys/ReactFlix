import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";

// Styles
import styles from "./NavBar.module.css";


const NavBar = () => {

  const [headerColor, setHeaderColor] = useState<boolean>(false);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setHeaderColor(true)
    } else {
      setHeaderColor(false)
    }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  },[])

  return (
    <nav className={`${styles.header} ${headerColor ? styles.scrolled : ""}`}>
        <div className="container">
          <div className={styles.options}>
            <ul>
              <li>
                <NavLink to="/">
                  <img src="/images/netflix-logo.png" alt="Logo Netflix" />
                </NavLink>
              </li>
              <li>
               <NavLink className={styles.menuPhone} to="/">
                  Navegar
                  <i className="bi bi-caret-down-fill"></i>
                </NavLink>
              </li>
              <li>
                <NavLink to="/home" className={({isActive}: {isActive : boolean}) => (isActive ? styles.active : "")}>Início</NavLink>
              </li>
              <li>
                <NavLink to="/series">Série</NavLink>
              </li>
              <li>
                <NavLink to="/filmes">Filmes</NavLink>
              </li>
              <li>
                <NavLink to="/bombando">Bombando</NavLink>
              </li>
              <li>
                <NavLink to="/lista">Minha lista</NavLink>
              </li>
              <li>
                <NavLink to="/idiomas">Navegar por idiomas</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <NavLink to="/search">
                  <i className="bi bi-search"></i>
                </NavLink>
              </li>
              <li>
                <NavLink to="/profile">Infantil</NavLink>
              </li>
              <li>
                <NavLink to="/bell">
                  <i className="bi bi-bell"></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
    </nav>
  )
}

export default NavBar