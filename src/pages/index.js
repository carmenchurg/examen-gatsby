import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Card from '../components/card.jsx';
import '../styles/styles.css'; 

const IndexPage = () => (
  <main>
    <h1>¡Bienvenido a mi sitio web!</h1>
    <p>Esta es la página de inicio.</p>
    <Link to="/contacto">Ir a Contacto</Link>


    <Card
  title="Título"
  image={<StaticImage src="../images/react.jpg" alt="React logo" />}
  text="Aquí iría un párrafo de información"
  buttonText="Haz clic aquí"
  onClick={() => console.log('Botón presionado')}
/>

  </main>
);

export default IndexPage;