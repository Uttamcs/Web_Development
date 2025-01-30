import React from 'react'
import './SeriesCard.css'

function SeriesCard(props) {
    console.log(props);
    
  return (
    <div>
      <img
        src={props.data.img_url}
        alt={props.data.name}
        width="40%"
        height="40%"
      />
      <h1>{props.data.name}</h1>
      <p>{props.data.description}</p>
      <h3>Rating:{props.data.rating}</h3>
      <a href={props.data.watch_url}>
        <button>Watch now</button>
      </a>
    </div>
  );
}

export default SeriesCard