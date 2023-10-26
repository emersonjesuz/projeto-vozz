"use client";
import styles from "./styles.module.scss";
import logoAnimation from "../../assets/logos/logo-vozz-animation.gif";
import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function TransiationPage() {
  const navegate = useRouter();
  useEffect(() => {
    setTimeout(() => {
      navegate.push("/Onboarding");
    }, 3000);
  }, []);
  return (
    <div className={styles.container}>
      <Image src={logoAnimation} alt="logo" />
    </div>
  );
}
