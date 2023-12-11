import styles from "./styles.module.scss";
import Image from "next/image";
import Photo from '../../assets/Home/PhotoPerfil.svg';
import Like from '../../assets/Home/Like.svg';
import Menssager from '../../assets/Home/Menssager.svg';
import Comp from '../../assets/Home/RT.svg';
import Share from '../../assets/Home/Share.svg';
import Config from '../../assets/Home/BotãoMenu.svg'
import { format } from 'date-fns';

type Feed = {
    id: number
    profileId: number
    name: string
    userName: string
    photo: string
    profileChecked: boolean
    date: string
    file: string
    description: string
    public_likes: number
    public_comments: number
}

export default function Publication({
    id,
    profileId,
    name,
    userName,
    photo,
    profileChecked,
    date,
    file,
    description,
    public_likes,
    public_comments
}: Feed) {

    const formatedDate = format(new Date(date), "dd/MM/yyyy")

    return (
        <div className={styles["containerPublish"]}>
            <div className={styles["headerPublish"]}>
                <Image src={Photo} alt='Foto de quem publicou' />
                <h2>{name}</h2>
                <h4>{userName}</h4>
                <h5>{formatedDate}</h5>
                <Image src={Config} alt='Configurações Publicação' />
            </div>
            <div className={styles["mainPublish"]}>{description}</div>
            <div className={styles["footerPubish"]}>
                <div>
                    <Image src={Like} alt='Curtir' className={styles["imagePublishUsers"]} />
                    <h4>{public_likes}</h4>
                </div>
                <div>
                    <Image src={Menssager} alt='Comentar' />
                    <h4>{public_comments}</h4>
                </div>
                <Image src={Comp} alt='Compartilhar no Perfil' />
                <Image src={Share} alt='Compartilhar' />
            </div>
        </div>
    )
}