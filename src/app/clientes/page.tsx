import { ListClient } from "@/components/ListClient";
import styles from "./page.module.css";

export default function Client() {
  return (
    <section>
      <h1 className={styles.title}>Clientes</h1>
      <div className={styles.contenedor}>
        <ListClient />
      </div>
    </section>
  );
}
