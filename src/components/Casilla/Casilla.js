import "./Casilla.css";
import { useState, useEffect } from "react";

export const Casilla = ({ jugador,id,pulsado }) => {
  const [Pulsado, setPulsado] = useState(false);
  const [PulsadoX, setPulsadoX] = useState(false);
  const [PulsadoY, setPulsadoY] = useState(false);
  useEffect(() => {
    pulsado = true
  
    
  }, [setPulsado])
  const handleonClick = (evt)  => {
    const casilla = evt.target;
    
    
    if (jugador == "J1") {
       /*const newEstadoX= {
        casilla: null,
        pulsado: true,
        cruz: true,
        circulo: false
    }*/
        casilla.style.background='url("https://img.icons8.com/ios/100/FFFFFF/multiply.png';
        setPulsado(true)
        setPulsadoX(true)
        
        
    }
    else{
        /*const newEstadoO= {
            casilla: null,
            pulsado: true,
            cruz: false,
            circulo: true
        }*/
        casilla.style.background='url("https://img.icons8.com/windows/96/FFFFFF/circled--v1.png")';
        setPulsado(true)
        setPulsadoY(true)
    }
    
    
  }
  return <div className="casilla" onClick={handleonClick}></div>;
};
