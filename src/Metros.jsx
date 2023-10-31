import { useState } from "react";

function Metros() {
  const [metros, setMetros] = useState(20);
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
      />
    </>
  );
}

export default Metros;
