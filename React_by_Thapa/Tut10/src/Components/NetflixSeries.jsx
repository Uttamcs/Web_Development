import React from 'react'
import seriesData from '../api/seriesData.json'
import SeriesCard from './SeriesCard'

function NetflixSeries() {
    return (
        <ul>
            {seriesData.map((series) => (
                <SeriesCard key = {series.id} data = {series} />
        ))}
      </ul>
  )
}

export default NetflixSeries