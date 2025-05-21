
import Navbar from "../components/Navbar";
import './style/GuerraContestado.css'
function GuerraContestado() {
    return (
        <div>
            <Navbar/>
            <section className='bannerGC'>
                <h1 id='branco'>CONHEÇA MAIS SOBRE <br/> <span id='vermelho'> A GUERRA DE CONTESTADOS </span></h1>
            </section>
            <section className='centro'>
            <section className="blocoWiki">
            

            <h2>Wikipédia</h2>
           
            </section>
            </section>
            <hr/>

            <h1 className='centro'>Contestado </h1>
            <section className='centro'>
            <section className='blocoInfo'>
            <h2>Resumo</h2>
            <p>A Guerra do Contestado foi um conflito armado que ocorreu entre 1912 e 1916, na região do Contestado, que abrange partes dos estados de Santa Catarina e Paraná, no Brasil. O conflito envolveu a disputa entre os habitantes locais, conhecidos como "caboclos", e as forças do governo brasileiro, além de empresas madeireiras que exploravam a região. A guerra teve raízes em questões sociais, econômicas e políticas, incluindo a luta pela posse da terra e a resistência à exploração econômica.</p>
            
            </section>
            <section className='blocoInfo'>
            <h2>Motivo</h2>
            <section className='blocoInfo2'>
            <p>O principal motivo da Guerra do Contestado foi a disputa pela posse da terra e a exploração econômica da região. A chegada de empresas madeireiras, como a Companhia de Estrada de Ferro São Paulo-Rio Grande, levou à desapropriação de terras dos caboclos, que eram os habitantes locais. Além disso, havia uma forte influência religiosa na região, com a presença de líderes messiânicos que prometiam libertar o povo da opressão.</p>
                <img id='imgGC' src='https://media.gazetadopovo.com.br/2016/10/9a43ec7da1daae2c8b5f7178aebe75e9-gpLarge.jpg' alt='Guerra do Contestado' />
            </section>
            
            </section>
             <section className='blocoInfo'>
            <h2>Desenvolvimento </h2>
            <section className='blocoInfo2'>
                <img id='imgGC' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyBVlWEP-XnVV_NfwNHLt7OaI4TtjSBH7ZmA&s' alt='Guerra do Contestado' />
            <p>A guerra começou em 1912, quando os caboclos se organizaram em grupos armados para resistir à exploração das terras e à presença das forças do governo. O conflito se intensificou em 1914, quando os caboclos, liderados por figuras messiânicas como José Maria, proclamaram a criação de um "Reino de Deus" na região. As forças do governo responderam com repressão violenta, resultando em batalhas sangrentas e massacres de civis.</p>               
            </section>
            
            
            </section>
            <section className='blocoInfo'>
            <h2 >Fim da guerra</h2>
            <section className='blocoInfo2'>
             <img id='imgGC' src='https://media.gazetadopovo.com.br/2016/10/9a43ec7da1daae2c8b5f7178aebe75e9-gpLarge.jpg' alt='Guerra do Contestado' /> 
            <p>A Guerra do Contestado terminou em 1916, após quatro anos de conflitos. O governo brasileiro conseguiu reprimir a resistência dos caboclos, mas o custo humano e social foi alto. Estima-se que milhares de pessoas tenham morrido durante o conflito, e a região do Contestado ficou marcada por traumas e divisões sociais. A guerra também teve um impacto significativo na história do Brasil, destacando as tensões entre o desenvolvimento econômico e os direitos das populações locais.</p>
            </section>
            </section>
            
            </section>


            <hr/>
            <section className='blocoLado'>
                <section className='blocoVideo'>
            <h2>Video</h2>
            <iframe className="video"  width="400" height="300" src="https://www.youtube.com/embed/bTOdnw2alHw?si=W2pUiBJTNOxwP87g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           <br/>
            <hr/>
            </section>
            <section className='blocoVideo'>
            <h2 >Filme</h2>
            <iframe className="video" width="400" height="300" src="https://www.youtube.com/embed/kbMUvt4NdtQ?si=Q3P53X9oI1u3rSDb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </section>
            </section>




        </div>
    )
}
export default GuerraContestado