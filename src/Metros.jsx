import { useContext } from "react";
import { CotiContext } from "./CotizadorProvider";

function Metros() {
  const { metros, setMetros } = useContext(CotiContext);

  const handleMetros = (event) => {
    console.log(event.target.value);
    setMetros({ ...metros, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div>
        <label htmlFor="metros">Metros Cuadrados:</label>
      </div>
      <input
        type="number"
        name="metros"
        id="metros"
        min={20}
        max={500}
        onChange={handleMetros}
        required
      />
    </>
  );
}

export default Metros;
