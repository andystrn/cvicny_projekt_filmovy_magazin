import React from "react";
import './style.css';
import movies from "../../../../movie-database";
import { Link } from "react-router-dom";

const MovieList = () => {
    return (
        <nav className="movie-list">
            {movies.map(m => <Link key={m.id} to={`/movies/${m.id}`}>{m.title}</Link>)}
        </nav>
    )
}

export default MovieList;