import { useContext } from "react";
import UserContext from '../contexts/UserContext.jsx';

export default function useUser() {
    return (useContext(UserContext));
}

