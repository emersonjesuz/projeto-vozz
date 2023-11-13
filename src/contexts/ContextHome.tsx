"use client";

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

type DataType = {
  firstName: string;
};

interface ContextProps {
  userId: string;
  setUserId: Dispatch<SetStateAction<string>>;
  /* data: DataType[],
    setData: Dispatch<SetStateAction<DataType[]>>, */
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  handleChekbox: boolean;
  setHandleChekbox: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<ContextProps>({
  userId: "",
  setUserId: (): string => "",
  /* data: [],
    setData (): DataType[] => [], */
  modal: false,
  setModal: (): boolean => false,
  handleChekbox: false,
  setHandleChekbox: (): boolean => false,
});

export const GlobalContextProvider = ({ children }: Props) => {
  const [userId, setUserId] = useState("");
  const [modal, setModal] = useState(false);
  const [handleChekbox, setHandleChekbox] = useState<boolean>(false);
  /* const [data, setData] = useState<[] | DataType[]>([]); */

  const props = {
    handleChekbox,
    setHandleChekbox,
    userId,
    setUserId,
    modal,
    setModal,
  };

  return (
    <GlobalContext.Provider value={props}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
