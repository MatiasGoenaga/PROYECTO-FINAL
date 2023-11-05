import { useContext } from "react";
import { CotiContext } from "./CotizadorProvider";

function Casa() {
  const { viviendas, selectedOption, setSelectedOption } =
    useContext(CotiContext);

  const handleCargarVivienda = (event) => {
    const viviendaelegida = viviendas.find(
      (vivienda) => vivienda.id == event.target.value
    );
    setSelectedOption({ ...selectedOption, viviendaelegida });
  };

  return (
    <>
      <div>
        <label htmlFor="vivienda">Vivienda:</label>
      </div>
      <select name="vivienda" id="vivienda" onChange={handleCargarVivienda}>
        <option key={"vivienda"} value={[]}></option>
        {viviendas.map((vivienda) => (
          <option key={vivienda.id} value={vivienda.id}>
            {vivienda.tipo}
          </option>
        ))}
      </select>
    </>
  );
}

export default Casa;
