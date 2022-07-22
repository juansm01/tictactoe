import { useState,useEffect } from "react";
import "./App.css";
import { Tablero } from "./components/Tablero/Tablero";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [Jugador, setJugador] = useState('J1');
  useEffect(() => {
    if (Jugador=="J1"){
      setJugador("J2")
    }
    else{
      setJugador("J1")
    }
    console.log('Ahora es el' ,{Jugador});
    
  }, [] )
  
  return (
    <>
      <div className="header">Tic Tac Toe</div>
      <Container>
        <div className="centered">
          <Tablero jugador={Jugador}/>
        </div>
        <div className="jugador">
        <h3>
          Jugador:{Jugador}
          
        </h3>
      </div>
      </Container>
      
    </>
  );
}

export default App;
