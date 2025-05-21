import { useEffect, useState } from "react"
import "./styles/BotaoCurtirTema.css"

function BotaoCurtirTema(props) {
    const [curtido, setCurtido] = useState(false)
    const [sectionsFavoritas, setSectionsFavoritas] = useState(JSON.parse(localStorage.getItem("sectionsFavoritas")) || [])
    const section = document.getElementById(`${props.idSection}`) || ""

    useEffect(() => {
        localStorage.setItem("sectionsFavoritas", JSON.stringify(sectionsFavoritas))
    }, [sectionsFavoritas])

    useEffect(() => {
        
            console.log("Verificando se o botão foi acionado")
            
            const existe = sectionsFavoritas.find(item => item.id === props.idSection)
            if (existe) {
                setCurtido(true)
                console.log("Curtido effect")
            } else {
                setCurtido(false)
                console.log("Descurtido effect")
            }
        
    }, [props.idSection, sectionsFavoritas])

    function botaoAcionado() {
        console.log("Botão acionado")
        
        if (!curtido) {
            console.log("Curtido")
            setCurtido(!curtido)

            const novoItem = {
                id: props.idSection ? props.idSection : "",
                html: section.innerHTML
            }
                
            const novaArray = [...sectionsFavoritas, novoItem]

            setSectionsFavoritas(novaArray)
            localStorage.setItem("sectionsFavoritas", JSON.stringify(novaArray))

        } else {
            console.log("Descurtido")
            setCurtido(!curtido)

            setSectionsFavoritas((prev) => {
                const novoArray = prev.filter(item => item.id !== props.idSection)
                return novoArray
            })
        }
        
    }


    return (
        <>
            <button className={curtido ? "icone-coracao fa-solid fa-heart" : "icone-coracao fa-regular fa-heart"} id="botaoCurtirTema" onClick={(() => botaoAcionado())}></button>
        </>
    )
}

export default BotaoCurtirTema