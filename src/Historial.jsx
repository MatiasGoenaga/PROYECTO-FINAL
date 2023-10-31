import { Link } from "react-router-dom";
import Header2 from "./Header2";
import { useEffect, useState } from "react";

function Historial() {
  const [historialCotizaciones, setHistorialCotizaciones] = useState([]);

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
      <tr key={fila.fechaCotizacion}>
        <td>{fila.fechaCotizacion}</td>
        <td>{fila.vivienda}</td>
        <td>{fila.ubicacion}</td>
        <td>{fila.metrosCuadrados}</td>
        <td>$ {fila.poliza.toLocaleString()}</td>
      </tr>
    );
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
        <div>
          <Link to="/">
            <button>Volver a Inicio</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Historial;
