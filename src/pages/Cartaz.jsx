import Navbar from "../components/Navbar";
import "./style/Cartaz.css";
import ImagemCartaz from "../assets/cartaz/fotoCartaz1.jpeg";
import ImagemCartaz2 from "../assets/cartaz/fotoCartaz2.jpeg";

import LogoSiteRoxo from "../assets/Logos/LogoSiteRoxo.png"
import Footer from "../components/Footer"
import BotaoTema from "../components/BotaoTema"

function Cartaz() {
  return (
    <>

      <Navbar logo={LogoSiteRoxo} />

      <section className="Centro">

        <h1>
          VENHA ENTENDER MAIS SOBRE O <br />
          <span id="roxo1"> CARTAZ FEITO </span>
        </h1>

        <BotaoTema/>

        <section className="blocoLado">

          <section className="blocoCartaz">

            <img
              id="img"
              src={ImagemCartaz}
              alt="Cartaz"
            />

          </section>

          <section className="blocoCartaz">

            <img
              id="img"
              src={ImagemCartaz2}
              alt=""
            />

          </section>

        </section>

        <br />

        <section className="SobreCartaz">

          <h1>Sobre o Cartaz</h1>

          <p>
            O cartaz é uma representação visual que tem como objetivo transmitir
            uma mensagem de forma clara e impactante. Ele pode ser utilizado em
            diversas situações, como campanhas publicitárias, eventos culturais,
            exposições e muito mais. Através de elementos gráficos, tipografia e
            cores, o cartaz busca chamar a atenção do público e comunicar
            informações relevantes de maneira eficaz.
          </p>

        </section>

      </section>

      <Footer corHeaderFooter="roxo" corInfoFooter="roxoClaro" logo={LogoSiteRoxo}/>
    </>
  );
}
export default Cartaz;
