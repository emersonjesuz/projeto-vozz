"use client";
import styles from "./styles.module.scss";
import { FormEvent, useState } from "react";
import errorIcon from "../../../assets/icons/error-icon.svg";
import checkIcon from "../../../assets/icons/check.svg";

type NewError = {
  name: string;
  email: string;
  birthday: string;
  password: string;
};

export default function CheckPassword() {
  const [errors, setErrors] = useState<NewError>({
    name: "",
    email: "",
    birthday: "",
    password: "",
  });
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors: NewError = {
      name: "",
      email: "",
      birthday: "",
      password: "",
    };

    if (!email) {
      newErrors.email = "O email é obrigatório";
      setEmailValid(false);
    } else if (email.search(checkEmail) === -1) {
      newErrors.email = "Email inválido";
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }

    setErrors(newErrors);
  }

  return (
    <div className={styles.container}>
      <div className={styles["recover-password"]}>
        <div className={styles["title"]}>
          <h1>Esqueci minha senha</h1>
          <span>
            Está tudo bem! Insira o seu endereço de e-mail relacionado à sua
            conta, que te enviaremos um código de verificação.
          </span>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className={styles["container-form"]}>
              <label
                htmlFor="email"
                className={errors.email ? styles["error-label"] : ""}
              >
                E-mail
              </label>
              <div
                className={`${styles["input-wrapper"]} ${
                  errors.email ? styles["error-border"] : ""
                }`}
              >
                <input
                  name="email"
                  placeholder="insira seu e-mail"
                  type="text"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                {errors.email ? (
                  <img
                    className={styles["error-icon"]}
                    src={errorIcon}
                    alt="Erro"
                  />
                ) : emailValid ? (
                  <img
                    className={styles["check-icon"]}
                    src={checkIcon}
                    alt="OK"
                  />
                ) : null}
              </div>
              {errors.email && (
                <span className={styles["message-error"]}>{errors.email}</span>
              )}

              <button type="submit">Enviar código de verificação</button>
            </div>
          </form>

          <a className={styles["redirect"]}>
            Voltar para entrar com minha conta
          </a>
          <div className={styles["title"]}>
            <span>
              Ainda não tem uma conta?
              <a>Cadastre-se</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
