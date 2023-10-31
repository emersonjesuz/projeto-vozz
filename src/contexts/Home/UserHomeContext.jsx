/* import { createContext } from "react";
import userHomeProvider from "@/hooks/userHomeProvider";

const UserContextHome = createContext({});

export function userProvider(props) {
    const userProvider = userHomeProvider();

    return (
        <UserContextHome.Provider value={userProvider}>{props.children}</UserContextHome.Provider>
    )
}

export default UserContextHome;  */