import Image from "next/image";
import { Links } from "../components/Links";
import styles from "../styles/Home.module.css";
import { Headline } from "./Headline";

export function Main(props) {
  return (
    <main>
      <Headline page={props.page} onClick={() => alert("クリック！")}>
        {<code className={styles.code}>pages/{props.page}.js</code>}
      </Headline>
      <Links />
    </main>
  );
}
