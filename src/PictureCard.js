import React from "react";
import { Card, CardFooter, CardBody, CardTitle } from "reactstrap";
import styled from "styled-components";

const NasaText = styled.p`
  width: 45%;
  text-align: center;
  margin: auto;
  font-size: 25px;
  font-weight: bold;
`;
const NasaImg = styled.img`
  border: 4px solid red;
  border-radius: 15px;
`;

const PictureCard = (props) => {
  return (
    <Card>
      <CardBody>
        <NasaImg src={props.url} alt="Image of the day" />
        <CardTitle>{props.title}</CardTitle>
        <br />
        <NasaText>{props.explanation}</NasaText>
        <br />
      </CardBody>
      <CardFooter>{props.date}</CardFooter>
    </Card>
  );
};

export default PictureCard;
