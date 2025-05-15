import React, { useState } from "react";
import Img1C from "../assets/Imgs-Crisede1929/Canu1.png"
import Img2C from "../assets/Imgs-Crisede1929/Canu2.png"
import Img3C from "../assets/Imgs-Crisede1929/Canu3.png" 
import Img4C from "../assets/Imgs-Crisede1929/Canu4.png"   
    
import "./style/Crisede1929.css"
import ImgOq from "../assets/Imgs-Crisede1929/Crise1.png"
import ImgAnte from "../assets/Imgs-Crisede1929/Crise2.png"
import ImgAnte2 from "../assets/Imgs-Crisede1929/Crise3.png"    



import APIWikipedia from "../components/APIWikipedia";

const imagens = [Img1C, Img2C, Img3C, Img4C];

function Crisede29() {
  const [index, setIndex] = useState(0);

  return (
    <>
     <div className="Bloco-Carrossel">
 
  <div className="Carrossel-Container">
    <button
      className="Botao-Carrossel Esquerda"
      onClick={() => setIndex((prev) => (prev === 0 ? imagens.length - 1 : prev - 1))}
    >
      ‹
    </button>

    <img
      src={imagens[index]}
      alt={`Slide ${index + 1}`}
      className="Imagem-Carrossel"
    />

    <button
      className="Botao-Carrossel Direita"
      onClick={() => setIndex((prev) => (prev === imagens.length - 1 ? 0 : prev + 1))}
    >
      ›
    </button>
  </div>
<center>
  <div className="Bolinhas">
    {imagens.map((_, i) => (
      <span
        key={i}
        className={`Bola ${i === index ? "active" : ""}`}
        onClick={() => setIndex(i)}
      />
    ))}
  </div>
  </center>
</div>

<br></br>
<br></br>

      <div className="Blocao-WikieApi">
        <div className="Api-Wikipedia">
          <center>
            <div className="Titulo-Api">
              <h2>Informações da Wikipédia</h2>
            </div>
          </center>

          <br />

          <center>
            <div className="Texto-Api">
              <section className="textwiki" id="wikiGCa">
              <APIWikipedia titulo="Crise de 1929" campoWiki="wikiGCa"/>
              </section>
            </div>
          </center>
        </div>

        <div className="Bloco-OqFoi">
          <center>
            <div className="Titulo-OqFoi">
              <h2>O que foi?</h2>
            </div>
          </center>
          <div>
            <img className="img-Oq"src={ImgOq} ></img>
          </div>
          <br />
          <center>
            <div className="Texto-OqFoi">
              <p>
              A Crise de 1929, que ocorreu entre a Primeira e a Segunda Guerra Mundial,
               foi um dos eventos mais significativos da História Moderna. Esta crise 
               aconteceu entre os meses de setembro e outubro de 1929 nos Estados Unidos,
                onde o valor das ações da Bolsa de Valores de Nova York caiu drasticamente,
                 causando sua "quebra" (crash). Por sua vez, o colapso da Bolsa de Nova York
                  provocou a Grande Depressão Americana, que perdurou até meados da década de 1930.
 

              </p>
            </div>
          </center>
        </div>
      </div>
      <br></br>

      <center>
        <div className="Bloco-Antecedentes">
            <div className="Imgs-Juntas">
          <div>
            <img className="Img-Ante" src={ImgAnte} ></img>
          </div>
          <div>
            <img className="Img-Ante" src={ImgAnte2} ></img>
          </div>
          </div>

          <div className="Texto-Antecedentes">
            <div className="Titulo-Antecedentes">
              <h2>Antecedentes </h2>
            </div>
            <p>
            Antes de iniciar a Crise de 1929, houve-se acontecimentos que influenciaram para que ele acontecesse. Após a Primeira Guerra Mundial em 1918, a Europa estava devastada, enquanto os EUA se destacavam como a principal potência capitalista. Nos anos 1920, os americanos experimentaram prosperidade impulsionada pela superprodução e consumo excessivo, criando o American Way of Life, focado no consumo e na classe média.A Europa dependia de ajuda financeira dos EUA para se reconstruir, e os americanos emprestaram muito dinheiro sem exigir pagamento imediato, contribuindo para seu crescimento econômico. 
O governo dos EUA, liderado pelo Partido Republicano, adotava uma política de liberalismo econômico, e o princípio da não intervenção do Estado na economia. Com isso, não havia fiscalização sobre o mercado financeiro nem controle sobre os créditos concedidos, tanto aos consumidores internos quanto aos países estrangeiros. Essa ausência de regulação contribuiu para o desequilíbrio que mais tarde levaria à crise de 1929.

            </p>
          </div>
        </div>
      </center>
      <br></br>

      <center>
        <div className="Bloco-Bolsa">
          <div>
            <img className="Img-OqInflu" src={} ></img>
          </div>

          <div className="Texto-Bolsa">
            <div className="Titulo-Bolsa">
              <h2>Bolsa de Valores</h2>
            </div>
            <p>
            Em 1929, a Bolsa de Valores de Nova York entrou em colapso, dando início à Grande Depressão. Nos anos anteriores, os EUA viviam um forte crescimento econômico, e muitas pessoas investiam na bolsa, muitas vezes com dinheiro emprestado, o que gerou uma bolha especulativa. Em 24 de outubro, a "quinta-feira negra", os preços das ações começaram a cair rapidamente, e o pânico se intensificou em 29 de outubro, a "terça-feira negra". Milhares de pessoas perderam tudo, empresas faliram, o desemprego disparou e a crise se espalhou pelo mundo. Como resposta, os EUA mudaram as regras do mercado financeiro.

            </p>
          </div>
        </div>
      </center>

      <br></br>
      <br></br>

      <div className="Blocos-AnteFim">
        <div className="Bloco-Anto">
          <center>
            <br></br>
            {/* <img className="ImgAn"></img> */}
            <div className="Titulo-Anto">
              <h2>New Deal</h2>
            </div>
            <div className="Texto-Anto">
              <p>
              O New Deal consistiu em uma série de políticas e reformas implementadas pelo presidente dos Estados Unidos, Franklin D. Roosevelt, na década de 1930, com o objetivo de combater a Grande Depressão, que teve início em 1929. A meta principal era amenizar as consequências da crise econômica, impulsionar a recuperação e evitar futuras recessões econômicas.

              </p>
            </div>
          </center>
        </div>

        <div className="Bloco-Fim">
          <center>
            <div className="Titulo-Fim">
              <h2>Consequências</h2>
            </div>
            <br></br>
            {/* <img className="ImgFim"></img> */}
            <br></br>
            <br></br>

            <div className="Texto-Fim">
              <p>
              Após a Crise de 1929, várias consequências surgiram, sobretudo nos Estados Unidos. O PIB nacional diminuiu cerca de 50%, o desemprego aumentou para 27%, as importações diminuíram em 70% e as exportações, em 50%. Os financiamentos internacionais caíram 90%, ao passo que a produção industrial teve uma queda de aproximadamente um terço. A produção de automóveis diminuiu 50%, o salário médio na indústria diminuiu 50%, e milhares de empresas e instituições financeiras entraram em falência. Milhares de indivíduos perderam de imediato todo o seu patrimônio, uma vez que estava aplicado em ativos especulativos que sumiram com o colapso da bolsa. Os impactos da crise se disseminaram globalmente, resultando em várias economias em recessão e gerando uma onda de desemprego em escala mundial.

              </p>
            </div>
          </center>
        </div>
      </div>
      <br></br>

      <hr></hr>
      
    </>
  );
}

export default Crisede29;