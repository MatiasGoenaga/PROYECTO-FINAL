function Boton(props) {
  const Metros2 = 35.87;

  const guardarEnHistorial = () => {
    const cotizacion = {
      fechaCotizacion: new Date().toLocaleString(),
      vivienda: "",
      ubicacion: "",
      metrosCuadrados: Metros2,
      poliza: "",
    };
    const historialCotizaciones =
      JSON.parse(localStorage.getItem("historialCotizaciones")) || [];
    historialCotizaciones.push(cotizacion);
    localStorage.setItem(
      "historialCotizaciones",
      JSON.stringify(historialCotizaciones)
    );
  };

  return (
    <>
      <div className="cotizador">
        <button onClick={props.onClick}>COTIZAR</button>
      </div>
      <div className="cotizador">
        <button onClick={guardarEnHistorial}>GUARDAR</button>
      </div>
    </>
  );
}

export default Boton;
