import React from 'react';
import '../styles/componentes/pages/ContactoPage.css'

const ContactoPage = (props) => {
  return (
    <main className="holder contacto">
      <div>
        <h2>Contacto R&aacute;pido</h2>
        <form action="" method="" className="formulario">
          <p>
            <label for="nombre">Nombre</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="email">Email</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="telefono">Telefono</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="mensaje">Mensaje</label>
            <textarea name=""></textarea>
          </p>
          <p class="acciones">
            <input type="submit" name="" />
          </p>
        </form>
      </div>
      <div className="datos">
        <h2>Otras vias de comunicaci&oacute;n </h2>
        <p>Tambi&eacute;n puede contactarse con nosotros usando los siguientes medios </p>
        <ul>
            <li>Tel&eacute;fono: 43423423</li>
            <li>Email: contacto@transportesx.com.ar</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Skype</li>
        </ul>

      </div>
    </main>
  );
};
export default ContactoPage;
