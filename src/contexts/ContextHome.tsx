'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

type DataType = {
    firstName: string
}

type Feed = {
    id: number
    profileId: number
    name: string
    userName: string
    photo: string
    profileChecked: boolean
    date: string
    file: string
    description: string
    public_likes: number
    public_comments: number
}

interface ContextProps {
    userId: string,
    setUserId: Dispatch<SetStateAction<string>>,
    data: Feed[],
    setData: Dispatch<SetStateAction<Feed[]>>,
    modal: boolean,
    setModal: Dispatch<SetStateAction<boolean>>
}

const GlobalContext = createContext<ContextProps>({
    userId: '',
    setUserId: (): string => '',
    data: [],
    setData: (): Feed[] => [],
    modal: false,
    setModal: (): boolean => false
})

export const GlobalContextProvider = ({ children }) => {
    const [userId, setUserId] = useState('');
    const [modal, setModal] = useState(false);
    const [data, setData] = useState<[] | Feed[]>([]);

    return (
        <GlobalContext.Provider value={{ userId, setUserId, data, setData, modal, setModal }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);