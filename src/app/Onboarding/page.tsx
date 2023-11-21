"use client";
import { screens } from "@/helpers/screens";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import BtnReturnGray from "../../assets/header/arrow-left-gray.svg";
import BtnForward from "../../assets/onboarding/btn-forward.svg";
import BtnReturn from "../../assets/onboarding/btn-return.svg";
import styles from "./styles.module.scss";
import { getItem } from "@/utils/storage";

type Screen = {
  image: string;
  title: string;
  span: string;
  elipse1?: string;
  elipse2?: string;
  elipse3?: string;
};

export default function Onboarding() {
  const [screen, setScreen] = useState<Screen>(screens.screen1);
  const navegate = useRouter();

  function forwardScreen(event: FormEvent) {
    event.preventDefault();

    switch (screen) {
      case screens.screen1:
        setScreen(screens.screen2);
        break;
      case screens.screen2:
        setScreen(screens.screen3);
        break;
      case screens.screen3:
        setScreen(screens.screen4);
        break;
      default:
        break;
    }
  }
  function returnScreen(event: FormEvent) {
    event.preventDefault();

    switch (screen) {
      case screens.screen4:
        setScreen(screens.screen3);
        break;
      case screens.screen3:
        setScreen(screens.screen2);
        break;
      case screens.screen2:
        setScreen(screens.screen1);
        break;
      default:
        break;
    }
  }
  function navigateToSingIn(event: FormEvent) {
    event.preventDefault();
    navegate.push("/access/signIn");
  }
  function navigateToSingUp(event: FormEvent) {
    event.preventDefault();
    navegate.push("/access/SignUp");
  }

  useEffect(() => {
    const storege = getItem("isLogin");
    const historic: boolean = JSON.parse(storege ?? "false");
    setScreen(historic ? screens.screen4 : screens.screen1);
  }, []);

  return (
    <div className={styles.container_page}>
      {screen === screens.screen4 ? (
        <Image
          src={BtnReturnGray}
          alt="return"
          className={styles["return_"]}
          onClick={returnScreen}
        />
      ) : null}
      <div className={styles.up}>
        <Image
          src={screen.image}
          alt="image"
          className={`${
            screen === screens.screen4 ? styles["image_logo"] : ""
          }`}
        />
      </div>
      <div className={styles.down}>
        <h1 className={styles["content-title"]}>{screen.title}</h1>
        <span className={styles["content-span"]}>{screen.span}</span>
        {screen !== screens.screen4 ? (
          <footer className={styles["footer"]}>
            {screen !== screens.screen1 ? (
              <button className={styles.btn_return} onClick={returnScreen}>
                <Image src={BtnReturn} alt="btn-return" />
              </button>
            ) : null}
            <div className={styles["progress"]}>
              <Image
                src={screen.elipse1!}
                className={styles["elipse"]}
                alt={""}
              />
              <Image
                src={screen.elipse2!}
                className={styles["elipse"]}
                alt={""}
              />
              <Image
                src={screen.elipse3!}
                className={styles["elipse"]}
                alt={""}
              />
            </div>
            <button className={styles.btn_forward} onClick={forwardScreen}>
              <Image src={BtnForward} alt="btn-forward" />
            </button>
          </footer>
        ) : (
          <div className={styles["buttons"]}>
            <button className="button-blue" onClick={navigateToSingUp}>
              Criar uma Conta
            </button>
            <button
              className="button-white-border-blue"
              onClick={navigateToSingIn}
            >
              Entrar
            </button>
            <Link href="">Talvez mais tarde</Link>
          </div>
        )}
      </div>
    </div>
  );
}
