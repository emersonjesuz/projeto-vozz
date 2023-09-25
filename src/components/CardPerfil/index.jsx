import { useState } from "react";
import styles from "./styles.module.scss";


export default function CardPerfil({ imagePerfil, titleText, secondText }) {

  const [activatedPersonality, setActivatedPersonality] = useState(true)

  const toggleBtnPersonality = () => {
    setActivatedPersonality(!activatedPersonality)
  }

  return (
    <div className={styles["container-card-perfil"]}>
      <div className={styles["container-card-image"]}>
        {imagePerfil}
      </div>
      <div className={styles["container-text-perfil"]}>
        <h1>{titleText}</h1>
        <h2>{secondText}</h2>
      </div>
      <div className={`${styles["btn-perfil"]} ${activatedPersonality ? styles["btn-perfil-atived"] : ""}`}>
        <div className={`${styles["btn-perfil-eclipse"]} ${activatedPersonality ? styles["left"] : "right"}`} onClick={toggleBtnPersonality}></div>
      </div>
    </div >
  );
}
