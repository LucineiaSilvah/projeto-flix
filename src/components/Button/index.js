import styles from './Button.module.css'
const Button =({ children})=>{
  return(
  
    <div className={styles.button}>
      <button >
        {children}
      </button>
    </div>

  )
}

export default Button