import styles from "./CampoTexto.module.css";

const CampoTexto = ({label, name,placeholder}) => {
  return (
    <>
      <div className={styles.campotexto}>
        <label>{label}</label>
        <input 
        type="text" 
        name={name}
        placeholder={placeholder} />
      
      </div>
    </>
  );
};

export default CampoTexto;
