import styles from "./styles.module.scss";
import logoAnimation from "../../assets/logos/logo-vozz-animation.gif";
import { useEffect } from "react";
import { useNavigate } from "react-router";
export default function TransiationPage() {
  const navegate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navegate("/onboarding");
    }, 4000);
  }, []);
  return (
    <div className={styles.container}>
      <img src={logoAnimation} alt="logo" />
    </div>
  );
}
