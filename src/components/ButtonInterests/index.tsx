import { Dispatch, SetStateAction, useState } from "react";
import styles from "./styles.module.scss";
import { InterestTypes } from "@/types/InterestsTypes";

type Props = {
  text: string;
  setInterests: Dispatch<SetStateAction<InterestTypes[]>>;
  interests: InterestTypes[];
};

const ButtonInterests = ({ text, interests, setInterests }: Props) => {
  const [hasClass, setHasClass] = useState(false);

  const toggleClass = () => {
    const index = interests.findIndex((interest) => interest.text === text);

    interests[index].actived = !hasClass;

    setInterests([...interests]);
    setHasClass(!hasClass);
  };

  return (
    <button
      className={`${styles["btn-interests"]} ${
        hasClass ? styles["select"] : ""
      }`}
      onClick={toggleClass}
    >
      {text}
    </button>
  );
};

export default ButtonInterests;
