import Swal from "sweetalert2";
import { useState, useContext } from "react";
import { CotiContext } from "./CotizadorProvider";

function Boton() {
  const { selectedOption, setSelectedOption } = useContext(CotiContext);
  const [valorPoliza, setValorPoliza] = useState(0);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const Cotizar = () => {
    if (
      selectedOption.viviendaelegida &&
      selectedOption.lugarelegido &&
      selectedOption.metros
    ) {
      const costoM2 = 35.86;
      const cotizacion =
        costoM2 *
        selectedOption.viviendaelegida?.factor *
        selectedOption.lugarelegido?.factor *
        selectedOption.metros;
      setValorPoliza(cotizacion.toFixed(2));
      setShow(true);
      setShow2(true);
      alerta("", "Cotización realizada con éxito ", "success");
    } else {
      alerta("", "Debes completar todos los datos ", "warning");
    }
  };
  const Guardar = () => {
    const cotizacion2 = {
      fechaCotizacion: new Date().toLocaleString(),
      vivienda: selectedOption.viviendaelegida.tipo,
      ubicacion: selectedOption.lugarelegido.tipo,
      metro: selectedOption.metros,
      poliza: valorPoliza,
    };
    const historialCotizaciones =
      JSON.parse(localStorage.getItem("historialCotizaciones")) || [];
    historialCotizaciones.push(cotizacion2);
    localStorage.setItem(
      "historialCotizaciones",
      JSON.stringify(historialCotizaciones)
    );
    setSelectedOption("");
    alerta2("", "Cotización Guardada", "success");
  };

  const alerta = (titulo, mensaje, icono) => {
    Swal.fire({
      icon: icono || "",
      title: titulo || "",
      text: mensaje,
      showConfirmButton: false,
      timer: 1500,
      width: "240px",
    });
  };
  const alerta2 = (titulo, mensaje, icono) => {
    Swal.fire({
      icon: icono || "",
      title: titulo || "",
      text: mensaje,
      showConfirmButton: false,
      timer: 1000,
      width: "240px",
    });
  };

  return (
    <>
      <div className="cotizador">
        <button type="submit" onClick={Cotizar}>
          COTIZAR
        </button>
      </div>
      <div className="final">
        {show ? <h2>El Valor de la Poliza es: $ {valorPoliza} </h2> : null}
        <div>
          {show2 ? (
            <button className="guardar_historial" onClick={Guardar}>
              GUARDAR EN HISTORIAL
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Boton;
