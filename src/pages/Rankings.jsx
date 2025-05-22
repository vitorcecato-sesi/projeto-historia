import { useEffect, useState } from "react"
import "./style/Rankings.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import LogoSiteRosa from "../assets/Logos/LogoSiteRosa.png"

function Rankings() {
    const [curtidas, setCurtidas] = useState(JSON.parse(localStorage.getItem("curtidas")) || [])
    const [guerraCanudos, setGuerraCanudos] = useState(0)
    const [guerraContestado, setGuerraContestado] = useState(0)
    const [primeiraGuerra, setPrimeiraGuerra] = useState(0)
    const [fascismo, setFascismo] = useState(0)
    const [revolucaoRussa, setRevolucaoRussa] = useState(0)
    const [criseDe1929, setCriseDe1929] = useState(0)
    const [revolucao1930, setRevolucao1930] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurtidas(JSON.parse(localStorage.getItem("curtidas")) || [])
        }, 100)

        return() => {
            clearInterval(timer) // Remove o timer ao desmontar
        }
    }, [])

    useEffect(() => {
        const guerraCanudosCurtidas = curtidas.filter(item => item.tema === "Guerra de Canudos")
        const guerraContestadoCurtidas = curtidas.filter(item => item.tema === "Guerra do Contestado")
        const primeiraGuerraCurtidas = curtidas.filter(item => item.tema === "Primeira Guerra Mundial")
        const fascismoCurtidas = curtidas.filter(item => item.tema === "Fascismo Italiano")
        const revolucaoRussaCurtidas = curtidas.filter(item => item.tema === "Revolução Russa")
        const criseDe1929Curtidas = curtidas.filter(item => item.tema === "Crise de 1929")
        const revolucao1930Curtidas = curtidas.filter(item => item.tema === "Revolução de 1930")

        setGuerraCanudos(guerraCanudosCurtidas.length)
        setGuerraContestado(guerraContestadoCurtidas.length)
        setPrimeiraGuerra(primeiraGuerraCurtidas.length)
        setFascismo(fascismoCurtidas.length)
        setRevolucaoRussa(revolucaoRussaCurtidas.length)
        setCriseDe1929(criseDe1929Curtidas.length)
        setRevolucao1930(revolucao1930Curtidas.length)

    }, [curtidas])


    return(
        <>
            <Navbar backgroundId="navbarRanking" logo={LogoSiteRosa} />
            <section className="bodyRank">
                <h1>RANKING DAS <span id="rosaRank">CURTIDAS</span> ENTRE <br /> OS CONTEÚDOS</h1>
                <section className="blocoRanks">
                    <p>
                        <span>Guerra de Canudos</span> - {guerraCanudos} curtidas <br />
                        <span>Guerra de Contestado</span> - {guerraContestado} curtidas <br />
                        <span>Primeira Guerra Mundial</span> - {primeiraGuerra} curtidas <br />
                        <span>Revolução Russa</span> - {revolucaoRussa} curtidas <br />
                        <span>Fascismo Italiano</span> - {fascismo} curtidas <br />
                        <span>Crise de 1929</span> - {criseDe1929} curtidas <br />
                        <span>Revolução de 1930</span> - {revolucao1930} curtidas 
                    </p>
                </section>
            </section>
            <Footer corHeaderFooter="rosa" corInfoFooter="rosaClaro" logo={LogoSiteRosa} />
        </>
    )
}

export default Rankings