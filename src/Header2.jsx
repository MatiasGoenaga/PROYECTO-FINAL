import { Link } from "react-router-dom";

function Header2() {
  return (
    <>
      <div className="flex_header">
        <div className="fondo">
          <h1>Seguros "La Casucha"</h1>
          <div className="inicio">
            <Link to="/">
              <box-icon
                name="building-house"
                size="70px"
                type="solid"
              ></box-icon>
              <p className="texto_inicio">Volver</p>
            </Link>
          </div>
        </div>
        <div className="historial">
          <Link to="/Historial">
            <box-icon name="archive" type="solid" size="70px"></box-icon>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header2;
