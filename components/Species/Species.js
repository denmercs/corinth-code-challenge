import React, { useState, useEffect } from "react";
import TestImage from "../../assets/images/droid.jpg";

export default function Species({ species }) {
  const [name, setName] = useState();
  const [image, setImage] = useState();

  const fetchSpecies = async () => {
    const response = await fetch(species);
    const data = await response.json();
    setName(data.name);
  };

  const fetchSpeciesImage = async () => {
    if (name) {
      const response = await fetch(`/api/species/${name}`);
      const data = await response.json();
      setImage(data.imgSrc);
    }
  };

  useEffect(() => {
    fetchSpecies();
    fetchSpeciesImage();
  }, [name]);

  // if (image) {
  //   const imageUrl = require(image);
  //   console.log(imageUrl);
  // }
  console.log(TestImage);
  return (
    <>
      <img src={TestImage} />
    </>
  );
}
