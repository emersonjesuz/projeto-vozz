import styles from "./styles.module.scss";
import Image from "next/image";
import Photo from '../../assets/Home/PhotoPerfil.svg';
import Like from '../../assets/Home/Like.svg';
import Menssager from '../../assets/Home/Menssager.svg';
import Comp from '../../assets/Home/RT.svg';
import Share from '../../assets/Home/Share.svg';
import Config from '../../assets/Home/BotãoMenu.svg'

export default function Publication() {

    return (
        <div className={styles["containerPublish"]}>
            <div className={styles["headerPublish"]}>
                <Image src={Photo} alt='Foto de quem publicou' />
                <h2>Isabela Ferreira</h2>
                <h4>@isaferreira11</h4>
                <h5>1m</h5>
                <Image src={Config} alt='Configurações Publicação' />
            </div>
            <div className={styles["mainPublish"]}>O piso salarial de enfermagem é um reconhecimento mais do que merecido para esses guerreiros do dia a dia. #PL2564</div>
            <div className={styles["footerPubish"]}>
                <div>
                    <Image src={Like} alt='Curtir' className={styles["imagePublishUsers"]} />
                    <h4>0</h4>
                </div>
                <div>
                    <Image src={Menssager} alt='Comentar' />
                    <h4>0</h4>
                </div>
                <Image src={Comp} alt='Compartilhar no Perfil' />
                <Image src={Share} alt='Compartilhar' />
            </div>
        </div>
    )
}