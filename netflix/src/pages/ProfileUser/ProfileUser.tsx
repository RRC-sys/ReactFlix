import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

// Interface
import { Profile } from "../../interfaces/Profile";

// Styles
import styles from "./ProfileUser.module.css";


const ProfileUser = () => {

    const navigate = useNavigate();

    const profileUsers: Profile[] = [
        {
            id: 1,
            linkPhoto: "/images/profile-blue.jpg",
            userName: "Rubio"
        },
        {
            id: 2,
            linkPhoto: "/images/profile-green.png",
            userName: "Infantil"
        },
        {
            id: 3,
            linkPhoto: "/images/profile-red.png",
            userName: "Para ver juntos"
        },
        {
            id: 4,
            linkPhoto: "/images/add-profile.png",
            userName: "Adicionar perfil"
        },
    ]

  return (
    <div className={styles.profileUser}>
        <h1>Quem está assistindo?</h1>
        <div className={styles.profile}>
            {profileUsers && profileUsers.map((profileUser) => (
                <NavLink to="/home">
                    <div key={profileUser.id}>
                        <img src={profileUser.linkPhoto} alt={profileUser.userName} className={profileUser.userName === "Adicionar perfil" ? styles.addProfile : "" }/>
                        <h4>{profileUser.userName}</h4>
                    </div>
                </NavLink>
            ))}
        </div>
        <button onClick={() => navigate("/home")}>Gerenciar perfis</button>
    </div>
  )
}

export default ProfileUser