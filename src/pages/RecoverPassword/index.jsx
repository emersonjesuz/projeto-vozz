import styles from "./styles.module.scss";
import { useState } from "react";
import errorIcon from "../../assets/icons/error-icon.svg";
import checkIcon from "../../assets/icons/check.svg";
import Input from "../../components/Input";

export default function RecoverPassword() {
  const [errors, setErrors] = useState("");
  const [email, setEmail] = useState("");
  const [showImage, setShowImage] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors = {};

    if (!email || email.search(checkEmail) === -1) {
      newErrors.email = !email ? "O email é obrigatório" : "Email inválido";
    }
    setShowImage(true);
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
              <Input
                type="text"
                label="E-mail"
                name="email"
                placeholder="e-mail"
                value={email}
                handleChange={(event) => setEmail(event.target.value)}
                showImage={showImage}
                errorMessage={errors.email}
                iconSrc={errors.email ? errorIcon : checkIcon}
                alt={"ícone de erro"}
              />
              <div className={styles["button"]}>
                <button type="submit">Enviar código de verificação</button>
              </div>
            </div>
          </form>
        </div>
        <a className={styles["redirect"]}>
          Voltar para entrar com a minha conta
        </a>
        <div className={styles["span-bot"]}>
          <span>
            Ainda não tem uma conta?
            <a>Cadastre-se</a>
          </span>
        </div>
      </div>
    </div>
  );
}
