import styles from "./Banner.module.css";

const Banner = ({ imagem }) => {
  return (
    <>
      <div
        className={styles.capa}
        style={{ backgroundImage: `url('/imagens/banner-${imagem}.jpg')` }}
      >
      <div className={styles.description}>
       <div className={styles.texto}>
       <h2>Velozes e Furiosos 10</h2>
      <p>
      O fim da estrada está chegando. Velozes & Furiosos 10, é o décimo filme da franquia Velozes & Furiosos, lança os capítulos finais de uma grande saga, uma das mais famosas e populares do cinema, agora com sua terceira década e ainda mais forte. Com o mesmo elenco e personagens principais de quando começou. Ao longo de muitas missões e lutando contra todos os obstáculos impossíveis, Dom Toretto (Vin Diesel) e sua família foram mais espertos, mais furiosos e mais rápidos do que todos os inimigos em seu caminho. Agora, eles enfrentam o seu oponente mais letal: uma ameaça terrível das sombras do passado, alimentada por sede de vingança e determinada a destruir esta família.
      </p>
       </div>
      <iframe width="374" height="279" src="https://www.youtube.com/embed/8k0epOQUfQk" title="Velozes e Furiosos 10 | Trailer Dublado" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      </div>
      
      
    </>
  );
};
export default Banner;
