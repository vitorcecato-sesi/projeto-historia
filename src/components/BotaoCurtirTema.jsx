import { useEffect, useState } from "react"
import "./styles/BotaoCurtirTema.css"

function BotaoCurtirTema(props) {
    const [curtido, setCurtido] = useState(false)   // Define se o botão está curtido(true) ou não (false)
    const [quantCurtidas, setQuantCurtidas] = useState(JSON.parse(localStorage.getItem("curtidas")) || [])  // Obtem os elementos curtidos

    useEffect(() => {
        localStorage.setItem("curtidas", JSON.stringify(quantCurtidas)) // Atualiza o local storage
    }, [quantCurtidas])

    useEffect(() => {   // Verifica os itens que foram curtidos para atualizar o botão de coração
        
            console.log("Verificando se o botão foi acionado")  // Verifica se o botão foi acionado
            
            const existe = quantCurtidas.find(item => item.id === props.idSection)  // Verifica se o item curtido já existe na array (retorna true ou false)
            if (existe) {   // Caso exista
                setCurtido(true)    // Curtido true (já foi curtido)
                console.log("Curtido effect")   // Console log para verificar
            } else {    // Caso não exista
                setCurtido(false)   // Curtido false (não foi curtido)
                console.log("Descurtido effect")    // Console log para verificar
            }
        
    }, [props.idSection, quantCurtidas])    // Toda vez que a section ou a array de curtidas mudar

    function botaoAcionado() {  // Quando o botão do coração for pressionado
        console.log("Botão acionado")   // Aviso no console log
        
        if (!curtido) { // Se não estiver curtido
            console.log("Curtido")  // Aviso no console log
            setCurtido(!curtido)    // Mudar estado do botão para o oposto do atual

            const novoItem = {  // Organiza o formato do objeto
                id: props.idSection ? props.idSection : "", // Atribue o id da section passada por props
                tema: props.tema    // Atribue o tema da página, passado por props
            }
                
            const novaArray = [...quantCurtidas, novoItem]  // Cria uma nova array com a array antiga e com os objetos novos
            // ... - spread operator

            setQuantCurtidas(novaArray) // Atualiza a array de curtidas
            localStorage.setItem("curtidas", JSON.stringify(novaArray)) // Adiciona no localstorage

        } else {    // Se estiver curtido
            console.log("Descurtido")   // Aviso no console log
            setCurtido(!curtido)    // Mudar estado do botão para o oposto do atual

            setQuantCurtidas((prev) => {    // prev - array atual
                const novoArray = prev.filter(item => item.id !== props.idSection)  // Cria uma nova array removendo o elemento que foi descurtido
                return novoArray    // Retorna a nova array para ser definida no set
            })
        }
        
    }


    return (    // Retorna um botão com classes de icone de coração
        <>
            <button className={curtido ? "icone-coracao fa-solid fa-heart" : "icone-coracao fa-regular fa-heart"} id="botaoCurtirTema" onClick={(() => botaoAcionado())}></button>
        </>
    )
}

export default BotaoCurtirTema