import { useState } from "react";
import { useNavigate } from "react-router-dom";


function useUserProvider() {
    const navigate = useNavigate();

    const [titleNavigate, setTitleNavigate] = useState(" ");


    function activedRote(index) {
        navigate(index)
    }



    return (
        titleNavigate,
        setTitleNavigate,
        activedRote
    )
}

export default useUserProvider;