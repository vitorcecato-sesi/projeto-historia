import "./styles/Navbar.css"

function Navbar({backgroundId, logo }) {
    return (
        <>
            <nav id={backgroundId} className="blocoPrincipalNavbar">
                <span>Conteúdos</span>
                <span>Produções</span>
                <img src={logo} alt="Logo do site" />
                <span>Ranking</span>
                <span>Sobre Nós</span>
            </nav>
        </>
    );
}

export default Navbar;