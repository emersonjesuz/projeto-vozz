"use client";
import { FormEvent, useState } from "react";
import styles from "./styles.module.scss";
import ButtonInterests from "@/components/ButtonInterests";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { InterestTypes } from "@/types/InterestsTypes";
import { listInterests } from "@/helpers/listInterests";
import Api from "@/connections/api";

export default function Interests() {
  const [interests, setInterests] = useState<InterestTypes[]>(listInterests);
  const navegate = useRouter();

  async function handleSubmitToInterests(event: FormEvent) {
    event.preventDefault();
    const storage = localStorage.getItem("userInfo");
    if (!storage) return;

    const idProfile = JSON.parse(storage).id;

    const list: string[] = [];

    try {
      interests.forEach(({ actived, text }) => {
        if (actived) {
          return list.push(text);
        }
      });

      await Api.put(`/profile/update/${idProfile}`, {
        interests: list,
      });

      console.log(list);
    } catch (error) {
      console.log(error);
    }
    navegate.push("/Home/HomePage");
  }

  return (
    <div className={styles["container-interests"]}>
      <div className={styles["container-interests-title"]}>
        <h1>Selecione os seus interesses</h1>
        <h2>
          Obtenha recomendações personalizadas sobre as pautas políticas que
          mais lhe interessam.
        </h2>
      </div>
      <div className={styles["container-interests-btn"]}>
        <div className={styles["container-btn"]}>
          <ButtonInterests
            setInterests={setInterests}
            interests={interests}
            text="saúde"
          />
          <ButtonInterests
            setInterests={setInterests}
            interests={interests}
            text="igualdade racial"
          />
        </div>
        <div className={styles["container-btn"]}>
          <ButtonInterests
            setInterests={setInterests}
            interests={interests}
            text="gênero e diversidade"
          />
          <ButtonInterests
            setInterests={setInterests}
            interests={interests}
            text="educação"
          />
        </div>
        <div className={styles["container-btn"]}>
          <ButtonInterests
            setInterests={setInterests}
            interests={interests}
            text="meio ambiente"
          />
          <ButtonInterests
            setInterests={setInterests}
            interests={interests}
            text="direitos humanos e justiça"
          />
        </div>
        <div className={styles["container-btn"]}>
          <ButtonInterests
            setInterests={setInterests}
            interests={interests}
            text="povos originários e indígenas"
          />
          <ButtonInterests
            setInterests={setInterests}
            interests={interests}
            text="cultura"
          />
        </div>
        <div className={styles["container-btn"]}>
          <ButtonInterests
            setInterests={setInterests}
            interests={interests}
            text="direito das mulheres"
          />
          <ButtonInterests
            setInterests={setInterests}
            interests={interests}
            text="economia e trabalho"
          />
        </div>
        <div className={styles["container-btn"]}>
          <ButtonInterests
            setInterests={setInterests}
            interests={interests}
            text="ciência e tecnologia"
          />
        </div>
      </div>
      <button
        type="button"
        onClick={handleSubmitToInterests}
        className={styles["btn"]}
      >
        Avançar
      </button>
      <Link href={"/HomePage"} className={styles["next"]}>
        Pular
      </Link>
    </div>
  );
}
