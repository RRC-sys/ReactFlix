import React from 'react'

// Styles
import styles from "./Home.module.css";

// Components
import NavBar from "../../components/NavBar";
import BannerHome from '../../components/BannerHome';

const Home = () => {
  return (
    <div className={styles.home}>
      <div>
        <NavBar />
        <BannerHome />
      </div>
    </div>
  )
}

export default Home