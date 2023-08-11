import React from 'react'
import { NavLink } from "react-router-dom";

// Styles
import styles from "./BannerHome.module.css"

// Components
import ShowFilm from './ShowFilm';

// Hooks
import { useFetchFilm } from "../hooks/useFetchFilm";

// Interface
import { Movies } from "../interfaces/Movies";

const BannerHome = () => {

  const { movies, loading } = useFetchFilm("MOVIES");

  return (
    <div className={`${styles.banner}`}>
      <div className={`${styles.logoShow} container`}>
        <div className={styles.logo}>
            <img src="/images/logo-banner-home.png" alt="Logo Stranger Things" />
        </div>
        <p>Em uma cidade pequena dos anos 80, quatro amigos se unem para encontrar um garoto desaparecido e descobrem segredos sombrios e um mundo paralelo assustador.
        </p>
        <div className={styles.btn}>
          <NavLink to="/home">
              <i className="bi bi-play-fill"></i>
              Assistir
          </NavLink>
          <NavLink>
              <i className="bi bi-info-circle"></i>
              Mais Informações
          </NavLink>
        </div>
      </div>
      <div>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <>
            <ShowFilm movies={movies!} loading={loading} titleSection="Principais buscas" />
            <ShowFilm movies={movies!} loading={loading} titleSection="Principais buscas" />
            <ShowFilm movies={movies!} loading={loading} titleSection="Principais buscas" />
          </>
        )}
      </div>
    </div>
  )
}

export default BannerHome