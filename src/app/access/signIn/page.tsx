"use client";
import CheckBox from "@/components/CheckBox";
import AccountFirebase from "@/components/accountFirebase";
import Api from "@/connections/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import styles from "./styles.module.scss";

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navegate = useRouter();

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    try {
      const { data } = await Api.post("/login", {
        email,
        password,
      });

      localStorage.setItem("token", data.token);

      const { data: profile } = await Api.get(`/profile/${data.user.id}`);

      if (profile) {
        return navegate.replace("/Home");
      }

      navegate.replace("/access/Perfil");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles["content-title"]}>
        <h1>Entre com a sua conta</h1>
      </div>
      <form onSubmit={handleSubmit} className={styles["content-form"]}>
        <div className={styles["box-input"]}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            placeholder="insira seu e-mail"
            name="email"
            type="text"
            onChange={(event) => setEmail(event?.target.value)}
          />
        </div>
        <div className={styles["box-input"]}>
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            placeholder="insira sua senha"
            name="password"
            type="password"
            onChange={(event) => setPassword(event?.target.value)}
          />

          <Link href={"/"}>Esqueci minha senha</Link>
        </div>
        <button type="submit" className="button-blue">
          Entrar
        </button>
        <div className={styles.checkbox}>
          <CheckBox />
          <p className={styles["info-term"]}>Continuar conectado</p>
        </div>
      </form>

      <div className={styles["line-or"]}>
        <div></div>
        <span>ou</span>
        <div></div>
      </div>
      <div className={styles["content-buttons"]}>
        <AccountFirebase />
      </div>
      <div className={styles["content-info"]}>
        <p className={styles["info-sign-in"]}>
          Ainda não tem uma conta? <span>Cadastre-se </span>
        </p>
      </div>
    </div>
  );
}
