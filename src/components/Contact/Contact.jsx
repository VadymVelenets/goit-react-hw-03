import css from "./Contact.module.css";
import { ImAddressBook } from "react-icons/im";
import { ImPhone } from "react-icons/im";

export default function Contact({ data, deleteContact }) {
  return (
    <div className={css.contact}>
      <div>
        <div className={css.container}>
          <ImAddressBook /> {data.name}
          <h1 className={css.text}></h1>
        </div>

        <div className={css.container}>
          <ImPhone />
          <p className={css.text}>{data.number}</p>
        </div>
      </div>

      <button onClick={() => deleteContact(data.id)} className={css.button}>
        Delete
      </button>
    </div>
  );
}