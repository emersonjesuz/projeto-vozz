import useDataNavegateProvider from "../../hooks/useDataNavegate/useDataNavegateProvider";
import DataNavegateContext from "./dataNavegateContext";

function DataNavegateProvider(props) {
    const userProvider = useDataNavegateProvider();

    return (
        <DataNavegateContext.Provider value={userProvider}>
            {props.children}
        </DataNavegateContext.Provider>
    );
}
export default DataNavegateProvider;
