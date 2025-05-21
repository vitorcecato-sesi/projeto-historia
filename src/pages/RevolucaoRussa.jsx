// Estilização
    import APIWikipedia from '../components/APIWikipedia'
import './style/RevolucaoRussa.css'
//.

// Componentes

//.

// Imagens

//.

function RevolucaoRussa() {


    return(
        <>
            <section className='bodyRR'>
                <section className='bannerRR'>
                    <h1 className='bannerTextRR'>CONHEÇA MAIS SOBRE A <br /><span id='blueRR'>REVOLUÇÃO RUSSA</span></h1>
                </section>
                <section className='wikiRR'>
                    <h1>Informações Wikipédia</h1>
                    <APIWikipedia titulo="Revolução Russa de 1917" campoWiki= "APIWIKI"/>
                    <section id='APIWIKI'></section>
                </section>
            </section>
        </>
    )
}

export default RevolucaoRussa