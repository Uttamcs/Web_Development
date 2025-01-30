// import React from 'react'

// function SeriesCard(props) {
//   const {name, id, img_url, rating, description, cast, genre, watch_url } = props.data;
//   return (
//     <div>
//       <h1>{id}</h1>
//       <img
//         src={img_url}
//         alt={name}
//         width="40%"
//         height="40%"
//       />
//       <h3>{name}</h3>
//       <p>{description}</p>
//       <h2>Rating:{rating}</h2>
//       <a href={watch_url}>
//         <button>Watch now</button>
//       </a>
//     </div>
//   );
// }

// export default SeriesCard





import React from "react";

function SeriesCard({data}) {
  return (
    <div>
      <h1>{data.id}</h1>
      <img src={data.img_url} alt={data.name} width="40%" height="40%" />
      <h3>{data.name}</h3>
      <p>{data.description}</p>
      <h2>Rating:{data.rating}</h2>
      <a href={data.watch_url}>
        <button>Watch now</button>
      </a>
    </div>
  );
}

export default SeriesCard;