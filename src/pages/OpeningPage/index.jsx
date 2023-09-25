import { useEffect } from "react";
import { useNavigate } from "react-router";
import logoWhiteImage from "../../assets/logos/logo-white-complete.svg";
import styles from "./styles.module.scss";
export default function OpeningPage() {
  const navegate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navegate("/transition");
      console.log("ola");
    }, 4000);
  }, []);
  return (
    <div className={styles.container}>
      <img src={logoWhiteImage} alt="logo" />
    </div>
  );
}
