import styles from "./styles.module.scss";
import { useState } from "react";
import errorIcon from "../../assets/icons/error-icon.svg";
import checkIcon from "../../assets/icons/check.svg";
import Input from "../../components/Input";

export default function VerificationCode() {
  const [errors, setErrors] = useState("");
  const [code, setCode] = useState("");
  const [showImage, setShowImage] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {};

    if (!code) {
      newErrors.code = "O nome é obrigatório.";
    }

    setShowImage(true);
    setErrors(newErrors);
  }

  return (
    <div className={styles.container}>
      <div className={styles["recover-password"]}>
        <div className={styles["title"]}>
          <h1>Verificação</h1>
          <span>
            Insira o código de 4 dígitos que enviamos para o seu e-mail.
          </span>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className={styles["container-form"]}>
              <Input
                type="text"
                label="Código de 4 dígitos"
                name="code"
                placeholder="insira aqui o código "
                value={code}
                handleChange={(event) => setCode(event.target.value)}
                showImage={showImage}
                errorMessage={errors.name}
                iconSrc={errors.name ? errorIcon : checkIcon}
                alt={"ícone de verificação"}
              />
              <div className={styles["button"]}>
                <button type="submit">Enviar</button>
              </div>
            </div>
          </form>
        </div>
        <a className={styles["redirect"]}>
          Voltar para entrar com a minha conta
        </a>
        <div className={styles["span-bot"]}>
          <span>
            Você não recebeu o código?
            <a>Reenviar</a>
          </span>
        </div>
      </div>
    </div>
  );
}
