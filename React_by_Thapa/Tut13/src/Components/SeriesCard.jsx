import React from "react";
import "./SeriesCard.css";

function SeriesCard(props) {

  return (
    <div className="card-data">
      <div className={{ padding: "10px" }}>
        <img
          className="card-img"
          src={props.data.img_url}
          alt={props.data.name}
          width="40%"
          height="40%"
        />
      </div>
      <div className="card-content">
        <h1>{props.data.name}</h1>
        <h3>
          <span
            className={`btn-atr ${
              props.data.rating >= 8.5 ? "super_hit" : "average"
            }`}
          >
            Rating:{props.data.rating}
          </span>
        </h3>
        <p>{props.data.description}</p>
        <a href={props.data.watch_url}>
          <button
            className={`btn-atr ${
              props.data.rating >= 8.5 ? "super_hit" : "average"
            }`}
          >
            Watch now
          </button>
        </a>
      </div>
    </div>
  );
}

export default SeriesCard;
