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
        if(films.length !== 0) {
            films.map(film => fetchFilms(film));
        }
        
    },[])


  return (
    <div>
        <h4>Films:</h4>
        {filmTitles && filmTitles.map(filmTitle => <p key={uniqid()}>{filmTitle.title}</p>)}
    </div>
  )
}
