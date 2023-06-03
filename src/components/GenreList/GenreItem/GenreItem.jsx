import React from "react";

const GenreItem = ({ id, name }) => {
    return (
        <li key={id}>{name}</li>
    )
}

export default GenreItem;