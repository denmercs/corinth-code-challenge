import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CardItem from "../../components/CardItem/CardItem";
import DefaultLayout from "../../layouts/Default";
import styles from "../../styles/Home.module.scss";
import Link from "next/link";

export default function Character() {
  const router = useRouter();
  const { id } = router.query;
  const [profile, setProfile] = useState([]);
  const {
    name,
    height,
    mass,
    hair_color,
    birth_year,
    species,
    films,
    starships,
  } = profile;

  const fetchProfile = async () => {
    const response = await fetch(`https://swapi.dev/api/people/?search=${id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();

    setProfile(...data.results);
  };

  useEffect(() => {
    id && fetchProfile();
  }, [id]);

  return (
    <DefaultLayout>
      <div className={styles["character"]}>
        <Link href="/character">
          <a role="button" type="button" className="btn btn-primary btn-lg">
            Back
          </a>
        </Link>
        <CardItem
          name={name}
          height={height}
          birthYear={birth_year}
          films={films}
          hairColor={hair_color}
          mass={mass}
          species={species}
          starships={starships}
        ></CardItem>
      </div>
    </DefaultLayout>
  );
}
