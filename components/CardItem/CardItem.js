import React from 'react';
import { Card } from 'react-bootstrap';

export default function CardItem({result}) {
    const {name, birth_year, gender} = result;
  return (
    <>
      <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>
          <h3>Name: {name}</h3>
        </Card.Title>
        <Card.Text>
          <p>DOB: {birth_year}</p>
          <p>Gender: {gender}</p>
        </Card.Text>
      </Card.Body>
    </Card>
    </>
    );
};
