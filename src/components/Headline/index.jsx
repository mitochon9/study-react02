import Image from "next/image";
import styles from "src/components/Headline/Headline.module.css";

export const Headlin = (props) => {
  return (
    <div>
      <h1 className={styles.title}>{props.page} Page</h1>

      <p className={styles.description}>
        アイテムの数は {props.children} 個です.
      </p>

      <button className={styles.button} onClick={props.handleReduce}>
        減らす
      </button>

      {/* <button className={styles.button} onClick={props.onClick}>
        ボタン
      </button> */}
    </div>
  );
};
