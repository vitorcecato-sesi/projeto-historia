import { useState } from "react";
import Img1C from "../assets/Imgs-Crisede1929/Canu1.png";
import Img2C from "../assets/Imgs-Crisede1929/Canu2.png";
import Img3C from "../assets/Imgs-Crisede1929/Canu3.png";
import Img4C from "../assets/Imgs-Crisede1929/Canu4.png";

import "./style/Crisede1929.css";
import ImgOq from "../assets/Imgs-Crisede1929/Crise1.png";
import ImgAnte from "../assets/Imgs-Crisede1929/Crise2.png";
import ImgAnte2 from "../assets/Imgs-Crisede1929/Crise3.png";
import ImgBolsa from "../assets/Imgs-Crisede1929/ImgBolsa.png";
import ImgNew from "../assets/Imgs-Crisede1929/Img-New.png";
import ImgFConse from "../assets/Imgs-Crisede1929/Img-Conse.png";

import Navbar from "../components/Navbar";
import APIWikipedia from "../components/APIWikipedia";

const imagens = [Img1C, Img2C, Img3C, Img4C];

function Crisede29() {
  const [index, setIndex] = useState(0);

  return (
    <>
    <Navbar/>
      <section className="Bloco-CarrosselC">
        <div className="Carrossel-ContainerC">
          <button
            className="Botao-Carrossel EsquerdaC"
            onClick={() =>
              setIndex((prev) => (prev === 0 ? imagens.length - 1 : prev - 1))
            }
          >
            ‹
          </button>

          <img
            src={imagens[index]}
            alt={`Slide ${index + 1}`}
            className="Imagem-Carrossel"
          />

          <button
            className="Botao-Carrossel DireitaC"
            onClick={() =>
              setIndex((prev) => (prev === imagens.length - 1 ? 0 : prev + 1))
            }
          >
            ›
          </button>
        </div>

        <div className="BolinhasC" style={{ textAlign: "center" }}>
          {imagens.map((_, i) => (
            <span
              key={i}
              className={`BolaC ${i === index ? "activeC" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </section>

      <br />
      <br />

      <section className="Blocao-WikieApiC">
        <article className="Api-WikipediaC">
          <center>
          <header className="Titulo-ApiC" >
            <h2>Informações da Wikipédia</h2>
          </header>
          </center>

          <div className="Texto-ApiC">
            <section className="textwikiC" id="wikiGCa">
              <APIWikipedia titulo="Grande Depressão" campoWiki="wikiGCa" />
            </section>
          </div>
        </article>

        <article className="Bloco-OqFoi">
          <center>
          <header className="Titulo-OqFoi" >
            <h2>O que foi?</h2>
          </header>
          </center>
          <div>
            <img className="img-Oq" src={ImgOq} alt="Crise de 1929" />
          </div>
          <center>
            <br></br>
          <div className="Texto-OqFoi" >
            <p>
              A Crise de 1929, que ocorreu entre a Primeira e a Segunda Guerra
              Mundial, foi um dos eventos mais significativos da História
              Moderna. Esta crise aconteceu entre os meses de setembro e outubro
              de 1929 nos Estados Unidos, onde o valor das ações da Bolsa de
              Valores de Nova York caiu drasticamente, causando sua "quebra"
              (crash). Por sua vez, o colapso da Bolsa de Nova York provocou a
              Grande Depressão Americana, que perdurou até meados da década de
              1930.
            </p>
          </div>
          </center>
        </article>
      </section>

      <br />

      <article className="Bloco-Antecedentes">
        <div className="Imgs-Juntas">
          <img className="Img-Ante" src={ImgAnte} alt="Antecedentes 1" />
          <br />
          <img className="Img-Ante" src={ImgAnte2} alt="Antecedentes 2" />
        </div>

        <div className="Texto-Antecedentes">
          <center>
          <header className="Titulo-Antecedentes">
            <h2>Antecedentes</h2>
          </header>
          </center>
          <div className="Para-Antece">
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
          </div>
        </div>
      </article>

      <br />

      <article className="Bloco-Bolsa" >
        <div className="Bloco-Img">
          <img className="Img-Bolsa" src={ImgBolsa} alt="Bolsa de Valores" />
        </div>
        <div className="Texto-Bolsa">
          <center>
          <header className="Titulo-Bolsa">
            <h2>Bolsa de Valores</h2>
          </header>
          </center>
          <div className="Para-Bolsa">
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
          </div>
        </div>
      </article>

      <br />
      <br />
  
      <section className="Blocos-AnteFim">
        <article className="Bloco-New" >
          <br />
          <center>
          <img className="Img-New" src={ImgNew} alt="New Deal" />
          </center>
        <center>
          <header className="Titulo-New">
            <h2>New Deal</h2>
          </header>
          </center>
       <center>
          <div className="Texto-New">
            <p>
              O New Deal consistiu em uma série de políticas e reformas
              implementadas pelo presidente dos Estados Unidos, Franklin D.
              Roosevelt, na década de 1930, com o objetivo de combater a Grande
              Depressão, que teve início em 1929. A meta principal era amenizar
              as consequências da crise econômica, impulsionar a recuperação e
              evitar futuras recessões econômicas.
            </p>
          </div>
          </center>
        </article>
        
      

        <article className="Bloco-Conse" >
          <center>
          <header className="Titulo-Conse">
            <h2>Consequências</h2>
          </header>
          </center>
          <br />
          <center>
          <img className="Img-Conse" src={ImgFConse} alt="Consequências" />
          </center>
          <br />
          <br />
          <center>
          <div className="Texto-Conse">
            <p>
              Após a Crise de 1929, várias consequências surgiram, sobretudo nos
              Estados Unidos. O PIB nacional diminuiu cerca de 50%, o desemprego
              aumentou para 27%, as importações diminuíram em 70% e as
              exportações, em 50%. Os financiamentos internacionais caíram 90%,
              ao passo que a produção industrial teve uma queda de
              aproximadamente um terço. A produção de automóveis diminuiu 50%, o
              salário médio na indústria diminuiu 50%, e milhares de empresas e
              instituições financeiras entraram em falência. Milhares de
              indivíduos perderam de imediato todo o seu patrimônio, uma vez que
              estava aplicado em ativos especulativos que sumiram com o colapso
              da bolsa. Os impactos da crise se disseminaram globalmente,
              resultando em várias economias em recessão e gerando uma onda de
              desemprego em escala mundial.
            </p>
          </div>
          </center>
        </article>
      </section>

      <br />

      <hr />

      <section className="JuntosC">
        <article className="Bloco-VideoC" style={{ textAlign: "center" }}>
          <header>
            <h2 className="Titulo-VideoC">
              Vídeo explicativo sobre a Crise de 1929
            </h2>
          </header>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/V5VXxyn6G24?si=aYsRpof7ZnuOTXNk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="Texto-VideoC">
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
          </div>
        </article>

        <article className="Bloco-FilmeC" style={{ textAlign: "center" }}>
          <header>
            <h2 className="Titulo-VideoC">
              Filme explicativo sobre a Crise de 1929
            </h2>
          </header>
          <iframe
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
        </article>
      </section>
    </>
  );
}

export default Crisede29;
