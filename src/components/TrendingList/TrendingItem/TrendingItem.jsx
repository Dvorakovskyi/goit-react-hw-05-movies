import React from "react";

const TrendingItem = ({ id, title, name }) => {
    return (
        <li key={id}>{title || name}</li>
    )
}

export default TrendingItem;