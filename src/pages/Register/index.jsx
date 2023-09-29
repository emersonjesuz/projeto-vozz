import { useState } from "react";
import checkIcon from "../../assets/icons/check.svg";
import errorIcon from "../../assets/icons/error-icon.svg";
import Input from "../../components/Input";
import styles from "./styles.module.scss";

function Register() {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    birthday: "",
    password: "",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");

  const [showImage, setShowImage] = useState(false);

  //não esquecer o async await
  const handleSubmit = (event) => {
    event.preventDefault();

    const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors = {};

    if (!name) {
      newErrors.name = "O nome é obrigatório";
    }

    if (!email || email.search(checkEmail) === -1) {
      newErrors.email = !email ? "O email é obrigatório" : "Email inválido";
    }

    if (!birthday) {
      newErrors.birthday = "A data de nascimento é obrigatória";
    }

    if (!password || password.length < 8) {
      newErrors.password = !password
        ? "Defina uma senha"
        : "A senha deve ter pelo menos 8 caracteres";
    }
    setShowImage(true);
    setErrors(newErrors);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles["title"]}>
          <h1>Criar sua conta</h1>
          <span>
            Primeira vez no Vozzz? Precisamos de alguns dados para criar sua
            conta e melhorar a sua experiência aqui.
          </span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles["form-register"]}>
            <Input
              type="text"
              label="Nome"
              name="name"
              placeholder="nome completo"
              value={name}
              handleChange={(event) => setName(event.target.value)}
              showImage={showImage}
              errorMessage={errors.name}
              iconSrc={errors.name ? errorIcon : checkIcon}
              alt={"ícone de verificação"}
            />
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
            <Input
              type="date"
              label="Data de nascimento"
              name="birthday"
              placeholder="DD/MM/AAAA"
              value={birthday}
              handleChange={(event) => setBirthday(event.target.value)}
              showImage={showImage}
              errorMessage={errors.birthday}
              iconSrc={errors.birthday ? errorIcon : checkIcon}
              alt={"ícone de erro"}
            />
            <div className={styles["eyes"]}></div>
            <Input
              type={"password"}
              label="Defina uma senha"
              name="password"
              placeholder="insira aqui sua senha"
              value={password}
              handleChange={(event) => setPassword(event.target.value)}
              showImage={showImage}
              errorMessage={errors.password}
              iconSrc={errors.password ? errorIcon : checkIcon}
              alt={"ícone de erro"}
            />

            <div>
              <button type="submit">Inscrever-se</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
