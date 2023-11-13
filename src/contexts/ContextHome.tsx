"use client";

import { Feed } from "@/types/FeedTypes";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface Props {
  children: React.ReactNode;
}

interface ContextProps {
  userId: string;
  setUserId: Dispatch<SetStateAction<string>>;
  data: Feed[];
  setData: Dispatch<SetStateAction<Feed[]>>;
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  handleChekbox: boolean;
  setHandleChekbox: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<ContextProps>({
  userId: "",
  setUserId: (): string => "",
  data: [],
  setData: (): Feed[] => [],
  modal: false,
  setModal: (): boolean => false,
  handleChekbox: false,
  setHandleChekbox: (): boolean => false,
});

export const GlobalContextProvider = ({ children }: Props) => {
  const [userId, setUserId] = useState("");
  const [modal, setModal] = useState(false);
  const [data, setData] = useState<[] | Feed[]>([]);
  const [handleChekbox, setHandleChekbox] = useState<boolean>(false);

  const props = {
    userId,
    setUserId,
    modal,
    setModal,
    data,
    setData,
    handleChekbox,
    setHandleChekbox,
  };

  return (
    <GlobalContext.Provider value={props}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
