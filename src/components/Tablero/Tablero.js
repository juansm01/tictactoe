import "./Tablero.css";
import { Casilla } from "../Casilla/Casilla";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Tablero = ({jugador}) => {
  return (
    <div className="tablero">
      <Col>
        <Casilla jugador={jugador} id="0" />
        <Casilla jugador={jugador} id="3"/>
        <Casilla jugador={jugador} id="6"/>
      </Col>
      <Col>
        <Casilla jugador={jugador }id="1"/>
        <Casilla jugador={jugador}id="4"/>
        <Casilla jugador={jugador}id="7"/>
      </Col>
      <Col>
        <Casilla jugador={jugador}id="2"/>
        <Casilla jugador={jugador}id="5"/>
        <Casilla jugador={jugador}id="8"/>
      </Col>
    </div>
  );
};
