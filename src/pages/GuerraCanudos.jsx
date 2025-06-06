// Importa o hook useState do React
import { useState } from "react";

// Importa imagens para o carrossel
import Img1 from "../assets/Imgs-GuerraCanudos/Canu1.png";
import img2 from "../assets/Imgs-GuerraCanudos/Carrossel3.png";
import img3 from "../assets/Imgs-GuerraCanudos/Carrosel.png";
import img4 from "../assets/Imgs-GuerraCanudos/Canu4.png";

// Importa o CSS específico dessa página
import "./style/GuerraCanudos.css";

// Importa outras imagens utilizadas no site
import IMGIntro from "../assets/Imgs-GuerraCanudos/Intro.png";
import IMGOqInflu from "../assets/Imgs-GuerraCanudos/IMGOqInflu.png";
import ImgConflito from "../assets/Imgs-GuerraCanudos/Conflito.png";
import ImgANtonio from "../assets/Imgs-GuerraCanudos/Antonio.png";
import ImgFim from "../assets/Imgs-GuerraCanudos/Fim.png";

//Importa a logo do navBar
import LogoSiteLaranja from "../assets/Logos/LogoSiteLaranja.png";

// Importa componentes reutilizáveis
import APIWikipedia from "../components/APIWikipedia";
import Navbarr from "../components/Navbar";
import BotaoCurti from "../components/BotaoCurtirTema";
import BotaoTema from "../components/BotaoTema";
import Footer from "../components/Footer";

// Array com imagens do carrossel
const imagens = [Img1, img2, img3, img4];

function GuerraCanudos() {
  // Estado para controlar o índice da imagem atual no carrossel
  const [index, setIndex] = useState(0);

  return (
    <>
      {/* Barra de navegação */}
      <Navbarr backgroundId="navbarGuerraDeCanudos" logo={LogoSiteLaranja} />

      {/* Carrossel de imagens com botões para navegar */}
      <section className="Bloco-Carrossel">
        <section className="Carrossel-Container">
          {/* Botão para imagem anterior */}
          <button
            className="Botao-Carrossel Esquerda"
            onClick={() =>
              setIndex((prev) => (prev === 0 ? imagens.length - 1 : prev - 1)) // Ao clicar, verifica se o índice atual é 0 , se for, volta para a última imagem (efeito de loop) caso contrário, vai para a imagem anterior.
            }
          >
            ‹
          </button>

          {/* Imagem atual do carrossel */}
          <img
            src={imagens[index]} //URl da imagem atual
            alt={`Slide ${index + 1}`} // Texto alternativo com número do slide
            className="Imagem-Carrossel"
          />

          {/* Botão para próxima imagem */}
          <button
            className="Botao-Carrossel Direita"
            onClick={() =>
              setIndex((prev) => (prev === imagens.length - 1 ? 0 : prev + 1))  // Ao clicar, verifica se está na última imagem, se estiver, volta para a primeira imagem.Caso contrário, avança uma imagem.
            }
          >
            ›
          </button>
        </section>
        <center>
          {/* Seção das bolinhas que indicam qual imagem está ativa */}
          <section className="Bolinhas">
            {imagens.map((_, i) => (
              <span
                key={i} // Chave única para cada bolinha
                className={`Bola ${i === index ? "active" : ""}`}  // Aplica a classe "active" se a bolinha for da imagem atual
                onClick={() => setIndex(i)}  // Ao clicar na bolinha, troca diretamente para o slide correspondente
              />
            ))}
          </section>
        </center>
      </section>

      <br></br>
      <br></br>

       {/* Botão de troca ou indicação de tema */}
      <BotaoTema />
      <br />

      <section className="Blocao-WikieApi">
        <section className="Api-Wikipedia">
          <center>
            <section className="Titulo-Api">
              <h2>Informações da Wikipédia</h2>
            </section>
          </center>

          <br />
          <article className="Wiki-Api">
            <section className="Img-Api">
              <img src="" alt="" id="ImgApi" />
            </section>

            <section className="Texto-Api">
              <section className="textwiki" id="wikiGCa">
              </section>
              <APIWikipedia
                titulo="Guerra de Canudos"
                campoWiki="wikiGCa"
                imagemID="ImgApi"
                imagemAlt="Nome"
                imagemClass="ImgApi"
              />
            </section>
          </article>
        </section>
        <section className="Bloco-Intro">
          <center>
            <section className="Titulo-Intro">
              <h2>Introdução</h2>
            </section>
          </center>
          <br />
          <section>
            <img className="img-In" src={IMGIntro}></img>
          </section>
          <br />
          <center>
            <section className="Texto-Intro">
              <p>
                A guerra de Canudos foi um conflito histórico que ocorreu no
                arraial de Canudos (sertão da Bahia) em 1896 - 1897, o Exército
                Brasileiro e os seguidores de Antônio Conselheiro, um líder
                religioso de Canudos.
              </p>
            </section>
          </center>
          <br></br>
          <BotaoCurti idSection="Bloco1Canudos" tema="Guerra de Canudos" />
        </section>
      </section>
      <br></br>

      <center>
        <section className="Bloco-OqInflu">
          <section>
            <img className="Img-OqInflu" src={IMGOqInflu}></img>
          </section>

          <section className="Texto-OqInflu">
            <section className="Titulo-OqIn">
              <h2>O que influenciou a Guerra de Canudos?</h2>
            </section>
            <section className="Texto-OqIn">
              <p>
                Naquela época o Brasil tinha a acabado de entrar em uma
                república porém os impostos e a condição de vida dos sertanejos
                não estava boa, o governo tinha medo do crescimento de poder do
                Antônio Conselheiro
              </p>
            </section>
          </section>
          <BotaoCurti idSection="Bloco2Canudos" tema="Guerra de Canudos" />
        </section>
      </center>
      <br></br>

      <center>
        <section className="Bloco-OqInflu">
          <section>
            <img className="Img-OqInflu" src={ImgConflito}></img>
          </section>

          <section className="Texto-OqInflu">
            <section className="Titulo-Con">
              <h2>Conflito</h2>
            </section>
            <section className="Texto-OqIn">
              <p>
                O governo republicano viu Canudos como uma ameaça à ordem
                estabelecida e enviou várias expedições militares para
                destruí-lo. Após três tentativas fracassadas, uma quarta
                expedição, com cerca de 10 mil soldados, conseguiu dizimar a
                comunidade.
              </p>
            </section>
          </section>
          <BotaoCurti idSection="Bloco3Canudos" tema="Guerra de Canudos" />
        </section>
      </center>

      <br></br>
      <br></br>

      <section className="Blocos-AnteFim">
        <section className="Bloco-Anto">
          <center>
            <br></br>
            <img className="ImgAn" src={ImgANtonio}></img>
            <section className="Titulo-Anto">
              <h2>Antônio Conselheiro e Sua Pregação</h2>
            </section>
            <section className="Texto-Anto">
              <p>
                Antônio Conselheiro era o líder religioso da época, que
                utilizava da Bíblia e das pregações de Deus para as pessoas
                seguirem ele. Também falava que, quem o seguisse, teria a
                salvação. Antônio Conselheiro, ao fim da Guerra de Canudos,
                quando o Exército Brasileiro já tinha vencido, já estava morto.
                Então, o Exército levou sua cabeça como comprovação de sua
                morte.
              </p>
            </section>
          </center>
          <BotaoCurti idSection="Bloco4Canudos" tema="Guerra de Canudos" />
        </section>

        <section className="Bloco-Fim">
          <center>
            <section className="Titulo-Fim">
              <h2>Fim da Guerra</h2>
            </section>
            <br></br>
            <img className="ImgFim" src={ImgFim}></img>
            <br></br>
            <br></br>

            <section className="Texto-Fim">
              <p>
                O fim da guerra de Canudos foi bem trágico com mais de 25000
                pessoas mortas após a expedição do exército e a vitória do
                exército com a desculpa de que canudos apoiavam a monarquia.
              </p>
              <BotaoCurti idSection="Bloco5Canudos" tema="Guerra de Canudos" />
            </section>
          </center>
        </section>
      </section>
      <br></br>

      <br></br>
      <section className="cor">
        <section className="Juntos">
          <section className="Bloco-Video">
            <center>
              <h2 className="Titulo-Video">
                Vídeo explicativo sobre a Guerra de Canudos
              </h2>
            </center>
            <center>
              <iframe className="VideoCa"
                width="450"
                height="295"
                src="https://www.youtube.com/embed/yWWOgDjYuwc?si=QWxDuS0fniiiKhjb"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </center>
            <br></br>
            <center>
              <section className="Texto-Video">
                <p>
                  Esse vídeo trata-se de uma aula explicativa sobre a Guerra de
                  Canudos
                </p>
              </section>
            </center>
          </section>

          <section className="Bloco-Filme">
            <center>
              <h2 className="Titulo-Video">
                Filme explicativo sobre a Guerra de Canudos
              </h2>
            </center>
            <center>
              <iframe className="VideoCa"
                width="450"
                height="295"
                src="https://www.youtube.com/embed/P4OYhj7Io0E?si=ews4oBQZWYqR7BRp"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </center>
            <br></br>
            <center>
              <section className="Texto-Video">
                <p>
                  Guerra de Canudos é um filme brasileiro de 1997, do gênero
                  drama, dirigido por Sérgio Rezende. É baseado no célebre
                  episódio real da história brasileira, a Guerra de Canudos, na
                  qual o exército brasileiro enfrentou os integrantes de um
                  movimento religioso liderado por Antônio Conselheiro, e que
                  durou de 1896 a 1897 e terminou com o massacre dos insurgentes
                  pelas tropas federais.
                </p>
              </section>
            </center>
          </section>
        </section>
      </section>

      <Footer
        corHeaderFooter="amarelo"
        corInfoFooter="amareloClaro"
        logo={LogoSiteLaranja}
      />
    </>
  );
}

export default GuerraCanudos;
