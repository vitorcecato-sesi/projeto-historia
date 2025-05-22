import Navbar from "../components/Navbar";
import './style/PaginaVideo.css'
function PaginaVideo(){
    return (
     <>
     <Navbar/>
     <section className="Centro1">
     <h1 id='branco2'>VENHA ENTENDER MAIS SOBRE A <br/> <span id='roxo1'>  REVOLUÇÃO RUSSA </span></h1>
     <h1>REVOLUÇÃO RUSSA</h1>
     <section className="BlocoVideo">
     <iframe id="video2" width="560" height="315" src="https://www.youtube.com/embed/eERVu09GCWE?si=X1SRhNr9cMOyKIqT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     </section>









     </section>
     
     
     
     
     
     
     
     
     



     </>
    )
}
export default PaginaVideo;