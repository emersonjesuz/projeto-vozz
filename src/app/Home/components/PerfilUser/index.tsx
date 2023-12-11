import styles from "./styles.module.scss";
import Image from "next/image";
import Photo from '../../assets/Home/PhotoPerfil.svg';
import Perfil from '../../assets/Home/Perfil.svg';
import Date from '../../assets/Home/Date.svg';
import Hand from '../../assets/Home/Hand.svg';
import Band from '../../assets/Home/Band.svg';
import ArrowButtom from '../../assets/Home/ArrowBottom.svg';
import Set from '../../assets/header/arrow-left-gray.svg';
import { useGlobalContext } from "@/contexts/ContextHome";


export default function PerfilUser() {
    const { setModal } = useGlobalContext();

    return (
        <div className={styles["containerPerfilUser"]}>
            <div className={styles["headerPerfilUser"]}>
                <div className={styles["btnBack"]}>
                    <Image src={Set} alt='Voltar' onClick={() => setModal(false)} />
                </div>
                <Image src={Photo} alt='Foto de Perfil' className={styles["ImagePerfilUser"]} />
                <h2>Isabela Ferreira</h2>
                <h3>@isaferreira11</h3>
                <div className={styles["containerPerfilUserPrinc"]}>
                    <div className={styles["containerPerfilUserDetail"]}>
                        <h4>13</h4>
                        <h4>seguindo</h4>
                    </div>
                    <div className={styles["containerPerfilUserDetail"]}>
                        <h4>73</h4>
                        <h4>seguidores</h4>
                    </div>
                </div>
            </div>
            <div className={styles["mainPerfilUser"]}>
                <div className={styles["containerPerfilUserDetail"]}>
                    <Image src={Perfil} alt="Usuário" className={styles["imagePerfilUser"]} />
                    <h2>Perfil</h2>
                </div>
                <div className={styles["containerPerfilUserDetail"]}>
                    <Image src={Date} alt="Calendário" />
                    <h2>Eventos Salvos</h2>
                </div>
                <div className={styles["containerPerfilUserDetail"]}>
                    <Image src={Hand} alt="Mão" />
                    <h2>Projetos Salvos</h2>
                </div>
                <div className={styles["containerPerfilUserDetail"]}>
                    <Image src={Band} alt="Bandeira" />
                    <h2>Posts Salvos</h2>
                </div>

            </div>
            <div className={styles["footerPerfilUser"]}>
                <div>
                    <h2>Configuração e suporte</h2>
                    <Image src={ArrowButtom} alt="seta para baixo" />
                </div>
                <div>
                    <h2>Central de ajuda</h2>
                    <Image src={ArrowButtom} alt="seta para baixo" />
                </div>
            </div>
        </div>
    )
}