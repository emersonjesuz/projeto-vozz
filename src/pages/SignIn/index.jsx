import styles from "./styles.module.scss";
import googleIcon from "../../assets/icons/google-icon.svg";
import facebookIcon from "../../assets/icons/facebook-icon.svg";
import { auth } from "../../services/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

export default function SignIn() {
  async function googleSignIn(event) {
    event.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  async function facebookSignIn(event) {
    event.preventDefault();

    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles["content-title"]}>
        <h1>
          Saiba o que está acontecendo na política brasileira e exerça a sua
          cidadania
        </h1>
      </div>
      <div className={styles["content-buttons"]}>
        <button onClick={googleSignIn} className="button-white-border-blue">
          <img src={googleIcon} alt="icone do google" />
          <span>Continuar com Google</span>
        </button>
        <button onClick={facebookSignIn} className="button-white-border-blue">
          <img src={facebookIcon} alt="icone do facebook" />
          <span>Continuar com Apple</span>
        </button>
        <div className={styles["line-or"]}>
          <div></div>
          <span>ou</span>
          <div></div>
        </div>
        <button className="button-blue">
          <span>Criar conta</span>
        </button>
      </div>
      <div className={styles["content-info"]}>
        <p className={styles["info-term"]}>
          Ao se inscrever, você concorda com nossos<span> Termos</span>, a{" "}
          <span>Política de Privacidade</span> e o <span>Uso de Cookies</span>.
        </p>
        <p className={styles["info-sign-in"]}>
          Já tem uma conta? <span>Entrar</span>
        </p>
      </div>
    </div>
  );
}
