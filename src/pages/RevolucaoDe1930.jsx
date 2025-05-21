//Imagens
import foto1 from "../assets/Imgs - Revolução de 1930/foto1_revolução1930.png";
import foto2 from "../assets/Imgs - Revolução de 1930/foto2_revolução1930.png";
import foto3 from "../assets/Imgs - Revolução de 1930/foto3_revolução1930.png";
import foto4 from "../assets/Imgs - Revolução de 1930/foto4_revolução1930.png";
import foto5 from "../assets/Imgs - Revolução de 1930/foto5_revolução1930.png";

import LogoSiteMarrom from "../assets/Logos/LogoSiteMarrom.png"

//Componentes
import APIWikipedia from '../components/APIWikipedia'
import Footer from "../components/Footer";
import BotaoCurtirTema from "../components/BotaoCurtirTema";

//CSS
import "./style/RevolucaoDe1930.css";

import Navbarr from "../components/Navbar"

function RevolucaoDe1930() {
  return (
    <>
    <Navbarr backgroundId="navbarRevolucaoDe1930" logo={LogoSiteMarrom} />

    
      <section className="slide">
        <img className="foto1" src={foto1} alt="Foto1" />
        <h2 className="textoSlide">
          <span className="corTextoRevolução1930"> CONHEÇA SOBRE A </span> <br />
          <span className="corTexto2Revolução1930"> REVOLUÇÃO DE 1930 </span>
        </h2>
      </section>

      <center>
        <section className="blocos">

          <section className="bloco-OQueFoi">
            <img className="foto2" src={foto2} alt="Foto2" />
            <p className="texto-OQueFoi">
              <h3 className="titulo-OQueFoi"> O que foi? </h3>A Revolução de
              1930 foi uma revolta contra o Estado que teve proporção nacional,
              liderada pelo governador do Rio Grande do Sul, Getúlio Vargas.
              Esse movimento armado levou à extinção da república Oligárquica,
              também conhecida como República Velha, na época comandada por
              Washington Luis, e instituiu o Governo provisório.
            </p>
            <BotaoCurtirTema idSection="bloco1RV30" tema="Revolução de 1930"/>
          </section>

          <section>
            <p className="texto-ContextoECausas">
              <h3 className="titulo-ContextoECausas">
                Contexto Histórico e Causas da Guerra
              </h3>
              O modelo de governo no Brasil naquela época era constituído por
              uma República Oligárquica onde a política federativa era formada
              por poucos membros da elite que atendiam somente os interesses dos
              grandes latifundiários, tanto mineiros como paulistas. A partir do
              mandato de 1898 do presidente Campos Sales, à presidência era
              revezada pelos representantes de Minas Gerais e de São Paulo e
              esse revezamento de poder ficou conhecido como política do café
              com leite já que esses estados representavam grandes produtores de
              leite e café. Dessa forma, essa política causou insatisfação de
              outros estados brasileiros. <br /> <br />
              A tensão entre os estados aumentou quando a Crise de 1929 causou
              um grande colapso econômico que desvalorizou as principais fontes
              de renda do país, em especial o café, que na época era o poder dos
              grandes latifundiários brasileiros. Washington Luís estava com
              receio de perder a influência para os oligarcas mineiros nas
              eleições de 1930, então declarou apoio a Júlio Prestes, um
              sucessor Paulista. Essa manobra rompeu com o revezamento do poder
              federal que era praticado desde o século anterior. <br /> <br />
              Após essa quebra de alternância de poder, Minas Gerais, Rio Grande
              do Sul e Paraíba, não deram suporte à Júlio Prestes. Essas
              províncias se aliaram aos políticos de oposição e criaram a
              Aliança Liberal (AL). Os candidatos deste agrupamento foram o
              presidente do Rio Grande do Sul, Getúlio Vargas, para ser seu
              vice, o presidente da Paraíba, João Pessoa. Júlio Prestes ganhou
              nas eleições de 1930 para o cargo de presidente, o que deixou a
              Aliança Liberal desconfiada de uma suposta fraude eleitoral.
              <br/>
              <br/>
              <BotaoCurtirTema idSection="bloco2RV30" tema="Revolução de 1930"/>
            </p>
            <img className="foto3" src={foto3} alt="Foto3" />
          </section>

          <section className="bloco-Conflito">
            <BotaoCurtirTema idSection="bloco3RV30" tema="Revolução de 1930"/>
            <p className="texto-Conflito">
              <h3 className="titulo-Conflito"> Conflito </h3>
              Vice-presidente de Getúlio Vargas, o governador João Pessoa sofreu
              um atentado a tiros no Recife por João Dantas e morreu no local.
              Depois disso, milhares de voluntários, sob o comando de Getúlio
              Vargas, tomaram o controle do estado do Rio Grande do Sul enquanto
              outros grupos também armados se formavam em Minas Gerais e na
              Paraíba. Esses conflitos armados teriam fim entre o final de
              outubro e o início de novembro, quando Vargas se autoproclamou
              líder do Governo Provisório no Rio de Janeiro.
            </p>
            <img className="foto4" src={foto4} alt="Foto4" />
          </section>

          <section className="bloco-Final">
            <img className="foto5" src={foto5} alt="Foto5" />
            <p className="texto-Final">
              <h3 className="titulo-Final"> Fim da Revolução </h3> Dessa forma
              então, a revolução acaba após 28 dias de conflitos, em 3 de
              novembro de 1930, que foi a data que Getúlio Vargas assumiu o
              poder no palácio do Catete. Os soldados gaúchos que o acompanharam
              amarraram seus cavalos no Obelisco da Avenida Rio Branco em um ato
              simbólico. Oswaldo Aranha e José Maria, que eram aliados de
              Vargas, assumiram o Ministério da Justiça e da Fazenda. Outros
              aliados militares foram nomeados para compor os comandos da
              Marinha e do Ministério de Guerra. Também foi criado o Ministério
              do Trabalho, da Indústria e Comércio e o da Educação e Saúde. Por
              fim, a Constituição de 1889 foi revogada e o período das
              oligarquias latifundiárias do Brasil terminou.
              <br/>
              <br/>
              <BotaoCurtirTema idSection="bloco4RV30" tema="Revolução de 1930"/>
            </p>
          </section>

          <hr id="hrREV1930"/>

          <section className="infoAPI">
            <APIWikipedia titulo="Revolução de 1930" campoWiki= "APIWIKI-Revolução1930" imagemID="imgWIKI-Revolução1930" imagemAlt="Revolução de 1930" imagemClass="imgWIKI"/>
            <h2 className="titulo-API"> Informações da API </h2>
            <section id='APIWIKI-Revolução1930'> </section>
            <img src="" alt="" id="imgWIKI-Revolução1930"/>
          </section>

          <hr id="hrREV1930"/>

          <section className="bloco-Video">
            <h2 className="titulo-Video">
              Vídeo Aula - Revolução de 1930 Conheça os Principais Fatos
            </h2>
            <iframe
              className="video"
              width="700"
              height="415"
              src="https://www.youtube.com/embed/LXdMu4z_RvU?si=1w0ozr6Jzn_OyECO&amp;start=5"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </section>

          <hr id="hrREV1930"/>  

          <section className="bloco-Filme">
            <p className="sinopseFilme">
              <h2 className="titulo-Filme"> Era Vargas 1930 <br/> Tempo e Revolução</h2>O filme "1930
              - Tempo de Revolução" é um documentário que explora a Revolução de
              1930 e os eventos que a precederam, como o tenentismo e a Revolta
              dos 18 do Forte. Ele utiliza imagens de arquivo e depoimentos de
              historiadores para contextualizar esse período crucial da história
              brasileira, que levou à ascensão de Getúlio Vargas ao poder.
            </p>
            <iframe
              className="filme"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/b86dJnjDoDw?si=WV4YTxMhX4UK2pnZ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </section>
        </section>
      </center>

      <Footer corHeaderFooter="marrom" corInfoFooter="marromClaro" logo={LogoSiteMarrom}/>
    </>
  );
}

export default RevolucaoDe1930;
