// // default import 

// import MovieDetail from "./components/netflix"
// export const App = () => {
//   return (
//     <>
//       <MovieDetail />
//       <MovieDetail />
//     </>
//   )
// }



// // named import 

// import { MovieDetail, Footer } from "./components/netflix"

// export const App = () => {
//   return (
//     <>
//       <MovieDetail />
//       <Footer />
//     </>
//   )
// }


// Combined import

import MovieDetail, { Footer, Header } from "./components/netflix";

export const App = () => {
  return (
    <>
      <Header/>
      <MovieDetail />
      <Footer />
    </>
  )
}