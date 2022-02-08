import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Species({ species }) {
  const [nameSpecies, setNameSpecies] = useState();
  const [imageFilePath, setImageFilePath] = useState();

  const fetchSpecies = async () => {
    const response = await fetch(species);
    const data = await response.json();
    setNameSpecies(data.name);
  };

  const fetchSpeciesImage = async () => {
    const response = await fetch(`/api/species/${nameSpecies}`);
    const data = await response.json();
    setImageFilePath(data.imgSrc);
  };

  useEffect(() => {
    if (species.length !== 0) {
      fetchSpecies();
      fetchSpeciesImage();
    } else {
      setNameSpecies("human");
      setImageFilePath("human.png");
    }
  }, [nameSpecies]);

  return (
    <>
      {imageFilePath && (
        <div>
          <h4>Species Name: </h4>
          <span>{nameSpecies ? nameSpecies : "Human"}</span>
          <div>
            {species && (
              <Image
                src={require("../../assets/images/" + imageFilePath)}
              ></Image>
            )}
          </div>
        </div>
      )}
    </>
  );
}
