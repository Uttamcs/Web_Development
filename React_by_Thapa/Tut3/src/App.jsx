import React from "react";
import { Fragment } from "react";


// export const App = () => {
//   return (
//     <React.Fragment>
//       <MovieDetail />
//       <MovieDetail />
//       <MovieDetail />
//       <MovieDetail />
//     </React.Fragment>
//   );
// };



// We can use fragment by this method too


// export const App = () => {
//   return (
//     <Fragment>
//       <MovieDetail />
//       <MovieDetail />
//       <MovieDetail />
//       <MovieDetail />
//     </Fragment>
//   )
// }



// We can also remove fragment 


export const App = () => {
  return (
    <>
      <MovieDetail />
      <MovieDetail />
      <MovieDetail />
      <MovieDetail />
    </>
  )
}


const MovieDetail = () => {
  return (
    <div>
      <div>
        <img
          src="pushpa_poster.jpeg"
          alt="pushpa_poster"
          width="40%"
          height="40%"
        />
      </div>
      <h2>Name: Pushpa 2</h2>
      <h2>Release Date: 2023</h2>
      <h2>IMDB Rating: 8.5</h2>
      <p>
        Summary : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
        iusto incidunt dignissimos inventore aut vel perspiciatis excepturi
        impedit nesciunt numquam.
      </p>
    </div>
  );
};
