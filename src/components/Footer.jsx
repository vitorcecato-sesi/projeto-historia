import { useState } from "react";
import { Link } from "react-router-dom";

import "../components/styles/Footer.css";
import iconeGithub from "../assets/ImgsFooter/iconeGithub.png";
import iconeGrupo from "../assets/ImgsFooter/iconeGrupo.png";
import iconeYT from "../assets/ImgsFooter/iconeYT.png";
import logoG3 from "../assets/Logos/logoG3.png";

function Footer(props) {
    const [aberto, setAberto] = useState(false);

    // Função para alternar o estado aberto/fechado
    function verInfo() {
        setAberto(!aberto); //Inverte o valor atual do estado
    }

    return (
        <>
        <br />
        <br />
        <br />

        <footer>
            <section className="footerHeader" id={props.corHeaderFooter} onClick={verInfo}>
                <img src={props.logo} className="logoSite" alt="Logo do site" />
                <span className={`seta ${aberto ? "aberto" : ""}`}> </span>

                <section className="icones">
                    <a href="https://github.com/vitorcecato-sesi/projeto-historia"> <img src={iconeGithub} alt="Github" /> </a>
                    <a href="https://www.youtube.com/embed/eERVu09GCWE?si=X1SRhNr9cMOyKIqT&quot"><img src={iconeYT} alt="Vídeo Youtube" /> </a>
                    <a href="http://localhost:5173/SobreNos"> <img src={iconeGrupo} alt="Grupo" /> </a>
                </section>
            </section>

            <section id={props.corInfoFooter} className={`footerInfo ${aberto ? "aberto" : ""}`}> {/*Se aberto for verdadeiro vai mostrar as informações */}
                <img src={logoG3} className="logoG3" alt="Logo do grupo" />
                
                <section className="sobreProjeto">
                    <p>
                        <h3> Sobre o Projeto </h3>
                        O projeto visa combinar os conhecimentos
                        de Front End e Back End com a disciplina de História do 3º ano do
                        Ensino Médio, que é ensinada pela professora Julia Milani.
                    </p>
                </section>

                <section className="blocoFinal">
                    <section className="conteudos">
                        <p>
                            <h3> Conteúdos </h3>
                            <a href="http://localhost:5173/GuerraDeCanudos"> Guerra de Canudos </a> <br />
                            <a href="http://localhost:5173/GuerraDoContestado"> Guerra do Contestado </a> <br />
                            <a href="http://localhost:5173/PrimeiraGuerraMundial"> Primeira Guerra Mundial </a> <br />
                            <a href="http://localhost:5173/RevolucaoRussa"> Revolução Russa </a> <br />
                            <a href="http://localhost:5173/FascismoItaliano"> Fascismo Italiano </a> <br />
                            <a href="http://localhost:5173/CriseDe1929"> Crise de 1929 </a> <br />
                            <a href="http://localhost:5173/RevolucaoDe1930"> Revolução de 1930 </a> <br />
                        </p>
                    </section>

                    <section>
                        <p>
                            <h3> Integrantes </h3>
                            Laura Betti Migliaccio <br />
                            Lucas Casagrande da Silva <br />
                            Milena Oliveira Souza <br />
                            Pietro Melle Michelin <br />
                            Pyetro Joaquim Taborda Nunes <br />
                            Vitor Geraldo Cecato <br />
                        </p>
                    </section>
                </section>
            </section>
        </footer>
    </>
  );
}

export default Footer;
