import React from "react";
import seriesData from "../api/seriesData.json";

const NetflixSeries = () => {
    return (
        <ul>{
            seriesData.map((series) => {
                return (
                    <li key={series.id}>
                        <div>
                            <img  src={series.img_url} width="40%" height= "40%" alt={series.name} />
                        </div>
                        <h2>{series.name}</h2>
                        <p>{series.description}</p>
                        <p>Rating: {series.rating}</p>
                        <a
                            href={series.watch_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button>Watch Now</button>
                        </a>
                    </li>
                )
            })}
        </ul>
    );
};

export default NetflixSeries;