import React from 'react'
import seriesData from '../api/seriesData.json'
import SeriesCard from './SeriesCard'
import './NetflixSeries.css'
function NetflixSeries() {
    return (
      <>
        <h1>NetFlix ka baap...</h1>
        <ul className="grid-container">
          {seriesData.map((series) => (
            <SeriesCard key={series.id} data={series} />
          ))}
        </ul>
      </>
    );
}

export default NetflixSeries