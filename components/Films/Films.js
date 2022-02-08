import React, { useEffect, useState } from 'react';
import uniqid from "uniqid";

export default function Films({films}) {
    const [filmTitles, setFilmTitles] = useState([]);
    
    const fetchFilms = async (film) => {
        const response = await fetch(film);
        const data = await response.json();
        
        setFilmTitles(prevState => [...prevState, data] );
    };

    useEffect(() => {
       
            films.map(film => fetchFilms(film));
       
        
    },[films])


  return (
    <div>
        <h6>Films:</h6>
        {filmTitles && filmTitles.map(filmTitle => <p key={uniqid()}>{filmTitle.title}</p>)}
    </div>
  )
}
