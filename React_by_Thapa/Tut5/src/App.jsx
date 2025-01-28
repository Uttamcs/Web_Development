import { Fragment } from "react";

const MovieDetail = () => {
  let age = 19
  if (age < 18)
  {
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
          Summary : Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsa iusto incidunt dignissimos inventore aut vel perspiciatis
          excepturi impedit nesciunt numquam.
        </p>
        <button>Not available</button>
      </div>
    );
  }
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
      <button>Watch Now...</button>
    </div>
  );
};



export const App = () => {
  return (
    <Fragment>
      <MovieDetail />
      <MovieDetail />
      <MovieDetail />
    </Fragment>
  );
};