import { useContext } from "react";
import DataNavegateContext from "../../contexts/ContextNavegate/dataNavegateContext";

export default function useDataNavegate() {
  return useContext(DataNavegateContext);
}
