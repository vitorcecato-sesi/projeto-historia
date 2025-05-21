import { useEffect, useState } from "react"
import './styles/BotaoTema.css'

function BotaoTema() {
    const [tema, setTema] = useState(localStorage.getItem('tema') || 'claro')

    useEffect(() => {
        localStorage.setItem('tema', tema)
        if (tema === "escuro") {
            document.body.classList.add("escuro")
        } else {
            document.body.classList.remove("escuro")
        }
    }, [tema])

    const alterarTema = () => {
        if (tema === "claro") {
            setTema("escuro")
            document.body.classList.add("dark")
        } else {
            setTema("claro")
        }
    }
    
    return (
        <>
            <button className={tema === "claro" ? "botao-tema icon fa-solid fa-moon" : "botao-tema icon fa-solid fa-sun"} onClick={() => alterarTema()}></button>
        </>
    )
}

export default BotaoTema