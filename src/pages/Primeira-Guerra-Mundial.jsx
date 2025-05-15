import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import "./style/Primeira-Guerra-Mundial.css";

function PrimeiraGuerraMundial() {
  const [position, setPosition] = useState(3);
  const totalItems = 5;

  const handlePrevious = () => {
    setPosition((prev) => (prev === 1 ? totalItems : prev - 1));
  };

  const handleNext = () => {
    setPosition((prev) => (prev === totalItems ? 1 : prev + 1));
  };

  return (
    <>
      <Navbar />
      <section className="blocoPrincipal">
        <center>
          <h1>
            CONHEÇA MAIS SOBRE A <br />
            <span id="textoConhecimento"> PRIMEIRA GUERRA MUNDIAL</span>...
          </h1>
        </center>

        <main id="carousel" style={{ "--position": position }}>
          <div className="item" style={{ "--offset": 1 }}>
            <img src="https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/wwi-trench-archaeology-01.webp?w=1600&h=900" alt="Sally Sharpe" />
            <h3 className="name">Sally Sharpe</h3>
            <p className="occupation">Marketing Admin</p>
            <p className="testimonial">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, suscipit?</p>
          </div>
          <div className="item" style={{ "--offset": 2 }}>
            <img src="https://static.historiadomundo.com.br/2024/05/rei-jorge-v-inspecionando-industria-armamentista-inglesa-durante-a-paz-armada-a-europa-se-preparava-para-a-guerra.jpg" alt="Michael John" />
            <h3 className="name">Michael John</h3>
            <p className="occupation">Cybersecurity Engineer</p>
            <p className="testimonial">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, dolore.</p>
          </div>
          <div className="item" style={{ "--offset": 3 }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ferdinand_Schmutzer_-_Franz_Ferdinand_von_%C3%96sterreich-Este%2C_um_1914.jpg/500px-Ferdinand_Schmutzer_-_Franz_Ferdinand_von_%C3%96sterreich-Este%2C_um_1914.jpg" alt="Mikayla Eddie" />
            <h3 className="name">Mikayla Eddie</h3>
            <p className="occupation">Software Engineer</p>
            <p className="testimonial">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, temporibus?</p>
          </div>
          <div className="item" style={{ "--offset": 4 }}>
            <img src="https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/07/soldados-franceses-rastejando-em-seus-proprios-emaranhados-de-arame-farpado-na-batalha-de-verdun-primeira-guerra-mundial.jpg" alt="Eve Smith" />
            <h3 className="name">Eve Smith</h3>
            <p className="occupation">UI/UX Designer</p>
            <p className="testimonial">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, beatae?</p>
          </div>
          <div className="item" style={{ "--offset": 5 }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/CobrasFumantes.svg/375px-CobrasFumantes.svg.png" alt="Luke Maxwell" />
            <h3 className="name">Luke Maxwell</h3>
            <p className="occupation">System Architect</p>
            <p className="testimonial">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, tempore.</p>
          </div>
        </main>

<center>
        <section className="botoes">
          <button
            onClick={handlePrevious}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#553d7a'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#6a4c93'}
            aria-label="Card anterior"
          > ◀ </button>
          <button
            onClick={handleNext}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#553d7a'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#6a4c93'}
            aria-label="Próximo card"
          > ▶ </button>
        </section>
        </center>

        <br/>

<center>
        <h1 id="infoWiki"> Informações Wikipédia </h1>
        </center>

<center>
<section className="informacoesWikipedia">
        <h1> INFORMAÇÕES DA API AQUI </h1>
        </section>
        </center>
      </section>

      <br/>
      <br/>
      <hr/>
      <br/>

      <center>
        <h1 id="infoPesq"> Informações Pesquisadas </h1>
        </center>

        <br/>


        <section className="blocoResumo">
            <section className="textoResumo">
                <center>
                <h1 id="tituloResumo"> Resumo </h1>
                </center>
                    <p> 
                        A Primeira Guerra Mundial, ocorrida entre 1914 e 1918, foi um conflito de proporções globais centrado na Europa, marcando 
                        o século XX com sua brutalidade e consequências duradouras. Caracterizou-se como uma "guerra total", na qual as nações 
                        mobilizaram integralmente seus recursos humanos, econômicos e industriais para o esforço bélico. Este confronto foi o 
                        resultado de uma complexa teia de transformações e tensões que se acumulavam no continente europeu, incluindo rivalidades 
                        econômicas, acontecimentos históricos e movimentos nacionalistas que colocaram diversas nações em rota de colisão.
                    </p>
            </section>

            <img src="https://i.ytimg.com/vi/ZfZAle8CVgg/maxresdefault.jpg" alt="Primeira Guerra Mundial" id="imagemResumo" />

        </section>

        <br/>
        <br/>
        <br/>

        <section className="blocoCausas">
            <section className="textoCausas">
                <center>
                <h1 id="tituloCausas"> Causas </h1>
                </center>
                    <p> 
                    <center> <strong> Disputas Imperialistas </strong> </center> 
                    O imperialismo e o colonialismo foram cruciais para essas tensões entre os países acontecerem. As potências europeias 
                    competiam fortemente por colônias na África e na Ásia, buscando mercado, matérias-primas e se beneficiar com o local.

                    <br/>
                    <br/>

                    <center> <strong> Política de Alianças </strong> </center>
                    A formação de alianças transformou a Europa em uma bomba relógio, que a qualquer momento poderia explodir. De um lado, 
                    formou-se a Tríplice Aliança, composta inicialmente pela Alemanha, Áustria-Hungria e Itália. Do outro, a Tríplice Entente, 
                    unida pela França, Rússia e o Reino Unido. Entre os acordos, muita vezes com cláusulas secretas militares, significavam 
                    que um conflito localizado poderia rapidamente escalar para uma guerra generalizada.

                    <br/>
                    <br/>

                    <center> <strong> Corrida Armamentista </strong> </center>
                    No tempo, uma intensa corrida armamentista tomou conta do continente. As nações europeias investiram na modernização 
                    e expansão de seus exércitos e marinhas, desenvolvendo novas tecnologias bélicas e aumentando seus efetivos militares. 
                    Esse clima de "paz armada" gerava desconfiança e aumentava a probabilidade de um confronto.

                    <br/>
                    <br/>

                    <center> <strong> Crises Internacionais </strong> </center>
                    Uma série de crises internacionais nos anos que antecederam a Grande Guerra, serviram para agravar ainda mais o cenário. 
                    Algumas crises deixaram incerteza em fronteira entre países rivais, o que poderia acontecer uma invasão e criar um combate 
                    generalizado, acarretando uma Guerra Mundial.
                    </p>
            </section>
        </section>

        <br/>
        <br/>

        <section className="blocoEstopim">
             <section className="blocoImagensEstopim">
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ferdinand_Schmutzer_-_Franz_Ferdinand_von_%C3%96sterreich-Este%2C_um_1914.jpg/500px-Ferdinand_Schmutzer_-_Franz_Ferdinand_von_%C3%96sterreich-Este%2C_um_1914.jpg" alt="Francisco Ferdinando" />
             <p id="nomesEstopim"> Francisco Ferdinando </p>

             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sophie_Chotek%2C_duchess_of_Hohenberg.jpg/368px-Sophie_Chotek%2C_duchess_of_Hohenberg.jpg" alt="Sofia Chotek" />
             <p id="nomesEstopim"> Sofia Chotek </p>
                </section>

             <section className="textoEstopim">
                <center>
                <h1 id="tituloEstopim"> Estopim </h1>
                </center>
                <p>
                    Mesmo com todas essas tensões, o que fez a guerra acontecer de verdade foi o assassinato do arquiduque Francisco Ferdinando, 
                    herdeiro do trono austro-húngaro, e de sua esposa, Sofia, em Sarajevo, capital da Bósnia, em 28 de junho de 1914.
                    O assassino foi Gavrilo Princip, um jovem estudante nacionalista sérvio-bósnio, membro de um grupo clandestino conhecido como 
                    Mão Negra, que possuía ligações com setores do governo sérvio.
                    A Áustria-Hungria, com o apoio da Alemanha, responsabilizou a Sérvia pelo atentado e apresentou um ultimato (processo de 
                    negociação diplomática) com exigências severas, que feriam a soberania sérvia. A recusa da Sérvia em aceitar integralmente 
                    os termos do ultimato levou a Áustria-Hungria a declarar guerra à Sérvia em 28 de julho de 1914. Daí por diante foi por água 
                    a baixo, as duas alianças preparava suas tropas para um conflito grande.
                </p>
             </section>

             <section className="blocoImagensEstopim">
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Gavrilo_Princip%2C_cell%2C_headshot%2C_bw.jpg/330px-Gavrilo_Princip%2C_cell%2C_headshot%2C_bw.jpg" alt="Gavrilo Princip" id="imgGavrilo" />
             <p id="nomesEstopim"> Gavrilo Princip </p>
             </section>
        </section>

        <br/>

<section className="blocoTotalPaises">
        <center>
            <h1 id="tituloPaises"> Países Envolvidos e Alianças </h1>
            </center>
        <section className="blocoPaises">
            <section className="textoAlianca">
                <center>
                <h1 id="tituloAlianca"> Tríplice Aliança </h1>
                </center>
                    <p> 
                    Tinham como membros originais a Alemanha e a Áustria-Hungria, que formavam a Dupla Aliança desde 1879. A Itália fazia parte 
                    da Tríplice Aliança desde 1882, mas inicialmente declarou neutralidade e, em 1915, juntou-se à Tríplice Entente. O Império 
                    Otomano e a Bulgária posteriormente se uniram a essa aliança também.
                    </p>
            </section>

<br/>
            <section className="blocoImagensPaises">
            <img src="https://morareviajar.net/wp-content/uploads/2018/03/bandeira_da_Alemanha_2.png" alt="Alemanha" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Civil_ensign_of_Austria-Hungary_%281869-1918%29.svg/972px-Civil_ensign_of_Austria-Hungary_%281869-1918%29.svg.png" alt="Áustria-Hungria" />
            
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Italy_%281861-1946%29_crowned.svg" alt="Itália" />
            
            </section>
            <section className="nomePaises">
            <p> Alemanha </p>
            <p> Áustria-Hungria </p>
            <p> Itália </p>
            </section>
            </section>

            <br/>

<section className="blocoPaises">
            <section className="textoEntente">
                <center>
                <h1 id="tituloEntente"> Tríplice Entente </h1>
                </center>
                    <p> 
                    Era composta inicialmente por França, Rússia e Reino Unido. A França e a Rússia tinham uma aliança desde 1892, e o Reino Unido 
                    juntou-se a elas em acordos posteriores, formando a Entente Cordiale com a França em 1904 e a Entente Anglo-Russa em 1907. 
                    Ao longo da guerra, diversos outros países se juntaram aos Aliados, incluindo Japão, Itália (a partir de 1915), Portugal, 
                    Romênia, Estados Unidos, etc.
                    </p>
            </section>
            <br/>

            <section className="blocoImagensPaises">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/500px-Flag_of_France.svg.png" alt="França" />
            
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1200px-Flag_of_the_United_Kingdom_%283-5%29.svg.png" alt="Reino Unido" />
            
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Flag_of_Russian_Empire_for_private_use_%281914%E2%80%931917%29_3.svg" alt="Rússia" />
            
            </section>
            <section className="nomePaises2">
            <p> França </p>
            <p> Reino Unido </p>
            <p> Rússia </p>
            </section>
            </section>
            </section>
        

        <br/>

        <h1 id="tituloFases"> Fases da Guerra </h1>
        <section className="blocoFases">
            
        </section>
    </>
  );
}

export default PrimeiraGuerraMundial;

