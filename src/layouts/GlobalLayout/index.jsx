import { Outlet } from "react-router-dom";
import DataNavegateProvider from "../../contexts/ContextNavegate/dataNavegateContextProvider";

export default function LayoutContextGlobal() {
  return (
    <DataNavegateProvider>
      <Outlet />
    </DataNavegateProvider>
  );
}
