// Importa o hook useState do React para gerenciar estados no componente
import { useState } from "react";

// Importa o arquivo de estilos CSS específico desta página
import "./style/Primeira-Guerra-Mundial.css";
// Importa a imagem do logo na cor cinza
import LogoSiteCinza from "../assets/Logos/LogoSiteCinza.png";

// Importa componentes reutilizáveis do projeto
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import APIWikipedia from "../components/APIWikipedia";
import BotaoCurtirTema from "../components/BotaoCurtirTema";
import BotaoTema from "../components/BotaoTema";


function PrimeiraGuerraMundial() {
  const [posicaoCard, setPosicaoCard] = useState(3); // Cria um estado para controlar qual card está visível no carrossel, começando pelo card 3
  const totalDeCard = 5; // Define o total de cards do carrossel

  // Função para ir ao card anterior no carrossel
  const anterior = () => {
    // Se estiver no primeiro card, volta para o último; senão, vai para o anterior
    setPosicaoCard((card) => (card === 1 ? totalDeCard : card - 1)); // "Card" = posição atual do Card
  };

  // Função para ir ao próximo card no carrossel
  const proximo = () => {
    // Se estiver no último card, volta para o primeiro; senão, vai para o próximo
    setPosicaoCard((card) => (card === totalDeCard ? 1 : card + 1)); // "Card" = posição atual do Card
  };

  return (
    <>
      <Navbar backgroundId="navbarPrimeiraGuerra" logo={LogoSiteCinza} /> {/* Componente Navbar com seus devidos Props */}

      <section className="blocoPrincipal">

        {/* Título da página */}
        <center>
          <h1>
            CONHEÇA MAIS SOBRE A <br />
            <span id="textoConhecimento"> PRIMEIRA GUERRA MUNDIAL </span>...
          </h1>
        </center>

        {/* Carrossel de cards */}
        <section className="carouselFMW" style={{ "--position": posicaoCard }}>
        {/* "--position": posicaoCard  => Isso permite que o CSS use essa variável para controlar qual Card estará destacado */}

          {/* ! Cada card apresenta um tema diferente ! */}
          {/* Card 1 */}
          <section className="card" style={{ "--offset": 1 }}>
            <section className="textoNoCard">
              <h3>Brasil</h3>
              <p>Com pequenas ajudas à aliados.</p>
            </section>
          </section>

          {/* Card 2 */}
          <section className="card" style={{ "--offset": 2 }}>
            <section className="textoNoCard">
              <h3>Inovação Armamentista</h3>
              <p>Corridas entre quem era o mais poderoso.</p>
            </section>
          </section>

          {/* Card 3 */}
          <section className="card" style={{ "--offset": 3 }}>
            <section className="textoNoCard">
              <h3>Franciso Ferdinando</h3>
              <p>O assassinato que causou tudo.</p>
            </section>
          </section>

          {/* Card 4 */}
          <section className="card" style={{ "--offset": 4 }}>
            <section className="textoNoCard">
              <h3>Alemanha</h3>
              <p>A gigantesca perdedora.</p>
            </section>
          </section>

          {/* Card 5 */}
          <section className="card" style={{ "--offset": 5 }}>
            <section className="textoNoCard">
              <h3>As Trincheiras </h3>
              <p>Um combate parado e brutal entre valas.</p>
            </section>
          </section>

        </section>

        {/* Botões para navegar entre os cards do carrossel */}
        <center>
          <section className="botoes">
            <button onClick={anterior}> ◀ </button>
            <button onClick={proximo}> ▶ </button>
          </section>
        </center>

        <br />

        {/* Título Informações da Wikipédia */}
        <center>
          <h1 id="infoWiki"> Informações Wikipédia </h1>
        </center>

        {/* Botão para mudar o tema da página */}
        <BotaoTema />

        {/* Bloco que exibe informações vindas da API da Wikipédia */}
        <center>
          <section className="informacoesWikipedia">

            {/* Componente que busca e mostra informações da Wikipédia */}
            <APIWikipedia
              titulo="Primeira Guerra Mundial"
              campoWiki="wiki"
              imagemID="imgPrimeiraGuerraMundial"
              imagemAlt="Primeira Guerra Mundial"
              imagemClass="imagemAPI"
            />

            {/* Local onde o texto da Wikipédia será exibido */}
            <section className="wiki" id="wiki"></section>

            {/* Imagem da Wikipédia será exibida aqui */}
            <img id="imgPrimeiraGuerraMundial" />

          </section>
        </center>

      </section>

      <br />
      <br />
      <hr />
      <br />

      {/* Título da seção de informações pesquisadas */}
      <center>
        <h1 id="infoPesq"> Informações Pesquisadas </h1>
      </center>

      <br />

      {/* Bloco de resumo sobre a Primeira Guerra Mundial */}
      <section className="blocoResumo">

        <section className="textoResumo">

          <center>
            <h1 id="tituloResumo"> Resumo </h1>
          </center>

          <p>
            A Primeira Guerra Mundial, ocorrida entre 1914 e 1918, foi um
            conflito de proporções globais centrado na Europa, marcando o século
            XX com sua brutalidade e consequências duradouras. Caracterizou-se
            como uma "guerra total", na qual as nações mobilizaram integralmente
            seus recursos humanos, econômicos e industriais para o esforço
            bélico. Este confronto foi o resultado de uma complexa teia de
            transformações e tensões que se acumulavam no continente europeu,
            incluindo rivalidades econômicas, acontecimentos históricos e
            movimentos nacionalistas que colocaram diversas nações em rota de
            colisão.
          </p>

          {/* Botão para curtir o tema */}
          <BotaoCurtirTema idSection="bloco1PG" tema="Primeira Guerra Mundial" />

        </section>

        {/* Imagem do resumo */}
        <img
          src="https://i.ytimg.com/vi/ZfZAle8CVgg/maxresdefault.jpg"
          alt="Primeira Guerra Mundial"
          id="imagemResumo"
        />

      </section>

      <br />
      <br />
      <br />

      {/* Bloco explicando as causas da guerra */}
      <section className="blocoCausas">

        <section className="textoCausas">

          <center>
            <h1 id="tituloCausas"> Causas </h1>
          </center>

          {/* Subtítulos e parágrafos para cada causa */}
          <center>
            <h4>
              <strong> Disputas Imperialistas </strong>
            </h4>
          </center>

          <p>
            O imperialismo e o colonialismo foram cruciais para essas tensões
            entre os países acontecerem. As potências europeias competiam
            fortemente por colônias na África e na Ásia, buscando mercado,
            matérias-primas e se beneficiar com o local.
          </p>

          <center>
            <h4>
              <strong> Política de Alianças </strong>
            </h4>
          </center>

          <p>
            A formação de alianças transformou a Europa em uma bomba relógio,
            que a qualquer momento poderia explodir. De um lado, formou-se a
            Tríplice Aliança, composta inicialmente pela Alemanha,
            Áustria-Hungria e Itália. Do outro, a Tríplice Entente, unida pela
            França, Rússia e o Reino Unido. Entre os acordos, muita vezes com
            cláusulas secretas militares, significavam que um conflito
            localizado poderia rapidamente escalar para uma guerra generalizada.
          </p>

          <center>
            <h4>
              <strong> Corrida Armamentista </strong>
            </h4>
          </center>

          <p>
            No tempo, uma intensa corrida armamentista tomou conta do
            continente. As nações europeias investiram na modernização e
            expansão de seus exércitos e marinhas, desenvolvendo novas
            tecnologias bélicas e aumentando seus efetivos militares. Esse clima
            de "paz armada" gerava desconfiança e aumentava a probabilidade de
            um confronto.
          </p>

          <center>
            <h4>
              <strong> Crises Internacionais </strong>
            </h4>
          </center>

          <p>
            Uma série de crises internacionais nos anos que antecederam a Grande
            Guerra, serviram para agravar ainda mais o cenário. Algumas crises
            deixaram incerteza em fronteira entre países rivais, o que poderia
            acontecer uma invasão e criar um combate generalizado, acarretando
            uma Guerra Mundial.
          </p>

          {/* Botão para curtir o tema */}
          <BotaoCurtirTema idSection="bloco2PG" tema="Primeira Guerra Mundial" />
        </section>

      </section>

      <br />
      <br />

      {/* Bloco explicando o estopim da guerra, com imagens dos envolvidos */}
      <section className="blocoEstopim">

        <section className="blocoImagensEstopim">

          {/* Imagem de Francisco Ferdinando */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ferdinand_Schmutzer_-_Franz_Ferdinand_von_%C3%96sterreich-Este%2C_um_1914.jpg/500px-Ferdinand_Schmutzer_-_Franz_Ferdinand_von_%C3%96sterreich-Este%2C_um_1914.jpg"
            alt="Francisco Ferdinando"
          />
          <p id="nomesEstopim"> Francisco Ferdinando </p>

          {/* Imagem de Sofia Chotek */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sophie_Chotek%2C_duchess_of_Hohenberg.jpg/368px-Sophie_Chotek%2C_duchess_of_Hohenberg.jpg"
            alt="Sofia Chotek"
          />
          <p id="nomesEstopim"> Sofia Chotek </p>
        </section>

        <section className="textoEstopim">

          <center>
            <h1 id="tituloEstopim"> Estopim </h1>
          </center>

          <p>
            {/* Explicação sobre o assassinato que iniciou a guerra */}
            Mesmo com todas essas tensões, o que fez a guerra acontecer de
            verdade foi o assassinato do arquiduque Francisco Ferdinando,
            herdeiro do trono austro-húngaro, e de sua esposa, Sofia, em
            Sarajevo, capital da Bósnia, em 28 de junho de 1914. O assassino foi
            Gavrilo Princip, um jovem estudante nacionalista sérvio-bósnio,
            membro de um grupo clandestino conhecido como Mão Negra, que possuía
            ligações com setores do governo sérvio. A Áustria-Hungria, com o
            apoio da Alemanha, responsabilizou a Sérvia pelo atentado e
            apresentou um ultimato (processo de negociação diplomática) com
            exigências severas, que feriam a soberania sérvia. A recusa da
            Sérvia em aceitar integralmente os termos do ultimato levou a
            Áustria-Hungria a declarar guerra à Sérvia em 28 de julho de 1914.
            Daí por diante foi por água a baixo, as duas alianças preparava suas
            tropas para um conflito grande.
          </p>

          {/* Botão para curtir o tema */}
          <BotaoCurtirTema idSection="bloco3PG" tema="Primeira Guerra Mundial" />

        </section>

        <section className="blocoImagensEstopim">
          {/* Imagem de Gavrilo Princip */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Gavrilo_Princip%2C_cell%2C_headshot%2C_bw.jpg/330px-Gavrilo_Princip%2C_cell%2C_headshot%2C_bw.jpg"
            alt="Gavrilo Princip"
            id="imgGavrilo"
          />
          <p id="nomesEstopim"> Gavrilo Princip </p>
        </section>

      </section>

      {/* Bloco sobre os países envolvidos e suas alianças */}
      <section className="blocoTotalPaises">

        <center>
          <h1 id="tituloPaises"> Países Envolvidos e Alianças </h1>
        </center>

        {/* Bloco da Tríplice Aliança */}
        <section className="blocoPaises">

          <section className="textoAlianca">

            <center>
              <h1 id="tituloAlianca"> Tríplice Aliança </h1>
            </center>

            <p>
              {/* Explicação sobre os países da Tríplice Aliança */}
              Tinham como membros originais a Alemanha e a Áustria-Hungria, que
              formavam a Dupla Aliança desde 1879. A Itália fazia parte da
              Tríplice Aliança desde 1882, mas inicialmente declarou
              neutralidade e, em 1915, juntou-se à Tríplice Entente. O Império
              Otomano e a Bulgária posteriormente se uniram a essa aliança
              também.
            </p>

            {/* Botão para curtir o tema */}
            <BotaoCurtirTema idSection="bloco4PG" tema="Primeira Guerra Mundial" />

          </section>

          <br />

          {/* Imagens das bandeiras dos países da Tríplice Aliança */}
          <section className="blocoImagensPaises">

            <img
              src="https://morareviajar.net/wp-content/uploads/2018/03/bandeira_da_Alemanha_2.png"
              alt="Alemanha"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Civil_ensign_of_Austria-Hungary_%281869-1918%29.svg/972px-Civil_ensign_of_Austria-Hungary_%281869-1918%29.svg.png"
              alt="Áustria-Hungria"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Italy_%281861-1946%29_crowned.svg"
              alt="Itália"
            />

          </section>

          {/* Nomes dos países */}
          <section className="nomePaises">
            <p> Alemanha </p>
            <p> Áustria-Hungria </p>
            <p> Itália </p>
          </section>

        </section>

        <br />

        {/* Bloco da Tríplice Entente */}
        <section className="blocoPaises">

          <section className="textoEntente">

            <center>
              <h1 id="tituloEntente"> Tríplice Entente </h1>
            </center>

            <p>
              {/* Explicação sobre os países da Tríplice Entente */}
              Era composta inicialmente por França, Rússia e Reino Unido. A
              França e a Rússia tinham uma aliança desde 1892, e o Reino Unido
              juntou-se a elas em acordos posteriores, formando a Entente
              Cordiale com a França em 1904 e a Entente Anglo-Russa em 1907. Ao
              longo da guerra, diversos outros países se juntaram aos Aliados,
              incluindo Japão, Itália (a partir de 1915), Portugal, Romênia,
              Estados Unidos, etc.
            </p>

            {/* Botão para curtir o tema */}
            <BotaoCurtirTema idSection="bloco5PG" tema="Primeira Guerra Mundial" />

          </section>

          <br />

          {/* Imagens das bandeiras dos países da Tríplice Entente */}
          <section className="blocoImagensPaises">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/500px-Flag_of_France.svg.png"
              alt="França"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1200px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
              alt="Reino Unido"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/82/Flag_of_Russian_Empire_for_private_use_%281914%E2%80%931917%29_3.svg"
              alt="Rússia"
            />

          </section>

          {/* Nomes dos países */}
          <section className="nomePaises2">
            <p> França </p>
            <p> Reino Unido </p>
            <p> Rússia </p>
          </section>

        </section>

      </section>

      <br />

      {/* Título da seção sobre as fases da guerra */}
      <center>
        <h1 id="tituloFasesPrincipal"> Fases da Guerra </h1>
      </center>

      {/* Bloco sobre a fase "Guerra de Movimento" */}
      <section className="blocoFases">

        <section className="textoFase">

          <center>
            <h1 id="tituloFases"> Guerra de Movimento </h1>
          </center>

          <p>
            {/* Explicação sobre a fase inicial da guerra */}
            Esta fase inicial foi marcada por uma intensa movimentação das
            tropas, com os exércitos buscando obter vantagens rápidas e
            decisivas. O principal exemplo foi o Plano Schlieffen alemão, que
            previa uma invasão rápida da Bélgica e da França para derrotar os
            franceses antes que a Rússia pudesse mobilizar completamente suas
            forças no leste. Os alemães avançaram significativamente, chegando
            perto de Paris, mas foram detidos na Primeira Batalha do Marne em
            setembro de 1914. No leste, os russos invadiram a Prússia Oriental,
            mas foram derrotados pelos alemães nas batalhas de Tannenberg e dos
            Lagos Masurianos. A invasão austríaca da Sérvia também marcou esta
            fase.
          </p>

          {/* Botão para curtir o tema */}
          <BotaoCurtirTema idSection="bloco6PG" tema="Primeira Guerra Mundial" />
        </section>

        {/* Imagem da fase */}
        <section className="blocoImagemFase">
          <img
            src="https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/07/soldados-franceses-rastejando-em-seus-proprios-emaranhados-de-arame-farpado-na-batalha-de-verdun-primeira-guerra-mundial.jpg"
            alt="Guerra de Movimento"
          />
        </section>

      </section>

      <br />
      <br />

      {/* Bloco sobre a fase "Guerra das Trincheiras" */}
      <section className="blocoFases">

        <section className="blocoImagemFase">

          <img
            src="https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/wwi-trench-archaeology-01.jpg?w=1900&h=1447"
            alt="Guerra das Trincheiras"
          />

        </section>

        <section className="textoFase">
          <center>
            <h1 id="tituloFases"> Guerra das Trincheiras </h1>
          </center>

          <p>
            {/* Explicação sobre a fase de guerra de trincheiras */}
            Após o fracasso dos planos iniciais de uma vitória rápida, a guerra
            na Frente Ocidental estagnou em um sistema brutal de trincheiras. Os
            exércitos cavaram extensas redes de fortificações, separadas por uma
            faixa de terra devastada conhecida como "terra de ninguém". Esta
            fase foi caracterizada por um imenso desgaste humano e material, com
            pouca mobilidade territorial e batalhas extremamente sangrentas,
            como Verdun e Somme em 1916, que resultaram em centenas de milhares
            de mortos e feridos sem ganhos estratégicos significativos. Novas
            armas, como gases tóxicos e tanques, foram introduzidas na tentativa
            de romper o impasse, mas com sucesso limitado inicialmente. A vida
            nas trincheiras era miserável, marcada por doenças, lama, ratos e o
            constante bombardeio da artilharia.
          </p>

          {/* Botão para curtir o tema */}
          <BotaoCurtirTema idSection="bloco7PG" tema="Primeira Guerra Mundial" />
        </section>

      </section>

      <br />
      <br />

      {/* Bloco sobre a fase "Ofensivas de 1918" */}
      <section className="blocoFases">

        <section className="textoFase">

          <center>
            <h1 id="tituloFases"> Ofensivas de 1918 </h1>
          </center>

          <p>
            {/* Explicação sobre as ofensivas finais da guerra */}
            O ano de 1917 trouxe dois eventos cruciais que alteraram o curso da
            guerra: a saída da Rússia do conflito após a Revolução Bolchevique
            (formalizada pelo Tratado de Brest-Litovsk em março de 1918) e a
            entrada dos Estados Unidos ao lado dos Aliados em abril de 1917. Com
            a frente oriental desativada, a Alemanha concentrou suas forças no
            oeste e lançou uma série de grandes ofensivas na primavera de 1918
            (Ofensiva da Primavera ou Kaiserschlacht) na tentativa de obter uma
            vitória decisiva antes que o poderio americano pudesse ser
            totalmente mobilizado. Essas ofensivas alemãs obtiveram ganhos
            iniciais, mas foram contidas. A chegada maciça de tropas e recursos
            americanos fortaleceu os Aliados, que lançaram uma contraofensiva
            bem-sucedida, conhecida como a Ofensiva dos Cem Dias, a partir de
            agosto de 1918. As Potências Centrais, exauridas economicamente e
            militarmente, começaram a entrar em colapso. A Bulgária rendeu-se em
            setembro, seguida pelo Império Otomano em outubro e pela
            Áustria-Hungria no início de novembro. Na Alemanha, a agitação
            interna e a abdicação do Kaiser Guilherme II levaram à proclamação
            da república e à assinatura do Armistício de Compiègne em 11 de
            novembro de 1918, pondo fim aos combates.
          </p>

          {/* Botão para curtir o tema */}
          <BotaoCurtirTema idSection="bloco8PG" tema="Primeira Guerra Mundial" />
        </section>

        {/* Imagem da fase */}
        <section className="blocoImagemFase">
          <img
            src="https://aulazen.com/wp-content/uploads/2018/06/A-ofensiva-de-cem-dias-Primeira-Guerra-Mundial.jpg"
            alt="Ofensiva de 1918"
          />
        </section>

      </section>

      <br />
      <br />

      {/* Título da seção sobre tecnologias e táticas */}
      <center>
        <h1 id="tituloTec"> Tecnologias e Táticas </h1>
      </center>
      {/* Bloco sobre as tecnologias usadas na guerra */}
      <section className="blocoTec">

        <section className="textoTec">

          <p>
            {/* Explicação sobre as novas tecnologias e táticas */}
            Novas tecnologias como metralhadoras, artilharia pesada, gases
            tóxicos, tanques e aviões foram introduzidas, levando a táticas de
            guerra de trincheiras e inúmeras baixas (mortes).
          </p>

          {/* Botão para curtir o tema */}
          <BotaoCurtirTema idSection="bloco9PG" tema="Primeira Guerra Mundial" />
        </section>

        {/* Imagens as tecnologias */}
        <section className="blocoImagensTec">
          <img
            src="https://www.educacaonamao.com.br/wp-content/uploads/2018/05/primeira-guerra-mundial-1.jpg"
            alt="Gases Tóxicos"
          />

          <img
            src="https://netnature.wordpress.com/wp-content/uploads/2019/07/sem-tc3adtulo-54.png?w=768&h=432"
            alt="Tanques"
          />

          <img
            src="https://i.em.com.br/PSLL_QZt7JpjdDNTJSdeq1GPSU4=/820x0/smart/imgsapp.em.com.br/app/noticia_127983242361/2014/06/28/542887/20140627135533659137o.jpg"
            alt="Artilharia Pesada"
          />
        </section>

      </section>

      <br />
      <br />

      {/* Título da seção sobre a participação do Brasil */}
      <center>
        <h1 id="tituloBrasil"> Participação do Brasil </h1>
      </center>

      {/* Bloco sobre a participação brasileira na guerra */}
      <section className="blocoBrasil">

        <section className="textoBrasil">
          <p>
            {/* Explicação sobre o envolvimento do Brasil */}
            O Brasil entrou na guerra em 1917, após o afundamento de navios
            brasileiros por submarinos alemães. A participação brasileira foi
            modesta, focada no patrulhamento do Atlântico Sul e no envio de uma
            missão médica à Europa.
          </p>

          {/* Botão para curtir o tema */}
          <BotaoCurtirTema idSection="bloco10PG" tema="Primeira Guerra Mundial" />
        </section>

        {/* Imagens da participação do Brasil */}
        <section className="blocoImagensBrasil">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/CobrasFumantes.svg/375px-CobrasFumantes.svg.png"
            alt="Forças Expedicionárias Brasileiras"
          />

          <img
            src="https://s4.static.brasilescola.uol.com.br/be/2023/08/navio-parana-uma-das-embarcacoes-brasileira-bombardeada-pelos-alemaes-no-contexto-da-primeira-guerra-mundial.jpg"
            alt="Navio Brasileiro"
            id="imagemNavioBR"
          />

          <img
            src="https://conteudo.imguol.com.br/blogs/137/files/2017/05/GettyImages-141559476_master_red-788x1024.jpg"
            alt="A Cobra Está Fumando"
          />
        </section>

      </section>

      <br />
      <br />

      {/* Título da seção sobre o tratado de paz */}
      <center>
        <h1 id="tituloPaz"> Tratado de Paz </h1>
      </center>

      {/* Bloco sobre o Tratado de Versalhes */}
      <section className="blocoPaz">

        <section className="textoPaz">
          <p>
            {/* Explicação sobre o tratado de paz e suas consequências */}
            O Tratado de Versalhes (1919) impôs duras condições à Alemanha,
            incluindo perdas territoriais, restrições militares e o pagamento de
            reparações de guerra. Outros tratados foram assinados com os demais
            países derrotados.
          </p>

          {/* Botão para curtir o tema */}
          <BotaoCurtirTema idSection="bloco11PG" tema="Primeira Guerra Mundial" />
        </section>

        {/* Imagem do tratado */}
        <section className="blocoImagemPaz">
          <img
            src="https://www.sohistoria.com.br/ef2/versalhes/index_clip_image002.jpg"
            alt="Tratado de Paz"
          />
        </section>

      </section>

      <br />
      <br />
      <hr />

      {/* Título da seção de vídeo sobre a Primeira Guerra Mundial */}
      <center>
        <h1 id="tituloVideos">
          <span className="amarelo">VÍDEO</span> SOBRE A <br />
          <span className="cinza">PRIMEIRA GUERRA MUNDIAL</span>
        </h1>
      </center>

      {/* Bloco que exibe um vídeo do YouTube sobre o tema */}
      <section className="blocoTotalVideo">

        <section className="blocoVideoIFrame">
          {/* Iframe do vídeo do YouTube */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/HNw027hhbbw?si=iuFHXpIxPz43mMDX"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          {/* Texto explicativo sobre o vídeo */}
          <section className="textoVideo">
            <p>
              Este vídeo apresenta uma explicação didática e acessível sobre a
              Primeira Guerra Mundial, destacando suas causas, os principais
              acontecimentos, os países envolvidos e as consequências desse
              conflito que marcou o século XX. Ideal para estudantes e
              interessados em história, o conteúdo ajuda a entender como esse
              evento transformou a geopolítica mundial e influenciou os rumos
              das décadas seguintes.
            </p>
          </section>

        </section>

      </section>

      <br />
      <br />
      <hr />

      {/* Título da seção de filme sobre a Primeira Guerra Mundial */}
      <center>
        <h1 id="tituloVideos">
          <span className="amarelo">FILME</span> SOBRE A <br />
          <span className="cinza">PRIMEIRA GUERRA MUNDIAL</span>
        </h1>
      </center>

      {/* Bloco que exibe um filme sobre o tema */}
      <section className="blocoTotalFilme">

        <section className="textoFilme">
          <p>
            {/* Explicação sobre o filme indicado */}
            O filme 1914: A Primeira Guerra, lançado em 2014, é um drama
            histórico que acompanha Arthur Knaap, um jovem holandês que vive em
            Paris e decide alistar-se na Legião Estrangeira para defender sua
            pátria no conflito que abalou a Europa. A narrativa combina ação e
            emoção, retratando os horrores das trincheiras e os dilemas
            enfrentados pelos soldados. Com uma abordagem realista e envolvente,
            o filme oferece uma perspectiva única sobre os desafios e
            sacrifícios da guerra.
          </p>
        </section>

        {/* Iframe do filme do YouTube */}
        <section className="blocoFilmeIFrame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/GHreZQDXXvI?si=gK8GHEufOm7Haxdl"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </section>

      </section>

      <Footer corHeaderFooter="cinza" corInfoFooter="cinzaClaro" logo={LogoSiteCinza} /> {/* Componente Footer com seus devidos Props */}

    </>
  );
}

// Exportando
export default PrimeiraGuerraMundial;