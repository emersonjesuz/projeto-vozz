import { useNavigate } from "react-router-dom";
import arrowLeftIcon from "../../assets/header/arrow-left-gray.svg";
import logoVozzImage from "../../assets/header/logo-vozz.svg";
import styles from "./styles.module.scss";
export default function Header() {
  const navegate = useNavigate();

  return (
    <header className={styles.conteiner} onClick={() => navegate(-1)}>
      <img
        className={styles["arrow-left"]}
        src={arrowLeftIcon}
        alt="seta para voltar"
      />
      <img className={styles.logo} src={logoVozzImage} alt="logo" />
    </header>
  );
}
