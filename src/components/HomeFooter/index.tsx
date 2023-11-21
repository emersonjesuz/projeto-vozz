import Image from "next/image";
import Student from "../../assets/Home/Icone_Aprender Off.svg";
import Ativ from "../../assets/Home/Icone_Atividades Off.svg";
import Conver from "../../assets/Home/Icone_Conversas Off.svg";
import IconHome from "../../assets/Home/Icone_Home On.svg";
import Particip from "../../assets/Home/Icone_Participar Off.svg";
import styles from "./styles.module.scss";

export default function HomeFooter() {
  return (
    <div className={styles["footerHome"]}>
      <div className={styles["select"]}>
        <Image src={IconHome} alt="Home" />
      </div>
      <div>
        <Image src={Student} alt="Aprender" />
        <h4>Aprender</h4>
      </div>
      <div>
        <Image src={Particip} alt="Participar" />
        <h4>Participar</h4>
      </div>
      <div>
        <Image src={Ativ} alt="Atividades" />
        <h4>Atividades</h4>
      </div>
      <div>
        <Image src={Conver} alt="Conversas" />
        <h4>Conversas</h4>
      </div>
    </div>
  );
}
