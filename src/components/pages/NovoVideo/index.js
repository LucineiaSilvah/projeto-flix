import Header from "../../../components/Header";
import Button from "../../../components/Button";
import CampoTexto from "../../CampoTexto";
import styles from "./NovoVideo.module.css";
import Footer from "../../../components/Footer";

const NovoVideo = () => {

  return (
    <>
      <section className={styles.novovideo}>
        <Header/>
        <h2>Novo Video</h2>
        <form>
          
          <CampoTexto 
          placeholder='Digite aqui o titulo do filme'
          label='Titulo'
          name='titulo'
          />
          <CampoTexto
          placeholder='Digite aqui o link do filme' 
          label='Link do Video'
          name='linkVideo'
          />
          <CampoTexto 
          placeholder='Digite aqui o link fa imagem do filme'
          label='Link Da Imagem do Video'
          name='LinkImagem'
          />
          <CampoTexto 
          placeholder='escolha a categoria'
          label='Categotia'
          name='categoria'
          />
         <div className={styles.botoes}>
         <Button >
            Salvar
          </Button>
          <Button>
            Limpar
          </Button>
          <Button >
            Nova Categoria
          </Button>
         </div>
        </form>
      <Footer/>
      </section>
    </>
  );
};

export default NovoVideo;
