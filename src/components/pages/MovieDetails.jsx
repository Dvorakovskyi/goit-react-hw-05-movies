import React from "react";
import { fetchMovieDetails } from "Api/movie-details-api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieDetails = () => {
    const { movieId } = useParams();

    const [movieInfo, setMovieInfo] = useState({});

    useEffect(() => {
        fetchMovieDetails(movieId).then(data => {
        setMovieInfo(data);
        console.log(data)
    })
    }, [movieId])
    
    return (
        <section>
            <h2>{movieInfo.title}</h2>
        </section>
    )
}

export default MovieDetails;