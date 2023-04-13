import React from "react";
import movies from "../../../../movie-database";
import { useParams } from "react-router-dom";

const Movie = () => {
    const { id } = useParams();
    const moviesData = movies.find(m => m.id ===  Number(id));

    return (
        <div className="movie">
            <img src={moviesData.poster} alt={moviesData.title} />

            <h2>{moviesData.title}</h2>

            <p>{moviesData.storyline}</p>

          </div>
    )
}

export default Movie;