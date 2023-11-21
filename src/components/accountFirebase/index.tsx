"use client";

import Api from "@/connections/api";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import facebookIcon from "../../assets/icons/facebook-icon.svg";
import googleIcon from "../../assets/icons/google-icon.svg";
import { auth } from "../../services/firebase";

export default function AccountFirebase() {
  const navegate = useRouter();

  async function googleSignIn(event: FormEvent) {
    event.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const providerData = result.user.providerData;

      const name = providerData[0].displayName;
      const uid = providerData[0].uid;

      if (!name || !uid) return console.log("problemas");

      await createAccount(name, uid);
    } catch (error) {
      console.log("forma de login indisponivel no momento");
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

  async function createAccount(name: string, uid: any) {
    try {
      const { data } = await Api.post("/account/external", {
        name,
        uid,
      });

      localStorage.setItem("token", data.token);

      const { data: profile } = await Api.get(`/profile/${data.user.id}`);

      if (profile) {
        return navegate.replace("/Home");
      }
      navegate.push("/access/Perfil");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <button onClick={googleSignIn} className="button-white-border-blue">
        <Image src={googleIcon} alt="icone do google" />
        <span>Continuar com Google</span>
      </button>
      <button onClick={facebookSignIn} className="button-white-border-blue">
        <Image src={facebookIcon} alt="icone do facebook" />
        <span>Continuar com Facebook</span>
      </button>
    </>
  );
}
