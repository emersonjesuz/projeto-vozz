import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import checkboxChekedIcon from "../../assets/icons/checkbox-checked.svg";
import checkboxVoidIcon from "../../assets/icons/checkbox-void.svg";
import facebookIcon from "../../assets/icons/facebook-icon.svg";
import googleIcon from "../../assets/icons/google-icon.svg";
import { auth } from "../../services/firebase";
import styles from "./styles.module.scss";

export default function SignIn() {
  const [handleChekbox, setHandleCheckbox] = useState(false);

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
        <h1>Entre com a sua conta</h1>
      </div>
      <form className={styles["content-form"]}>
        <div className={styles["box-input"]}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            placeholder="insira seu e-mail"
            name="email"
            type="text"
          />
        </div>
        <div className={styles["box-input"]}>
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            placeholder="insira sua senha"
            name="password"
            type="text"
          />
          <Link>Esqueci minha senha</Link>
        </div>
        <button className="button-blue">
          <span>Entrar</span>
        </button>
        <div className={styles.checkbox}>
          <img
            onClick={() => setHandleCheckbox(!handleChekbox)}
            src={handleChekbox ? checkboxChekedIcon : checkboxVoidIcon}
            alt="checkbox"
          />
          <p className={styles["info-term"]}>Continuar conectado</p>
        </div>
      </form>

      <div className={styles["line-or"]}>
        <div></div>
        <span>ou</span>
        <div></div>
      </div>
      <div className={styles["content-buttons"]}>
        <button onClick={googleSignIn} className="button-white-border-blue">
          <img src={googleIcon} alt="icone do google" />
          <span>Continuar com Google</span>
        </button>
        <button onClick={facebookSignIn} className="button-white-border-blue">
          <img src={facebookIcon} alt="icone do facebook" />
          <span>Continuar com Facebook</span>
        </button>
      </div>
      <div className={styles["content-info"]}>
        <p className={styles["info-sign-in"]}>
          Ainda não tem uma conta? <span>Cadastre-se </span>
        </p>
      </div>
    </div>
  );
}
