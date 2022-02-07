import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CardItem from "../../components/CardItem/CardItem";
import DefaultLayout from "../../layouts/Default";

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
    const response = await fetch(`https://swapi.dev/api/people/?search=${id}`);
    const data = await response.json();
    setProfile(data.results[0]);
  };

  useEffect(() => {
    id ? fetchProfile() : "";
  }, [id]);

  return (
    <DefaultLayout>
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
    </DefaultLayout>
  );
}
