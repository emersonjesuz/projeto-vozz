"use client";
import PerfilUser from "../../components/PerfilUser/index";
import Publication from "@/components/Publication";
import Image from "next/image";
import { useState } from "react";
import Arrow from "../../assets/Home/Arrow.svg";
import Can from "../../assets/Home/Can.svg";
import Student from "../../assets/Home/Icone_Aprender Off.svg";
import Ativ from "../../assets/Home/Icone_Atividades Off.svg";
import Conver from "../../assets/Home/Icone_Conversas Off.svg";
import IconHome from "../../assets/Home/Icone_Home On.svg";
import Particip from "../../assets/Home/Icone_Participar Off.svg";
import Pincel from "../../assets/Home/Pincel.svg";
import Clip from "../../assets/Home/clip.svg";
import styles from "./styles.module.scss";
import { useGlobalContext } from "@/contexts/ContextHome";

export default function HomePage() {
  const { modal } = useGlobalContext();
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <div className={styles["containerHome"]}>
      <nav>
        <h4 className={styles["select"]}>em alta</h4>
        <h4>educação</h4>
        <h4>gênero</h4>
        <h4>ambiental</h4>
      </nav>
      <div className={styles["containerMain"]}>
        <div className={styles["publication"]}>
          <label>Criar nova publicação</label>
          {/* <textarea cols="30" rows="5" wrap='harp'></textarea> */}
          <input
            type="text"
            placeholder={`${isInputFocused ? "" : "escrever..."}`}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            className={styles[isInputFocused ? "selectedInput" : ""]}
          />
          {isInputFocused ? null : (
            <Image
              src={Pincel}
              alt="Caneta"
              className={styles["imagePincel"]}
            />
          )}
          <div
            className={`${styles.containerButtonPublication} ${
              isInputFocused ? styles.selected : ""
            }`}
          >
            <button>
              <Image src={Clip} alt="Clip" />
            </button>
            <button>
              <Image src={Can} alt="Camera" />
            </button>
            <button className={styles["btnPublic"]}>
              <Image src={Arrow} alt="Seta" />
            </button>
          </div>
        </div>
        {/* Fazer disso abaixo um componente */}
        <Publication />
        {modal && <PerfilUser />}
      </div>
      <div className={styles["footerHome"]}>
        <div className={styles["select"]}>
          <Image src={IconHome} alt="Home" />
        </div>
        <div>
          <Image src={Student} alt="Aprender" />
          <h4>Aprender</h4>
        </div>
        <div>
          <Image src={Particip} alt="Participar" />
          <h4>Participar</h4>
        </div>
        <div>
          <Image src={Ativ} alt="Atividades" />
          <h4>Atividades</h4>
        </div>
        <div>
          <Image src={Conver} alt="Conversas" />
          <h4>Conversas</h4>
        </div>
      </div>
    </div>
  );
}
