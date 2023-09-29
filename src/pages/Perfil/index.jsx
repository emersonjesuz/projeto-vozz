import CardPerfil from "../../components/CardPerfil";
import styles from "./styles.module.scss";
import iconFace1 from "../../assets/icons/face1.svg";
import iconFace2 from "../../assets/icons/face2.svg";
import iconFace3 from "../../assets/icons/face3.svg";
import { useEffect, useState } from "react";
import useDataNavegate from "../../hooks/useDataNavegate/useDataNavegate";

export default function Perfil() {
  const [buttonSelectPerson, setButtonSelectPerson] = useState(false);
  const [buttonSelectPolitical, setButtonSelectPolitical] = useState(false);
  const [buttonSelectInstitution, setButtonSelectInstitution] = useState(false);
  /* const { setTitleNavigate, activedRote } = useDataNavegate(); */

  const activateButton = (index) => {
    if (index === "person") {
      setButtonSelectPolitical(false);
      setButtonSelectInstitution(false);
    }
    if (index === "political") {
      setButtonSelectPerson(false);
      setButtonSelectInstitution(false);
    }
    if (index === "institution") {
      setButtonSelectPerson(false);
      setButtonSelectPolitical(false);
    }
  };

  /* activedRote('/access/sign-up') */

  /*   useEffect(() => {
    }, [activedRote]) */

  return (
    <div className={styles["container-perfil"]}>
      <div className={styles["container-perfil-title"]}>
        <h1>Personalize a sua experiência</h1>
        <h2>Quem é você na fila do pão ?</h2>
      </div>
      <div className={styles["container-perfil-main"]}>
        <CardPerfil
          imagePerfil={iconFace1}
          titleText="Sou pessoa cidadã"
          secondText="Se você quer acompanhar as pautas políticas e dar sua opinião, esse é o seu espaço."
          buttonselect={buttonSelectPerson}
          setButtonSelect={setButtonSelectPerson}
          activateButton={activateButton}
          chosenButton={"person"}
        />
        <CardPerfil
          imagePerfil={iconFace2}
          titleText="Sou da gestão política"
          secondText="Aproxime-se dos cidadãos para tornar as soluções mais relevantes para o coletivo."
          buttonselect={buttonSelectPolitical}
          setButtonSelect={setButtonSelectPolitical}
          activateButton={activateButton}
          chosenButton={"political"}
        />
        <CardPerfil
          imagePerfil={iconFace3}
          titleText="Sou uma instituição"
          secondText="Você faz a ponte entre cidadãos e gestores? Vem com a gente."
          buttonselect={buttonSelectInstitution}
          setButtonSelect={setButtonSelectInstitution}
          activateButton={activateButton}
          chosenButton={"institution"}
        />
      </div>
      <button>Avançar</button>
    </div>
  );
}
