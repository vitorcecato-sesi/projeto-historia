// Hooks
    import { useEffect, useState } from 'react'
//.

// Estilização
    import './style/RevolucaoRussa.css'
//.

// Componentes
    import APIWikipedia from '../components/APIWikipedia'
    import BotaoCurtirTema from '../components/BotaoCurtirTema'
//.

// Imagens

//.

function RevolucaoRussa() {
    const [principal, setPrincipal] = useState("")
    const [ocultar, setOcultar] = useState(false)

    useEffect(() => {
        const infoPNRR = document.getElementById('infoPNRR')
        const ocultarPNRR = document.getElementById('ocultarPNRR')
        infoPNRR.innerHTML = ``
        ocultarPNRR.className = 'ocultarPNRR'
        setPrincipal("")
        setOcultar(false)
    }, [ocultar])

    useEffect(() => {
        const infoPNRR = document.getElementById('infoPNRR')
        const ocultarPNRR = document.getElementById('ocultarPNRR')
        if (principal !== '') {
            ocultarPNRR.className = 'botaoOcultarPNRR'
        }
        if (principal === "Vladimir Lenin") {
            infoPNRR.innerHTML = `
                <h2>Vladimir Lenin</h2>
                <p>
                    Líder dos bolcheviques e principal figura da Revolução de Outubro;
                    Foi o responsável por implantar o regime socialista e criar a União Soviética.
                </p>
            `
        } else if (principal === "Leon Trotsky") {
            infoPNRR.innerHTML = `
                <h2>Leon Trotsky</h2>
                <p>
                    Intelectual marxista e braço direito de Lenin;
                    Liderou o Exército Vermelho na Guerra Civil Russa (1918–1921);
                    Teve papel fundamental na vitória dos bolcheviques.
                </p>
            `
        } else if (principal === "Nicolau II") {
            infoPNRR.innerHTML = `
                <h2>Nicolau II</h2>
                <p>
                    Último czar da Rússia, deposto na Revolução de Fevereiro de 1917;
                    Sua gestão autoritária e impopular acelerou a crise que levou à revolução;
                    Foi executado junto com sua família em 1918.
                </p>
            `        
        } else if (principal === "Alexandre Kérenski") {
            infoPNRR.innerHTML = `
                <h2>Alexandre Kérenski</h2>
                <p>
                    Líder do Governo Provisório que assumiu após a queda do czar;
                    Tentou manter a Rússia na guerra e perdeu apoio popular, facilitando a ascensão dos bolcheviques.
                </p>
            `
        } else if (principal === "Josef Stalin") {
            infoPNRR.innerHTML = `
                <h2>Josef Stalin</h2>
                <p>
                    Participou da revolução, mas ganhou poder principalmente após a morte de Lenin, em 1924;
                    Ele governou a União das Repúblicas Socialistas Soviéticas (URSS) e definiu os rumos do país de 1924 até a sua morte.
                </p>
            `
        } else {
            infoPNRR.innerHTML = ``
        }

    }, [principal])

    return(
        <>
            <section className='bodyRR'>
                <section className='bannerRR'>
                    <h1 className='bannerTextRR'>CONHEÇA MAIS SOBRE A <br /><span id='blueRR'>REVOLUÇÃO RUSSA</span></h1>
                </section>
                <section className='wikiRR'>
                    <h1>Informações Wikipédia</h1>
                    <APIWikipedia titulo="Revolução Russa de 1917" campoWiki= "APIWIKI" imagemID="imgWIKIRR" imagemAlt="Imagem da Wiki" imagemClass="classeimg" />
                    <section id='APIWIKI'></section>
                    <img id='imgWIKIRR' src="" alt="" />
                </section>
                <br />
                <br />
                <BotaoCurtirTema idSection="bloco7RR" tema="Revolução Russa"/>
            </section>
        </>
    )
}

export default RevolucaoRussa