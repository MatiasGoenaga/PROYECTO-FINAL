import { createContext } from "react";
import { useState, useEffect } from "react";

export const CotiContext = createContext();

export const CotizadorProvider = ({ children }) => {
  const [viviendas, setViviendas] = useState([]);
  const [selectedOption, setSelectedOption] = useState({});
  const [ubicaciones, setUbicaciones] = useState([]);
  const [metros, setMetros] = useState(20);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((dato) => setViviendas(dato));
  }, []);

  useEffect(() => {
    fetch("data2.json")
      .then((res) => res.json())
      .then((dato) => setUbicaciones(dato));
  }, []);

  const data = {
    viviendas,
    ubicaciones,
    selectedOption,
    setSelectedOption,
    metros,
    setMetros,
  };

  return <CotiContext.Provider value={data}>{children}</CotiContext.Provider>;
};
