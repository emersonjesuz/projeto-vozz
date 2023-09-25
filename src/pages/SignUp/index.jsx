import { useState } from "react";
import styles from "./styles.module.scss";
import Perfil from "../../components/Perfil";

export default function SignUp() {

  const [openPerfil, setOpenPerfil] = useState(true)

  return (
    <div className={styles.container}>
      {openPerfil && <Perfil />}
    </div>
  );
}
