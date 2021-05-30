import Image from "next/image";
import { Headline } from "../Headline";
import { Links } from "../Links";
import styles from "./Main.module.css";

export function Main(props) {
  return (
    <main>
      <Headline page={props.page} onClick={() => alert("クリック！")}>
        <code className={styles.code}>pages/{props.page}.js</code>
      </Headline>
      <Links />
    </main>
  );
}
