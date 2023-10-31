import { useState, useEffect } from "react";

function Lugar() {
  const [ubicaciones, setUbicaciones] = useState([]);
  useEffect(() => {
    fetch("data2.json")
      .then((res) => res.json())
      .then((dato) => setUbicaciones(dato));
  }, []);
  console.log(ubicaciones);

  const [selectedLugar, setSelectedLugar] = useState();
  const handleCargarLugar = (event) => {
    console.log(event.target.value);
    setSelectedLugar(event.target.value);
  };

  console.log(parseFloat(selectedLugar));
  console.log(typeof selectedLugar);

  return (
    <>
      <div>
        <label htmlFor="ubicacion">Ubicación de la Vivienda:</label>
      </div>
      <select name="ubicacion" id="ubicacion" onChange={handleCargarLugar}>
        <option value={[]} selected disabled></option>
        {ubicaciones.map((ubicacion) => (
          <option key={"ubicacion" + ubicacion.id} value={ubicacion.factor}>
            {ubicacion.tipo}
          </option>
        ))}
      </select>
    </>
  );
}

export default Lugar;
