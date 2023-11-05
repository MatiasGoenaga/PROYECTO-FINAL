import { useContext } from "react";
import { CotiContext } from "./CotizadorProvider";

function Metros() {
  const { selectedOption, setSelectedOption } = useContext(CotiContext);

  const handleMetros = (event) => {
    console.log(event.target.value);
    const metros = parseInt(event.target.value, 10);
    setSelectedOption({ ...selectedOption, metros });
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
      />
    </>
  );
}

export default Metros;
