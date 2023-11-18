"use client";
import PerfilUser from "../../../components/PerfilUser/index";
import Publication from "@/components/Publication";
import Image from "next/image";
import { useEffect, useState } from "react";
import Arrow from "../../../assets/Home/Arrow.svg";
import Can from "../../../assets/Home/Can.svg";
import Student from "../../../assets/Home/Icone_Aprender Off.svg";
import Ativ from "../../../assets/Home/Icone_Atividades Off.svg";
import Conver from "../../../assets/Home/Icone_Conversas Off.svg";
import IconHome from "../../../assets/Home/Icone_Home On.svg";
import Particip from "../../../assets/Home/Icone_Participar Off.svg";
import Pincel from "../../../assets/Home/Pincel.svg";
import Clip from "../../../assets/Home/clip.svg";
import styles from "./styles.module.scss";
/* import useHome from '@/hooks/Home/useHome'; */
import Api from "@/connections/api";
import { useGlobalContext } from "@/contexts/ContextHome";

type Feed = {
  id: number;
  profileId: number;
  name: string;
  userName: string;
  photo: string;
  profileChecked: boolean;
  date: string;
  file: string;
  description: string;
  public_likes: number;
  public_comments: number;
};

type PageProps = {
  pubsData: Feed[];
};

export default function HomePage() {
  /* const { isAtivedPerfilUser } = useHome(); */
  const { modal, data, setData } = useGlobalContext();
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [description, setDescription] = useState("");
  // const [feed, setFeed] = useState<Feed[]>(data);
  const [countIndex, setCountIndex] = useState(1);
  const [callApi, setCallApi] = useState(true);

  const getFeed = async () => {
    try {
      const response = await Api.get(`/feed/1`);
      const responseData: Feed[] = response.data;
      setData([...responseData]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleScroll = async () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

    if (scrollPercentage > 80 && scrollPercentage < 85) {
      setCallApi(false);
      const response = await Api.get(`/feed/${countIndex}`);
      const responseData: Feed[] = response.data;

      if (responseData.length > 0) {
        setData([...data, ...responseData]);
        setCountIndex(countIndex + 1);

        if (responseData.length >= 10) {
          setTimeout(() => {
            setCallApi(true);
          }, 3000);
        }
      }
    }
  };

  useEffect(() => {
    if (countIndex == 1 && callApi) {
      setCallApi(false);
      setCountIndex(2);
      getFeed();

      setTimeout(() => {
        setCallApi(true);
      }, 3000);
    }

    if (countIndex > 1 && callApi) {
      window.addEventListener("scroll", handleScroll);
    }
  }, []);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setIsInputFocused(false);
    }, 25);
  };

  const handleSubmitPost = async () => {
    const profileId: number = Number(localStorage.getItem("profileId"));

    try {
      const response = await Api.post("/publications", {
        profileId,
        file: "",
        description,
      });

      setDescription("");
      data.unshift(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            type="text"
            placeholder={`${isInputFocused ? "" : "escrever..."}`}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            className={styles[isInputFocused ? "selectedInput" : ""]}
          />
          {isInputFocused ? null : (
            <Image
              src={Pincel}
              alt="Caneta"
              className={styles["imagePincel"]}
            />
          )}
          <div
            className={`${styles.containerButtonPublication} ${
              isInputFocused ? styles.selected : ""
            }`}
          >
            <button>
              <Image src={Clip} alt="Clip" />
            </button>
            <button>
              <Image src={Can} alt="Camera" />
            </button>
            <button className={styles["btnPublic"]} onClick={handleSubmitPost}>
              <Image src={Arrow} alt="Seta" />
            </button>
          </div>
        </div>
        {/* Fazer disso abaixo um componente */}
        {data.map((publication: Feed) => (
          <Publication
            key={publication.id}
            id={publication.id}
            profileId={publication.profileId}
            name={publication.name}
            userName={publication.userName}
            photo={publication.photo}
            profileChecked={publication.profileChecked}
            date={publication.date}
            file={publication.file}
            description={publication.description}
            public_likes={publication.public_likes}
            public_comments={publication.public_comments}
          />
        ))}
        {/*  {isAtivedPerfilUser && <PerfilUser />} */}
        {modal && <PerfilUser />}
      </div>
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
    </div>
  );
}
