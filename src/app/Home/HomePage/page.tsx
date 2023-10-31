"use client";
import PerfilUser from '../../../components/PerfilUser/index';
import Publication from '@/components/Publication';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Arrow from '../../../assets/Home/Arrow.svg';
import Can from '../../../assets/Home/Can.svg';
import Student from '../../../assets/Home/Icone_Aprender Off.svg';
import Ativ from '../../../assets/Home/Icone_Atividades Off.svg';
import Conver from '../../../assets/Home/Icone_Conversas Off.svg';
import IconHome from '../../../assets/Home/Icone_Home On.svg';
import Particip from '../../../assets/Home/Icone_Participar Off.svg';
import Pincel from '../../../assets/Home/Pincel.svg';
import Clip from '../../../assets/Home/clip.svg';
/* import userHomeProvider from '../../../hooks/userHomeProvider'; */
import styles from "./styles.module.scss";
/* import useHome from '@/hooks/Home/useHome'; */
import Api from '@/connections/api';

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

// let feedData: Feed[];

// const getFeed = async () => {
//   try {
//     const response = await Api.get('/feed');
//     console.log(response.data)
//     feedData = response.data;
//   } catch (error) {
//     console.log(error)
//   }
// };
// getFeed()

export default function HomePage() {

  useEffect(() => {
    const getFeed = async () => {
      try {
        const { data } = await Api.get('/feed');
        console.log(data)
        setFeed(data)
      } catch (error) {
        console.log(error)
      }
    };
    getFeed()
  }, []);

  /* const { isAtivedPerfilUser } = useHome(); */
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [description, setDescription] = useState('')
  const [feed, setFeed] = useState<Feed[]>([])
  console.log(feed)

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setIsInputFocused(false)
    }, 25)
  };

  const handleSubmitPost = async () => {
    try {
      const response = await Api.post('/publications', {
        profileId: 1,
        file: '',
        description
      })

      setDescription('')
      feed.unshift(response.data)
      console.log(feed)
    } catch (error) {
      console.log(error)
    }
  }

  const clear = () => {
    setFeed([])
    console.log(feed)
  }

  return (
    <div className={styles["containerHome"]}>
      <nav>
        <h4 className={styles["select"]}>em alta</h4>
        <h4>educação</h4>
        <h4>gênero</h4>
        <h4>ambiental</h4>
      </nav>
      <div className={styles["containerMain"]}>
        <div className={styles["publication"]}>
          <label>Criar nova publicação</label>
          {/* <textarea cols="30" rows="5" wrap='harp'></textarea> */}
          <input
            name='description'
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            type="text"
            placeholder={`${isInputFocused ? "" : 'escrever...'}`}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            className={styles[isInputFocused ? 'selectedInput' : '']}
          />
          {isInputFocused ? null : <Image src={Pincel} alt='Caneta' className={styles["imagePincel"]} />}
          <div className={`${styles.containerButtonPublication} ${isInputFocused ? styles.selected : ''}`}>
            <button><Image src={Clip} alt='Clip' onClick={clear} /></button>
            <button><Image src={Can} alt='Camera' /></button>
            <button className={styles["btnPublic"]} onClick={handleSubmitPost}><Image src={Arrow} alt='Seta' /></button>
          </div>
        </div>
        {/* Fazer disso abaixo um componente */}
        {feed.map((pub) => (
          <Publication
            key={pub.id}
            id={pub.id}
            profileId={pub.profileId}
            name={pub.name}
            userName={pub.userName}
            photo={pub.photo}
            profileChecked={pub.profileChecked}
            date={pub.date}
            file={pub.file}
            description={pub.description}
            public_likes={pub.public_likes}
            public_comments={pub.public_comments}
          />
        ))}
        {/*  {isAtivedPerfilUser && <PerfilUser />} */}
      </div>
      <div className={styles["footerHome"]}>
        <div className={styles["select"]} >
          <Image src={IconHome} alt='Home' />
        </div>
        <div>
          <Image src={Student} alt='Aprender' />
          <h4>Aprender</h4>
        </div>
        <div>
          <Image src={Particip} alt='Participar' />
          <h4>Participar</h4>
        </div>
        <div>
          <Image src={Ativ} alt='Atividades' />
          <h4>Atividades</h4>
        </div>
        <div>
          <Image src={Conver} alt='Conversas' />
          <h4>Conversas</h4>
        </div>
      </div>
    </div>
  );
}
