import IntroGif from "@/components/introGif";
import styles from "./styles.module.scss";

export default function OpeningPage() {
  return (
    <div className={styles.container}>
      <IntroGif />
      <p>created by</p>
      <h4>G-11</h4>
    </div>
  );
}
