import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Card from '../components/card.jsx';
import '../styles/styles.css'; 

const cardData = [
  {
    id: 1,
    title: "Aprende React",
    description: "React es una biblioteca de JavaScript para construir interfaces de usuario.",
    image: "../images/react.jpg",
    link: "https://es.react.dev/"
  },
  {
    id: 2,
    title: "Explora Gatsby",
    description: "Gatsby es un framework basado en React que permite crear sitios web rápidos y modernos.",
    image: "../images/gatsby.jpg",
    link: "https://www.gatsbyjs.com/"
  },
  {
    id: 3,
    title: "Diseña con Figma",
    description: "Figma es una herramienta de diseño colaborativo utilizada por diseñadores y desarrolladores.",
    image: "../images/figma.jpg",
    link: "https://www.figma.com/"
  },
  {
    id: 4,
    title: "Consulta tus datos con GraphQL",
    description: "GraphQL es un lenguaje de consulta y manipulación de datos para APIs.",
    image: "../images/graphql.jpg",
    link: "https://graphql.org/"
  }
];

const IndexPage = () => (
  <main>
    <h1>¡Bienvenido a mi sitio web!</h1>
    <p>Esta es la página de inicio.</p>
    <Link to="/contacto">Ir a Contacto</Link>

    <div className="card-container">
      {cardData.slice(0, 4).map((card) => (
        <Card
          key={card.id}
          title={card.title}
          image={<StaticImage src={card.image} alt={card.title} />}
          text={card.description}
          buttonText="Ver más"
          onClick={() => window.open(card.link, '_blank')}
        />
      ))}
    </div>
  </main>
);

export default IndexPage;