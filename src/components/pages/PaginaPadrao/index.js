import Header from "../../Header";
import styles from "./PaginaPadrao.module.css";
import Footer from "../../Footer";

import Banner from "../../Banner";
import Carrossel from "../../Carrossel";
const PaginaPadrao = () => {
  return (
    <>
      <Header />
      <Banner imagem="home" />
      <Carrossel />
       <Footer>
        <img src="/imagens/logoFlix.png" alt="logo lucy flix"/>
       </Footer>
    </>
  );
};

export default PaginaPadrao;
