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
import HomeFooter from "@/components/HomeFooter";

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
        <Publication
          id={0}
          profileId={0}
          name={"emerson"}
          userName={""}
          photo={""}
          profileChecked={false}
          date={""}
          file={""}
          description={""}
          public_likes={0}
          public_comments={0}
        />
        {!modal && <PerfilUser />}
      </div>
      <HomeFooter />
    </div>
  );
}
