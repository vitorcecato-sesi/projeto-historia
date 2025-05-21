

import Navbar from "../components/Navbar"
import LogoSiteRoxo from "../assets/Logos/LogoSiteRoxo.png"
import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <Navbar logo={LogoSiteRoxo} />
            <section className="parallax1">
                <h1 className="tituloParallax">CONHEÇA MAIS SOBRE OS <span className="corTexto">PRINCIPAIS EVENTOS HISTÓRICOS</span> ENTRE 1896-1930</h1>
                <p className="textoParallax">
                    Entre 1896 e 1930, o Brasil e o mundo passaram por grandes transformações.
                    No país, conflitos como a Guerra de Canudos e a Guerra do Contestado mostraram a luta de comunidades contra a força do Estado.
                    No cenário internacional, a Primeira Guerra Mundial e a Revolução Russa mudaram a política global,
                    enquanto o Fascismo Italiano crescia na Europa.
                    A grave Crise de 1929 abalou a economia mundial e afetou diretamente o Brasil, contribuindo para a Revolução de 1930,
                    que deu início a uma nova fase política sob a liderança de Getúlio Vargas.
                    Este projeto busca apresentar esses eventos e refletir sobre sua importância na construção do mundo moderno.
                </p>
            </section>
            <section className="parallax2">
                <h1 className="tituloParallax2">QUAL O <span className="corTexto">OBJETIVO</span> DA PÁGINA?</h1>
                <p className="textoParallax2">O objetivo deste projeto é informar, de forma clara e dinâmica, sobre alguns dos principais eventos históricos ocorridos entre 1896 e 1930, tanto no Brasil quanto no mundo. 
                    Por meio de atividades interativas, recursos visuais e linguagem acessível, buscamos despertar o interesse pelos acontecimentos que marcaram essa época — 
                    como a Guerra de Canudos, a Guerra do Contestado, a Primeira Guerra Mundial, a Revolução Russa, o Fascismo Italiano, 
                    a Crise de 1929 e a Revolução de 1930.
                    Mais do que apresentar datas e fatos, queremos ajudar a compreender o impacto desses eventos na sociedade da época e seus reflexos no mundo atual.</p>
            </section>
            <h1 className="titulo" id="puxarLink" >CONTEÚDOS:</h1>
            <section className="boxLinks">
                <section className="boxLinks2">
                    <section className="links">
                        <Link to="/GuerraDeCanudos">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Pris%C3%A3o_de_jagun%C3%A7os_pela_cavalaria.jpg" />
                        <label>1</label>
                        <p className="textLinks">Guerra de Canudos</p>
                        </Link>
                    </section>
                    <section className="links">
                        <Link to="/GuerraDoContestado">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyBVlWEP-XnVV_NfwNHLt7OaI4TtjSBH7ZmA&s" />
                        <label>2</label>
                        <p className="textLinks">Guerra do Contestado</p>
                        </Link>
                    </section>
                    <section className="links">
                        <Link to="/PrimeiraGuerraMundial">
                        <img src="https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/wwi-trench-archaeology-01.webp?w=1600&h=900" />
                        <label>3</label>
                        <p className="textLinks">Primeira Guerra Mundial</p>
                        </Link>
                    </section>
                    <section className="links">
                        <Link to="/RevolucaoRussa">
                        <img src="https://assets.brasildefato.com.br/2024/09/image_processing20200201-29235-1nfnxod.jpg" />
                        <label>4</label>
                        <p className="textLinks">Revolução Russa</p>
                        </Link>
                    </section>
                </section>
                <section className="boxLinks3">
                    <section className="links">
                        <Link to="/FascismoItaliano">
                        <img src="https://www.politize.com.br/wp-content/uploads/2024/07/fascismo-entenda-o-conceito.jpg" />
                        <label>5</label>
                        <p className="textLinks">Fascismo Italiano</p>
                        </Link>
                    </section>
                    <section className="links">
                        {/* <Link to="/"> */}
                        <img src="https://economianostra.wordpress.com/wp-content/uploads/2013/11/crise-anos-20.jpg" />
                        <label>6</label>
                        <p className="textLinks">Crise de 1929</p>
                        {/* </Link> */}
                    </section>
                    <section className="links">
                        <Link to="/RevolucaoDe1930">
                        <img src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/getulio-vargas-no-centro-imagem-com-uniforme-militar-em-1930-5821dee50a0c0.jpg" />
                        <label>7</label>
                        <p className="textLinks">Revolução de 1930</p>
                        </Link>
                    </section>
                </section>
            </section>
            <br />
            <br />
            <br />
            <h1 className="titulo">PRODUÇÕES:</h1>
            <section className="boxLinks2">
                <section className="links">
                    {/* <Link to="/"> */}
                    <img></img>
                    <label>1</label>
                    <p className="textLinks">Vídeo</p>
                    {/* </Link> */}
                </section>
                <section className="links">
                    {/* <Link to="/"> */}
                    <img></img>
                    <label>2</label>
                    <p className="textLinks">Cartaz</p>
                    {/* </Link> */}
                </section>
            </section>
        </>
    )
}

export default Home;

