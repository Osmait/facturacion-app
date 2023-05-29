import { Form } from "@/components/clients/Form";
import styles from "./page.module.css";

export default function AddClient() {
  return (
    <div className={styles.form_container}>
      <Form />
    </div>
  );
}
