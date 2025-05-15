//Imagens
import FotoGrupo3 from "../assets/FotoGrupo3.png";
import LogoG3 from "../assets/logoG3.png";

//Componentes
import Footer from "../components/Footer";

//CSS
import "../pages/style/SobreNos.css";

function SobreNos() {
  return (
    <>
    <center>
      <section className="blocoPrincipal">
        <section className="blocoFoto">
          <h2 className="tituloGrupo"> GRUPO 3</h2>
          <img className="fotoDoGrupo" src={FotoGrupo3} alt="Foto Do Grupo" />
        </section>

        <section className="Logo-Integrantes">
          <img className="logoGrupo" src={LogoG3} alt="Logo do Grupo" />
          <h3>
            Integrantes: <br />
            Laura Betti Migliaccio <br />
            Lucas Casagrande da Silva <br />
            Milena Oliveira Souza <br />
            Pietro Melle Michelin <br />
            Pyetro Joaquim Taborda Nunes <br />
            Vitor Geraldo Cecato <br />
          </h3>
        </section>

        <section className="projeto">
          <h2 className="tituloProjeto"> Sobre O Projeto </h2>
          <p>
            O projeto tem como objetivo integrar os conhecimentos de Front End e
            Back End desenvolvidos ao longo do curso com a disciplina de
            História do 3º ano do Ensino Médio, ministrada pela professora Julia
            Milani. A proposta é construir um site responsivo utilizando React e
            Flexbox, dividido em 9 páginas, abordando os principais
            acontecimentos do século XX organizados em 7 grandes temas
            históricos. Além da interface, o projeto também contempla o consumo
            de uma API pública da Wikipedia, permitindo a pesquisa dinâmica dos
            temas e a exibição dos conteúdos de forma organizada e visualmente
            atrativa.
          </p>
        </section>

      </section>
      </center>

      <Footer/>
    </>
  );
}

export default SobreNos;
