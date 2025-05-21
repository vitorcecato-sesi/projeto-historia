import { useEffect, useState } from "react"
import "./styles/BotaoCurtirTema.css"

function BotaoCurtirTema(props) {
    const [curtido, setCurtido] = useState(false)
    const [quantCurtidas, setQuantCurtidas] = useState(JSON.parse(localStorage.getItem("curtidas")) || [])

    useEffect(() => {
        localStorage.setItem("curtidas", JSON.stringify(quantCurtidas))
    }, [quantCurtidas])

    useEffect(() => {
        
            console.log("Verificando se o botão foi acionado")
            
            const existe = quantCurtidas.find(item => item.id === props.idSection)
            if (existe) {
                setCurtido(true)
                console.log("Curtido effect")
            } else {
                setCurtido(false)
                console.log("Descurtido effect")
            }
        
    }, [props.idSection, quantCurtidas])

    function botaoAcionado() {
        console.log("Botão acionado")
        
        if (!curtido) {
            console.log("Curtido")
            setCurtido(!curtido)

            const novoItem = {
                id: props.idSection ? props.idSection : "",
                tema: props.tema
            }
                
            const novaArray = [...quantCurtidas, novoItem]

            setQuantCurtidas(novaArray)
            localStorage.setItem("curtidas", JSON.stringify(novaArray))

        } else {
            console.log("Descurtido")
            setCurtido(!curtido)

            setQuantCurtidas((prev) => {
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