import styles from './CardVideo.module.css'
import json from '../../../json/db.json'
const CardVideo = ()=>{
  const filmes = json


  return(
    <div className={styles.container}>
      {filmes.map((filme)=>(
       <>
      
        <img 
        className={styles.capa}
        id={filme.id}
        src={filme.capa}alt={filme.titulo}/>
        
       </>
      ))}
    </div>
  )
}

export default CardVideo