import { Dispatch, SetStateAction } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

type Props = {
  imagePerfil: string;
  titleText: string;
  secondText: string;
  buttonselect: boolean;
  setButtonSelect: Dispatch<SetStateAction<boolean>>;
  activateButton: (index: string) => void;
  chosenButton: string;
};

export default function CardPerfil({
  imagePerfil,
  titleText,
  secondText,
  buttonselect,
  setButtonSelect,
  activateButton,
  chosenButton,
}: Props) {
  const toggleButtonSelect = async () => {
    setButtonSelect(!buttonselect);
    activateButton(chosenButton);
  };

  return (
    <div className={styles["container-card-perfil"]}>
      <div className={styles["container-card-image"]}>
        <Image src={imagePerfil} alt="Icone Perfil" />
      </div>
      <div className={styles["container-text-perfil"]}>
        <h1>{titleText}</h1>
        <div className={styles["container-text-button"]}>
          <h2>{secondText}</h2>
          <div
            className={`${styles["btn-perfil"]} ${
              buttonselect ? styles["btn-perfil-atived"] : ""
            }`}
          >
            <div
              className={`${styles["btn-perfil-eclipse"]} ${
                buttonselect ? styles["left"] : "right"
              }`}
              onClick={toggleButtonSelect}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
