// Importa o estilo CSS específico para a página Home
import "./style/Home.css"

// Importa componentes necessários
import Navbar from "../components/Navbar" // Barra de navegação
import LogoSiteRoxo from "../assets/Logos/LogoSiteRoxo.png" // Logo do site
import Footer from "../components/Footer" // Rodapé da página
import BotaoTema from "../components/BotaoTema" // Componente do botão para mudar tema

import { Link } from "react-router-dom"

// Função principal do componente Home
function Home() {
    return (
        <>
            <Navbar logo={LogoSiteRoxo} /> {/* Renderiza a barra de navegação com o logo */}
            <section className="parallax1"> {/* Section com efeito parallax */}
                <section className="botTemaPosi"> {/* Section para posicionar o botão de tema */}
                    <section className="botTema"> 
                        <BotaoTema/> {/* Componente BotãoTema */}
                    </section>
                    <h1 className="tituloParallax">
                        CONHEÇA MAIS SOBRE OS <span className="corTexto">PRINCIPAIS EVENTOS HISTÓRICOS</span> ENTRE 1896-1930
                    </h1>
                </section>
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
            
            {/* Segunda section com parallax */}
            <section className="parallax2">
                <h1 className="tituloParallax2">QUAL O <span className="corTexto">OBJETIVO</span> DA PÁGINA?</h1>
                <p className="textoParallax2"> 
                    O objetivo deste projeto é informar, de forma clara e dinâmica, sobre alguns dos principais eventos históricos ocorridos entre 1896 e 1930, tanto no Brasil quanto no mundo.
                    Por meio de atividades interativas, recursos visuais e linguagem acessível, buscamos despertar o interesse pelos acontecimentos que marcaram essa época —
                    como a Guerra de Canudos, a Guerra do Contestado, a Primeira Guerra Mundial, a Revolução Russa, o Fascismo Italiano,
                    a Crise de 1929 e a Revolução de 1930.
                    Mais do que apresentar datas e fatos, queremos ajudar a compreender o impacto desses eventos na sociedade da época e seus reflexos no mundo atual.
                </p>
            </section>

            <h1 id="conteudos" className="titulosHome">CONTEÚDOS:</h1>

            <nav className="navHome"> {/* Nav para diferentes conteúdos históricos */}
                <Link to="/GuerraDeCanudos"> {/* Link para a página da Guerra de Canudos */}
                    <section className="navInfos">
                        <img className="navImg" src="https://upload.wikimedia.org/wikipedia/commons/9/98/Pris%C3%A3o_de_jagun%C3%A7os_pela_cavalaria.jpg" /> {/* Imagem da Guerra de Canudos */}
                        <p>Guerra de Canudos</p>
                    </section>
                </Link>

                <Link to="/GuerraDoContestado"> {/* Link para a Guerra do Contestado */}
                    <section className="navInfos">
                        <img className="navImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyBVlWEP-XnVV_NfwNHLt7OaI4TtjSBH7ZmA&s" /> {/* Imagem da Guerra do Contestado */}
                        <p>Guerra do Contestado</p>
                    </section>
                </Link>

                <Link to="/PrimeiraGuerraMundial"> {/* Link para a Primeira Guerra Mundial */}
                    <section className="navInfos"> 
                        <img className="navImg" src="https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/wwi-trench-archaeology-01.webp?w=1600&h=900" /> {/* Imagem da Primeira Guerra Mundial */}
                        <p>Primeira Guerra Mundial</p>
                    </section>
                </Link>
                
                <Link to="/RevolucaoRussa"> {/* Link para a Revolução Russa */}
                    <section className="navInfos">
                        <img className="navImg" src="https://assets.brasildefato.com.br/2024/09/image_processing20200201-29235-1nfnxod.jpg" /> {/* Imagem da Revolução Russa */}
                        <p>Revolução Russa</p>
                    </section>
                </Link>

                <Link to="/FascismoItaliano"> {/* Link para o Fascismo Italiano */}
                    <section className="navInfos">
                        <img className="navImg" src="https://www.politize.com.br/wp-content/uploads/2024/07/fascismo-entenda-o-conceito.jpg" /> {/* Imagem do Fascismo Italiano */}
                        <p>Fascismo Italiano</p>
                    </section>
                </Link>

                <Link to="/CriseDe1929"> {/* Link para a Crise de 1929 */}
                    <section className="navInfos">
                        <img className="navImg" src="https://economianostra.wordpress.com/wp-content/uploads/2013/11/crise-anos-20.jpg" /> {/* Imagem da Crise de 1929 */}
                        <p>Crise de 1929</p>
                    </section>
                </Link>
    
                <Link to="/RevolucaoDe1930"> {/* Link para a Revolução de 1930 */}
                    <section className="navInfos">
                        <img className="navImg" src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/getulio-vargas-no-centro-imagem-com-uniforme-militar-em-1930-5821dee50a0c0.jpg" /> {/* Imagem da Revolução de 1930 */}
                        <p>Revolução de 1930</p>
                    </section>
                </Link>
            </nav>

            <h1 id="producoes" className="titulosHome">PRODUÇÕES:</h1>

            <nav className="navHome"> {/* Navegação para produções relacionadas */}
                <Link to="/8"> {/* Link para o nosso cartaz*/}
                    <section className="navInfos">
                        <img className="navImg" src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/getulio-vargas-no-centro-imagem-com-uniforme-militar-em-1930-5821dee50a0c0.jpg" /> {/* Imagem do cartaz */}
                        <p>Cartaz</p>
                    </section>
                </Link>

                <Link to="/9"> {/* Link para o nosso vídeo */}
                    <section className="navInfos">
                        <img className="navImg" src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/getulio-vargas-no-centro-imagem-com-uniforme-militar-em-1930-5821dee50a0c0.jpg" /> {/* Imagem do vídeo */}
                        <p>Vídeo</p>
                    </section>
                </Link>
            </nav>

            {/* Renderiza o rodapé da página com cores e logo */}
            <Footer corHeaderFooter="roxoClaro" corInfoFooter="roxoClaro" logo={LogoSiteRoxo}/>
        </>
    )
}

// Exporta o componente Home
export default Home
