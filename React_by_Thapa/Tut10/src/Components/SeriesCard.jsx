import React from 'react'

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
      <h3>{props.data.name}</h3>
      <p>{props.data.description}</p>
      <h2>Rating:{props.data.rating}</h2>
      <a href={props.data.watch_url}>
        <button>Watch now</button>
      </a>
    </div>
  );
}

export default SeriesCard