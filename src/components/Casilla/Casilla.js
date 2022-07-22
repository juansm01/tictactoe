import "./Casilla.css";
import { useState } from "react";

export const Casilla = ({ jugador }) => {
  const [Estado, setEstado] = useState([]);

  const handleonClick = (evt)  => {
    const casilla = evt.target;

    if (jugador == "J1") {
       const newEstadoX= {
        casilla: null,
        pulsado: true,
        cruz: true,
        circulo: false
    }
        casilla.style.background='url("https://img.icons8.com/ios/100/FFFFFF/multiply.png';
        setEstado([...Estado,newEstadoX])
        console.log(Estado)
    }
    else{
        const newEstadoO= {
            casilla: null,
            pulsado: true,
            cruz: false,
            circulo: true
        }
        casilla.style.background='url("https://img.icons8.com/windows/96/FFFFFF/circled--v1.png")';
        setEstado([...Estado,newEstadoO])
        console.log(Estado)
    }
    
    
  }
  return <div className="casilla" onClick={handleonClick}></div>;
};
