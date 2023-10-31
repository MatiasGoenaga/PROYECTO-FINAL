import { useState, useEffect, createContext } from "react";
import Casa from "./Casa";
import Lugar from "./Lugar";
import Boton from "./Boton";
import Metros from "./Metros";

function Cotizador() {
  const [relleno, setRelleno] = useState("");
  const manejaClick = () => {
    setRelleno("Total de la Cotización: $");
  };

  return (
    <>
      <div className="fondo_main">
        <h2>Completa los campos para cotizar tu vivienda</h2>
        <Casa />
        <Lugar />
        <Metros />
        <Boton onClick={manejaClick} />
        <div>
          <p>{relleno}</p>
        </div>
        <span id="valor_poliza"></span>
        <box-icon type="solid" name="save" size="20px"></box-icon>
      </div>
    </>
  );
}
export default Cotizador;
