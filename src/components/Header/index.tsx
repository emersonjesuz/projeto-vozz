"use client";
import Image from "next/image";
import arrowLeftIcon from "../../assets/header/arrow-left-gray.svg";
import logoVozzImage from "../../assets/header/logo-vozz.svg";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";
export default function Header() {
  const router = useRouter();
  return (
    <header className={styles.conteiner}>
      <Image
        className={styles["arrow-left"]}
        src={arrowLeftIcon}
        alt="seta para voltar"
        onClick={() => router.back()}
      />
      <Image className={styles.logo} src={logoVozzImage} alt="logo" />
    </header>
  );
}
