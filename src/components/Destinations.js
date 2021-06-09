import React from 'react'
import Destination from './Destination'

const Destinations = ({tours}) => {
  return (
    <div>
      {tours.map((tour) => {
        return <Destination key={tour.id} {...tour} />
      })}
    </div>
  )
}

export default Destinations
