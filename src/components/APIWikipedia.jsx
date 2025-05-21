import { useEffect, useState } from "react"

function APIWikipedia(props) {
    const [info, setInfo] = useState("")
    const [imagemURL, setImagemURL] = useState(null)
    const [erro, setErro] = useState(false)
    const [mensagemErro, setMensagemErro] = useState("")
    const campoWiki = props.campoWiki 
    const imagemID = props.imagemID
    const imagemAlt = props.imagemAlt
    const imagemClass = props.imagemClass
    const titulo = encodeURIComponent(props.titulo) // Transforma o título em uma string compatível com URL

    useEffect(() => {
        async function buscarWiki() {
            try {
                const resposta = await fetch(`https://pt.wikipedia.org/w/api.php?action=query&prop=pageimages|extracts&exintro&titles=${titulo}&format=json&origin=*`)
                const dados = await resposta.json()
                if (dados && dados.query && dados.query.pages) {
                    // Verifica se a resposta contém a propriedade "pages"
                    
                    const pagina = dados.query.pages // Pega a página da resposta
                    const paginaID = Object.keys(pagina)[0] // Pega o primeiro ID de página
                    const conteudo = pagina[paginaID].extract // Pega o conteúdo da página
                    const imagem = pagina[paginaID].thumbnail.source // Pega a imagem da página

                    setInfo(conteudo) // Atualiza o estado com o conteúdo
                    setImagemURL(imagem) // Atualiza o estado com a imagem

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
        if (imagemURL && imagemID) { // Verifica se a imagem e o ID da imagem estão definidos
            const imagem = document.getElementById(`${imagemID}`) // Cria um elemento de imagem
            imagem.src = imagemURL ? imagemURL : "" // Define a URL da imagem
            imagem.alt = imagemAlt ? imagemAlt : "" // Define o texto alternativo da imagem
            imagem.className = imagemClass ? imagemClass : "" // Define a classe da imagem
        }
    }, [info, imagemURL, campoWiki, imagemID, imagemAlt, imagemClass])

    return(
        <>
            <p style={{color: "red"}}>{erro ? `Ocorreu um erro: '${mensagemErro}'` : ""}</p>
        </>
    )
}

export default APIWikipedia