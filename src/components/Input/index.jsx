import styles from "./styles.module.scss";
import { useState } from "react";
import closeEye from "../../assets/icons/close-eye.svg";
import openEye from "../../assets/icons/open-eye.svg";

export default function Input({
  type,
  label,
  name,
  placeholder,
  handleChange,
  value,
  showImage,
  errorMessage,
  iconSrc,
  alt,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isInputEmpty = value.trim() === "";

  return (
    <div className={styles.container}>
      <div
        className={`${styles["input-wrapper"]} ${
          errorMessage
            ? styles["error-border"]
            : isInputEmpty
            ? styles["empty-border"]
            : styles["ok-border"]
        }`}
      >
        <div className={styles["input-form"]}>
          <label
            htmlFor={name}
            className={errorMessage ? styles["error-label"] : ""}
          >
            {label}
          </label>

          <div className={styles["content-input"]}>
            <div className={styles["img-eye"]}>
              <input
                type={showPassword ? "text" : type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                className={errorMessage ? styles["error-placeholder"] : ""}
              />
              {type === "password" && (
                <img
                  className={styles["password-show"]}
                  src={showPassword ? closeEye : openEye}
                  alt="mostrar senha"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
            {errorMessage && (
              <div>
                <img
                  className={styles["error-icon"]}
                  src={iconSrc}
                  alt="Erro"
                />
              </div>
            )}
            {!errorMessage && showImage && (
              <img className={styles["check-icon"]} src={iconSrc} alt="OK" />
            )}
          </div>
          {errorMessage && (
            <div>
              <span className={styles["message-error"]}>{errorMessage}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
