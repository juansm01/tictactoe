import { useState } from "react";
import "./App.css";
import { Tablero } from "./components/Tablero/Tablero";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [Jugador, setJugador] = useState('J1');

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
