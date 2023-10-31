import { Link } from "react-router-dom";

function Header() {
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
              <p className="texto_inicio">Inicio</p>
            </Link>
          </div>
        </div>
        <div className="historial">
          <Link to="/Historial">
            <box-icon name="archive" type="solid" size="70px"></box-icon>
            <p className="texto_historial">Historial</p>
          </Link>
        </div>
      </div>
      <div className="fondo_header">
        <h2>Cotiza ahora tu Hogar</h2>
        <h3>El mejor precio!</h3>
      </div>
    </>
  );
}

export default Header;
