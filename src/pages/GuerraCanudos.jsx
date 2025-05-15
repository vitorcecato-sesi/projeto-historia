import React, { useState } from 'react';
import Img1 from '../assets/Imgs-GuerraCanudos/Canu1.png';
import img2 from '../assets/Imgs-GuerraCanudos/Canu2.png';
import img3 from '../assets/Imgs-GuerraCanudos/Canu3.png';
import img4 from '../assets/Imgs-GuerraCanudos/Canu4.png';
import './style/GuerraCanudos.css';

import IMGIntro from "../assets/Imgs-GuerraCanudos/Intro.png";

const imagens = [Img1, img2, img3, img4];

export default function GuerraCanudos() {
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="Bloco-Carrossel">
        <div className="Numeros">{index + 1} / {imagens.length}</div>
        <img
          src={imagens[index]}
          alt={`Slide ${index + 1}`}
          style={{ width: '100%', height: '85%', objectFit: 'cover' }}
        />

        <div className="Bolinhas">
          {imagens.map((_, i) => (
            <span
              key={i}
              className={`Bola ${i === index ? 'active' : ''}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>

   <div className='Blocao-WikieApi'>
      <div className="Api-Wikipedia">
        <center>
        <div className="Titulo-Api">
          <h2>Informações da Wikipédia</h2>
        </div>
        </center>

        <br />

        <center>
        <div className="Texto-Api">
          <p>
            Texto , Texto , Texto , Texto , Texto , Texto ,Texto , Texto , Texto , Texto , Texto ,
            Texto , Texto , Texto , Texto , Texto ,Texto , Texto , Texto , Texto , Texto , Texto ,
            Texto , Texto , Texto , Texto , Texto ,Texto , Texto , Texto , Texto , Texto , Texto ,
            Texto , Texto , Texto , Texto , Texto ,Texto , Texto , Texto , Texto , Texto , Texto ,
            Texto , Texto , Texto , Texto , Texto ,Texto , Texto , Texto , Texto , Texto , Texto ,
          </p>
        </div>
        </center>
      </div>

    
      <div className="Bloco-Intro" >
        <center>
        <div className="Titulo-Intro">
          <h2>Introdução</h2>
        </div>
        </center>
        <br />
        <div >
          <img className='img-In' src={IMGIntro}></img>
        </div>
        <br />
        <center>
        <div className="Texto-Intro">
          <p>
            A guerra de Canudos foi um conflito histórico que ocorreu no arraial de Canudos (sertão
            da Bahia) em 1896 - 1897, o Exército Brasileiro e os seguidores de Antônio Conselheiro,
            um líder religioso de Canudos.
          </p>
        </div>
        </center>
      </div>
      </div>


      

    </>
  );
}
