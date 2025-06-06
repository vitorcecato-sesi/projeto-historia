import { useEffect, useState } from "react"
import "./styles/BotaoCurtirTema.css"

function BotaoCurtirTema(props) {
    const [curtido, setCurtido] = useState(false)   // Define se o botão está curtido(true) ou não (false)
    const [arrayCurtidas, setArrayCurtidas] = useState(JSON.parse(localStorage.getItem("curtidas")) || [])  // Obtem os elementos curtidos

    useEffect(() => {   // Verifica os itens que foram curtidos para atualizar o botão de coração
        
            console.log("Verificando se o botão foi acionado")  // Verifica se o botão foi acionado
            console.log(JSON.stringify(arrayCurtidas)) // Verifica a arrayCurtidas

            const existe = arrayCurtidas.find(item => item.id === props.idSection)  // Verifica se o item curtido já existe na array (retorna true ou false)
            if (existe) {   // Caso exista
                setCurtido(true)    // Curtido true (já foi curtido)
                console.log("Curtido effect")   // Console log para verificar
            } else {    // Caso não exista
                setCurtido(false)   // Curtido false (não foi curtido)
                console.log("Descurtido effect")    // Console log para verificar
            }
        
    }, [props.idSection, arrayCurtidas])    // Toda vez que a section ou a array de curtidas mudar

    function botaoAcionado() {  // Quando o botão do coração for pressionado
        console.log("Botão acionado")   // Aviso no console log

        setArrayCurtidas(() => {
            const arrayStorage = JSON.parse(localStorage.getItem("curtidas"))    // Obtêm os dados do local storage

            console.log("Teste arraystorage:" + JSON.stringify(arrayStorage))    // Verifica os dados do local storage
            console.log("Tamanho:" + arrayStorage.length)    // Verifica o tamanho da array do local storage

            if (arrayStorage.length > 0) {    // Verifia se o tamanho é maior que 0
                console.log("to aqui")    // Console log para acompanhar o processo
                return arrayStorage    // Retorna a array do local storage
            }
            else {    // Caso não seja maior que 0
                return []    // Retorna array vazia
            }
        }) // Atualiza com o local storage
        
        console.log("Array curtidas 0:" + JSON.stringify(arrayCurtidas))    // Verificação dos dados da arrayCurtidas - checar retorno
        
        if (!curtido) { // Se não estiver curtido
            console.log("Curtido")  // Aviso no console log

            console.log("Array Curtidas1: " + JSON.stringify(arrayCurtidas))    // Verificação dos dados da arrayCurtidas - checar retorno
            
            setCurtido(!curtido)    // Mudar estado do botão para o oposto do atual

            const novoItem = {  // Organiza o formato do objeto
                id: props.idSection ? props.idSection : "", // Atribue o id da section passada por props
                tema: props.tema    // Atribue o tema da página, passado por props
            }

            console.log("Array curtidas:" + JSON.stringify(arrayCurtidas))
                
            const novaArray = [...arrayCurtidas, novoItem]  // Cria uma nova array com a array antiga e com os objetos novos
            console.log("Nova array:" + JSON.stringify(novaArray))    // Checa os dados da nova array
            console.log("Teste:" + JSON.stringify([...arrayCurtidas, novoItem]))    // Verifica se o metodo para criar a nova array está funcionando
            // ... - spread operator

            setArrayCurtidas(novaArray) // Atualiza a variavel
            localStorage.setItem("curtidas", JSON.stringify(novaArray)) // Atualiza o localstorage com a nova array

        } else {    // Se estiver curtido
            console.log("Descurtido")   // Aviso no console log
            setCurtido(!curtido)    // Mudar estado do botão para o oposto do atual

            // Cria uma nova array removendo o elemento que foi descurtido
            const novoArray = arrayCurtidas.filter(item => item.id !== props.idSection)
            
            setArrayCurtidas(novoArray)    // Atualiza a variavel
            localStorage.setItem("curtidas", JSON.stringify(novoArray)) // Atualiza o localstorage com a nova array
        }
        
    }


    return (    // Retorna um botão com classes de icone de coração
        <>
            <button className={curtido ? "icone-coracao fa-solid fa-heart" : "icone-coracao fa-regular fa-heart"} id="botaoCurtirTema" onClick={(() => botaoAcionado())}></button>
        </>
    )
}

export default BotaoCurtirTema
