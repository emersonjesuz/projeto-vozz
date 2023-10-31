"use client";

import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { auth } from "../../../services/firebase";
import checkboxChekedIcon from "../../../assets/icons/checkbox-checked.svg";
import checkboxVoidIcon from "../../../assets/icons/checkbox-void.svg";
import facebookIcon from "../../../assets/icons/facebook-icon.svg";
import googleIcon from "../../../assets/icons/google-icon.svg";
import styles from "./styles.module.scss";
import Image from "next/image";
import Api from "@/connections/api";

export default function SignUn() {
  const [handleChekbox, setHandleCheckbox] = useState(false);
  const navegate = useRouter();

  async function googleSignIn(event: FormEvent) {
    event.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const providerData = result.user.providerData;

      if (!providerData.length) return console.log("problemas");
      // melhorias a fazer
      await createAccount(providerData[0].displayName, providerData[0].uid);
      navegate.push("/access/Perfil");
    } catch (error) {
      console.log(error);
      console.log("forma de login indisponivel no momento");
    }
  }
  async function facebookSignIn(event: FormEvent) {
    event.preventDefault();

    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);

      console.log(result);
      navegate.push("/access/Perfil");
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmitToRegister(event: FormEvent) {
    event.preventDefault();
    if (handleChekbox) {
      navegate.push("/access/Register");
    }
  }

  async function createAccount(name: string, uid: any) {
    const { data } = await Api.post("/account/external", {
      name,
      uid,
    });

    console.log(data);
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
          <Image src={googleIcon} alt="icone do google" />
          <span>Continuar com Google</span>
        </button>
        <button onClick={facebookSignIn} className="button-white-border-blue">
          <Image src={facebookIcon} alt="icone do facebook" />
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
          <Image
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
