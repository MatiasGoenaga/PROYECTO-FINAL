import { useState, useEffect } from "react";

function Casa() {
  const [viviendas, setViviendas] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((dato) => setViviendas(dato));
  }, []);
  console.log(viviendas);

  const [selectedVivienda, setSelectedVivienda] = useState();

  const handleCargarVivienda = (event) => {
    console.log(event.target.value);
    setSelectedVivienda(event.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor="vivienda">Vivienda:</label>
      </div>
      <select name="vivienda" id="vivienda" onChange={handleCargarVivienda}>
        <option key={"vivienda"} value={[]} selected disabled></option>
        {viviendas.map((item) => (
          <option key={"vivienda" + item.id} value={item.factor}>
            {item.tipo}
          </option>
        ))}
      </select>
      <h1>{selectedVivienda}</h1>
    </>
  );
}

export default Casa;
