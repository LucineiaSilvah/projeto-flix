import styles from './Footer.module.css'

const Footer = ({children})=>{
  return(
    <div className={styles.footer}>
      <footer>
        {children}
      </footer>
    </div>
  )
}
export default Footer