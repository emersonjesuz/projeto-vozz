import CheckBox from "@/components/CheckBox";
import AccountFirebase from "@/components/accountFirebase";
import ButtonSignUn from "@/components/buttonSignup";
import styles from "./styles.module.scss";

export default function SignUn() {
  return (
    <div className={styles.container}>
      <div className={styles["content-title"]}>
        <h1>
          Saiba o que está acontecendo na política brasileira e exerça a sua
          cidadania
        </h1>
      </div>
      <div className={styles["content-buttons"]}>
        <AccountFirebase />
        <div className={styles["line-or"]}>
          <div></div>
          <span>ou</span>
          <div></div>
        </div>
        <ButtonSignUn />
      </div>
      <div className={styles["content-info"]}>
        <div>
          <CheckBox />
          <p className={styles["info-term"]}>
            Ao se inscrever, você concorda com nossos<span> Termos</span>, a
            <span>Política de Privacidade</span> e o <span>Uso de Cookies</span>
            .
          </p>
        </div>
        <p className={styles["info-sign-in"]}>
          Já tem uma conta? <span>Entrar</span>
        </p>
      </div>
    </div>
  );
}
