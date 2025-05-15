import React, { useState } from 'react';
import img1 from '../assets/Imgs-GuerraCanudos/Canudos1.png';
import img2 from '../assets/Imgs-GuerraCanudos/Canudos2.png';
import img3 from '../assets/Imgs-GuerraCanudos/Canudos3.png';
import img4 from '../assets/Imgs-GuerraCanudos/Canudos4.png';
import './style/GuerraCanudos.css';

const imagens = [img1, img2, img3, img4];

export default function GuerraCanudos() {
  const [index, setIndex] = useState(0);


  return (
    <div className="Bloco-Carrossel">
      <div>
        <div className="Numeros">{index + 1} / {imagens.length}</div>
        <img src={imagens[index]} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
      </div>

      
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
  );
}
