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
                    <APIWikipedia titulo="Revolução Russa de 1917" campoWiki= "APIWIKI" imagemID="imgWIKIRR" imagemAlt="Imagem da Wiki" imagemClass="classeimg" />
                    <section id='APIWIKI'></section>
                    <img id='imgWIKIRR' src="" alt="" />
                </section>
            </section>
        </>
    )
}

export default RevolucaoRussa