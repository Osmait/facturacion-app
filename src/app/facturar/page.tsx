import { FormCheckIn } from "@/components/facturar/FormCheckIn";
import styles from "./page.module.css";
export default function page() {
  return (
    <div className={styles.contenedor}>
      <h1>Facturar</h1>
      <FormCheckIn />
    </div>
  );
}
