import Swal from "sweetalert2";
import { useState, useContext } from "react";
import { CotiContext } from "./CotizadorProvider";

function Boton() {
  const { selectedOption, metros } = useContext(CotiContext);
  const [valorPoliza, setValorPoliza] = useState(0);

  const Cotizar = () => {
    const costoM2 = 35.86;
    const cotizacion =
      costoM2 *
      selectedOption.viviendaelegida?.factor *
      selectedOption.lugarelegido?.factor *
      metros.metros;
    setValorPoliza(cotizacion.toFixed(2));
    alerta("", "Cotización realizada con éxito.", "success");
  };
  const Guardar = () => {
    const cotizacion2 = {
      fechaCotizacion: new Date().toLocaleString(),
      vivienda: selectedOption.viviendaelegida.tipo,
      ubicacion: selectedOption.lugarelegido.tipo,
      metro: metros.metros,
      poliza: valorPoliza,
    };
    const historialCotizaciones =
      JSON.parse(localStorage.getItem("historialCotizaciones")) || [];
    historialCotizaciones.push(cotizacion2);
    localStorage.setItem(
      "historialCotizaciones",
      JSON.stringify(historialCotizaciones)
    );
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
        <h2>El Valor de la Poliza es: $ {valorPoliza} </h2>
        <div>
          <button className="guardar_historial" onClick={Guardar}>
            GUARDAR EN HISTORIAL
          </button>
        </div>
      </div>
    </>
  );
}

export default Boton;
