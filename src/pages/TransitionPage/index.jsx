import styles from "./styles.module.scss";
import logoWhiteImage from "../../assets/logos/logo-white-complete.svg";
import { useEffect } from "react";
import { useNavigate } from "react-router";
export default function TransiationPage() {
  const navegate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navegate("/access/sign-in");
      console.log("ola2222");
    }, 4000);
  }, []);
  return (
    <div className={styles.container}>
      <img src={logoWhiteImage} alt="logo" />
    </div>
  );
}
