import "./Tablero.css";
import { Casilla } from "../Casilla/Casilla";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Tablero = ({jugador}) => {
  return (
    <div className="tablero">
      <Col>
        <Casilla jugador={jugador} />
        <Casilla jugador={jugador}/>
        <Casilla jugador={jugador}/>
      </Col>
      <Col>
        <Casilla jugador={jugador}/>
        <Casilla jugador={jugador}/>
        <Casilla jugador={jugador}/>
      </Col>
      <Col>
        <Casilla jugador={jugador}/>
        <Casilla jugador={jugador}/>
        <Casilla jugador={jugador}/>
      </Col>
    </div>
  );
};
