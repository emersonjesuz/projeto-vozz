import Header from "../../components/Header";
import styles from "./styles.module.scss";
import { Outlet } from "react-router-dom";

export default function HeaderLayout() {
  return (
    <div className={styles.container}>
      <Header />

      <Outlet />
    </div>
  );
}
