import Navbar from "../components/Navbar";
import "./style/PaginaVideo.css";

import LogoSiteRoxo from "../assets/Logos/LogoSiteRoxo.png"
import Footer from "../components/Footer"
import BotaoTema from "../components/BotaoTema"

function PaginaVideo() {
  return (
    <>
      <Navbar logo={LogoSiteRoxo} />

      <section className="Centro1">

        <h1 id="branco2">
          VENHA ENTENDER MAIS SOBRE A <br />
          <span id="roxo1"> REVOLUÇÃO RUSSA </span>
        </h1>

        <BotaoTema/>

        <section className="BlocoVideo">

      <iframe width="560" height="315" src="https://www.youtube.com/embed/hZxt6tVbQds?si=cMGTXEEwaiNr_k26&amp;start=272" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </section>

      </section>

      <Footer corHeaderFooter="roxo" corInfoFooter="roxoClaro" logo={LogoSiteRoxo}/>
    </>
  );
}
export default PaginaVideo;
