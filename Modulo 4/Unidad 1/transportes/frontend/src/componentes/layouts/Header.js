import React from "react";
import "../../styles/componentes/layout/Header.css";

const Header = (props) => {
  return (
    <header>
      {/* <div className="holder">
                <img src="img/logo.png" width="100" alt="Transportes X"/>
                <h1>Transportes X</h1>

            </div> */}
      <div className="caja1 holder">
        <img className="alinearizq" src="img/logo.png" width="100" alt="Transporte X"  />

        <h1 className="alinearizq">Transporte X</h1>

        <ul className="alinearder">
          <li>
            <a href="https://twitter.com/?lang=es">
              <i class="bi bi-twitter"></i>
            </a>
          </li>
          &nbsp;&nbsp;
          <li>
            <a href="https://www.instagram.com/">
              <i class="bi bi-instagram"></i>
            </a>
          </li>
          &nbsp;&nbsp;
          <li>
            <a href="https://es-la.facebook.com/">
              <i class="bi bi-facebook"></i>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
