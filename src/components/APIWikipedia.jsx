import { useEffect, useState } from "react"

function APIWikipedia(props) {
    const [info, setInfo] = useState("")
    const [erro, setErro] = useState(false)
    const [mensagemErro, setMensagemErro] = useState("")
    const campoWiki = props.campoWiki 
    const titulo = encodeURIComponent(props.titulo) // Transforma o título em uma string compatível com URL

    useEffect(() => {
        async function buscarWiki() {
            try {
                const resposta = await fetch(`https://pt.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&titles=${titulo}&format=json&origin=*`)
                const dados = await resposta.json()
                if (dados && dados.query && dados.query.pages) {
                    // Verifica se a resposta contém a propriedade "pages"
                    
                    const pagina = dados.query.pages // Pega a página da resposta
                    const paginaID = Object.keys(pagina)[0] // Pega o primeiro ID de página
                    const conteudo = pagina[paginaID].extract // Pega o conteúdo da página
                    
                    setInfo(conteudo) // Atualiza o estado com o conteúdo

                } else {
                    console.log(dados)
                    setErro(true)
                }
            } catch (error) {
                console.error(error)    
                setMensagemErro(error.message)
                setErro(true)
            }
      }
      buscarWiki()
    }, [titulo, info])

    useEffect(() => {
        if (info) {
            const wikiSection = document.getElementById(campoWiki)  // Pega a seção onde o conteúdo será adicionado
            wikiSection.innerHTML = info // Adiciona o conteúdo da página à seção
        }
    }, [info, campoWiki])

    return(
        <>
            <p style={{color: "red"}}>{erro ? `Ocorreu um erro: '${mensagemErro}'` : ""}</p>
        </>
    )
}

export default APIWikipedia