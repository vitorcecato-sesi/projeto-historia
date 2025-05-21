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
                        <section className='blocoInfoBotaoPNRR'>
                            <section id='infoPNRR' className=''>
                            </section>
                            <button onClick={() => setOcultar(true)} id='ocultarPNRR' className='ocultarPNRR'>Ocultar</button>
                        </section>
                    </section>
                    <br />
                    <br />
                    <section className='bloco4RR'>
                        <h2>Revolução de 1905</h2>
                        <article className='textoImagemRRB4'>
                            <p>
                                Foi os movimentos realizados pela população russa que eram contra as medidas czaristas, as crises econômicas que enfrentavam e a participação da Rússia na guerra contra o Japão (que, após um fracasso, fez com que a oposição ganhasse mais forças).
                                Nicolau II, sentindo a movimentação da população, passou a utilizar da violência para conter os atos (que até então eram pacíficos). Essa violência ficou marcada na história, conhecida como o Domingo Sangrento.
                                O Domingo Sangrento ocorreu em 9 de janeiro de 1905. Nesse dia, o czar Nicolau II ordenou que as tropas deveriam abrir fogo contra uma multidão que protestava nas ruas de São Petersburgo. Essa multidão eram os apoiadores do czar que buscavam através de protestos pacíficos, melhorias no país.
                                Depois deste dia, o descontentamento com Nicolau II só aumentava, assim, o czar se sentiu obrigado a assinar o Tratado de Portsmouth, que acabava com a guerra contra o Japão, entregando partes importantes do território Russo.
                                Quando o czar lançou o Manifesto de Outubro em que prometia uma monarquia parlamentar, alguns grupos começaram a surgir (como os sovietes e a Duma - Parlamento).
                                Para que Nicolau II não perdesse seu poder, ele criou decretos que o colocavam acima da Duma.
                                O parlamento não satisfeito com o ato do czar protestaram, fazendo com que o mesmo dissolvesse a instituição e colocasse o censitário no lugar do Parlamento.
                                Esse sistema persistiu até 1911, sob o líder Stolypin, que tempos depois foi assassinado por forças opositoras.
                                A Revolução de 1905 serviu para impactar o regime Russo e demonstrar a grande insatisfação da população. Também serviu de estopim para a Revolução Russa de 1917.
                            </p>
                            <img src="https://jornal.usp.br/wp-content/uploads/20171031_03_Rev-russa.jpg" alt="" />
                        </article>
                    </section>
                    <br />
                    <br />
                    <section className='bloco5RR'>
                        <article>
                            <h2>Revolução de Fevereiro 1917</h2>
                            <p>
                                A Revolução de Fevereiro foi a primeira fase da Revolução Russa e causou a queda do czar Nicolau II. Aconteceu em março de 1917 (calendário atual) e foi motivada pela fome, crise econômica, repressão política e os efeitos da Primeira Guerra Mundial. Operários, soldados e a população revoltaram-se em Petrogrado. Com apoio dos militares, o czar abdicou, e formou-se um Governo Provisório, que manteve a Rússia na guerra e perdeu apoio popular. Isso abriu caminho para a Revolução de Outubro, liderada pelos bolcheviques.
                            </p>
                        </article>
                        <article>
                            <h2>Revolução de Outubro 1917</h2>
                            <p>
                                A Revolução de Outubro de 1917 foi a segunda fase da Revolução Russa e marcou a chegada dos bolcheviques ao poder, liderados por Vladimir Lenin. O movimento surgiu em meio à insatisfação popular com a continuidade da Rússia na Primeira Guerra Mundial, a crise econômica, a fome e a desigualdade. Com a promessa de “Paz, Pão e Terra”, os bolcheviques conquistaram apoio popular.
                                Em 25 de outubro (7 de novembro no calendário atual), os revolucionários tomaram o poder em Petrogrado, derrubando o Governo Provisório de Aleksandr Kerenski quase sem resistência. Lenin assumiu a liderança do novo governo e iniciou mudanças radicais, como a saída da guerra, a estatização da economia e a redistribuição de terras. Após vencerem a Guerra Civil contra forças contra revolucionárias, os bolcheviques fundaram a União Soviética em 1922, inaugurando uma nova era política que influenciaria o mundo inteiro.
                            </p>
                        </article>
                    </section>
                    <br />
                    <br />
                    <section className='bloco6RR'>
                        <h2>Guerra Civil</h2>
                        <article className='textoImagemRRB6'>
                            <img src="https://jornal.usp.br/wp-content/uploads/20171031_03_Rev-russa.jpg" alt="Revolução Russa" />
                            <p>
                                A Guerra Civil Russa aconteceu no território da Rússia entre 1918 e 1921, após a Revolução Russa de Outubro de 1917. Ela teve como principal disputa o controle da Rússia após a queda do czarismo.
                                Essa guerra foi causada pela mobilização de forças denominadas de Exército Branco (monarquistas, liberais, socialistas moderados...), que tinha como objetivo derrubar os bolcheviques (Exército Vermelho), grupo que havia se instalado no poder russo na Revolução Russa de 1917.
                                A guerra se finalizou com a derrota do Exército Branco em 1921, onde possibilitou a consolidação dos bolcheviques no poder do território russo. A guerra deixou um saldo de destruição grande e resultou na morte de, aproximadamente, 10 milhões de pessoas.
                            </p>
                        </article>
                    </section>
                    <br />
                    <br />
                    <section className='bloco7RR' id='bloco7RR'>
                        <h2>Criação da URSS</h2>
                        <article className='textoImagemRRB7'>
                            <p>
                                A União das Repúblicas Socialistas Soviéticas (URSS) foi criada oficialmente em 30 de dezembro de 1922, como resultado direto da Revolução Russa de 1917 e da consolidação do poder pelos bolcheviques. 
                                Liderados por Vladimir Lenin, os bolcheviques derrubaram o Governo Provisório e estabeleceram um regime socialista, que enfrentou forte resistência durante a Guerra Civil Russa (1918–1921). 
                                Após a vitória, o novo governo unificou quatro repúblicas — Rússia, Ucrânia, Bielorrússia e Transcaucásia — sob um regime federal centralizado, dando origem à URSS. 
                                O Estado soviético passou a ser governado pelo Partido Comunista e adotou um modelo econômico inicialmente flexível com a Nova Política Econômica (NEP), que permitia elementos de mercado para recuperar a economia. 
                                A criação da URSS marcou o surgimento do primeiro estado socialista da história e teve grande impacto mundial, influenciando a política global ao longo do século XX.
                            </p>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4YIw8xOvOz6w3FWxtyg9kVyiRLYikFTqyfA&s" alt="Imagem da Revolução Russa" />
                        </article>
                    </section>
                    <br />
                    <br />
                    <section className='bloco8RR'>
                        <h2>Consequências da Revolução</h2>
                        <article className='textoImagemRRB8'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI6kODo-ajpSyc7v8xfdrexj5cFEbYGXcJcQ&s" alt="Imagem da Revolução Russa" />
                            <p>
                                Após a Revolução Russa, houve várias consequências importantes. 
                                A queda do czarismo e a monarquia absolutista permitiram a ascensão do Partido Bolchevique e a criação da União Soviética, em 1922. 
                                O país enfrentou transformações como estatização, coletivização das terras e industrialização forçada, além de intensa repressão política sob Josef Stalin, com censura e gulags. 
                                A Revolução inspirou movimentos comunistas em países como China e Cuba, resultando na Internacional Comunista. 
                                Após a Segunda Guerra Mundial, a URSS emergiu como superpotência, causando a Guerra Fria e divisões na Europa.
                            </p>
                        </article>
                    </section>
                    <br />
                    <br />
                    <section className='bloco9RR'>
                        <h2>Curiosidades</h2>
                        <ol>
                            <li>
                                Os nomes das revoluções e suas datas podem parecer estranhos porque os russos usavam o calendário juliano. Isso faz com que a Revolução de Fevereiro ocorra em março e a de Outubro em novembro, segundo o nosso calendário.
                            </li>
                            <li>
                                Os líderes bolcheviques invadiram o Palácio de Inverno em 7 de novembro de 1917, que era a sede do governo provisório. Apesar da resistência, a invasão não resultou em muita violência.
                            </li>
                        </ol>
                    </section>
                    <br />
                    <br />
                </section>
                <hr />
                <section className='videosRR'>
                    <h1>VIDEOS SOBRE A <br /> <span id='blueRR'>REVOLUÇÃO RUSSA</span></h1>
                    <section className='video1RR'>
                        <h2>Revolução Russa - 1917</h2>
                        <section className='videoDescRR'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/88uERR_1BXQ?si=RjoGIBXzG-_mB0MJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <p>
                                O vídeo narra os eventos da Revolução Russa de 1917, desde as tensões sociais e econômicas sob o regime czarista até à tomada do poder pelos bolcheviques liderados por Lenin e Trotsky.
                            </p>
                        </section>
                    </section>
                    <br />
                    <br />
                    <section className='video2RR'>
                        <h2>Conheça a REVOLUÇÃO RUSSA | Resumão</h2>
                        <section className='videoDescRR'>
                            <p>
                                A Revolução Russa de 1917 foi um movimento durante a Primeira Guerra Mundial que transformou a Rússia de uma monarquia para um sistema socialista, liderado por tensões sociais, econômicas e a ascensão dos bolcheviques sob Lenin.
                            </p>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/BKrTxdKMRYk?si=TuVcd5yOwiCX1jNd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </section>
                    </section>
                    <br />
                    <br />
                    <section className='video3RR'>
                        <h2>100 anos das Revoluções Russas | Nerdologia</h2>
                        <section className='videoDescRR'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/z9cJRQ1y6jE?si=NSTsNHrFBEeweo_V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <p>
                                O vídeo explora os 100 anos das Revoluções Russas de 1917, detalhando os antecedentes sociais e políticos da Rússia Imperial, as duas revoluções de 1917, a guerra civil subsequente e o estabelecimento da União Soviética.
                            </p>
                        </section>
                    </section>
                    <br />
                    <br />
                    <button className='botaoVideoRR'>VIDEO DO GRUPO</button>
                </section>
                <br />
                <br />
                <BotaoCurtirTema idSection="bloco7RR" tema="Revolução Russa"/>
            </section>
        </>
    )
}

export default RevolucaoRussa