import React from 'react';
import styled from 'styled-components';


const Card = ({ title, image, text, buttonText, onClick }) => {
  
  const CardContainer = styled.div`
    background-color: #E5F6FF;
    border: 2px solid #DDDDDD;
    border-radius: 5px;
    padding: 20px;
    text-align: center;
    margin: 10px;
    width: 300px; 
  `;

  const CardImage = styled.img`
    max-width: 100%;
    height: auto;
  `;

  const CardButton = styled.button`
    background-color: #007ACC;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
    background-color: #005fa3; 
  }
  `;
 

  return (
    <CardContainer>
      <h2>{title}</h2>
      <CardImage src={image} alt={title} />
      <p>{text}</p>
      <CardButton onClick={onClick}>{buttonText}</CardButton>
    </CardContainer>
  );
};

export default Card;