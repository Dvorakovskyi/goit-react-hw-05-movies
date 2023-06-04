import React from "react";
import { Link, useLocation } from "react-router-dom";

const TrendingItem = ({ id, title, name }) => {
    const location = useLocation();

    return (
        <li key={id}>
            <Link to={`movies/${id}`} state={location}>{title || name}</Link>
        </li>
    )
}

export default TrendingItem;