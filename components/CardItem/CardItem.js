import React from "react";
import { Card } from "react-bootstrap";
import { useRouter } from "next/router";
import Species from "../../components/Species/Species";
import Films from "../Films/Films";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";

export default function CardItem({
  name,
  birthYear,
  films,
  hairColor,
  height,
  mass,
  species,
  starship,
  filePath,
}) {
  const router = useRouter();

  return (
    <>
      <Card
        style={{ width: "18rem" }}
        onClick={() => {
          router.push(`/character/${name}`);
        }}
        className={styles["card-item"]}
      >
        {filePath && (
          <Image
            src={require(`../../assets/images/${filePath}.png`)}
            className={styles["card-img"]}
          ></Image>
        )}
        <Card.Body>
          <Card.Title>{name && <h4>{name}</h4>}</Card.Title>
          <div>
            {birthYear && (
              <h5>
                DOB:<span>{birthYear}</span>
              </h5>
            )}
            {films && <Films films={films}></Films>}
            {hairColor && (
              <h5>
                Hair Color:<span>{hairColor}</span>
              </h5>
            )}
            {height && (
              <h5>
                Height:<span>{height}</span>
              </h5>
            )}
            {mass && (
              <h5>
                Mass:<span>{mass}</span>
              </h5>
            )}
            {species && <Species species={species}></Species>}
            {starship && (
              <h5>
                Starship:<span>{starship}</span>
              </h5>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
