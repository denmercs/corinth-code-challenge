import React from "react";
import { Card, Button } from "react-bootstrap";

export default function CharacterCard({ result }) {
  console.log(result);
  const {
    name,
    birth_year,
    eye_color,
    gender,
    films,
    hair_color,
    height,
    homeworld,
    mass,
    skin_color,
    species,
    starship,
    url,
  } = result;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>
          <h3>Name: {name}</h3>
        </Card.Title>
        <Card.Text>
          <p>DOB: {birth_year}</p>
          <p>Eye Color: {eye_color}</p>
          <p>Gender: {gender}</p>
          {/* This will be a component for films */}
          <p>Films: {films}</p>
          <p>Hair Color: {hair_color}</p>
          <p>Height: {height}</p>
          <p>Home World: {homeworld}</p>
          <p>Mass: {mass}</p>
          <p>Skin Color: {skin_color}</p>
          <p>Species: {species}</p>
          <p>Startship: {starship}</p>
          <p>URL: {url}</p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
