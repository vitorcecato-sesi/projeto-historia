import { useEffect, useState } from "react"
import './styles/BotaoTema.css'

function BotaoTema() {
    const [tema, setTema] = useState(localStorage.getItem('tema') || 'claro')   // Pega a informação de tema no local storage

    useEffect(() => {   // Atualiza o tema e a classe
        localStorage.setItem('tema', tema)  // Atualiza o tema no local storage
        if (tema === "escuro") {    // Se o tema for escuro
            document.body.classList.add("escuro")   // Adiciona a classe escuro para o body
        } else {    // Caso não seja escuro
            document.body.classList.remove("escuro")    // Remove a classe escuro para o body
        }
    }, [tema])

    const alterarTema = () => { // Botão para alterar o tema
        if (tema === "claro") { // Se o tema for claro
            setTema("escuro")   // Define o tema para escuro
        } else {    // Caso não seja claro
            setTema("claro")    // Define para claro
        }
    }
    
    return (    // Retorna um botão com o icone de lua ou sol
        <>
            <button className={tema === "claro" ? "botao-tema icon fa-solid fa-moon" : "botao-tema icon fa-solid fa-sun"} onClick={() => alterarTema()}></button>
        </>
    )
}

export default BotaoTema