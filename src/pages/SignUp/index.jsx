import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";
import checkboxChekedIcon from "../../assets/icons/checkbox-checked.svg";
import checkboxVoidIcon from "../../assets/icons/checkbox-void.svg";
import facebookIcon from "../../assets/icons/facebook-icon.svg";
import googleIcon from "../../assets/icons/google-icon.svg";
import { auth } from "../../services/firebase";
import styles from "./styles.module.scss";
import useDataNavegate from "../../hooks/useDataNavegate/useDataNavegate";
import { useNavigate } from "react-router-dom";

export default function SignUn() {
  const [handleChekbox, setHandleCheckbox] = useState(false);
  const { fillingNavegate } = useDataNavegate();
  const navegate = useNavigate();

  useEffect(() => {
    fillingNavegate("/onboarding");
  }, []);

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

  function handleSubmitToRegister(event) {
    event.preventDefault();
    if (handleChekbox) {
      navegate("/acess/register");
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
          <span>Continuar com Facebook</span>
        </button>
        <div className={styles["line-or"]}>
          <div></div>
          <span>ou</span>
          <div></div>
        </div>
        <button
          type="button"
          onClick={handleSubmitToRegister}
          className="button-blue"
        >
          <span>Cadastrar com e-mail e senha</span>
        </button>
      </div>
      <div className={styles["content-info"]}>
        <div>
          <img
            onClick={() => setHandleCheckbox(!handleChekbox)}
            src={handleChekbox ? checkboxChekedIcon : checkboxVoidIcon}
            alt="checkbox"
          />
          <p className={styles["info-term"]}>
            Ao se inscrever, você concorda com nossos<span> Termos</span>, a{" "}
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
