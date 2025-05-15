import "./styles/Navbar.css";
import LogoSiteRoxo from "../assets/LogoSiteRoxo.png";

function Navbar() {
    return (
        <>
            <nav className="blocoPrincipalNavbar">
                <span>Conteúdos</span>
                <span>Produções</span>
                <img src={LogoSiteRoxo} alt="Logo do site" />
                <span>Ranking</span>
                <span>Sobre Nós</span>

                {/* <Link className="link" id="link" to="/"> <span id={props.home}> conteúdos </span> </Link>
        <Link className="link" id="link" to="/page1"> <span id={props.page1}> produções </span> </Link>
        <Link className="link" id="link" to="/page3"> <span id={props.page3}> ranking </span> </Link>
        <Link className="link" id="link" to="/page4"> <span id={props.page4}> sobre nós </span> </Link> */}
            </nav>
        </>
    );
}

export default Navbar;