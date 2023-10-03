import { Link } from 'react-router-dom'
import Button from '../Button'
import styles from './Header.module.css'

const Header = () =>{
  return(
    <div className={styles.header}>
      <header>
      <a href="/">
      <img src='/imagens/logoFlix.png' alt="Logo lucy flix"/>
      </a>
      <Link className={styles.link} to='/novovideo'>
      <Button>
        Novo Filme
       </Button>
      </Link>
      </header>
    </div>

  )
}

export default Header