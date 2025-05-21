import "./style/FascismoItaliano.css"
import Navbar from "../components/Navbar"
import React, { useState } from 'react';
import { Link } from "react-router-dom"
import APIWikipedia from "../components/APIWikipedia";

function FascismoItaliano() {

    const slides = [
        {
            title: 'O que foi?',
            description: 'Saiba o que foi o fascismo italiano.',
            image: 'https://tribunadonorte.com.br/wp-content/uploads/2023/07/88353.jpg',
            id: '#0',
        },
        {
            title: 'Contexto histórico',
            description: 'Saiba o contexto histórico do fascismo italiano.',
            image: 'https://static.historiadomundo.com.br/2024/09/benito-mussolini-lider-do-fascismo-italiano-entre-membros-dos-camisas-negras-especie-de-milicia-fascista.jpg',
            id: '#1',
        },
        {
            title: 'Governo Fascista',
            description: 'Saiba sobre como foi o governo fascista.',
            image: 'https://www.politize.com.br/wp-content/uploads/2024/07/fascismo-entenda-o-conceito.jpg',
            id: '#2',
        },
        {
            title: 'Fim do governo',
            description: 'Saiba o que foi o fascismo italiano.',
            image: 'https://medias.revistaoeste.com/wp-content/uploads/2022/08/fascismo-e-de-esquerda-2.jpg',
            id: '#3',
        },
        {
            title: 'Características',
            description: 'Saiba as características do governo fascista.',
            image: 'https://static.mundoeducacao.uol.com.br/mundoeducacao/2020/02/benito-mussolini-me.jpg',
            id: '#4',
        },
        {
            title: 'Benito Mussolini',
            description: 'Saiba quem foi Benito Mussolini.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Benito_Mussolini_colored.jpg/500px-Benito_Mussolini_colored.jpg',
            id: '#5',
        },
    ];

    // State for the current index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to navigate to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    // Function to navigate to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    // Get current, previous, and next slides
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    const nextIndex = (currentIndex + 1) % slides.length;


    return (
        <>
            <Navbar />
            <br></br>
            <section className="carousel">
                <button onClick={prevSlide} className="carousel-button">‹</button>
                <section className="carousel-slide">
                    <section className="slideAP">
                        <img src={slides[prevIndex].image} alt={slides[prevIndex].title} />
                        <h2>{slides[prevIndex].title}</h2>
                        <a id="aAP" href={slides[prevIndex].id}>{slides[prevIndex].description}</a>
                    </section>
                    <section className="slide">
                        <a></a>
                        <img src={slides[currentIndex].image} alt={slides[currentIndex].title} />
                        <h2>{slides[currentIndex].title}</h2>
                        <a className="a" href={slides[currentIndex].id}>{slides[currentIndex].description}</a>
                    </section>

                    <section className="slideAP">
                        <img src={slides[nextIndex].image} alt={slides[nextIndex].title} />
                        <h2>{slides[nextIndex].title}</h2>
                        <a id="aAP" href={slides[nextIndex].id}>{slides[nextIndex].description}</a>
                    </section>
                </section>
                <button onClick={nextSlide} className="carousel-button">›</button>
            </section>
            <section className="box-geral">
                <h1 className="tituloF">CONHEÇA MAIS SOBRE O <span className="verdeTexto">FASCISMO</span> <span className="vermelhoTexto">ITALIANO...</span></h1>
                <APIWikipedia titulo="Itália Fascista" campoWiki="wikiFa" imagemID ="imagemToma" imagemAlt="a" imagemClass="a" />
                <h2 className="titulowiki">INFORMAÇÕES DA WIKIPÉDIA</h2>
                <section className="box-infow" id="wikiFa">
                    <img id="imagemToma" src="" alt="" />
                </section>

                <section id="0" className="box-info">
                    <section className="box-coluna">
                        <h2>O QUE É?</h2>
                        <p> O fascismo foi um regimento político totalitário liderado por Benito Mussolini, o movimento surgiu na itália em 1910 e foi oficializado como partido político em 1922, governando a itália
                            até 1943. O fascismo dominou o país inteiro (educação, economia, religião e política).
                        </p>
                    </section>
                    <img src="https://cartasabertas.com.br/wp-content/uploads/2022/09/capa-nazismo-bandeira.jpg" />
                </section>

                <section id="1" className="box-info">
                    <section className="box-coluna">
                        <h2>CONTEXTO HISTÓRICO</h2>

                        <p>Após a primeira guerra mundial, a Europa estava em caos, com uma grande crise econômica. A população se encontrava bastante desanimada.
                            São nessas condições que surgem alguns políticos e ideólogos, com discursos relacionados a resolver problemas complexos e  falar o que o povo mais queria ouvir, portanto, esse líder facista aproveitou o momento para apresentar um discurso parecido com o citado, sendo parecido com "Levante-se, orgulhe-se! A nação precisa de você, nós somos superiores".
                            Vale ressaltar que a Itália individualmente falando, também se encontrava em uma crise econômica, com sua moeda desvalorizada, aumento da inflação, a taxa de desemprego aumentando, diversas revoltas, greves e invasões de terra.
                            Em meio a tudo isso, os partidos de esquerda ganharam força, fato esse que incomodou os latifundiários e burgueses.
                            Todos esses fatores "justificam" a força e popularidade do fascismo italiano na época.
                        </p>
                    </section>
                </section>
                <br></br>
                <section className="imgout">
                    <img src="https://static.historiadomundo.com.br/2024/09/benito-mussolini-lider-do-fascismo-italiano-entre-membros-dos-camisas-negras-especie-de-milicia-fascista.jpg" />
                    <p>Contexto histórico</p>
                </section>
                <section className="box-info">
                    <section id="2" className="box-coluna">
                        <h2>GOVERNO FASCISTA</h2>
                        <p> Depois da vitória nas eleições de maneira fraudulenta, o Partido Fascista se consolida no poder. Mussolini promulgou as "Leis Fascistíssimas" que deixaram claro quem mandava no país.
                            Estas leis determinaram que o Partido Nacional Fascista era o único partido existente e o Grande Conselho Fascista, presidido por Mussolini, era o órgão supremo do Estado. Ainda determinava que as organizações civis deveriam ser controladas pela polícia e os sindicatos fascistas eram os únicos realmente reconhecidos.
                            Os funcionários públicos deveriam jurar fidelidade ao regime e aqueles
                            que recusassem eram demitidos.
                        </p>
                        <p> Em 1927, foi apresentada uma carta (Carta del Lavoro) que instruiu como eram para ser conduzidas as relações de trabalho no país. A Carta garantia a propriedade privada e determinava que a organização dos sindicatos deveriam ser feitas pelo Estado.
                            Em 1930, o fascismo incorpora o discurso de expansão territorial, ao declarar guerra à Etiópia. O conflito tinha como objetivo exaltar a "raça italiana", seus princípios e virtudes. Igualmente é época quando Mussolini se aproxima de Adolf Hitler, tendo como resultado
                            a promulgação das leis antissemitas onde os judeus italianos perderam seus direitos civis.
                        </p>
                    </section>
                </section>
                <br></br>
                <section className="imgout">
                    <img src="https://www.politize.com.br/wp-content/uploads/2024/07/fascismo-entenda-o-conceito.jpg" />
                    <p>Governo Fascista</p>
                </section>

                <section id="3" className="box-info">
                    <img src="https://medias.revistaoeste.com/wp-content/uploads/2022/08/fascismo-e-de-esquerda-2.jpg" />
                    <section className="box-coluna">
                        <h2>FIM DO GOVERNO</h2>
                        <p>O governo de Mussolini chega ao seu final em 1943, em um momento de sérias derrotas da Itália durante a Segunda Guerra Mundial. Assustado, Mussolini é levado pelos alemães para o norte e quando tenta escapar para a Alemanha é capturado e morto pelos partisans.
                        </p>
                    </section>
                </section>

                <section id="4" className="box-info">
                    <section className="box-coluna">
                        <h2>CARACTERÍSTICAS</h2>
                        <section className="box-row">
                            <ul>
                                <li>1. Sistema unipartidário ou monopartidário, no qual apenas o próprio partido fascista tinha direito à atuação no sistema político nacional;</li>
                                <li>2. Culto ao chefe/líder como forma de colocá-lo como a única pessoa capaz de guiar a nação ao seu destino;</li>
                                <li>3. Desprezo pelos valores liberais, nos quais estão inclusas as liberdades individuais e a democracia representativa;</li>
                                <li>4. Desprezo por valores coletivistas, como o socialismo, comunismo e anarquismo;</li>
                                <li>5. Desejo de expansão imperialista baseada na ideia de domínio de povos mais fracos;</li>
                            </ul>
                            <ul>
                                <li>6. Vitimização de determinados grupos da sociedade ou de um povo com o objetivo de iniciar uma perseguição contra aqueles que eram vistos como “inimigos do povo”;</li>
                                <li>7. Uso da retórica contra os métodos políticos tradicionais afirmando que estes eram incapazes de combater as crises e de levar a nação à prosperidade;"</li>
                                <li>8. Exaltação dos “valores tradicionais” em detrimento de valores considerados "modernos";</li>
                                <li>9. Mobilização das massas;</li>
                                <li>10. Controle total do Estado fascista sobre assuntos relacionados à economia, política e cultura.</li>
                            </ul>
                        </section>
                    </section>
                </section>
                <br></br>
                <section className="imgout">
                    <img src="https://static.mundoeducacao.uol.com.br/mundoeducacao/2020/02/benito-mussolini-me.jpg" />
                    <p>Característiscas</p>
                </section>

                <section id="5" className="box-info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Benito_Mussolini_colored.jpg/500px-Benito_Mussolini_colored.jpg" />
                    <section className="box-coluna">
                        <h2>BENITO MUSSOLINI</h2>
                        <p>Benito Mussolini, o líder do movimento italiano, juntou diversos seguidores e conseguiu o poder do governo.
                            Nascido em 29 de julho de 1883, em uma cidade pequena localizada no sul da Itália, filho de pai ferreiro e mãe professora, cresceu com as histórias de nacionalismo e heroísmo político de seu pai socialista. Ainda jovem mudou-se para a Suíça e tornou-se um socialista
                            declarado, quando voltou para Itália, se estabeleceu como um jornalista socialista, porém futuramente Mussolini mudou sua ideologia política e criou um partido de extrema direita, em 1919.
                        </p>
                    </section>
                </section>

                <section className="box-filmes">
                    <h1>HORA DO FILME...</h1>
                    <section className="box-videos">
                        <iframe width="580" height="350" src="https://www.youtube.com/embed/1crIvDB7Ios" title="Marcha sobre Roma e o fascismo italiano | Nerdologia" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <section className="box-coluna">
                            <h2>DESCRIÇÃO DO VÍDEO: </h2>
                            <p>O vídeo "Marcha sobre Roma e o fascismo italiano" do canal Nerdologia, apresentado por Felipe Figueiredo, oferece uma análise aprofundada sobre a ascensão do fascismo na Itália e o papel crucial da Marcha sobre Roma em 1922 na consolidação de Benito Mussolini no poder.</p>
                        </section>
                    </section>
                    <section className="box-videos">
                        <iframe width="580" height="350" src="https://www.youtube.com/embed/BPw5fxTPaIs" title="Filme - A Onda / Die Welle (2008) - Dublado" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <section className="box-coluna">
                            <h2>SINOPSE DO FILME "A ONDA": </h2>
                            <p>Rainer é um professor a quem foi designada a tarefa de instruir seus estudantes de Ensino Médio sobre o Estado Autocrático durante uma sessão às lições longas. Um professor favorito entre as crianças, Rainer decide deixar seus alunos desenvolver o assunto e pede a eles que construam sua própria autocracia. No entanto, quando as crianças formam um Estado-nação similar com o da Alemanha nazista/Fascismo italiano, os professores não sabem o que fazer.</p>
                        </section>
                    </section>
                </section>
            </section>
        </>
    )
}

export default FascismoItaliano
