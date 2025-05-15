// Hooks
    import { useEffect, useState } from 'react'
//.

// Estilização
    import './style/RevolucaoRussa.css'
//.

// Componentes
    import APIWikipedia from '../components/APIWikipedia'
//.

// Imagens

//.

function RevolucaoRussa() {
    const [principal, setPrincipal] = useState("")
    const [ocultar, setOcultar] = useState(false)

    useEffect(() => {
        const infoPNRR = document.getElementById('infoPNRR')
        infoPNRR.innerHTML = ``
    }, [ocultar])

    useEffect(() => {
        const infoPNRR = document.getElementById('infoPNRR')

        if (principal === "Vladimir Lenin") {
            infoPNRR.innerHTML = `
                <h2>Vladimir Lenin</h2>
                <p>
                    Líder dos bolcheviques e principal figura da Revolução de Outubro;
                    Foi o responsável por implantar o regime socialista e criar a União Soviética.
                </p>
                bu
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
                    <section id='APIWIKI' className='APIWikiRR'>
                        <APIWikipedia titulo="Revolução Russa de 1917" campoWiki= "APIWIKI"/>
                    </section>
                </section>
                <br />
                <hr />
                <section className='infoRR'>
                    <h1>Nossas Informações</h1>
                    <section className='bloco1RR'>
                        <article>
                            <h2>O Que Foi</h2>
                            <p>
                                A Revolução Russa, ocorrida em 1917 durante a Primeira Guerra Mundial, foi um movimento social que teve como resultado o fim da monarquia czarista e a instauração do primeiro regime socialista da história.
                                Esse processo de revolução foi marcado por dois momentos diferentes: o primeiro, em fevereiro, derrubou o czar Nicolau II e pôs fim ao governo monárquico; o segundo, em outubro, levou os bolcheviques ao poder sob a liderança de Vladimir Lenin.
                                Na Revolução de Fevereiro, os revolucionários aboliram a monarquia e, na Revolução de Outubro, começaram a implantar um regime de governo baseado em ideias socialistas.
                            </p>
                        </article>
                        <article>
                            <h2>Contexto Histórico</h2>
                            <p>
                                A Revolução Russa ocorreu num contexto de crise no Império Russo, com desigualdade social, pobreza entre camponeses e trabalhadores, e um governo czarista autoritário. A Primeira Guerra Mundial piorou a situação, causando perdas econômicas e humanas. Em 1917, o czar Nicolau II abdicou, dando lugar a um governo provisório. O governo não resolveu os problemas centrais, o que levou os bolcheviques a tomar o poder em outubro de 1917, iniciando a Revolução de Outubro e estabelecendo um regime socialista.
                            </p>
                        </article>
                    </section>
                    <br />
                    <br />
                    <section className='bloco2RR'>
                        <h2>Antecedentes</h2>
                        <article className='textoImagemRR'>
                            <p>
                                A Revolução Russa foi causada por vários fatores acumulados ao longo dos anos, mostrando as condições políticas, sociais e econômicas do Império Russo. O regime autocrático do czar Nicolau II, que governava com poderes absolutos e reprimia a oposição, foi um dos principais antecedentes. A censura era comum e muitos opositores eram presos ou exilados.
                                Outro fator importante foi a estrutura socioeconômica atrasada, com a maior parte da população vivendo no campo, em condições próximas ao feudalismo. 
                                A industrialização, que avançou sob Nicolau II, trouxe uma classe operária explorada, gerando insatisfação e crescimento de movimentos operários. 
                                O Partido Operário Social-Democrata Russo se dividiu em bolcheviques e mencheviques. 
                                A Revolução de 1905, após o Domingo Sangrento, também foi um marco. 
                                Por fim, as derrotas militares e a Primeira Guerra Mundial pioraram a situação, levando às revoluções de 1917.
                            </p>
                            <img src="https://assets.brasildefato.com.br/2024/09/image_processing20220519-2501-ogtso1.jpeg" alt="Imagem Revolução Russa" />
                        </article>
                    </section>
                    <br />
                    <br />
                    <section className='bloco3RR'>
                        <h2>Principais Nomes</h2>
                        <section className='principaisNomesRR'>
                            <section className='pessoaRR'>
                                <button className='botaoPNRR' type='button' onClick={() => setPrincipal("Vladimir Lenin")}>
                                    <img src="https://static.escolakids.uol.com.br/2020/03/1-vladimir-lenin-ek.jpg" alt="Vladimir Lemin" />
                                </button>
                                <h3>Lemin</h3>
                            </section>
                            <section className='pessoaRR'>
                                <button className='botaoPNRR' type='button' onClick={() => setPrincipal("Leon Trotsky")}>
                                    <img src="https://citacoesdosampaio.wordpress.com/wp-content/uploads/2016/11/leon-trotsky-intelectual-marxista-e-revolucionc3a1rio.jpg" alt="Leon Trotsky" />
                                </button>
                                <h3>Leon</h3>
                            </section>
                            <section className='pessoaRR'>
                                <button className='botaoPNRR' type='button' onClick={() => setPrincipal("Nicolau II")}>
                                    <img src="https://aventurasnahistoria.com.br/media/uploads/nicolauiannd.jpg" alt="Nicolau II" />
                                </button>
                                <h3>Nicolau II</h3>
                            </section>
                            <section className='pessoaRR'>
                                <button className='botaoPNRR' type='button' onClick={() => setPrincipal("Alexandre Kérenski")}>
                                    <img src="https://cdn.britannica.com/51/65951-050-8073C86C/Aleksandr-Kerensky-1917.jpg" alt="Alexandre Kérenski" />
                                </button>
                                <h3>Alexandre</h3>
                            </section>
                            <section className='pessoaRR'>
                                <button className='botaoPNRR' type='button' onClick={() => setPrincipal("Josef Stalin")}>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzRyckg4LbDA4sV_BSxvaisSJDOZPUCTJI37mwN70btRVFZ3BVUk024LzKPcM7tKWNUGo&usqp=CAU" alt="Stalin" />
                                </button>
                                <h3>Stalin</h3>
                            </section>
                        </section>
                        <section id='infoPNRR'></section>
                    </section>
                </section>
            </section>
        </>
    )
}

export default RevolucaoRussa