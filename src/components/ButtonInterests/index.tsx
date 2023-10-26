import { log } from 'console';
import { type } from 'os';
import React, { useState } from 'react';
import styles from "./styles.module.scss";

type Props = {
    text: string;
}

const ButtonInterests = ({ text }: Props) => {
    const [hasClass, setHasClass] = useState(false);

    const toggleClass = () => {
        setHasClass(!hasClass);
    };

    return (
        <button className={`${styles["btn-interests"]} ${hasClass ? styles["select"] : ""}`} onClick={toggleClass}>
            {text}
        </button>
    );
};

export default ButtonInterests;
