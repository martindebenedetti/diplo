import React from "react";
import '../styles/componentes/pages/HomePage.css'
const HomePage = (props) => {
  return (
    <main className="holder">
      <div className="homeimg">
        <img src="img/home/img01.jpg" alt="Avion" />
      </div>
      <div className="columnas">
        <div className="bienvenidos">
          <h2>Bienvenidos</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            excepturi eveniet aut repellendus qui vitae, illum libero, unde
            temporibus ipsa nisi? Et debitis explicabo in unde sunt
            exercitationem voluptates placeat!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            excepturi eveniet aut repellendus qui vitae, illum libero, unde
            temporibus ipsa nisi? Et debitis explicabo in unde sunt
            exercitationem voluptates placeat!
          </p>
        </div>
        <div className="testimonios">
          <h2>Testimonios</h2>
          <div className="testimonio">
            <span class="cita">Simplemente Excelente</span>
            <span class="autor">Juan Perez - zapatos.com</span>
          </div>
        </div>
      </div>
    </main>
  );
};
export default HomePage;
