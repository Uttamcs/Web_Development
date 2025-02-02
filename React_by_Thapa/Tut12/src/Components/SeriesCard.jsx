import React from "react";
import "./SeriesCard.css";

function SeriesCard(props) {
  console.log(props);

  return (
    <div className="card-data">
      <div class = {{padding:"10px"}}>
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
        <p>{props.data.description}</p>
        <h3>Rating:{props.data.rating}</h3>
        <a href={props.data.watch_url}>
          <button>Watch now</button>
        </a>
      </div>
    </div>
  );
}

export default SeriesCard;
