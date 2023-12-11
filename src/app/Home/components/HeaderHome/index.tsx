"use client";
import { useGlobalContext } from "@/contexts/ContextHome";
import Image from "next/image";
import Lupa from "../../assets/Home/Lupa.svg";
import Photo from "../../assets/Home/PhotoPerfil.svg";
import styles from "./styles.module.scss";

export default function HeaderHome() {
  const { setModal } = useGlobalContext();

  return (
    <div className={styles["headerHome"]}>
      <Image
        src={Photo}
        alt={"Foto de Perfil"}
        className={styles["photo"]}
        onClick={() => setModal(true)}
      />

      <h2>Home</h2>
      <Image src={Lupa} alt="Pesquisar" />
    </div>
  );
}
