import { Link } from "react-router-dom";
import Header2 from "./Header2";
import { CotiContext } from "./CotizadorProvider";
import { useEffect, useState, useContext } from "react";

function Historial() {
  const [historialCotizaciones, setHistorialCotizaciones] = useState([]);
  const { setSelectedOption } = useContext(CotiContext);

  useEffect(() => {
    const cargarHistorial = () => {
      const historialGuardado =
        JSON.parse(localStorage.getItem("historialCotizaciones")) || [];
      setHistorialCotizaciones(historialGuardado);
    };
    cargarHistorial();
  }, []);

  const retornoTablaHTML = (fila) => {
    return (
      <tr key={fila.poliza}>
        <td>{fila.fechaCotizacion}</td>
        <td>{fila.vivienda}</td>
        <td>{fila.ubicacion}</td>
        <td>{fila.metro}</td>
        <td>${fila.poliza}</td>
      </tr>
    );
  };
  const Borrado = () => {
    setSelectedOption("");
  };
  const borrar_Historial = () => {
    localStorage.clear();
    setHistorialCotizaciones([]);
  };

  return (
    <>
      <Header2 />
      <h2 className="fondo_header">Historial de Cotizaciones</h2>
      <div className="fondo_main historia">
        <table>
          <thead>
            <tr>
              <th>Fecha de cotización</th>
              <th>Vivienda</th>
              <th>Ubicación</th>
              <th>Metros cuadrados</th>
              <th>Cuota mensual</th>
            </tr>
          </thead>
          <tbody>
            {historialCotizaciones.map((fila) => retornoTablaHTML(fila))}
          </tbody>
        </table>
        <div className="tabla">
          <Link to="/">
            <button onClick={Borrado}>Volver a Inicio</button>
          </Link>
          <button onClick={borrar_Historial}>Borrar Historial</button>
        </div>
      </div>
    </>
  );
}

export default Historial;
