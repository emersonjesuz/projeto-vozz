"use client";
import Image from "next/image";
import checkboxChekedIcon from "../../assets/icons/checkbox-checked.svg";
import checkboxVoidIcon from "../../assets/icons/checkbox-void.svg";
import { useGlobalContext } from "@/contexts/ContextHome";

export default function CheckBox() {
  const { handleChekbox, setHandleChekbox } = useGlobalContext();

  return (
    <Image
      onClick={() => setHandleChekbox(!handleChekbox)}
      src={handleChekbox ? checkboxChekedIcon : checkboxVoidIcon}
      alt="checkbox"
    />
  );
}
