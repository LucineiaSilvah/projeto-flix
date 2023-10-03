import CardVideo from "./CardsVideo";
import styles from "./Carrossel.module.css";
import Slides from "./Slides";
import json from '../../json/db.json'
import { useState } from "react";
const Carrossel = () => {
  const categoria = json;
 console.log(categoria.categoria);
  return (
    <div className={styles.carrossel}>
      {categoria.map((categoria) => (
        <> 
        <h2>{categoria.categoria}</h2>
          <Slides >
            
            <CardVideo/>
              
            
          </Slides>
        </>
      ))}
    </div>
  );
};
export default Carrossel;
