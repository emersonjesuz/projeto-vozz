import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useDataNavegateProvider() {
  const navigate = useNavigate();

  const [titleNavigate, setTitleNavigate] = useState("");

  function fillingNavegate(path) {
    setTitleNavigate(path);
  }

  function activedRote(path) {
    navigate(path);
  }

  return { titleNavigate, fillingNavegate, activedRote };
}

export default useDataNavegateProvider;
