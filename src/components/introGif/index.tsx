"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import logoWhiteImage from "../../assets/logos/logo-white-complete.svg";

export default function IntroGif() {
  const navegate = useRouter();
  useEffect(() => {
    setTimeout(() => {
      navegate.push("/transition");
    }, 2000);
  }, []);
  return <Image src={logoWhiteImage} alt={"logo"} />;
}
