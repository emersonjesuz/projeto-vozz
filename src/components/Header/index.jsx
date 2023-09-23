import styles from "./styles.module.scss";
import logoVozzImage from "../../assets/header/logo-vozz.svg";
import arrowLeftIcon from "../../assets/header/arrow-left-gray.svg";

export default function Header() {
  return (
    <header className={styles.conteiner}>
      <img
        className={styles["arrow-left"]}
        src={arrowLeftIcon}
        alt="seta para voltar"
      />
      <img className={styles.logo} src={logoVozzImage} alt="logo" />
    </header>
  );
}
