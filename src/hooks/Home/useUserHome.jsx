import { useContext } from "react";
import DataHomeContext from "../../contexts/Home/UserHomeContext.jsx";

function useUserHome() {
  return useContext(DataHomeContext);
}

export default useUserHome;
