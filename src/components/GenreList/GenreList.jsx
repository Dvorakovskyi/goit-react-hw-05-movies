import React from "react";
import GenreItem from "./GenreItem/GenreItem";

const GenreList = ({ genres }) => {
    return (
        <ul>
            {genres.map(({ id, name }) => (
                <GenreItem key={id}
                name={name}/>
            ))}
        </ul>
    )
}

export default GenreList;