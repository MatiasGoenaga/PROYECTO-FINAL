import { useRef } from "react";
import Casa from "./Casa";
import Lugar from "./Lugar";
import Boton from "./Boton";
import Metros from "./Metros";
import Fin from "./Fin";

function Cotizador() {
  const form = useRef();
  const handlesubmit = (event) => {
    event.preventDefault();
    form.current.reset();
  };

  return (
    <>
      <div className="fondo_main">
        <h2>Completa los campos para cotizar tu vivienda</h2>
        <form ref={form} onSubmit={handlesubmit}>
          <Casa />
          <Lugar />
          <Metros />
          <Boton />
          <Fin />
        </form>
      </div>
    </>
  );
}
export default Cotizador;
