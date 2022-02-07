import React from "react";
import { Card } from "react-bootstrap";
import { useRouter } from "next/router";
import Species from "../../components/Species/Species";
import Films from "../Films/Films";

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
            {
              birthYear && <h4>DOB:<span>{birthYear}</span></h4>
            }
            {
              films && <Films films={films}></Films>
            }
            {
              hairColor && <h4>Hair Color:<span>{hairColor}</span></h4>
            }
            {
              height && <h4>Height:<span>{height}</span></h4>
            }
            {
              mass && <h4>Mass:<span>{mass}</span></h4>
            }
            {
              species && <Species species={species}></Species>
            }
            {starship && <h4>Startship:<span>{starship}</span></h4>
            }
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
