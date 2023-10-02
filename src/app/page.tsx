"use client";

import { useEffect } from "react";
import Image from "next/image";
import logoWhiteImage from "../assets/logos/logo-white-complete.svg";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";

export default function OpeningPage() {
  const navegate = useRouter();
  useEffect(() => {
    navegate.prefetch("/Onboarding");
    setTimeout(() => {
      navegate.push("/transition");
    }, 2000);
  }, []);
  return (
    <div className={styles.container}>
      <Image src={logoWhiteImage} alt={"logo"} />
      <p>created by</p>
      <h4>G-11</h4>
    </div>
  );
}
