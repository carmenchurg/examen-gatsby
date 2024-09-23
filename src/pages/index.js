import * as React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => (
  <main>
    <h1>¡Bienvenido a mi sitio web!</h1>
    <p>Esta es la página de inicio.</p>
    <Link to="/contacto">Ir a Contacto</Link>
  </main>
);

export default IndexPage;