import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "./styles/Navbar.css";

function Navbar({ backgroundId, logo }) {
  return (
    <>
      <nav id={backgroundId} className="blocoPrincipalNavbar">
        <HashLink smooth to="/#conteudos"> Conteúdos </HashLink>
        <HashLink smooth to="/#producoes"> Produções </HashLink>
        <img src={logo} alt="Logo do site" />
        <Link to="/Ranking"> Ranking </Link>
        <Link to="/SobreNos">Sobre Nós</Link>
      </nav>
    </>
  );
}

export default Navbar;
