"use client"
import Image from 'next/image';
import Lupa from '../../assets/Home/Lupa.svg';
import Photo from '../../assets/Home/PhotoPerfil.svg';
import styles from "./styles.module.scss";
import userHomeProvider from '../../hooks/userHomeProvider'
import useHome from '../../hooks/Home/useUserHome'

export default function HeaderHome() {
    /* const { isAtivedPerfilUser, setisAtivedPerfilUser } = useHome(); */



    const handleComponentPerfil = () => {
        setisAtivedPerfilUser(true);
        console.log(isAtivedPerfilUser);
    }

    return (
        <div className={styles["headerHome"]}>
            <Image src={Photo} alt={'Foto de Perfil'} className={styles["photo"]} onClick={handleComponentPerfil} />
            <h2>Home</h2>
            <Image src={Lupa} alt='Pesquisar' />
        </div>
    )
}