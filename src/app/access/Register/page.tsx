"use client";
import { FormEvent, useState } from "react";
import checkIcon from "../../../assets/icons/check.svg";
import errorIcon from "../../../assets/icons/error-icon.svg";
import Input from "../../../components/Input";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";
import Api from "@/connections/api";

type NewError = {
  name: string;
  email: string;
  birthday: string;
  password: string;
  code?: string;
};

type UserType = {
  name: string;
  email: string | null;
  birthday: string;
  password: string | null;
  actived: boolean;
  delete: boolean;
  uid: string | null;
};

function Register() {
  const navegate = useRouter();
  const [errors, setErrors] = useState<NewError>({
    name: "",
    email: "",
    birthday: "",
    password: "",
    // code: "",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");
  const [showImage, setShowImage] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors: NewError = {
      name: "",
      email: "",
      birthday: "",
      password: "",
    };

    try {
      if (!name) {
        newErrors.name = "O nome é obrigatório.";
        return;
      }

      if (!email || email.search(checkEmail) === -1) {
        newErrors.email = !email
          ? "O email é obrigatório."
          : "Confira se você digitou corretamente.";
        return;
      }

      if (!birthday) {
        newErrors.birthday = "A data de nascimento é obrigatória.";
        return;
      }

      if (!password || password.length < 8) {
        newErrors.password = !password
          ? "Digite uma senha."
          : "Deve conter pelo menos 8 caracteres.";
        return;
      }
      setShowImage(true);
      setErrors(newErrors);

      const { data } = await Api.post("/create", {
        name,
        email,
        birth: birthday,
        password,
      });

      const userId = { id: data.id };
      localStorage.setItem("userInfo", JSON.stringify(userId));

      navegate.push("/access/signIn");
    } catch (error: any) {
      setErrors(newErrors);
    }
  }

  return (
    <div>
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
            />
            <div className={styles["button"]}>
              <button className="button-blue" type="submit">
                Cadastrar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
