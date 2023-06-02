import React from "react";
import { Link } from "react-router-dom";

const TrendingItem = ({ id, title, name }) => {
    return (
        <li key={id}>
            <Link to={`movies/${id}`}>{title || name}</Link>
        </li>
    )
}

export default TrendingItem;