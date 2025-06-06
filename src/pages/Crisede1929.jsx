// Importa o hook useState do React
import { useState } from "react"

// Importa imagens para o carrossel
import Img1C from "../assets/Imgs-Crisede1929/Canu1.png";
import Img2C from "../assets/Imgs-Crisede1929/Canu2.png";
import Img3C from "../assets/Imgs-Crisede1929/Canu3.png";
import Img4C from "../assets/Imgs-Crisede1929/Canu4.png";

// Importa o CSS específico dessa página
import "./style/Crisede1929.css";

// Importa outras imagens utilizadas no site 
import ImgOq from "../assets/Imgs-Crisede1929/Crise1.png";
import ImgAnte from "../assets/Imgs-Crisede1929/Crise2.png";
import ImgAnte2 from "../assets/Imgs-Crisede1929/Crise3.png";
import ImgBolsa from "../assets/Imgs-Crisede1929/ImgBolsa.png";
import ImgNew from "../assets/Imgs-Crisede1929/Img-New.png";
import ImgFConse from "../assets/Imgs-Crisede1929/Img-Conse.png";

//Importa a logo do navBar
import LogoSiteVermelhoEscuro from "../assets/Logos/LogoSiteVermelhoEscuro.png"

// Importa componentes reutilizáveis
import APIWikipedia from "../components/APIWikipedia";
import BotaoCurtir from "../components/BotaoCurtirTema"
import BotaoTema from "../components/BotaoTema"
import Footer from "../components/Footer"
import Navbarr from "../components/Navbar";

// Array com imagens do carrossel
const imagens = [Img1C, Img2C, Img3C, Img4C];

function Crisede29() {
  // Estado para controlar o índice da imagem atual no carrossel
  const [index, setIndex] = useState(0);

  return (
    <>
     {/* Barra de navegação */}
      <Navbarr backgroundId="navbarCriseDe1929" logo={LogoSiteVermelhoEscuro} />

       {/* Carrossel de imagens com botões para navegar */}
      <section className="Bloco-CarrosselC">
        <section className="Carrossel-ContainerC">
           {/* Botão para imagem anterior */}
          <button
            className="Botao-Carrossel EsquerdaC"
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
            className="Botao-Carrossel DireitaC"
            onClick={() =>
              setIndex((prev) => (prev === imagens.length - 1 ? 0 : prev + 1))  // Ao clicar, verifica se está na última imagem, se estiver, volta para a primeira imagem.Caso contrário, avança uma imagem.
            }
          >
            ›
          </button>
        </section>

        {/* Seção das bolinhas que indicam qual imagem está ativa */}
        <section className="BolinhasC" style={{ textAlign: "center" }}>
          {imagens.map((_, i) => (
            <span
              key={i} // Chave única para cada bolinha
              className={`BolaC ${i === index ? "activeC" : ""}`}// Aplica a classe "active" se a bolinha for da imagem atual
              onClick={() => setIndex(i)}  // Ao clicar na bolinha, troca diretamente para o slide correspondente
            />
          ))}
        </section>
      </section>

      <br />
      <br />
      {/* Botão de troca ou indicação de tema */}
      <BotaoTema/>
      <br></br>

      <section className="Blocao-WikieApiC">
        <section className="Api-WikipediaC ">
          <center>
            <header className="Titulo-ApiC">
              <h2>Informações da Wikipédia</h2>
            </header>
          </center>

          <section className="Wiki-APiC">
            <center>
              <section className="ImgA">
                <img src="" alt="" id="ImgApiC" />
              </section>
            </center>

            <br></br>
            <center>
              <section className="Texto-ApiC">
                <section className="textwikiC" id="wikiGCa">
                  <APIWikipedia
                    titulo="Grande Depressão"
                    campoWiki="wikiGCa"
                    imagemID="ImgApiC"
                    imagemAlt="Nome"
                    imagemClass="ImgApiC"
                  />
                </section>
              </section>
            </center>
          </section>
        </section>

        <section className="Bloco-OqFoi ">
          <center>
            <header className="Titulo-OqFoi">
              <h2>O que foi?</h2>
            </header>
          </center>
          <section>
            <img className="img-Oq" src={ImgOq} alt="Crise de 1929" />
          </section>
          <center>
            <br></br>
            <section className="Texto-OqFoi">
              <p>
                A Crise de 1929, que ocorreu entre a Primeira e a Segunda Guerra
                Mundial, foi um dos eventos mais significativos da História
                Moderna. Esta crise aconteceu entre os meses de setembro e
                outubro de 1929 nos Estados Unidos, onde o valor das ações da
                Bolsa de Valores de Nova York caiu drasticamente, causando sua
                "quebra" (crash). Por sua vez, o colapso da Bolsa de Nova York
                provocou a Grande Depressão Americana, que perdurou até meados
                da década de 1930.
              </p>
            </section>
          </center>
          <br></br>
          <BotaoCurtir idSection="Bloco1Crise" tema="Crise de 1929"/>
        </section>
      </section>

      <br />

      <section className="Bloco-Antecedentes ">
        <section className="Texto-Antecedentes">
          <center>
            <section className="Titulo-Antecedentes">
              <h2>Antecedentes</h2>
            </section>
          </center>
          <section className="Para-Antece">
            <p>
              Antes de iniciar a Crise de 1929, houve-se acontecimentos que
              influenciaram para que ele acontecesse. Após a Primeira Guerra
              Mundial em 1918, a Europa estava devastada, enquanto os EUA se
              destacavam como a principal potência capitalista. Nos anos 1920,
              os americanos experimentaram prosperidade impulsionada pela
              superprodução e consumo excessivo, criando o American Way of Life,
              focado no consumo e na classe média.A Europa dependia de ajuda
              financeira dos EUA para se reconstruir, e os americanos
              emprestaram muito dinheiro sem exigir pagamento imediato,
              contribuindo para seu crescimento econômico. O governo dos EUA,
              liderado pelo Partido Republicano, adotava uma política de
              liberalismo econômico, e o princípio da não intervenção do Estado
              na economia. Com isso, não havia fiscalização sobre o mercado
              financeiro nem controle sobre os créditos concedidos, tanto aos
              consumidores internos quanto aos países estrangeiros. Essa
              ausência de regulação contribuiu para o desequilíbrio que mais
              tarde levaria à crise de 1929.
            </p>
          </section>
          <BotaoCurtir idSection="Bloco2Crise" tema="Crise de 1929"/>
        </section>

        <section className="Imgs-Juntas">
          <img className="Img-Ante" src={ImgAnte} alt="Antecedentes 1" />
          <br />
          <img className="Img-Ante" src={ImgAnte2} alt="Antecedentes 2" />
        </section>
      </section>

      <br />

      <section className="Bloco-Bolsa ">
        <section className="Bloco-Img">
          <img className="Img-Bolsa" src={ImgBolsa} alt="Bolsa de Valores" />
        </section>
        <section className="Texto-Bolsa">
          <center>
            <section className="Titulo-Bolsa">
              <h2>Bolsa de Valores</h2>
            </section>
          </center>
          <section className="Para-Bolsa">
            <p>
              Em 1929, a Bolsa de Valores de Nova York entrou em colapso, dando
              início à Grande Depressão. Nos anos anteriores, os EUA viviam um
              forte crescimento econômico, e muitas pessoas investiam na bolsa,
              muitas vezes com dinheiro emprestado, o que gerou uma bolha
              especulativa. Em 24 de outubro, a "quinta-feira negra", os preços
              das ações começaram a cair rapidamente, e o pânico se intensificou
              em 29 de outubro, a "terça-feira negra". Milhares de pessoas
              perderam tudo, empresas faliram, o desemprego disparou e a crise
              se espalhou pelo mundo. Como resposta, os EUA mudaram as regras do
              mercado financeiro.
            </p>
          </section>
          
        </section>
       <BotaoCurtir idSection="Bloco3Crise" tema="Crise de 1929"/>

      </section>
  

      <br />
      <br />

      <section className="Blocos-AnteFim ">
        <section className="Bloco-New ">
          <br />
          <section className="Bloco_Tex-Img">
            <section className="Bloco_img">
              <center>
                <img className="Img-New" src={ImgNew} alt="New Deal" />
              </center>

              <center>
                <header className="Titulo-New">
                  <h2>New Deal</h2>
                </header>
              </center>
              <center>
                <section className="Texto-New">
                  <p>
                    O New Deal consistiu em uma série de políticas e reformas
                    implementadas pelo presidente dos Estados Unidos, Franklin
                    D. Roosevelt, na década de 1930, com o objetivo de combater
                    a Grande Depressão, que teve início em 1929. A meta
                    principal era amenizar as consequências da crise econômica,
                    impulsionar a recuperação e evitar futuras recessões
                    econômicas.
                  </p>
                </section>
              </center>
            </section>
          </section>
            <BotaoCurtir idSection="Bloco4Crise" tema="Crise de 1929"/>
        </section>

        <section className="Bloco-Conse ">
          <center>
            <section className="Titulo-Conse">
              <h2>Consequências</h2>
            </section>
          </center>
          <br />
          <center>
            <img className="Img-Conse" src={ImgFConse} alt="Consequências" />
          </center>
          <br />
          <br />
          <center>
            <section className="Texto-Conse">
              <p>
                Após a Crise de 1929, várias consequências surgiram, sobretudo
                nos Estados Unidos. O PIB nacional diminuiu cerca de 50%, o
                desemprego aumentou para 27%, as importações diminuíram em 70% e
                as exportações, em 50%. Os financiamentos internacionais caíram
                90%, ao passo que a produção industrial teve uma queda de
                aproximadamente um terço. A produção de automóveis diminuiu 50%,
                o salário médio na indústria diminuiu 50%, e milhares de
                empresas e instituições financeiras entraram em falência.
                Milhares de indivíduos perderam de imediato todo o seu
                patrimônio, uma vez que estava aplicado em ativos especulativos
                que sumiram com o colapso da bolsa. Os impactos da crise se
                disseminaram globalmente, resultando em várias economias em
                recessão e gerando uma onda de desemprego em escala mundial.
              </p>
            </section>
          </center>
          <BotaoCurtir idSection="Bloco1Crise" tema="Crise de 1929"/>
        </section>
      </section>


      <section className="JuntosC">
        <section className="Bloco-VideoC" style={{ textAlign: "center" }}>
          <section>
            <h2 className="Titulo-VideoC">
              Vídeo explicativo sobre a Crise de 1929
            </h2>
          </section>
          <iframe
            className="Videoo"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/V5VXxyn6G24?si=aYsRpof7ZnuOTXNk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <section className="Texto-VideoC">
            <p>
              Em dezembro de 1918, após o fim da Primeira Guerra Mundial, a
              Europa havia quebrado. A crise financeira tomava conta de países
              como a Alemanha, o Império Otomano e a Iugoslávia enquanto isso,
              do outro lado do Atlântico as coisas pareciam um pouquinho
              diferentes. O American Way of Life é a nova forma de viver a vida.
              Um caminho próspero em direção à riqueza. Milhares de modelos Ford
              invadiram as ruas americanas, os eletrodomésticos ganhavam cada
              vez mais espaço e agora você pode ouvir seu programa favorito no
              rádio ou ver Charlie Chaplin no cinema. A América prosperava de
              uma forma nunca antes vista até 1929.{" "}
            </p>
          </section>
        </section>

        <section className="Bloco-FilmeC " style={{ textAlign: "center" }}>
          <section>
            <h2 className="Titulo-VideoC">
              Filme explicativo sobre a Crise de 1929
            </h2>
          </section>
          <iframe className="Videoo"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/msxfuH56wXE?si=7BpkHWdbGqqHv_bm"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="Texto-VideoC">
            <p>
              Após a Primeira Guerra Mundial, em 1918, os EUA eram a nação mais
              rica do mundo, destacando-se na produção de automóveis, aço,
              comida enlatada, petróleo e carvão. Nos anos seguintes, a economia
              americana cresceu, gerando otimismo entre os empresários e a
              popularização do “American Way of Life”. A década de 1920, chamada
              de “Loucos Anos 20”, foi marcada pelo aumento do consumo,
              crescimento da indústria e a popularização do cinema. Contudo,
              essa prosperidade era ilusória e culminou na Grande Crise de 1929,
              conhecida como “Quinta-Feira Negra”, devido à queda brusca das
              ações na Bolsa de Nova York. A superprodução agrícola e a
              diminuição do consumo foram alguns dos fatores que provocaram a
              crise. O governo, liderado por Roosevelt, implementou o New Deal
              em 1933, com medidas para recuperar a economia e diminuir o
              desemprego. A Grande Depressão só foi superada com o início da
              Segunda Guerra Mundial.
            </p>
          </div>
        </section>
      </section>

       <Footer corHeaderFooter="bordo" corInfoFooter="bordoClaro" logo={LogoSiteVermelhoEscuro}/>
    </>
  );
}

export default Crisede29;
