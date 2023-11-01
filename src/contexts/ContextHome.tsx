'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

type DataType = {
    firstName: string
}

interface ContextProps {
    userId: string,
    setUserId: Dispatch<SetStateAction<string>>,
    /* data: DataType[],
    setData: Dispatch<SetStateAction<DataType[]>>, */
    modal: boolean,
    setModal: Dispatch<SetStateAction<boolean>>
}

const GlobalContext = createContext<ContextProps>({
    userId: '',
    setUserId: (): string => '',
    /* data: [],
    setData (): DataType[] => [], */
    modal: false,
    setModal: (): boolean => false
})

export const GlobalContextProvider = ({ children }) => {
    const [userId, setUserId] = useState('');
    const [modal, setModal] = useState(false);
    /* const [data, setData] = useState<[] | DataType[]>([]); */

    return (
        <GlobalContext.Provider value={{ userId, setUserId, modal, setModal }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);