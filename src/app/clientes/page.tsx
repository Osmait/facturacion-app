import { ListClient } from "@/components/ListClient";
import styles from "./page.module.css";

export default function Client() {
  return (
    <section>
      <div className={styles.contenedor}>
        <ListClient />
      </div>
    </section>
  );
}
