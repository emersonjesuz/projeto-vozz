"use client";
import { FormEvent } from "react";
import styles from "./styles.module.scss";
import ButtonInterests from "@/components/ButtonInterests";
import { useRouter } from "next/navigation";

export default function Interests() {
  const navegate = useRouter();

  function handleSubmitToInterests(event: FormEvent) {
    event.preventDefault();
    navegate.push("/Home");
  }

  return (
    <div className={styles["container-interests"]}>
      <div className={styles["container-interests-title"]}>
        <h1>Selecione os seus interesses</h1>
        <h2>Obtenha recomendações personalizadas sobre as pautas políticas que mais lhe interessam.</h2>
      </div>
      <div className={styles["container-interests-btn"]}>
        <div className={styles["container-btn"]}>
          <ButtonInterests text="saúde" />
          <ButtonInterests text="igualdade racial" />
        </div>
        <div className={styles["container-btn"]}>
          <ButtonInterests text="gênero e diversidade" />
          <ButtonInterests text="educação" />
        </div>
        <div className={styles["container-btn"]}>
          <ButtonInterests text="meio ambiente" />
          <ButtonInterests text="direitos humanos e justiça" />
        </div>
        <div className={styles["container-btn"]}>
          <ButtonInterests text="povos originários e indígenas" />
          <ButtonInterests text="cultura" />
        </div>
        <div className={styles["container-btn"]}>
          <ButtonInterests text="direito das mulheres" />
          <ButtonInterests text="economia e trabalho" />
        </div>
        <div className={styles["container-btn"]}>
          <ButtonInterests text="ciência e tecnologia" />
        </div>
      </div>
      <button className={styles["btn"]}>Avançar</button>
      <h2 className={styles["next"]} onClick={handleSubmitToInterests}>Pular</h2>
    </div>
  );
}
