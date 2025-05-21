import { useState } from "react";

import "../components/styles/Footer.css";
import LogoSiteRoxo from "../assets/LogoSiteRoxo.png";
import iconeGithub from "../assets/ImgsFooter/iconeGithub.png";
import iconeEmail from "../assets/ImgsFooter/iconeEmail.png";
import iconeYT from "../assets/ImgsFooter/iconeYT.png";
import logoG3 from "../assets/logoG3.png";

function Footer() {
    const [aberto, setAberto] = useState(false);

    // Função para alternar o estado aberto/fechado
    function verInfo() {
        setAberto(!aberto) //Inverte o valor atual do estado
    }

    return (
        <>

            <br />
            <br />
            <br />

            <footer>
                <section className="footerHeader" onClick={verInfo}>
                    <img src={LogoSiteRoxo} className="logoSite" alt="Logo do site" />
                    <span className={`seta ${aberto ? "aberto" : ""}`}> </span>

                    <section className="icones">
                        <a href="https://github.com/vitorcecato-sesi/projeto-historia"> <img src={iconeGithub} alt="Github" /> </a>
                        <a href="linkEmail"> <img src={iconeEmail} alt="Email" /> </a>
                        <a href="linkVideoYt"> <img src={iconeYT} alt="Vídeo Youtube" /> </a>
                    </section>
                </section>

                <section className={`footerInfo ${aberto ? "aberto" : ""}`}>  {/*Se aberto for verdadeiro vai mostrar as informações */}
                    <img src={logoG3} className="logoG3" alt="Logo do grupo" />

                    <section className="sobreProjeto">
                        <p>
                            <h3> Sobre o Projeto </h3>
                            O projeto visa combinar os conhecimentos de Front End e Back End com a disciplina de História do 3º ano do Ensino Médio, que é ensinada pela professora Julia Milani.
                        </p>
                    </section>

                    <section className="conteudos">
                        <p>
                            <h3> Conteúdos </h3>
                            <a href=""> Guerra de Canudos </a> <br/>
                            <a href=""> Guerra do Contestado </a> <br/>
                            <a href=""> Primeira Guerra Mundial </a> <br/>
                            <a href=""> Revolução Russa </a> <br/>
                            <a href=""> Fascismo Italiano </a> <br/>
                            <a href=""> Crise de 1929 </a> <br/>
                            <a href=""> Revolução de 1930 </a> <br/>
                        </p>
                    </section>

                    <section>
                        <p>
                            <h3> Integrantes </h3>
                            Laura Betti Migliaccio <br/>
                            Lucas Casagrande da Silva <br/>
                            Milena Oliveira Souza <br/>
                            Pietro Melle Michelin <br/>
                            Pyetro Joaquim Taborda Nunes <br/>
                            Vitor Geraldo Cecato <br/>
                        </p>
                    </section>

                </section>
            </footer>
        </>
    )
}

export default Footer
