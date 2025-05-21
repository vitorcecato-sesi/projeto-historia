import { useEffect, useState } from "react"

function BotaoCurtirTema(props) {
    const [curtido, setCurtido] = useState(false)
    const [sectionsFavoritas, setSectionsFavoritas] = useState(JSON.parse(localStorage.getItem("sectionsFavoritas")) || [])
    const section = document.getElementById(`${props.idSection}`) || ""

    useEffect(() => {
        const timer = setInterval(() => {
            setSectionsFavoritas(JSON.parse(localStorage.getItem("sectionsFavoritas")) || [])
        }, 100)

        return() => {
            clearInterval(timer) // Remove o timer ao desmontar
        }
    }, [])

    function botaoAcionado() {
        setCurtido(!curtido)
        console.log("Botão acionado")
        
        if (section) {
            if (curtido) {
                console.log("Curtido")
                
                const novoItem = {
                    id: props.idSection ? props.idSection : "",
                    section: section,
                    html: section.innerHTML
                }

                setSectionsFavoritas((prev) => {
                    const existe = prev.find(item => item.id === props.idSection)
                    if (!existe) {
                        return [...prev, novoItem]
                    } else {
                        return prev
                    }
                })
                
                localStorage.setItem("sectionsFavoritas", JSON.stringify(sectionsFavoritas))
                
            }
            else {
                console.log("Descurtido")

                setSectionsFavoritas((prev) => {
                    const novoArray = prev.filter(item => item.id !== props.idSection)
                    return novoArray
                })
            }
        }
    }


    return (
        <>
            <button className={curtido ? "fa-solid fa-heart" : "fa-regular fa-heart"} id="botaoCurtirTema" onClick={(() => botaoAcionado())}></button>
        </>
    )
}

export default BotaoCurtirTema