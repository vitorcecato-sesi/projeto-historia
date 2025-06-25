import { useEffect, useState } from "react"
import "./styles/BotaoCurtirTema.css"

function BotaoCurtirTema(props) {
    const [curtido, setCurtido] = useState(false)   // Define se o botão está curtido(true) ou não (false)
    const [arrayCurtidas, setArrayCurtidas] = useState(JSON.parse(localStorage.getItem("curtidas")) || [])  // Obtem os elementos curtidos

    // Obtém informações da section via props
    const idSection = props.idSection   // Id para diferenciar sections armazenadas
    const temaSection = props.tema  // Página em que a section está
    
    // Construção de objeto com as informações
    const informacoes = {
        id: idSection,
        tema: temaSection
    }


    useEffect(() => {   // Loop para pegar alterações do localStorage
    const timer = setTimeout(() => {
        setArrayCurtidas(JSON.parse(localStorage.getItem("curtidas")) || [])
    }, 100);
    return () => clearTimeout(timer);
  })

  useEffect(() => {   //  Loop para verificar se o tema está curtido ou não
    const timer = setInterval(() => {
      const curtidoExistente = arrayCurtidas.find(item => item.id === idSection);
      if (curtidoExistente) {
        setCurtido(true);
      } else {
        setCurtido(false);
      }
    }, 100);
    return () => clearInterval(timer);
  })

  const botaoCurtir = () => {   // Função do botão de curtida
    if (!curtido) { // Caso não esteja curtido
      const novaArray = [...arrayCurtidas, informacoes]; // Cria uma nova array com as informações anteriores e o novo curtido
      localStorage.setItem("curtidas", JSON.stringify(novaArray));  // Armazena a nova array no local storage
      setCurtido(true);
    } else if (curtido) {   // Caso esteja curtido
        const arrayFiltrada = arrayCurtidas.filter((item) => item.id !== idSection) // Filtra a array deixando apenas os diferentes
        return (localStorage.setItem("curtidas", JSON.stringify(arrayFiltrada)))    // Armazena a nova array no local storage
    }
  };


    return (    // Retorna um botão com classes de icone de coração
        <>
            <button className={curtido ? "icone-coracao fa-solid fa-heart" : "icone-coracao fa-regular fa-heart"} id="botaoCurtirTema" onClick={(() => botaoCurtir())}></button>
        </>
    )
}

export default BotaoCurtirTema
