import { useContext } from "react";
import { CotiContext } from "./CotizadorProvider";

function Lugar() {
  const { ubicaciones, selectedOption, setSelectedOption } =
    useContext(CotiContext);

  const handleCargarLugar = (event) => {
    const lugarelegido = ubicaciones.find(
      (ubicacion) => ubicacion.id == event.target.value
    );
    setSelectedOption({ ...selectedOption, lugarelegido });
  };

  return (
    <>
      <div>
        <label htmlFor="ubicacion">Ubicación de la Vivienda:</label>
      </div>
      <select name="ubicacion" id="ubicacion" onChange={handleCargarLugar}>
        <option value={[]}></option>
        {ubicaciones.map((ubicacion) => (
          <option key={ubicacion.id} value={ubicacion.id}>
            {ubicacion.tipo}
          </option>
        ))}
      </select>
    </>
  );
}

export default Lugar;
