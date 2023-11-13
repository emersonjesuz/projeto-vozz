"use client";
import { useGlobalContext } from "@/contexts/ContextHome";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function ButtonSignUn() {
  const { handleChekbox } = useGlobalContext();
  const navegate = useRouter();

  function handleSubmitToRegister(event: FormEvent) {
    event.preventDefault();
    if (handleChekbox) {
      navegate.push("/access/Register");
    }
  }

  return (
    <button
      type="button"
      onClick={handleSubmitToRegister}
      className="button-blue"
    >
      <span>Cadastrar com e-mail e senha</span>
    </button>
  );
}
