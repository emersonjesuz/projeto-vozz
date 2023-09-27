import styles from "./styles.module.scss";


export default function CardPerfil({ imagePerfil, titleText, secondText, buttonselect, setButtonSelect, activateButton, chosenButton }) {

  const toggleButtonSelect = async () => {
    setButtonSelect(!buttonselect)
    activateButton(chosenButton)
  }

  return (
    <div className={styles["container-card-perfil"]}>
      <div className={styles["container-card-image"]}>
        <img src={imagePerfil} alt="Icone Perfil" />
      </div>
      <div className={styles["container-text-perfil"]}>
        <h1>{titleText}</h1>
        <div className={styles["container-text-button"]}>
          <h2>{secondText}</h2>
          <div className={`${styles["btn-perfil"]} ${buttonselect ? styles["btn-perfil-atived"] : ""}`}>
            <div className={`${styles["btn-perfil-eclipse"]} ${buttonselect ? styles["left"] : "right"}`} onClick={toggleButtonSelect}></div>
          </div>
        </div>
      </div>
    </div >
  );
}
