import { Fragment } from "react";


// 1. Variables

// You can embed any javascript variable within JSX by enclosing it in curly braces. The value of the variable will be inserted into the DOM at the respective location.

// const MovieDetail = () => {
//   const name = "Pushpa 2";
//   const year = 2022;
//   const rating = 8.5;
//   const summary = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quidem veniam dolore. Quasi inventore impedit dolores quaerat soluta dolorum recusandae!"
//   return (
//     <div>
//       <div>
//         <img
//           src="pushpa_poster.jpeg"
//           alt="pushpa_poster"
//           width="40%"
//           height="40%"
//         />
//       </div>
//       <h2>Name: {name}</h2>
//       <h2>Release Date: {year} </h2>
//       <h2>IMDB Rating: {rating}</h2>
//       <p>
//         Summary :{summary}
//       </p>
//     </div>
//   );
// };


// 2. Expression

// JSX allows you to embed any valid JavaScript expression within curly braces. The expression will be evaluated and its result will be inserted into the DOM at the respective location.

// const MovieDetail = () => {
//   const name = "Pushpa 2";
//   const year = 2022;
//   const rating = 8.5;
//   const summary = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quidem veniam dolore. Quasi inventore impedit dolores quaerat soluta dolorum recusandae!"
//   return (
//     <div>
//       <div>
//         <img
//           src="pushpa_poster.jpeg"
//           alt="pushpa_poster"
//           width="40%"
//           height="40%"
//         />
//       </div>
//       <h2>Name: {name}</h2>
//       <h2>Release Date: {year} </h2>
//       <h2>IMDB Rating: {5+6.2}</h2>
//       <p>
//         Summary :{"Uttam "+ summary}
//       </p>
//     </div>
//   );
// };


// 3. Function Call

// Functions, especially those that return JSX, can be invoked directly within your JSX

const MovieDetail = () => {
  const name = "Pushpa 2";
  const year = 2022;
  const rating = 8.5;
  const genre = () => {
    const genre = "Action";
    return genre;
  }
  const summary = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quidem veniam dolore. Quasi inventore impedit dolores quaerat soluta dolorum recusandae!"
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
      <h2>Name: {name}</h2>
      <h2>Release Date: {year} </h2>
      <h2>IMDB Rating: {rating}</h2>
      <p>
        Summary :{"Uttam "+ summary}
      </p>
      <h2>Genre: {genre()}</h2>
    </div>
  );
};

export const App = () => {
  return (
    <Fragment>
      <MovieDetail />
      <MovieDetail />
      <MovieDetail />
      <MovieDetail />
      <MovieDetail />
    </Fragment>
  );
};