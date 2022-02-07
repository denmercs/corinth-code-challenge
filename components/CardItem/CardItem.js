import React from "react";
import { Card } from "react-bootstrap";
import { useRouter } from "next/router";
import Species from "../../components/Species/Species";
import Films from "../Films/Films";
import styles from "../../styles/Home.module.scss";

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
        className={styles['card-item']}
      >
        <Card.Body>
          <Card.Title>{name && <h3>Name: {name}</h3>}</Card.Title>
          <div>
            {
              birthYear && <h5>DOB:<span>{birthYear}</span></h5>
            }
            {
              films && <Films films={films}></Films>
            }
            {
              hairColor && <h5>Hair Color:<span>{hairColor}</span></h5>
            }
            {
              height && <h5>Height:<span>{height}</span></h5>
            }
            {
              mass && <h5>Mass:<span>{mass}</span></h5>
            }
            {
              species && <Species species={species}></Species>
            }
            {starship && <h5>Startship:<span>{starship}</span></h5>
            }
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
