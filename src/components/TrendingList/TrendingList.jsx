import React from "react";
import TrendingItem from "./TrendingItem/TrendingItem";

const TrendingList = ({ data }) => {
    return (
        <ul>
            {data.map(({id, title, name}) => (
                <TrendingItem
                    key={id}
                    id={id}
                    title={title}
                    name={name}
                />
            ))}
        </ul>
    )
}

export default TrendingList;