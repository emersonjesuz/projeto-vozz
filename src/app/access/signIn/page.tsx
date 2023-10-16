"use client";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import checkboxChekedIcon from "../../../assets/icons/checkbox-checked.svg";
import checkboxVoidIcon from "../../../assets/icons/checkbox-void.svg";
import facebookIcon from "../../../assets/icons/facebook-icon.svg";
import googleIcon from "../../../assets/icons/google-icon.svg";
import { auth } from "../../../services/firebase";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [handleChekbox, setHandleCheckbox] = useState(false);
  const navegate = useRouter();

  async function googleSignIn(event: FormEvent) {
    event.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  async function facebookSignIn(event: FormEvent) {
    event.preventDefault();

    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    navegate.push("/access/Perfil");
    console.log("ola");
  }

  return (
    <div className={styles.container}>
      <div className={styles["content-title"]}>
        <h1>Entre com a sua conta</h1>
      </div>
      <form onChange={handleSubmit} className={styles["content-form"]}>
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
          <Link href={"/"}>Esqueci minha senha</Link>
        </div>
        <button onClick={handleSubmit} className="button-blue">
          Entrar
        </button>
        <div className={styles.checkbox}>
          <Image
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
          <Image src={googleIcon} alt="icone do google" />
          <span>Continuar com Google</span>
        </button>
        <button onClick={facebookSignIn} className="button-white-border-blue">
          <Image src={facebookIcon} alt="icone do facebook" />
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
