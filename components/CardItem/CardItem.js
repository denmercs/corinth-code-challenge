import React from "react";
import { Card } from "react-bootstrap";
import { useRouter } from "next/router";
import Species from "../../components/Species/Species";

export default function CardItem({
  name,
  birthYear,
  films,
  hairColor,
  height,
  mass,
  species,
  starship,
}) {
  const router = useRouter();
  return (
    <>
      <Card
        style={{ width: "18rem" }}
        onClick={() => {
          router.push(`/character/${name}`);
        }}
      >
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>{name && <h3>Name: {name}</h3>}</Card.Title>
          <div>
            {birthYear && <p>DOB: {birthYear}</p>}
            {films && <p>Films: {films}</p>}
            {hairColor && <p>Hair Color: {hairColor}</p>}
            {height && <p>Height: {height}</p>}
            {mass && <p>Mass: {mass}</p>}
            {species && <Species species={species}></Species>}
            {starship && <p>Startship: {starship}</p>}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
