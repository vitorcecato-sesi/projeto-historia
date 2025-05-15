import "./style/Home.css"
import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <section className="parallax1">
                <h1>CONHEÇA MAIS SOBRE OS PRINCIPAIS EVENTOS HISTÓRICOS ENTRE 1896-1930</h1>
                <p>a</p>
            </section>
            <section className="parallax2">
                <h1>Qual o objetivo da página?</h1>
                <p>a</p>
            </section>
            <h1>CONTEÚDOS:</h1>
            <section className="boxLinks">
                <section className="boxLinks2">
                <section className="links">
                    {/* <Link to="/"> */}
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Pris%C3%A3o_de_jagun%C3%A7os_pela_cavalaria.jpg" />
                    <label>1</label>
                    <p className="textLinks">Guerra de Canudos</p>
                    {/* </Link> */}
                </section>
                <section className="links">
                    {/* <Link to="/"> */}
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyBVlWEP-XnVV_NfwNHLt7OaI4TtjSBH7ZmA&s" />
                    <label>2</label>
                    <p className="textLinks">Guerra do Contestado</p>
                    {/* </Link> */}
                </section>
                <section className="links">
                    {/* <Link to="/"> */}
                    <img src="https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/wwi-trench-archaeology-01.webp?w=1600&h=900" />
                    <label>3</label>
                    <p className="textLinks">Primeira Guerra Mundial</p>
                    {/* </Link> */}
                </section>
                <section className="links">
                    {/* <Link to="/"> */}
                    <img src="https://assets.brasildefato.com.br/2024/09/image_processing20200201-29235-1nfnxod.jpg"/>
                    <label>4</label>
                    <p className="textLinks">Revolução Russa</p>
                    {/* </Link> */}
                    </section>
                </section>
                <section className="boxLinks2">
                <section className="links">
                    {/* <Link to="/"> */}
                    <img src="https://www.politize.com.br/wp-content/uploads/2024/07/fascismo-entenda-o-conceito.jpg" />
                    <label>5</label>
                    <p className="textLinks">Fascismo Italiano</p>
                    {/* </Link> */}
                </section>
                <section className="links">
                    {/* <Link to="/"> */}
                    <img src="https://economianostra.wordpress.com/wp-content/uploads/2013/11/crise-anos-20.jpg" />
                    <label>6</label>
                    <p className="textLinks">Crise de 1929</p>
                    {/* </Link> */}
                </section>
                <section className="links">
                    {/* <Link to="/"> */}
                    <img src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/getulio-vargas-no-centro-imagem-com-uniforme-militar-em-1930-5821dee50a0c0.jpg" />
                    <label>7</label>
                    <p className="textLinks">Revolução de 1930</p>
                    {/* </Link> */}
                </section>
                </section>
            </section>
<br/>
<br/>
<br/>
            <h1>PRODUÇÕES:</h1>
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

export default Home